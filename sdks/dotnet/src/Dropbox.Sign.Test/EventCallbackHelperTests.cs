using System;
using System.Collections.Generic;
using Xunit;
using Dropbox.Sign.Model;

namespace Dropbox.Sign.Test
{
    public class EventCallbackHelperTests
    {
        private const string ApiKey = "324e3b0840f065eb51f3fd63231d0d33daa35d4ed10d27718839e81737065782";

        [Fact]
        public void IsValidTest()
        {
            var account_keys = new List<string>
            {
                "base",
                "base_no_metadata",
                "account",
                "account_no_metadata",
                "signature_request",
                "signature_request_no_metadata",
                "template",
                "template_no_metadata",
            };

            foreach (var key in account_keys)
            {
                var requestData = TestHelper.GetJsonContents("EventCallbackHelper_AccountCallbacks", key);
                var callbackEvent = EventCallbackRequest.Init(requestData.ToString());

                Assert.True(EventCallbackHelper.IsValid(ApiKey, callbackEvent));
                Assert.False(EventCallbackHelper.IsValid(Reverse(ApiKey), callbackEvent));
                Assert.Equal(
                    EventCallbackHelper.EVENT_TYPE_ACCOUNT_CALLBACK,
                    EventCallbackHelper.GetCallbackType(callbackEvent)
                );
            }

            var app_keys = new List<string>
            {
                "base",
                "account",
                "signature_request",
                "template",
            };

            foreach (var key in app_keys)
            {
                var requestData = TestHelper.GetJsonContents("EventCallbackHelper_AppCallbacks", key);
                var callbackEvent = EventCallbackRequest.Init(requestData.ToString());

                Assert.True(EventCallbackHelper.IsValid(ApiKey, callbackEvent));
                Assert.False(EventCallbackHelper.IsValid(Reverse(ApiKey), callbackEvent));
                Assert.Equal(
                    EventCallbackHelper.EVENT_TYPE_APP_CALLBACK,
                    EventCallbackHelper.GetCallbackType(callbackEvent)
                );
            }
        }

        private string Reverse(string text)
        {
            var arr = text.ToCharArray();
            Array.Reverse(arr);
            return new String(arr);
        }
    }
}
