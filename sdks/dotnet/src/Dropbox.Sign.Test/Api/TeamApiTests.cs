using Xunit;

using Dropbox.Sign.Api;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Api
{
    public class TeamApiTests
    {
        [Fact]
        public void TeamAddMemberTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(TeamAddMemberRequest));
            var responseData = TestHelper.GetJsonContents(nameof(TeamGetResponse));

            var obj = TeamAddMemberRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<TeamApi>(responseData);
            var response = api.TeamAddMember(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void TeamCreateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(TeamCreateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(TeamGetResponse));

            var obj = TeamCreateRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<TeamApi>(responseData);
            var response = api.TeamCreate(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact(Skip = "DELETE /team/destroy skipped")]
        public void TeamDeleteTest()
        {
        }

        [Fact]
        public void TeamGetTest()
        {
            var responseData = TestHelper.GetJsonContents(nameof(TeamGetResponse));

            var api = MockRestClientHelper.CreateApi<TeamApi>(responseData);
            var response = api.TeamGet();

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void TeamUpdateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(TeamUpdateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(TeamGetResponse));

            var obj = TeamUpdateRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<TeamApi>(responseData);
            var response = api.TeamUpdate(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void TeamRemoveTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(TeamRemoveMemberRequest));
            var responseData = TestHelper.GetJsonContents(nameof(TeamGetResponse));

            var obj = TeamRemoveMemberRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<TeamApi>(responseData);
            var response = api.TeamRemoveMember(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }
    }
}
