using System.Collections.Generic;
using System.IO;
using Xunit;

using Dropbox.Sign.Api;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Api
{
    public class TemplateApiTests
    {
        [Fact]
        public void TemplateAddUserTest()
        {
            var templateId = "f57db65d3f933b5316d398057a36176831451a35";

            var requestData = TestHelper.GetJsonContents(nameof(TemplateAddUserRequest));
            var responseData = TestHelper.GetJsonContents(nameof(TemplateGetResponse));

            var obj = TemplateAddUserRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<TemplateApi>(responseData);
            var response = api.TemplateAddUser(templateId, obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void TemplateCreateEmbeddedDraftTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(TemplateCreateEmbeddedDraftRequest));
            var responseData = TestHelper.GetJsonContents(nameof(TemplateCreateEmbeddedDraftResponse));

            var obj = TemplateCreateEmbeddedDraftRequest.Init(requestData.ToString());
            obj.Files = new List<Stream> {
                new FileStream(
                    TestHelper.RootPath + "/pdf-sample.pdf",
                    FileMode.Open,
                    FileAccess.Read,
                    FileShare.Read
                )
            };

            var api = MockRestClientHelper.CreateApi<TemplateApi>(responseData);
            var response = api.TemplateCreateEmbeddedDraft(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact(Skip = "POST /template/delete/{template_id} skipped")]
        public void TemplateDeleteTest()
        {
        }

        [Fact(Skip = "GET /template/files/{signature_request_id} skipped")]
        public void TemplateFilesTest()
        {
        }

        [Fact]
        public void TemplateGetTest()
        {
            var templateId = "f57db65d3f933b5316d398057a36176831451a35";

            var responseData = TestHelper.GetJsonContents(nameof(TemplateGetResponse));

            var api = MockRestClientHelper.CreateApi<TemplateApi>(responseData);
            var response = api.TemplateGet(templateId);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void TemplateListTest()
        {
            var accountId = "all";

            var responseData = TestHelper.GetJsonContents(nameof(TemplateListResponse));

            var api = MockRestClientHelper.CreateApi<TemplateApi>(responseData);
            var response = api.TemplateList(accountId);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void TemplateRemoveUserTest()
        {
            var templateId = "21f920ec2b7f4b6bb64d3ed79f26303843046536";

            var requestData = TestHelper.GetJsonContents(nameof(TemplateRemoveUserRequest));
            var responseData = TestHelper.GetJsonContents(nameof(TemplateGetResponse));

            var obj = TemplateRemoveUserRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<TemplateApi>(responseData);
            var response = api.TemplateRemoveUser(templateId, obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void TemplateUpdateFilesTest()
        {
            var templateId = "21f920ec2b7f4b6bb64d3ed79f26303843046536";

            var requestData = TestHelper.GetJsonContents(nameof(TemplateUpdateFilesRequest));
            var responseData = TestHelper.GetJsonContents(nameof(TemplateUpdateFilesResponse));

            var obj = TemplateUpdateFilesRequest.Init(requestData.ToString());
            obj.Files = new List<Stream> {
                new FileStream(
                    TestHelper.RootPath + "/pdf-sample.pdf",
                    FileMode.Open,
                    FileAccess.Read,
                    FileShare.Read
                )
            };

            var api = MockRestClientHelper.CreateApi<TemplateApi>(responseData);
            var response = api.TemplateUpdateFiles(templateId, obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }
    }
}
