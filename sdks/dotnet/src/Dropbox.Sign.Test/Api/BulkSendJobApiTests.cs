using Xunit;

using Dropbox.Sign.Api;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Api
{
    public class BulkSendJobApiTests
    {
        [Fact]
        public void BulkSendJobGetTest()
        {
            var id = "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174";

            var responseData = TestHelper.GetJsonContents(nameof(BulkSendJobGetResponse));

            var api = MockRestClientHelper.CreateApi<BulkSendJobApi>(responseData);
            var response = api.BulkSendJobGet(id);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void BulkSendJobListTest()
        {
            var page = 1;
            var pageSize = 2;

            var responseData = TestHelper.GetJsonContents(nameof(BulkSendJobListResponse));

            var api = MockRestClientHelper.CreateApi<BulkSendJobApi>(responseData);
            var response = api.BulkSendJobList(page, pageSize);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }
    }
}
