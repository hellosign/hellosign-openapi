import * as HelloSign from "hellosign-sdk";

const fs = require('fs');

const unclaimedDraftApi = new HelloSign.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
unclaimedDraftApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// unclaimedDraftApi.accessToken = "YOUR_ACCESS_TOKEN";

const signer1: HelloSign.SubUnclaimedDraftSigner = {
  emailAddress: "jack@example.com",
  name: "Jack",
  order: 0,
};

const signer2: HelloSign.SubUnclaimedDraftSigner = {
  emailAddress: "jill@example.com",
  name: "Jill",
  order: 1,
};

const signingOptions: HelloSign.SubSigningOptions = {
  draw: true,
  type: true,
  upload: true,
  phone: false,
  defaultType: HelloSign.SubSigningOptions.DefaultTypeEnum.Draw,
};

const fieldOptions: HelloSign.SubFieldOptions = {
  dateFormat: HelloSign.SubFieldOptions.DateFormatEnum.DD_MM_YYYY,
};

const data: HelloSign.UnclaimedDraftCreateRequest = {
  subject: "The NDA we talked about",
  type: HelloSign.UnclaimedDraftCreateRequest.TypeEnum.RequestSignature,
  message: "Please sign this NDA and then we can discuss more. Let me know if you have any questions.",
  signers: [
    signer1,
    signer2,
  ],
  ccEmailAddresses: [
    "lawyer@hellosign.com",
    "lawyer@example.com",
  ],
  files: [fs.createReadStream("example_signature_request.pdf")],
  metadata: {
    "custom_id": 1234,
    "custom_text": "NDA #9",
  },
  signingOptions,
  fieldOptions,
  testMode: true,
};

const result = unclaimedDraftApi.unclaimedDraftCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
