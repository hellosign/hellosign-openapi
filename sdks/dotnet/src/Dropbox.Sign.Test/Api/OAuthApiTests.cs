using Newtonsoft.Json.Linq;
using Xunit;

using Dropbox.Sign.Api;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Api
{
    public class OAuthApiTests
    {
        [Fact]
        public void TokenGenerateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(OAuthTokenGenerateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(OAuthTokenResponse));

            var obj = OAuthTokenGenerateRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<OAuthApi>(responseData);
            var response = api.OauthTokenGenerate(obj);

            JToken.DeepEquals(
                responseData.ToString(),
                response.ToJson()
            );
        }

        [Fact]
        public void TokenRefreshTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(OAuthTokenRefreshRequest));
            var responseData = TestHelper.GetJsonContents(nameof(OAuthTokenResponse));

            var obj = OAuthTokenRefreshRequest.Init(requestData.ToString());
            var api = MockRestClientHelper.CreateApi<OAuthApi>(responseData);

            var response = api.OauthTokenRefresh(obj);

            JToken.DeepEquals(
                responseData.ToString(),
                response.ToJson()
            );
        }
    }
}
