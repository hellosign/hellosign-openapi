using System.Collections.Generic;
using System.IO;
using System.Net;
using Newtonsoft.Json.Linq;
using Xunit;

using Dropbox.Sign.Api;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Api
{
    public class ApiAppApiTests
    {
        [Fact]
        public void ApiAppCreateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(ApiAppCreateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(ApiAppGetResponse));

            var obj = ApiAppCreateRequest.Init(requestData.ToString());
            obj.CustomLogoFile = new FileStream(
                TestHelper.RootPath + "/pdf-sample.pdf",
                FileMode.Open,
                FileAccess.Read,
                FileShare.Read
            );

            var api = MockRestClientHelper.CreateApi<ApiAppApi>(responseData);
            var response = api.ApiAppCreate(obj);

            JToken.DeepEquals(
                responseData.ToString(),
                response.ToJson()
            );
        }

        [Fact]
        public void ApiAppGetTest()
        {
            var clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

            var responseData = TestHelper.GetJsonContents(nameof(ApiAppGetResponse));

            var api = MockRestClientHelper.CreateApi<ApiAppApi>(responseData);
            var response = api.ApiAppGet(clientId);

            JToken.DeepEquals(
                responseData.ToString(),
                response.ToJson()
            );
        }

        [Fact(Skip="DELETE /api_app/{client_id} skipped")]
        public void ApiAppDeleteTest()
        {
        }

        [Fact]
        public void ApiAppListTest()
        {
            var page = 1;
            var pageSize = 20;

            var responseData = TestHelper.GetJsonContents(nameof(ApiAppListResponse));

            var api = MockRestClientHelper.CreateApi<ApiAppApi>(responseData);
            var response = api.ApiAppList(page, pageSize);

            JToken.DeepEquals(
                responseData.ToString(),
                response.ToJson()
            );
        }

        [Fact]
        public void ApiAppUpdateTest()
        {
            var clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

            var requestData = TestHelper.GetJsonContents(nameof(ApiAppUpdateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(ApiAppGetResponse));

            var obj = ApiAppUpdateRequest.Init(requestData.ToString());
            obj.CustomLogoFile = new FileStream(
                TestHelper.RootPath + "/pdf-sample.pdf",
                FileMode.Open,
                FileAccess.Read,
                FileShare.Read
            );

            var api = MockRestClientHelper.CreateApi<ApiAppApi>(responseData);
            var response = api.ApiAppUpdate(clientId, obj);

            JToken.DeepEquals(
                responseData.ToString(),
                response.ToJson()
            );
        }

        [Fact]
        public void ValuesJsonifiedTest()
        {
            var oauth = new SubOAuth(
                callbackUrl: "https://oauth-callback.test",
                scopes: new List<SubOAuth.ScopesEnum>() {SubOAuth.ScopesEnum.TemplateAccess}
            );

            var customLogoFile = TestHelper.GetFile("pdf-sample.pdf");

            var obj = new ApiAppCreateRequest(
                name: "My name is",
                callbackUrl: "https://awesome.test",
                domains: new List<string>() {"domain1.com", "domain2.com"},
                oauth: oauth,
                customLogoFile: customLogoFile
            );

            var responseData = TestHelper.GetJsonContents(nameof(ApiAppGetResponse));

            var responseObj = ApiAppGetResponse.Init(responseData.ToString());

            var api = MockRestClientHelper.CreateApiExpectContentContains<ApiAppGetResponse, ApiAppApi>(responseObj,
                HttpStatusCode.Accepted,
                "application/json",
                "[\"domain1.com\",\"domain2.com\"]",
                "My name is",
                "{\"scopes\":[\"template_access\"],\"callback_url\":\"https://oauth-callback.test\"}"
            );
            var response = api.ApiAppCreate(obj);

            JToken.DeepEquals(
                responseData.ToString(),
                response.ToJson()
            );
        }
    }
}
