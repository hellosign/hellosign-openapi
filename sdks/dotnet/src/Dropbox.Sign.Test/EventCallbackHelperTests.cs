using System;
using System.Collections.Generic;
using Newtonsoft.Json;
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
            var keys = new List<string>
            {
                "base",
                "account",
                "signature_request",
                "template",
            };

            foreach (var key in keys)
            {
                var requestData = TestHelper.GetJsonContents(nameof(EventCallbackHelper), key);
                var callbackEvent = EventCallbackRequest.Init(requestData.ToString());

                Assert.True(EventCallbackHelper.IsValid(ApiKey, callbackEvent));
                Assert.False(EventCallbackHelper.IsValid(Reverse(ApiKey), callbackEvent));

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
