This type of callback URL can be set up at the account level (either by setting it through an API request to "/v3/account" or on the Account Settings page on hellosign.com).
          
All signature request events that involve your account are reported to this URL. This includes events such as receiving a signature request, or when a signature request you've sent is signed by someone. Events are reported to the account callback URL for either requests originating on hellosign.com, or on a partner site, via an embedded flow.

You can set your account callback by using the [account API call](https://app.hellosign.com/api/account/post) or manually on the [settings page](https://app.hellosign.com/home/myAccount#api).