using Newtonsoft.Json.Linq;
using Xunit;

using Dropbox.Sign.Api;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Api
{
    public class EmbeddedApiTests
    {
        [Fact]
        public void EmbeddedEditUrlTest()
        {
            var templateId = "5de8179668f2033afac48da1868d0093bf133266";

            var requestData = TestHelper.GetJsonContents(nameof(EmbeddedEditUrlRequest));
            var responseData = TestHelper.GetJsonContents(nameof(EmbeddedEditUrlResponse));

            var obj = EmbeddedEditUrlRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<EmbeddedApi>(responseData);
            var response = api.EmbeddedEditUrl(templateId, obj);

            JToken.DeepEquals(
                responseData.ToString(),
                response.ToJson()
            );
        }

        [Fact]
        public void EmbeddedSignUrlTest()
        {
            var signatureId = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b";

            var responseData = TestHelper.GetJsonContents(nameof(EmbeddedSignUrlResponse));

            var api = MockRestClientHelper.CreateApi<EmbeddedApi>(responseData);
            var response = api.EmbeddedSignUrl(signatureId);

            JToken.DeepEquals(
                responseData.ToString(),
                response.ToJson()
            );
        }
    }
}
