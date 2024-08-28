using System.Net;
using Xunit;

using Dropbox.Sign.Client;
using Dropbox.Sign.Api;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test.Api
{
    public class AccountApiTests
    {
        [Fact]
        public void HttpCodeRangeTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(AccountVerifyRequest));
            var errorData = TestHelper.GetJsonContents(nameof(ErrorResponse));

            var obj = AccountVerifyRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<AccountApi>(errorData, HttpStatusCode.BadRequest);

            var ex = Assert.Throws<ApiException>(() =>
                api.AccountVerify(obj)
            );

            TestHelper.AssertJsonSame(errorData.ToString(), ex.ErrorContent.ToJson());
        }

        [Fact]
        public void AccountCreateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(AccountCreateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(AccountCreateResponse));

            var obj = AccountCreateRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<AccountApi>(responseData);
            var response = api.AccountCreate(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void AccountGetTest()
        {
            var responseData = TestHelper.GetJsonContents(nameof(AccountGetResponse));

            var api = MockRestClientHelper.CreateApi<AccountApi>(responseData);
            var response = api.AccountGet(null, "jack@example.com");

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void AccountUpdateTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(AccountUpdateRequest));
            var responseData = TestHelper.GetJsonContents(nameof(AccountGetResponse));

            var obj = AccountUpdateRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<AccountApi>(responseData);
            var response = api.AccountUpdate(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }

        [Fact]
        public void AccountVerifyTest()
        {
            var requestData = TestHelper.GetJsonContents(nameof(AccountVerifyRequest));
            var responseData = TestHelper.GetJsonContents(nameof(AccountVerifyResponse));

            var obj = AccountVerifyRequest.Init(requestData.ToString());

            var api = MockRestClientHelper.CreateApi<AccountApi>(responseData);
            var response = api.AccountVerify(obj);

            TestHelper.AssertJsonSame(responseData.ToString(), response.ToJson());
        }
    }
}
