using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json.Linq;
using Xunit;

using Dropbox.Sign.Api;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Api
{
    public class UnclaimedDraftApiTests
    {
        [Fact]
        public void UnclaimedDraftCreateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(UnclaimedDraftCreateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(UnclaimedDraftCreateResponse));

            var obj = UnclaimedDraftCreateRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<UnclaimedDraftApi>(responseData);
            var response = api.UnclaimedDraftCreate(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void UnclaimedDraftCreateEmbeddedTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(UnclaimedDraftCreateEmbeddedRequest));
            var responseData = TestHelper.GetJsonContents(nameof(UnclaimedDraftCreateResponse));

            var obj = UnclaimedDraftCreateEmbeddedRequest.Init(requestData.ToString());
            obj.Files = new List<Stream> {
                new FileStream(
                    TestHelper.RootPath + "/pdf-sample.pdf",
                    FileMode.Open,
                    FileAccess.Read,
                    FileShare.Read
                )
            };

            var api = MockRestClientHelper.CreateApi<UnclaimedDraftApi>(responseData);

            var response = api.UnclaimedDraftCreateEmbedded(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void UnclaimedDraftCreateEmbeddedWithTemplateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(UnclaimedDraftCreateEmbeddedWithTemplateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(UnclaimedDraftCreateResponse));

            var obj = UnclaimedDraftCreateEmbeddedWithTemplateRequest.Init(
                requestData.ToString()
            );
            obj.Files = new List<Stream> {
                new FileStream(
                    TestHelper.RootPath + "/pdf-sample.pdf",
                    FileMode.Open,
                    FileAccess.Read,
                    FileShare.Read
                )
            };

            var api = MockRestClientHelper.CreateApi<UnclaimedDraftApi>(responseData);

            var response = api.UnclaimedDraftCreateEmbeddedWithTemplate(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void UnclaimedDraftEditAndResendTest()
        {
            var signatureRequestId = "2f9781e1a83jdja934d808c153c2e1d3df6f8f2f";

            var requestData = TestHelper.GetJsonContents(nameof(UnclaimedDraftEditAndResendRequest));
            var responseData = TestHelper.GetJsonContents(nameof(UnclaimedDraftCreateResponse));

            var obj = UnclaimedDraftEditAndResendRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<UnclaimedDraftApi>(responseData);
            var response = api.UnclaimedDraftEditAndResend(signatureRequestId, obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }
    }
}
