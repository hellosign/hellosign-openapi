using System;
using System.Collections.Generic;
using System.IO;
using Xunit;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Api
{
    public class FaxApiTests
    {
        [Fact]
        public void SendFaxTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(FaxSendRequest));
            var responseData = TestHelper.GetJsonContents(nameof(FaxGetResponse));

            var obj = FaxSendRequest.Init(
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

            var responseObj = FaxGetResponse.Init(responseData.ToString());

            var api = MockRestClientHelper.CreateApiExpectMultiFormRequest<FaxGetResponse, FaxApi>(responseObj);
            var response = api.FaxSend(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void FaxListTest()
        {
            var responseData = TestHelper.GetJsonContents(nameof(FaxListResponse));

            var api = MockRestClientHelper.CreateApi<FaxApi>(responseData);
            var response = api.FaxList();

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void FaxGetTest()
        {
            var faxId = "c2e9691c85d9d6fa6ae773842e3680b2b8650f1d";

            var responseData = TestHelper.GetJsonContents(nameof(FaxGetResponse));

            var api = MockRestClientHelper.CreateApi<FaxApi>(responseData);
            var response = api.FaxGet(faxId);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }
    }
}
