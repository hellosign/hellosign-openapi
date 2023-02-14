using Xunit;

using Dropbox.Sign.Api;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Api
{
    public class ReportApiTests
    {
        [Fact]
        public void ReportCreateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(ReportCreateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(ReportCreateResponse));

            var obj = ReportCreateRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<ReportApi>(responseData);
            var response = api.ReportCreate(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }
    }
}
