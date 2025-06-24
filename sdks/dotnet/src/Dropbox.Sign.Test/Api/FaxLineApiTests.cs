using System;
using System.Collections.Generic;
using System.IO;
using Xunit;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Api
{
    public class FaxLineApiTests
    {
        [Fact]
        public void FaxLineCreateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(FaxLineCreateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(FaxLineResponse));

            var obj = FaxLineCreateRequest.Init(
                requestData.ToString()
            );

            var api = MockRestClientHelper.CreateApi<FaxLineApi>(responseData);
            var response = api.FaxLineCreate(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void FaxLineListTest()
        {
            var responseData = TestHelper.GetJsonContents(nameof(FaxLineListResponse));

            var api = MockRestClientHelper.CreateApi<FaxLineApi>(responseData);
            var response = api.FaxLineList();

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void FaxLineGetTest()
        {
            var faxLineNumber = "14155557897";

            var responseData = TestHelper.GetJsonContents(nameof(FaxLineResponse));

            var api = MockRestClientHelper.CreateApi<FaxLineApi>(responseData);
            var response = api.FaxLineGet(faxLineNumber);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }
    }
}
