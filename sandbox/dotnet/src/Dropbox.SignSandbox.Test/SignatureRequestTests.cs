using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using Xunit;
using Dropbox.Sign;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Dropbox.SignSandbox.Test
{
    public class TestHelper
    {
        public static JObject GetJsonContents(string fileName)
        {
            using (var r = new StreamReader( $"./../../../../../{fileName}"))
            {
                dynamic json = JsonConvert.DeserializeObject<object>(r.ReadToEnd());
                Assert.NotNull(json);

                return json;
            }
        }
        
        public static JObject GetConfig() 
        {
            dynamic configCustom = GetJsonContents("src/Dropbox.SignSandbox.Test/.config.json");
            dynamic configDist = GetJsonContents("src/Dropbox.SignSandbox.Test/.config.dist.json");
            
            var mergeSettings = new JsonMergeSettings
            {
                MergeArrayHandling = MergeArrayHandling.Union
            };
            
            configDist.Merge(configCustom, mergeSettings);

            return configDist;
        }
    }

    public class SignatureRequestTests
    {
        [Fact]
        public void SendTest()
        {
            dynamic config_merged = TestHelper.GetConfig();

            var config = new Sign.Client.Configuration();
            config.Username = config_merged["API_KEY"];
            config.BasePath = config_merged["BASE_URL"];

            var signatureRequestApi = new Sign.Api.SignatureRequestApi(config);

            var data = TestHelper.GetJsonContents("test_fixtures/SignatureRequestSendRequest.json");
            
            var sendRequest = Sign.Model.SignatureRequestSendRequest.Init(data.ToString());
            
            sendRequest.Files = new List<Stream> {
                new FileStream(
                    "./../../../../../test_fixtures/pdf-sample.pdf",
                    FileMode.Open,
                    FileAccess.Read,
                    FileShare.Read
                )
            };

            var sendResponse = signatureRequestApi.SignatureRequestSend(sendRequest);
            
            Assert.Equal(
                sendRequest.FormFieldsPerDocument[0].ApiId,
                sendResponse.SignatureRequest.CustomFields[0].ApiId
            );
            
            Assert.Equal(
                sendRequest.Signers[0].EmailAddress,
                sendResponse.SignatureRequest.Signatures[0].SignerEmailAddress
            );
            Assert.Equal(
                sendRequest.Signers[1].EmailAddress,
                sendResponse.SignatureRequest.Signatures[1].SignerEmailAddress
            );
            Assert.Equal(
                sendRequest.Signers[2].EmailAddress,
                sendResponse.SignatureRequest.Signatures[2].SignerEmailAddress
            );

            var getResponse = signatureRequestApi.SignatureRequestGet(sendResponse.SignatureRequest.SignatureRequestId);
            
            Assert.Equal(
                sendResponse.SignatureRequest.SignatureRequestId,
                getResponse.SignatureRequest.SignatureRequestId
            );
        }
        
        [Fact]
        public void CreateEmbeddedTest()
        {
            dynamic config_merged = TestHelper.GetConfig();

            var config = new Sign.Client.Configuration();
            config.Username = config_merged["API_KEY"];
            config.BasePath = config_merged["BASE_URL"];

            var signatureRequestApi = new Sign.Api.SignatureRequestApi(config);

            var data = TestHelper.GetJsonContents("test_fixtures/SignatureRequestSendRequest.json");
            data["client_id"] = config_merged["CLIENT_ID"];
            
            var sendRequest = Sign.Model.SignatureRequestCreateEmbeddedRequest.Init(data.ToString());
            
            sendRequest.Files = new List<Stream> {
                new FileStream(
                    "./../../../../../test_fixtures/pdf-sample.pdf",
                    FileMode.Open,
                    FileAccess.Read,
                    FileShare.Read
                )
            };

            var sendResponse = signatureRequestApi.SignatureRequestCreateEmbedded(sendRequest);

            Assert.Equal(
                sendRequest.Signers[0].EmailAddress,
                sendResponse.SignatureRequest.Signatures[0].SignerEmailAddress
            );
            Assert.Equal(
                sendRequest.Signers[1].EmailAddress,
                sendResponse.SignatureRequest.Signatures[1].SignerEmailAddress
            );
            Assert.Equal(
                sendRequest.Signers[2].EmailAddress,
                sendResponse.SignatureRequest.Signatures[2].SignerEmailAddress
            );
            
            var embeddedApi = new Sign.Api.EmbeddedApi(config);

            var getResponse = embeddedApi.EmbeddedSignUrl(sendResponse.SignatureRequest.Signatures[0].SignatureId);
            
            Assert.NotEmpty(getResponse.Embedded.SignUrl);
        }
        
        [Fact]
        public void SendWithoutFillErrorTest()
        {
            dynamic config_merged = TestHelper.GetConfig();

            var config = new Sign.Client.Configuration();
            config.Username = config_merged["API_KEY"];
            config.BasePath = config_merged["BASE_URL"];

            var signatureRequestApi = new Sign.Api.SignatureRequestApi(config);

            var data = TestHelper.GetJsonContents("test_fixtures/SignatureRequestSendRequest.json");
            
            var sendRequest = Sign.Model.SignatureRequestSendRequest.Init(data.ToString());
            
            try
            {
                signatureRequestApi.SignatureRequestSend(sendRequest);
                Assert.True(false);
            }
            catch (Sign.Client.ApiException e)
            {
                Assert.Equal("file", e.ErrorContent.Error.ErrorPath);
            }
        }
    }
}