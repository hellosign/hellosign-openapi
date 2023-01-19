using Newtonsoft.Json.Linq;
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
            var requestData = TestHelper.SerializeFromFile<ReportCreateRequest>("ReportCreateRequest");
            var responseData = TestHelper.SerializeFromFile<ReportCreateResponse>("ReportCreateResponse");

            var api = MockRestClientHelper.CreateApi<ReportCreateResponse, ReportApi>(responseData);

            var response = api.ReportCreate(requestData);

            JToken.DeepEquals(
                responseData.ToJson(),
                response.ToJson()
            );
        }
    }
}
