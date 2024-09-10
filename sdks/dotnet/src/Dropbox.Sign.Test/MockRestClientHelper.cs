using System;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;
using RestSharp;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Serialization;
using RestSharp.Serializers;
using RichardSzalay.MockHttp;
using FileIO = System.IO.File;

namespace Dropbox.Sign.Test
{
    public class MockRestClientHelper
    {
        public static T CreateApi<T>(JObject data,
            HttpStatusCode statusCode = HttpStatusCode.Accepted,
            string contentType = "application/json")
        {
            var mockHttp = new MockHttpMessageHandler();

            mockHttp.Expect("https://api.hellosign.com/*")
                .Respond(statusCode, contentType, JsonConvert.SerializeObject(data));

            return CreateApiInternal<T>(mockHttp);
        }

        public static T CreateApiExpectMultiFormRequest<S, T>(S data,
            HttpStatusCode statusCode = HttpStatusCode.Accepted,
            string contentType = "application/json")
        {
            var mockHttp = new MockHttpMessageHandler();

            mockHttp.Expect("https://api.hellosign.com/*")
                .With(request => request.Content.GetType() == typeof(MultipartFormDataContent))
                .Respond(statusCode, contentType, JsonConvert.SerializeObject(data));

            return CreateApiInternal<T>(mockHttp);
        }

        public static T CreateApiExpectJsonRequest<S, T>(S data,
            HttpStatusCode statusCode = HttpStatusCode.Accepted,
            string contentType = "application/json")
        {
            var mockHttp = new MockHttpMessageHandler();

            mockHttp.Expect("https://api.hellosign.com/*")
                .With(request => request.Content.GetType() == typeof(StringContent))
                .Respond(statusCode, contentType, JsonConvert.SerializeObject(data));

            return CreateApiInternal<T>(mockHttp);
        }

        public static T CreateApiExpectContentContains<S, T>(S data,
            HttpStatusCode statusCode = HttpStatusCode.Accepted,
            string contentType = "application/json", params string[] values)
        {
            var mockHttp = new MockHttpMessageHandler();
            mockHttp.Expect("https://api.hellosign.com/*")
                .With(request =>
                {
                    var stream = request.Content.ReadAsStream();
                    var streamReader = new StreamReader(stream);
                    var content = streamReader.ReadToEnd();
                    return values.All(value => content.Contains(value));
                })
                .Respond(statusCode, contentType, JsonConvert.SerializeObject(data));

            return CreateApiInternal<T>(mockHttp);
        }

        private static T CreateApiInternal<T>(MockHttpMessageHandler handler)
        {
            var options = new RestClientOptions
            {
                ConfigureMessageHandler = _ => handler,
                BaseUrl = new Uri("https://api.hellosign.com")
            };
            var mockRestClient = new RestClient(options,
                configureSerialization: serializerConfig => serializerConfig.UseSerializer(() => new CustomJsonCodec(SerializerSettings, GlobalConfiguration.Instance))
            );

            Configuration config = new Configuration();
            config.Username = "YOUR_API_KEY";
            var client = new ApiClient(config.BasePath, mockRestClient);
            return (T)Activator.CreateInstance(typeof(T), client, client, config);
        }

        /// <summary>
        /// Specifies the settings on a <see cref="JsonSerializer" /> object.
        /// These settings can be adjusted to accommodate custom serialization rules.
        /// </summary>
        private static JsonSerializerSettings SerializerSettings { get; set; } = new JsonSerializerSettings
        {
            // OpenAPI generated types generally hide default constructors.
            ConstructorHandling = ConstructorHandling.AllowNonPublicDefaultConstructor,
            ContractResolver = new DefaultContractResolver
            {
                NamingStrategy = new CamelCaseNamingStrategy
                {
                    OverrideSpecifiedNames = false
                }
            }
        };
    }

