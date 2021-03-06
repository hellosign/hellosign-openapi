import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const signer1: HelloSignSDK.SubUnclaimedDraftSigner = {
  emailAddress: "jack@example.com",
  name: "Jack",
  order: 0,
};

const signer2: HelloSignSDK.SubUnclaimedDraftSigner = {
  emailAddress: "jill@example.com",
  name: "Jill",
  order: 1,
};

const signingOptions: HelloSignSDK.SubSigningOptions = {
  draw: true,
  type: true,
  upload: true,
  phone: false,
  defaultType: HelloSignSDK.SubSigningOptions.DefaultTypeEnum.Draw,
};

const fieldOptions: HelloSignSDK.SubFieldOptions = {
  dateFormat: HelloSignSDK.SubFieldOptions.DateFormatEnum.DD_MM_YYYY,
};

const data: HelloSignSDK.UnclaimedDraftCreateRequest = {
  subject: "The NDA we talked about",
  type: HelloSignSDK.UnclaimedDraftCreateRequest.TypeEnum.RequestSignature,
  message: "Please sign this NDA and then we can discuss more. Let me know if you have any questions.",
  signers: [
    signer1,
    signer2,
  ],
  ccEmailAddresses: [
    "lawyer@hellosign.com",
    "lawyer@example.com",
  ],
  fileUrl: ["https://app.hellosign.com/docs/example_signature_request.pdf"],
  metadata: {
    "custom_id": 1234,
    "custom_text": "NDA #9",
  },
  signingOptions,
  fieldOptions,
  testMode: true,
};

const result = api.unclaimedDraftCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
