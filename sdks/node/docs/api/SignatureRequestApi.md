# SignatureRequestApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**signatureRequestBulkCreateEmbeddedWithTemplate()**](SignatureRequestApi.md#signatureRequestBulkCreateEmbeddedWithTemplate) | **POST** /signature_request/bulk_create_embedded_with_template | Embedded Bulk Send with Template |
| [**signatureRequestBulkSendWithTemplate()**](SignatureRequestApi.md#signatureRequestBulkSendWithTemplate) | **POST** /signature_request/bulk_send_with_template | Bulk Send with Template |
| [**signatureRequestCancel()**](SignatureRequestApi.md#signatureRequestCancel) | **POST** /signature_request/cancel/{signature_request_id} | Cancel Incomplete Signature Request |
| [**signatureRequestCreateEmbedded()**](SignatureRequestApi.md#signatureRequestCreateEmbedded) | **POST** /signature_request/create_embedded | Create Embedded Signature Request |
| [**signatureRequestCreateEmbeddedWithTemplate()**](SignatureRequestApi.md#signatureRequestCreateEmbeddedWithTemplate) | **POST** /signature_request/create_embedded_with_template | Create Embedded Signature Request with Template |
| [**signatureRequestEdit()**](SignatureRequestApi.md#signatureRequestEdit) | **PUT** /signature_request/edit/{signature_request_id} | Edit Signature Request |
| [**signatureRequestEditEmbedded()**](SignatureRequestApi.md#signatureRequestEditEmbedded) | **PUT** /signature_request/edit_embedded/{signature_request_id} | Edit Embedded Signature Request |
| [**signatureRequestEditEmbeddedWithTemplate()**](SignatureRequestApi.md#signatureRequestEditEmbeddedWithTemplate) | **PUT** /signature_request/edit_embedded_with_template/{signature_request_id} | Edit Embedded Signature Request with Template |
| [**signatureRequestEditWithTemplate()**](SignatureRequestApi.md#signatureRequestEditWithTemplate) | **PUT** /signature_request/edit_with_template/{signature_request_id} | Edit Signature Request With Template |
| [**signatureRequestFiles()**](SignatureRequestApi.md#signatureRequestFiles) | **GET** /signature_request/files/{signature_request_id} | Download Files |
| [**signatureRequestFilesAsDataUri()**](SignatureRequestApi.md#signatureRequestFilesAsDataUri) | **GET** /signature_request/files_as_data_uri/{signature_request_id} | Download Files as Data Uri |
| [**signatureRequestFilesAsFileUrl()**](SignatureRequestApi.md#signatureRequestFilesAsFileUrl) | **GET** /signature_request/files_as_file_url/{signature_request_id} | Download Files as File Url |
| [**signatureRequestGet()**](SignatureRequestApi.md#signatureRequestGet) | **GET** /signature_request/{signature_request_id} | Get Signature Request |
| [**signatureRequestList()**](SignatureRequestApi.md#signatureRequestList) | **GET** /signature_request/list | List Signature Requests |
| [**signatureRequestReleaseHold()**](SignatureRequestApi.md#signatureRequestReleaseHold) | **POST** /signature_request/release_hold/{signature_request_id} | Release On-Hold Signature Request |
| [**signatureRequestRemind()**](SignatureRequestApi.md#signatureRequestRemind) | **POST** /signature_request/remind/{signature_request_id} | Send Request Reminder |
| [**signatureRequestRemove()**](SignatureRequestApi.md#signatureRequestRemove) | **POST** /signature_request/remove/{signature_request_id} | Remove Signature Request Access |
| [**signatureRequestSend()**](SignatureRequestApi.md#signatureRequestSend) | **POST** /signature_request/send | Send Signature Request |
| [**signatureRequestSendWithTemplate()**](SignatureRequestApi.md#signatureRequestSendWithTemplate) | **POST** /signature_request/send_with_template | Send with Template |
| [**signatureRequestUpdate()**](SignatureRequestApi.md#signatureRequestUpdate) | **POST** /signature_request/update/{signature_request_id} | Update Signature Request |


## `signatureRequestBulkCreateEmbeddedWithTemplate()`

```typescript
signatureRequestBulkCreateEmbeddedWithTemplate(signatureRequestBulkCreateEmbeddedWithTemplateRequest: SignatureRequestBulkCreateEmbeddedWithTemplateRequest): BulkSendJobSendResponse
```

Embedded Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter to be signed in an embedded iFrame. These embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.  **NOTE:** Only available for Standard plan and higher.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";

const signerList2CustomFields1: models.SubBulkSignerListCustomField = {
  name: "company",
  value: "123 LLC",
};

const signerList2CustomFields = [
  signerList2CustomFields1,
];

const signerList2Signers1: models.SubSignatureRequestTemplateSigner = {
  role: "Client",
  name: "Mary",
  emailAddress: "mary@example.com",
  pin: "gd9as5b",
};

const signerList2Signers = [
  signerList2Signers1,
];

const signerList1CustomFields1: models.SubBulkSignerListCustomField = {
  name: "company",
  value: "ABC Corp",
};

const signerList1CustomFields = [
  signerList1CustomFields1,
];

const signerList1Signers1: models.SubSignatureRequestTemplateSigner = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
  pin: "d79a3td",
};

const signerList1Signers = [
  signerList1Signers1,
];

const signerList1: models.SubBulkSignerList = {
  customFields: signerList1CustomFields,
  signers: signerList1Signers,
};

const signerList2: models.SubBulkSignerList = {
  customFields: signerList2CustomFields,
  signers: signerList2Signers,
};

const signerList = [
  signerList1,
  signerList2,
];

const ccs1: models.SubCC = {
  role: "Accounting",
  emailAddress: "accounting@example.com",
};

const ccs = [
  ccs1,
];

const signatureRequestBulkCreateEmbeddedWithTemplateRequest: models.SignatureRequestBulkCreateEmbeddedWithTemplateRequest = {
  clientId: "1a659d9ad95bccd307ecad78d72192f8",
  templateIds: [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
  ],
  message: "Glad we could come to an agreement.",
  subject: "Purchase Order",
  testMode: true,
  signerList: signerList,
  ccs: ccs,
};

apiCaller.signatureRequestBulkCreateEmbeddedWithTemplate(
  signatureRequestBulkCreateEmbeddedWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestBulkCreateEmbeddedWithTemplate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestBulkCreateEmbeddedWithTemplateRequest** | [**SignatureRequestBulkCreateEmbeddedWithTemplateRequest**](../model/SignatureRequestBulkCreateEmbeddedWithTemplateRequest.md)|  | |

### Return type

[**BulkSendJobSendResponse**](../model/BulkSendJobSendResponse.md)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestBulkSendWithTemplate()`

```typescript
signatureRequestBulkSendWithTemplate(signatureRequestBulkSendWithTemplateRequest: SignatureRequestBulkSendWithTemplateRequest): BulkSendJobSendResponse
```

Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter.  **NOTE:** Only available for Standard plan and higher.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signerList2CustomFields1: models.SubBulkSignerListCustomField = {
  name: "company",
  value: "123 LLC",
};

const signerList2CustomFields = [
  signerList2CustomFields1,
];

const signerList2Signers1: models.SubSignatureRequestTemplateSigner = {
  role: "Client",
  name: "Mary",
  emailAddress: "mary@example.com",
  pin: "gd9as5b",
};

const signerList2Signers = [
  signerList2Signers1,
];

const signerList1CustomFields1: models.SubBulkSignerListCustomField = {
  name: "company",
  value: "ABC Corp",
};

const signerList1CustomFields = [
  signerList1CustomFields1,
];

const signerList1Signers1: models.SubSignatureRequestTemplateSigner = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
  pin: "d79a3td",
};

const signerList1Signers = [
  signerList1Signers1,
];

const signerList1: models.SubBulkSignerList = {
  customFields: signerList1CustomFields,
  signers: signerList1Signers,
};

const signerList2: models.SubBulkSignerList = {
  customFields: signerList2CustomFields,
  signers: signerList2Signers,
};

const signerList = [
  signerList1,
  signerList2,
];

const ccs1: models.SubCC = {
  role: "Accounting",
  emailAddress: "accounting@example.com",
};

const ccs = [
  ccs1,
];

const signatureRequestBulkSendWithTemplateRequest: models.SignatureRequestBulkSendWithTemplateRequest = {
  templateIds: [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
  ],
  message: "Glad we could come to an agreement.",
  subject: "Purchase Order",
  testMode: true,
  signerList: signerList,
  ccs: ccs,
};

apiCaller.signatureRequestBulkSendWithTemplate(
  signatureRequestBulkSendWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestBulkSendWithTemplate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestBulkSendWithTemplateRequest** | [**SignatureRequestBulkSendWithTemplateRequest**](../model/SignatureRequestBulkSendWithTemplateRequest.md)|  | |

### Return type

[**BulkSendJobSendResponse**](../model/BulkSendJobSendResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestCancel()`

```typescript
signatureRequestCancel(signatureRequestId: string)
```

Cancel Incomplete Signature Request

Cancels an incomplete signature request. This action is **not reversible**.  The request will be canceled and signers will no longer be able to sign. If they try to access the signature request they will receive a HTTP 410 status code indicating that the resource has been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an empty 200 OK response if the signature request is eligible to be canceled and has been successfully queued.  This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the `signature_request_canceled` event. It is recommended that a [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the `signature_request_canceled` event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.  To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.  **NOTE:** To remove your access to a completed signature request, use the endpoint: `POST /signature_request/remove/[:signature_request_id]`.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.signatureRequestCancel(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestCancel:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The id of the incomplete SignatureRequest to cancel. | |

### Return type

void (empty response body)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestCreateEmbedded()`

```typescript
signatureRequestCreateEmbedded(signatureRequestCreateEmbeddedRequest: SignatureRequestCreateEmbeddedRequest): SignatureRequestGetResponse
```

Create Embedded Signature Request

Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signingOptions: models.SubSigningOptions = {
  defaultType: models.SubSigningOptions.DefaultTypeEnum.Draw,
  draw: true,
  phone: false,
  type: true,
  upload: true,
};

const signers1: models.SubSignatureRequestSigner = {
  name: "Jack",
  emailAddress: "jack@example.com",
  order: 0,
};

const signers2: models.SubSignatureRequestSigner = {
  name: "Jill",
  emailAddress: "jill@example.com",
  order: 1,
};

const signers = [
  signers1,
  signers2,
];

const signatureRequestCreateEmbeddedRequest: models.SignatureRequestCreateEmbeddedRequest = {
  clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  message: "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
  subject: "The NDA we talked about",
  testMode: true,
  title: "NDA with Acme Co.",
  ccEmailAddresses: [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
  ],
  files: [
    fs.createReadStream("./example_signature_request.pdf"),
  ],
  signingOptions: signingOptions,
  signers: signers,
};

apiCaller.signatureRequestCreateEmbedded(
  signatureRequestCreateEmbeddedRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestCreateEmbedded:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestCreateEmbeddedRequest** | [**SignatureRequestCreateEmbeddedRequest**](../model/SignatureRequestCreateEmbeddedRequest.md)|  | |

### Return type

[**SignatureRequestGetResponse**](../model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestCreateEmbeddedWithTemplate()`

```typescript
signatureRequestCreateEmbeddedWithTemplate(signatureRequestCreateEmbeddedWithTemplateRequest: SignatureRequestCreateEmbeddedWithTemplateRequest): SignatureRequestGetResponse
```

Create Embedded Signature Request with Template

Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signingOptions: models.SubSigningOptions = {
  defaultType: models.SubSigningOptions.DefaultTypeEnum.Draw,
  draw: true,
  phone: false,
  type: true,
  upload: true,
};

const signers1: models.SubSignatureRequestTemplateSigner = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
};

const signers = [
  signers1,
];

const signatureRequestCreateEmbeddedWithTemplateRequest: models.SignatureRequestCreateEmbeddedWithTemplateRequest = {
  clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  templateIds: [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
  ],
  message: "Glad we could come to an agreement.",
  subject: "Purchase Order",
  testMode: true,
  signingOptions: signingOptions,
  signers: signers,
};

apiCaller.signatureRequestCreateEmbeddedWithTemplate(
  signatureRequestCreateEmbeddedWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestCreateEmbeddedWithTemplate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestCreateEmbeddedWithTemplateRequest** | [**SignatureRequestCreateEmbeddedWithTemplateRequest**](../model/SignatureRequestCreateEmbeddedWithTemplateRequest.md)|  | |

### Return type

[**SignatureRequestGetResponse**](../model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestEdit()`

```typescript
signatureRequestEdit(signatureRequestId: string, signatureRequestEditRequest: SignatureRequestEditRequest): SignatureRequestGetResponse
```

Edit Signature Request

Edits and sends a SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.  **NOTE:** Edit and resend will not deduct your signature request quota.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const fieldOptions: models.SubFieldOptions = {
  dateFormat: models.SubFieldOptions.DateFormatEnum.DdMmYyyy,
};

const signingOptions: models.SubSigningOptions = {
  defaultType: models.SubSigningOptions.DefaultTypeEnum.Draw,
  draw: true,
  phone: false,
  type: true,
  upload: true,
};

const signers1: models.SubSignatureRequestSigner = {
  name: "Jack",
  emailAddress: "jack@example.com",
  order: 0,
};

const signers2: models.SubSignatureRequestSigner = {
  name: "Jill",
  emailAddress: "jill@example.com",
  order: 1,
};

const signers = [
  signers1,
  signers2,
];

const signatureRequestEditRequest: models.SignatureRequestEditRequest = {
  message: "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
  subject: "The NDA we talked about",
  testMode: true,
  title: "NDA with Acme Co.",
  ccEmailAddresses: [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
  ],
  files: [
    fs.createReadStream("./example_signature_request.pdf"),
  ],
  metadata: {
    "custom_id": 1234,
    "custom_text": "NDA #9"
  },
  fieldOptions: fieldOptions,
  signingOptions: signingOptions,
  signers: signers,
};

apiCaller.signatureRequestEdit(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
  signatureRequestEditRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestEdit:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The id of the SignatureRequest to edit. | |
| **signatureRequestEditRequest** | [**SignatureRequestEditRequest**](../model/SignatureRequestEditRequest.md)|  | |

### Return type

[**SignatureRequestGetResponse**](../model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestEditEmbedded()`

```typescript
signatureRequestEditEmbedded(signatureRequestId: string, signatureRequestEditEmbeddedRequest: SignatureRequestEditEmbeddedRequest): SignatureRequestGetResponse
```

Edit Embedded Signature Request

Edits a SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signingOptions: models.SubSigningOptions = {
  defaultType: models.SubSigningOptions.DefaultTypeEnum.Draw,
  draw: true,
  phone: false,
  type: true,
  upload: true,
};

const signers1: models.SubSignatureRequestSigner = {
  name: "Jack",
  emailAddress: "jack@example.com",
  order: 0,
};

const signers2: models.SubSignatureRequestSigner = {
  name: "Jill",
  emailAddress: "jill@example.com",
  order: 1,
};

const signers = [
  signers1,
  signers2,
];

const signatureRequestEditEmbeddedRequest: models.SignatureRequestEditEmbeddedRequest = {
  clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  message: "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
  subject: "The NDA we talked about",
  testMode: true,
  title: "NDA with Acme Co.",
  ccEmailAddresses: [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
  ],
  files: [
    fs.createReadStream("./example_signature_request.pdf"),
  ],
  signingOptions: signingOptions,
  signers: signers,
};

apiCaller.signatureRequestEditEmbedded(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
  signatureRequestEditEmbeddedRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestEditEmbedded:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The id of the SignatureRequest to edit. | |
| **signatureRequestEditEmbeddedRequest** | [**SignatureRequestEditEmbeddedRequest**](../model/SignatureRequestEditEmbeddedRequest.md)|  | |

### Return type

[**SignatureRequestGetResponse**](../model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestEditEmbeddedWithTemplate()`

```typescript
signatureRequestEditEmbeddedWithTemplate(signatureRequestId: string, signatureRequestEditEmbeddedWithTemplateRequest: SignatureRequestEditEmbeddedWithTemplateRequest): SignatureRequestGetResponse
```

Edit Embedded Signature Request with Template

Edits a SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signingOptions: models.SubSigningOptions = {
  defaultType: models.SubSigningOptions.DefaultTypeEnum.Draw,
  draw: true,
  phone: false,
  type: true,
  upload: true,
};

const signers1: models.SubSignatureRequestTemplateSigner = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
};

const signers = [
  signers1,
];

const signatureRequestEditEmbeddedWithTemplateRequest: models.SignatureRequestEditEmbeddedWithTemplateRequest = {
  clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  templateIds: [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
  ],
  message: "Glad we could come to an agreement.",
  subject: "Purchase Order",
  testMode: true,
  signingOptions: signingOptions,
  signers: signers,
};

apiCaller.signatureRequestEditEmbeddedWithTemplate(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
  signatureRequestEditEmbeddedWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestEditEmbeddedWithTemplate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The id of the SignatureRequest to edit. | |
| **signatureRequestEditEmbeddedWithTemplateRequest** | [**SignatureRequestEditEmbeddedWithTemplateRequest**](../model/SignatureRequestEditEmbeddedWithTemplateRequest.md)|  | |

### Return type

[**SignatureRequestGetResponse**](../model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestEditWithTemplate()`

```typescript
signatureRequestEditWithTemplate(signatureRequestId: string, signatureRequestEditWithTemplateRequest: SignatureRequestEditWithTemplateRequest): SignatureRequestGetResponse
```

Edit Signature Request With Template

Edits and sends a SignatureRequest based off of the Template(s) specified with the template_ids parameter.  **NOTE:** Edit and resend will not deduct your signature request quota.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signingOptions: models.SubSigningOptions = {
  defaultType: models.SubSigningOptions.DefaultTypeEnum.Draw,
  draw: true,
  phone: false,
  type: true,
  upload: true,
};

const signers1: models.SubSignatureRequestTemplateSigner = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
};

const signers = [
  signers1,
];

const ccs1: models.SubCC = {
  role: "Accounting",
  emailAddress: "accounting@example.com",
};

const ccs = [
  ccs1,
];

const customFields1: models.SubCustomField = {
  name: "Cost",
  editor: "Client",
  required: true,
  value: "$20,000",
};

const customFields = [
  customFields1,
];

const signatureRequestEditWithTemplateRequest: models.SignatureRequestEditWithTemplateRequest = {
  templateIds: [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78",
  ],
  message: "Glad we could come to an agreement.",
  subject: "Purchase Order",
  testMode: true,
  signingOptions: signingOptions,
  signers: signers,
  ccs: ccs,
  customFields: customFields,
};

apiCaller.signatureRequestEditWithTemplate(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
  signatureRequestEditWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestEditWithTemplate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The id of the SignatureRequest to edit. | |
| **signatureRequestEditWithTemplateRequest** | [**SignatureRequestEditWithTemplateRequest**](../model/SignatureRequestEditWithTemplateRequest.md)|  | |

### Return type

[**SignatureRequestGetResponse**](../model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestFiles()`

```typescript
signatureRequestFiles(signatureRequestId: string, fileType: 'pdf' | 'zip'): Buffer
```

Download Files

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of `409` will be returned instead.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.signatureRequestFiles(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
  "pdf", // fileType
).then(response => {
  fs.createWriteStream('./file_response').write(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestFiles:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The id of the SignatureRequest to retrieve. | |
| **fileType** | **'pdf' | 'zip'**| Set to `pdf` for a single merged document or `zip` for a collection of individual documents. | [optional] [default to &#39;pdf&#39;] |

### Return type

**Buffer**

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`, `application/zip`, `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestFilesAsDataUri()`

```typescript
signatureRequestFilesAsDataUri(signatureRequestId: string): FileResponseDataUri
```

Download Files as Data Uri

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.signatureRequestFilesAsDataUri(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestFilesAsDataUri:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The id of the SignatureRequest to retrieve. | |

### Return type

[**FileResponseDataUri**](../model/FileResponseDataUri.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestFilesAsFileUrl()`

```typescript
signatureRequestFilesAsFileUrl(signatureRequestId: string, forceDownload: number): FileResponse
```

Download Files as File Url

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of `409` will be returned instead.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.signatureRequestFilesAsFileUrl(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
  1, // forceDownload
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestFilesAsFileUrl:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The id of the SignatureRequest to retrieve. | |
| **forceDownload** | **number**| By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser. | [optional] [default to 1] |

### Return type

[**FileResponse**](../model/FileResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestGet()`

```typescript
signatureRequestGet(signatureRequestId: string): SignatureRequestGetResponse
```

Get Signature Request

Returns the status of the SignatureRequest specified by the `signature_request_id` parameter.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.signatureRequestGet(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestGet:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The id of the SignatureRequest to retrieve. | |

### Return type

[**SignatureRequestGetResponse**](../model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestList()`

```typescript
signatureRequestList(accountId: string, page: number, pageSize: number, query: string): SignatureRequestListResponse
```

List Signature Requests

Returns a list of SignatureRequests that you can access. This includes SignatureRequests you have sent as well as received, but not ones that you have been CCed on.  Take a look at our [search guide](/api/reference/search/) to learn more about querying signature requests.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.signatureRequestList(
  undefined, // accountId
  1, // page
  20, // pageSize
  undefined, // query
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestList:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **accountId** | **string**| Which account to return SignatureRequests for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. | [optional] |
| **page** | **number**| Which page number of the SignatureRequest List to return. Defaults to `1`. | [optional] [default to 1] |
| **pageSize** | **number**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |
| **query** | **string**| String that includes search terms and/or fields to be used to filter the SignatureRequest objects. | [optional] |

### Return type

[**SignatureRequestListResponse**](../model/SignatureRequestListResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestReleaseHold()`

```typescript
signatureRequestReleaseHold(signatureRequestId: string): SignatureRequestGetResponse
```

Release On-Hold Signature Request

Releases a held SignatureRequest that was claimed and prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at Draft creation that the SignatureRequest created from the Draft should be held. Releasing the SignatureRequest will send requests to all signers.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.signatureRequestReleaseHold(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestReleaseHold:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The id of the SignatureRequest to release. | |

### Return type

[**SignatureRequestGetResponse**](../model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestRemind()`

```typescript
signatureRequestRemind(signatureRequestId: string, signatureRequestRemindRequest: SignatureRequestRemindRequest): SignatureRequestGetResponse
```

Send Request Reminder

Sends an email to the signer reminding them to sign the signature request. You cannot send a reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic reminders.  **NOTE:** This action can **not** be used with embedded signature requests.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signatureRequestRemindRequest: models.SignatureRequestRemindRequest = {
  emailAddress: "john@example.com",
};

apiCaller.signatureRequestRemind(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
  signatureRequestRemindRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestRemind:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The id of the SignatureRequest to send a reminder for. | |
| **signatureRequestRemindRequest** | [**SignatureRequestRemindRequest**](../model/SignatureRequestRemindRequest.md)|  | |

### Return type

[**SignatureRequestGetResponse**](../model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestRemove()`

```typescript
signatureRequestRemove(signatureRequestId: string)
```

Remove Signature Request Access

Removes your access to a completed signature request. This action is **not reversible**.  The signature request must be fully executed by all parties (signed or declined to sign). Other parties will continue to maintain access to the completed signature request document(s).  Unlike /signature_request/cancel, this endpoint is synchronous and your access will be immediately removed. Upon successful removal, this endpoint will return a 200 OK response.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.signatureRequestRemove(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestRemove:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The id of the SignatureRequest to remove. | |

### Return type

void (empty response body)

### Authorization

[api_key](../../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestSend()`

```typescript
signatureRequestSend(signatureRequestSendRequest: SignatureRequestSendRequest): SignatureRequestGetResponse
```

Send Signature Request

Creates and sends a new SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const fieldOptions: models.SubFieldOptions = {
  dateFormat: models.SubFieldOptions.DateFormatEnum.DdMmYyyy,
};

const signingOptions: models.SubSigningOptions = {
  defaultType: models.SubSigningOptions.DefaultTypeEnum.Draw,
  draw: true,
  phone: false,
  type: true,
  upload: true,
};

const signers1: models.SubSignatureRequestSigner = {
  name: "Jack",
  emailAddress: "jack@example.com",
  order: 0,
};

const signers2: models.SubSignatureRequestSigner = {
  name: "Jill",
  emailAddress: "jill@example.com",
  order: 1,
};

const signers = [
  signers1,
  signers2,
];

const signatureRequestSendRequest: models.SignatureRequestSendRequest = {
  message: "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
  subject: "The NDA we talked about",
  testMode: true,
  title: "NDA with Acme Co.",
  ccEmailAddresses: [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
  ],
  files: [
    fs.createReadStream("./example_signature_request.pdf"),
  ],
  metadata: {
    "custom_id": 1234,
    "custom_text": "NDA #9"
  },
  fieldOptions: fieldOptions,
  signingOptions: signingOptions,
  signers: signers,
};

apiCaller.signatureRequestSend(
  signatureRequestSendRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestSend:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestSendRequest** | [**SignatureRequestSendRequest**](../model/SignatureRequestSendRequest.md)|  | |

### Return type

[**SignatureRequestGetResponse**](../model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestSendWithTemplate()`

```typescript
signatureRequestSendWithTemplate(signatureRequestSendWithTemplateRequest: SignatureRequestSendWithTemplateRequest): SignatureRequestGetResponse
```

Send with Template

Creates and sends a new SignatureRequest based off of the Template(s) specified with the `template_ids` parameter.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signingOptions: models.SubSigningOptions = {
  defaultType: models.SubSigningOptions.DefaultTypeEnum.Draw,
  draw: true,
  phone: false,
  type: true,
  upload: true,
};

const signers1: models.SubSignatureRequestTemplateSigner = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
};

const signers = [
  signers1,
];

const ccs1: models.SubCC = {
  role: "Accounting",
  emailAddress: "accounting@example.com",
};

const ccs = [
  ccs1,
];

const customFields1: models.SubCustomField = {
  name: "Cost",
  editor: "Client",
  required: true,
  value: "$20,000",
};

const customFields = [
  customFields1,
];

const signatureRequestSendWithTemplateRequest: models.SignatureRequestSendWithTemplateRequest = {
  templateIds: [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78",
  ],
  message: "Glad we could come to an agreement.",
  subject: "Purchase Order",
  testMode: true,
  signingOptions: signingOptions,
  signers: signers,
  ccs: ccs,
  customFields: customFields,
};

apiCaller.signatureRequestSendWithTemplate(
  signatureRequestSendWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestSendWithTemplate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestSendWithTemplateRequest** | [**SignatureRequestSendWithTemplateRequest**](../model/SignatureRequestSendWithTemplateRequest.md)|  | |

### Return type

[**SignatureRequestGetResponse**](../model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `signatureRequestUpdate()`

```typescript
signatureRequestUpdate(signatureRequestId: string, signatureRequestUpdateRequest: SignatureRequestUpdateRequest): SignatureRequestGetResponse
```

Update Signature Request

Updates the email address and/or the name for a given signer on a signature request. You can listen for the `signature_request_email_bounce` event on your app or account to detect bounced emails, and respond with this method.  Updating the email address of a signer will generate a new `signature_id` value.  **NOTE:** This action cannot be performed on a signature request with an appended signature page.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signatureRequestUpdateRequest: models.SignatureRequestUpdateRequest = {
  signatureId: "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f",
  emailAddress: "john@example.com",
};

apiCaller.signatureRequestUpdate(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
  signatureRequestUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestUpdate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The id of the SignatureRequest to update. | |
| **signatureRequestUpdateRequest** | [**SignatureRequestUpdateRequest**](../model/SignatureRequestUpdateRequest.md)|  | |

### Return type

[**SignatureRequestGetResponse**](../model/SignatureRequestGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