    // see ApiClient::CustomJsonCodec
    internal class CustomJsonCodec : IRestSerializer, ISerializer, IDeserializer
    {
        private readonly IReadableConfiguration _configuration;
        private readonly JsonSerializerSettings _serializerSettings = new JsonSerializerSettings
        {
            // OpenAPI generated types generally hide default constructors.
            ConstructorHandling = ConstructorHandling.AllowNonPublicDefaultConstructor,
            ContractResolver = new DefaultContractResolver
            {
                NamingStrategy = new CamelCaseNamingStrategy
                {
                    OverrideSpecifiedNames = false
                }
            }
        };

        public CustomJsonCodec(IReadableConfiguration configuration)
        {
            _configuration = configuration;
        }

        public CustomJsonCodec(JsonSerializerSettings serializerSettings, IReadableConfiguration configuration)
        {
            _serializerSettings = serializerSettings;
            _configuration = configuration;
        }

        /// <summary>
        /// Serialize the object into a JSON string.
        /// </summary>
        /// <param name="obj">Object to be serialized.</param>
        /// <returns>A JSON string.</returns>
        public string Serialize(object obj)
        {
            if (obj != null && obj is AbstractOpenAPISchema)
            {
                // the object to be serialized is an oneOf/anyOf schema
                return ((AbstractOpenAPISchema)obj).ToJson();
            }
            else
            {
                return JsonConvert.SerializeObject(obj, _serializerSettings);
            }
        }

        public string Serialize(Parameter bodyParameter) => Serialize(bodyParameter.Value);

        public T Deserialize<T>(RestResponse response)
        {
            var result = (T)Deserialize(response, typeof(T));
            return result;
        }

        /// <summary>
        /// Deserialize the JSON string into a proper object.
        /// </summary>
        /// <param name="response">The HTTP response.</param>
        /// <param name="type">Object type.</param>
        /// <returns>Object representation of the JSON string.</returns>
        internal object Deserialize(RestResponse response, Type type)
        {
            if (type == typeof(byte[])) // return byte array
            {
                return response.RawBytes;
            }

            // TODO: ? if (type.IsAssignableFrom(typeof(Stream)))
            if (type == typeof(Stream))
            {
                var bytes = response.RawBytes;
                if (response.Headers != null)
                {
                    var filePath = string.IsNullOrEmpty(_configuration.TempFolderPath)
                        ? Path.GetTempPath()
                        : _configuration.TempFolderPath;
                    var regex = new Regex(@"Content-Disposition=.*filename=['""]?([^'""\s]+)['""]?$");
                    foreach (var header in response.Headers)
                    {
                        var match = regex.Match(header.ToString());
                        if (match.Success)
                        {
                            string fileName = filePath + ClientUtils.SanitizeFilename(match.Groups[1].Value.Replace("\"", "").Replace("'", ""));
                            FileIO.WriteAllBytes(fileName, bytes);
                            return new FileStream(fileName, FileMode.Open);
                        }
                    }
                }
                var stream = new MemoryStream(bytes);
                return stream;
            }

            if (type.Name.StartsWith("System.Nullable`1[[System.DateTime")) // return a datetime object
            {
                return DateTime.Parse(response.Content, null, DateTimeStyles.RoundtripKind);
            }

            if (type == typeof(string) || type.Name.StartsWith("System.Nullable")) // return primitive type
            {
                return Convert.ChangeType(response.Content, type);
            }

            // at this point, it must be a model (json)
            try
            {
                return JsonConvert.DeserializeObject(response.Content, type, _serializerSettings);
            }
            catch (Exception e)
            {
                throw new ApiException(500, e.Message);
            }
        }

        public ISerializer Serializer => this;
        public IDeserializer Deserializer => this;

        public string[] AcceptedContentTypes => ContentType.JsonAccept;

        public SupportsContentType SupportsContentType => contentType =>
            contentType.Value.EndsWith("json", StringComparison.InvariantCultureIgnoreCase) ||
            contentType.Value.EndsWith("javascript", StringComparison.InvariantCultureIgnoreCase);

        public ContentType ContentType { get; set; } = ContentType.Json;

        public DataFormat DataFormat => DataFormat.Json;
    }
}
