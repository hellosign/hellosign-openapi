using System.Collections.Generic;
using System.IO;
using Xunit;

using Dropbox.Sign.Api;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Api
{
    public class SignatureRequestApiTests
    {
        [Fact]
        public void SignatureRequestBulkCreateEmbeddedWithTemplateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(SignatureRequestBulkCreateEmbeddedWithTemplateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(BulkSendJobSendResponse));

            var obj = SignatureRequestBulkCreateEmbeddedWithTemplateRequest.Init(
                requestData.ToString()
            );
            obj.SignerFile = new FileStream(
                TestHelper.RootPath + "/bulk-send-sample.csv",
                FileMode.Open,
                FileAccess.Read,
                FileShare.Read
            );

            var api = MockRestClientHelper.CreateApi<SignatureRequestApi>(responseData);
            var response = api.SignatureRequestBulkCreateEmbeddedWithTemplate(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void SignatureRequestBulkSendWithTemplateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(SignatureRequestBulkSendWithTemplateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(BulkSendJobSendResponse));

            var obj = SignatureRequestBulkSendWithTemplateRequest.Init(
                requestData.ToString()
            );
            obj.SignerFile = new FileStream(
                TestHelper.RootPath + "/bulk-send-sample.csv",
                FileMode.Open,
                FileAccess.Read,
                FileShare.Read
            );

            var api = MockRestClientHelper.CreateApi<SignatureRequestApi>(responseData);
            var response = api.SignatureRequestBulkSendWithTemplate(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact(Skip="POST /signature_request/cancel/{signature_request_id} skipped")]
        public void SignatureRequestCancelTest()
        {
        }

        [Fact]
        public void SignatureRequestCreateEmbeddedTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(SignatureRequestCreateEmbeddedRequest));
            var responseData = TestHelper.GetJsonContents(nameof(SignatureRequestGetResponse));

            var obj = SignatureRequestCreateEmbeddedRequest.Init(
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

            var api = MockRestClientHelper.CreateApi<SignatureRequestApi>(responseData);
            var response = api.SignatureRequestCreateEmbedded(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void SignatureRequestCreateEmbeddedWithTemplateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(SignatureRequestCreateEmbeddedWithTemplateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(SignatureRequestGetResponse));

            var obj = SignatureRequestCreateEmbeddedWithTemplateRequest.Init(
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

            var api = MockRestClientHelper.CreateApi<SignatureRequestApi>(responseData);
            var response = api.SignatureRequestCreateEmbeddedWithTemplate(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact(Skip="GET /signature_request/files/{signature_request_id} skipped")]
        public void SignatureRequestFilesTest()
        {
        }

        [Fact]
        public void SignatureRequestGetTest()
        {
            var signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

            var responseData = TestHelper.GetJsonContents(nameof(SignatureRequestGetResponse));

            var api = MockRestClientHelper.CreateApi<SignatureRequestApi>(responseData);
            var response = api.SignatureRequestGet(signatureRequestId);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void SignatureRequestListTest()
        {
            var accountId = "all";

            var responseData = TestHelper.GetJsonContents(nameof(SignatureRequestListResponse));

            var api = MockRestClientHelper.CreateApi<SignatureRequestApi>(responseData);
            var response = api.SignatureRequestList(accountId);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void SignatureRequestReleaseHoldTest()
        {
            var signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

            var responseData = TestHelper.GetJsonContents(nameof(SignatureRequestGetResponse));

            var api = MockRestClientHelper.CreateApi<SignatureRequestApi>(responseData);
            var response = api.SignatureRequestReleaseHold(signatureRequestId);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void SignatureRequestRemindTest()
        {
            var signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

            var requestData = TestHelper.GetJsonContents(nameof(SignatureRequestRemindRequest));
            var responseData = TestHelper.GetJsonContents(nameof(SignatureRequestGetResponse));

            var obj = SignatureRequestRemindRequest.Init(
                requestData.ToString()
            );

            var api = MockRestClientHelper.CreateApi<SignatureRequestApi>(responseData);
            var response = api.SignatureRequestRemind(signatureRequestId, obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact(Skip="POST /signature_request/remove/{signature_request_id} skipped")]
        public void SignatureRequestRemoveTest()
        {
        }

        [Fact]
        public void SignatureRequestSendTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(SignatureRequestSendRequest));
            var responseData = TestHelper.GetJsonContents(nameof(SignatureRequestGetResponse));

            var obj = SignatureRequestSendRequest.Init(
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

            var api = MockRestClientHelper.CreateApi<SignatureRequestApi>(responseData);
            var response = api.SignatureRequestSend(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void SignatureRequestSendWithTemplateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(SignatureRequestSendWithTemplateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(SignatureRequestGetResponse));

            var obj = SignatureRequestSendWithTemplateRequest.Init(
                requestData.ToString()
            );

            var api = MockRestClientHelper.CreateApi<SignatureRequestApi>(responseData);
            var response = api.SignatureRequestSendWithTemplate(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void SignatureRequestUpdateTest()
        {
            var signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

            var requestData = TestHelper.GetJsonContents(nameof(SignatureRequestUpdateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(SignatureRequestGetResponse));

            var obj = SignatureRequestUpdateRequest.Init(
                requestData.ToString()
            );

            var api = MockRestClientHelper.CreateApi<SignatureRequestApi>(responseData);
            var response = api.SignatureRequestUpdate(signatureRequestId, obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void FileForcesMultipartFormDataTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(SignatureRequestSendRequest));
            var responseData = TestHelper.GetJsonContents(nameof(SignatureRequestGetResponse));

            var obj = SignatureRequestSendRequest.Init(
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

            var responseObj = SignatureRequestGetResponse.Init(responseData.ToString());

            var api = MockRestClientHelper.CreateApiExpectMultiFormRequest<SignatureRequestGetResponse, SignatureRequestApi>(responseObj);
            var response = api.SignatureRequestSend(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void NoFileForcesJsonTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(SignatureRequestSendRequest));
            var responseData = TestHelper.GetJsonContents(nameof(SignatureRequestGetResponse));

            var obj = SignatureRequestSendRequest.Init(
                requestData.ToString()
            );

            var responseObj = SignatureRequestGetResponse.Init(responseData.ToString());

            var api = MockRestClientHelper.CreateApiExpectJsonRequest<SignatureRequestGetResponse, SignatureRequestApi>(responseObj);
            var response = api.SignatureRequestSend(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }
    }
}
