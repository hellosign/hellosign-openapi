using System;
using System.IO;
using Newtonsoft.Json;
using Dropbox.Sign.Model;
using JsonDiffPatchDotNet;
using Newtonsoft.Json.Linq;
using Xunit;

namespace Dropbox.Sign.Test
{
    public class TestHelper
    {
        public const string RootPath = "../../../../../test_fixtures";

        public static StreamReader ReadFileFromResource(string fileName)
        {
            return new StreamReader(
                RootPath + $"/{fileName}.json"
            );
        }

        public static FileStream GetFile(string fileName)
        {
            return new FileStream(
                RootPath + $"/{fileName}",
                FileMode.Open,
                FileAccess.Read,
                FileShare.Read
            );
        }

        public static T SerializeFromFile<T>(
            string fileName,
            string key = "default"
        ) where T : IOpenApiTyped
        {
            T instance = (T)Activator.CreateInstance(typeof(T), true);

            using (var r = TestHelper.ReadFileFromResource(fileName))
            {
                dynamic json = JsonConvert.DeserializeObject<object>(r.ReadToEnd());
                Assert.NotNull(json);

                var rawData = json[key];

                var requestData = JsonConvert.DeserializeObject<T>(rawData.ToString());
                Assert.NotNull(requestData);
                Assert.NotNull(requestData.GetType());

                return requestData;
            }
        }

        public static JObject GetJsonContents(string fileName, string key = "default")
        {
            using (var r = TestHelper.ReadFileFromResource(fileName))
            {
                dynamic json = JsonConvert.DeserializeObject<object>(r.ReadToEnd());
                Assert.NotNull(json);

                var requestedData = json[key];
                Assert.NotNull(requestedData);

                return requestedData;
            }
        }

        public static void AssertJsonSame(string left, string right)
        {
            var jdp = new JsonDiffPatch();
            JToken patch = jdp.Diff(left, right);

            var result = patch.ToString();

            Assert.True(
                result == "",
                result
            );
        }
    }
}
