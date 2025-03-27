# UnclaimedDraftApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**unclaimedDraftCreate()**](UnclaimedDraftApi.md#unclaimedDraftCreate) | **POST** /unclaimed_draft/create | Create Unclaimed Draft |
| [**unclaimedDraftCreateEmbedded()**](UnclaimedDraftApi.md#unclaimedDraftCreateEmbedded) | **POST** /unclaimed_draft/create_embedded | Create Embedded Unclaimed Draft |
| [**unclaimedDraftCreateEmbeddedWithTemplate()**](UnclaimedDraftApi.md#unclaimedDraftCreateEmbeddedWithTemplate) | **POST** /unclaimed_draft/create_embedded_with_template | Create Embedded Unclaimed Draft with Template |
| [**unclaimedDraftEditAndResend()**](UnclaimedDraftApi.md#unclaimedDraftEditAndResend) | **POST** /unclaimed_draft/edit_and_resend/{signature_request_id} | Edit and Resend Unclaimed Draft |


## `unclaimedDraftCreate()`

```typescript
unclaimedDraftCreate(unclaimedDraftCreateRequest: UnclaimedDraftCreateRequest): UnclaimedDraftCreateResponse
```

Create Unclaimed Draft

Creates a new Draft that can be claimed using the claim URL. The first authenticated user to access the URL will claim the Draft and will be shown either the \"Sign and send\" or the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a 404.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signers1: models.SubUnclaimedDraftSigner = {
  name: "Jack",
  emailAddress: "jack@example.com",
  order: 0,
};

const signers = [
  signers1,
];

const unclaimedDraftCreateRequest: models.UnclaimedDraftCreateRequest = {
  type: models.UnclaimedDraftCreateRequest.TypeEnum.RequestSignature,
  testMode: true,
  files: [
    fs.createReadStream("./example_signature_request.pdf"),
  ],
  signers: signers,
};

apiCaller.unclaimedDraftCreate(
  unclaimedDraftCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraftApi#unclaimedDraftCreate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unclaimedDraftCreateRequest** | [**UnclaimedDraftCreateRequest**](../model/UnclaimedDraftCreateRequest.md)|  | |

### Return type

[**UnclaimedDraftCreateResponse**](../model/UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `unclaimedDraftCreateEmbedded()`

```typescript
unclaimedDraftCreateEmbedded(unclaimedDraftCreateEmbeddedRequest: UnclaimedDraftCreateEmbeddedRequest): UnclaimedDraftCreateResponse
```

Create Embedded Unclaimed Draft

Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.  **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const unclaimedDraftCreateEmbeddedRequest: models.UnclaimedDraftCreateEmbeddedRequest = {
  clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  requesterEmailAddress: "jack@dropboxsign.com",
  testMode: true,
  files: [
    fs.createReadStream("./example_signature_request.pdf"),
  ],
};

apiCaller.unclaimedDraftCreateEmbedded(
  unclaimedDraftCreateEmbeddedRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraftApi#unclaimedDraftCreateEmbedded:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unclaimedDraftCreateEmbeddedRequest** | [**UnclaimedDraftCreateEmbeddedRequest**](../model/UnclaimedDraftCreateEmbeddedRequest.md)|  | |

### Return type

[**UnclaimedDraftCreateResponse**](../model/UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `unclaimedDraftCreateEmbeddedWithTemplate()`

```typescript
unclaimedDraftCreateEmbeddedWithTemplate(unclaimedDraftCreateEmbeddedWithTemplateRequest: UnclaimedDraftCreateEmbeddedWithTemplateRequest): UnclaimedDraftCreateResponse
```

Create Embedded Unclaimed Draft with Template

Creates a new Draft with a previously saved template(s) that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \"Request signature\" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.  **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const ccs1: models.SubCC = {
  role: "Accounting",
  emailAddress: "accounting@dropboxsign.com",
};

const ccs = [
  ccs1,
];

const signers1: models.SubUnclaimedDraftTemplateSigner = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
};

const signers = [
  signers1,
];

const unclaimedDraftCreateEmbeddedWithTemplateRequest: models.UnclaimedDraftCreateEmbeddedWithTemplateRequest = {
  clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  requesterEmailAddress: "jack@dropboxsign.com",
  templateIds: [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78",
  ],
  testMode: false,
  ccs: ccs,
  signers: signers,
};

apiCaller.unclaimedDraftCreateEmbeddedWithTemplate(
  unclaimedDraftCreateEmbeddedWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraftApi#unclaimedDraftCreateEmbeddedWithTemplate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **unclaimedDraftCreateEmbeddedWithTemplateRequest** | [**UnclaimedDraftCreateEmbeddedWithTemplateRequest**](../model/UnclaimedDraftCreateEmbeddedWithTemplateRequest.md)|  | |

### Return type

[**UnclaimedDraftCreateResponse**](../model/UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `unclaimedDraftEditAndResend()`

```typescript
unclaimedDraftEditAndResend(signatureRequestId: string, unclaimedDraftEditAndResendRequest: UnclaimedDraftEditAndResendRequest): UnclaimedDraftCreateResponse
```

Edit and Resend Unclaimed Draft

Creates a new signature request from an embedded request that can be edited prior to being sent to the recipients. Parameter `test_mode` can be edited prior to request. Signers can be edited in embedded editor. Requester\'s email address will remain unchanged if `requester_email_address` parameter is not set.  **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const unclaimedDraftEditAndResendRequest: models.UnclaimedDraftEditAndResendRequest = {
  clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  testMode: false,
};

apiCaller.unclaimedDraftEditAndResend(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
  unclaimedDraftEditAndResendRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraftApi#unclaimedDraftEditAndResend:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **signatureRequestId** | **string**| The ID of the signature request to edit and resend. | |
| **unclaimedDraftEditAndResendRequest** | [**UnclaimedDraftEditAndResendRequest**](../model/UnclaimedDraftEditAndResendRequest.md)|  | |

### Return type

[**UnclaimedDraftCreateResponse**](../model/UnclaimedDraftCreateResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
