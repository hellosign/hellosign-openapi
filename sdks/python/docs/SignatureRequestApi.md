# ```dropbox_sign.SignatureRequestApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```signature_request_bulk_create_embedded_with_template```](SignatureRequestApi.md#signature_request_bulk_create_embedded_with_template) | ```POST /signature_request/bulk_create_embedded_with_template``` | Embedded Bulk Send with Template|
|[```signature_request_bulk_send_with_template```](SignatureRequestApi.md#signature_request_bulk_send_with_template) | ```POST /signature_request/bulk_send_with_template``` | Bulk Send with Template|
|[```signature_request_cancel```](SignatureRequestApi.md#signature_request_cancel) | ```POST /signature_request/cancel/{signature_request_id}``` | Cancel Incomplete Signature Request|
|[```signature_request_create_embedded```](SignatureRequestApi.md#signature_request_create_embedded) | ```POST /signature_request/create_embedded``` | Create Embedded Signature Request|
|[```signature_request_create_embedded_with_template```](SignatureRequestApi.md#signature_request_create_embedded_with_template) | ```POST /signature_request/create_embedded_with_template``` | Create Embedded Signature Request with Template|
|[```signature_request_edit```](SignatureRequestApi.md#signature_request_edit) | ```PUT /signature_request/edit/{signature_request_id}``` | Edit Signature Request|
|[```signature_request_edit_embedded```](SignatureRequestApi.md#signature_request_edit_embedded) | ```PUT /signature_request/edit_embedded/{signature_request_id}``` | Edit Embedded Signature Request|
|[```signature_request_edit_embedded_with_template```](SignatureRequestApi.md#signature_request_edit_embedded_with_template) | ```PUT /signature_request/edit_embedded_with_template/{signature_request_id}``` | Edit Embedded Signature Request with Template|
|[```signature_request_edit_with_template```](SignatureRequestApi.md#signature_request_edit_with_template) | ```PUT /signature_request/edit_with_template/{signature_request_id}``` | Edit Signature Request With Template|
|[```signature_request_files```](SignatureRequestApi.md#signature_request_files) | ```GET /signature_request/files/{signature_request_id}``` | Download Files|
|[```signature_request_files_as_data_uri```](SignatureRequestApi.md#signature_request_files_as_data_uri) | ```GET /signature_request/files_as_data_uri/{signature_request_id}``` | Download Files as Data Uri|
|[```signature_request_files_as_file_url```](SignatureRequestApi.md#signature_request_files_as_file_url) | ```GET /signature_request/files_as_file_url/{signature_request_id}``` | Download Files as File Url|
|[```signature_request_get```](SignatureRequestApi.md#signature_request_get) | ```GET /signature_request/{signature_request_id}``` | Get Signature Request|
|[```signature_request_list```](SignatureRequestApi.md#signature_request_list) | ```GET /signature_request/list``` | List Signature Requests|
|[```signature_request_release_hold```](SignatureRequestApi.md#signature_request_release_hold) | ```POST /signature_request/release_hold/{signature_request_id}``` | Release On-Hold Signature Request|
|[```signature_request_remind```](SignatureRequestApi.md#signature_request_remind) | ```POST /signature_request/remind/{signature_request_id}``` | Send Request Reminder|
|[```signature_request_remove```](SignatureRequestApi.md#signature_request_remove) | ```POST /signature_request/remove/{signature_request_id}``` | Remove Signature Request Access|
|[```signature_request_send```](SignatureRequestApi.md#signature_request_send) | ```POST /signature_request/send``` | Send Signature Request|
|[```signature_request_send_with_template```](SignatureRequestApi.md#signature_request_send_with_template) | ```POST /signature_request/send_with_template``` | Send with Template|
|[```signature_request_update```](SignatureRequestApi.md#signature_request_update) | ```POST /signature_request/update/{signature_request_id}``` | Update Signature Request|


# ```signature_request_bulk_create_embedded_with_template```
> ```BulkSendJobSendResponse signature_request_bulk_create_embedded_with_template(signature_request_bulk_create_embedded_with_template_request)```

Embedded Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter to be signed in an embedded iFrame. These embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

**NOTE:** Only available for Standard plan and higher.

### Example

* Basic Authentication (api_key):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    signer_list_2_custom_fields_1 = models.SubBulkSignerListCustomField(
        name="company",
        value="123 LLC",
    )

    signer_list_2_custom_fields = [
        signer_list_2_custom_fields_1,
    ]

    signer_list_2_signers_1 = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="Mary",
        email_address="mary@example.com",
        pin="gd9as5b",
    )

    signer_list_2_signers = [
        signer_list_2_signers_1,
    ]

    signer_list_1_custom_fields_1 = models.SubBulkSignerListCustomField(
        name="company",
        value="ABC Corp",
    )

    signer_list_1_custom_fields = [
        signer_list_1_custom_fields_1,
    ]

    signer_list_1_signers_1 = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="George",
        email_address="george@example.com",
        pin="d79a3td",
    )

    signer_list_1_signers = [
        signer_list_1_signers_1,
    ]

    signer_list_1 = models.SubBulkSignerList(
        custom_fields=signer_list_1_custom_fields,
        signers=signer_list_1_signers,
    )

    signer_list_2 = models.SubBulkSignerList(
        custom_fields=signer_list_2_custom_fields,
        signers=signer_list_2_signers,
    )

    signer_list = [
        signer_list_1,
        signer_list_2,
    ]

    ccs_1 = models.SubCC(
        role="Accounting",
        email_address="accounting@example.com",
    )

    ccs = [
        ccs_1,
    ]

    signature_request_bulk_create_embedded_with_template_request = (
        models.SignatureRequestBulkCreateEmbeddedWithTemplateRequest(
            client_id="1a659d9ad95bccd307ecad78d72192f8",
            template_ids=[
                "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
            ],
            message="Glad we could come to an agreement.",
            subject="Purchase Order",
            test_mode=True,
            signer_list=signer_list,
            ccs=ccs,
        )
    )

    try:
        response = api.SignatureRequestApi(
            api_client
        ).signature_request_bulk_create_embedded_with_template(
            signature_request_bulk_create_embedded_with_template_request=signature_request_bulk_create_embedded_with_template_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_bulk_create_embedded_with_template: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_bulk_create_embedded_with_template_request` | [**SignatureRequestBulkCreateEmbeddedWithTemplateRequest**](SignatureRequestBulkCreateEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**BulkSendJobSendResponse**](BulkSendJobSendResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_bulk_send_with_template```
> ```BulkSendJobSendResponse signature_request_bulk_send_with_template(signature_request_bulk_send_with_template_request)```

Bulk Send with Template

Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter.

**NOTE:** Only available for Standard plan and higher.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signer_list_2_custom_fields_1 = models.SubBulkSignerListCustomField(
        name="company",
        value="123 LLC",
    )

    signer_list_2_custom_fields = [
        signer_list_2_custom_fields_1,
    ]

    signer_list_2_signers_1 = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="Mary",
        email_address="mary@example.com",
        pin="gd9as5b",
    )

    signer_list_2_signers = [
        signer_list_2_signers_1,
    ]

    signer_list_1_custom_fields_1 = models.SubBulkSignerListCustomField(
        name="company",
        value="ABC Corp",
    )

    signer_list_1_custom_fields = [
        signer_list_1_custom_fields_1,
    ]

    signer_list_1_signers_1 = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="George",
        email_address="george@example.com",
        pin="d79a3td",
    )

    signer_list_1_signers = [
        signer_list_1_signers_1,
    ]

    signer_list_1 = models.SubBulkSignerList(
        custom_fields=signer_list_1_custom_fields,
        signers=signer_list_1_signers,
    )

    signer_list_2 = models.SubBulkSignerList(
        custom_fields=signer_list_2_custom_fields,
        signers=signer_list_2_signers,
    )

    signer_list = [
        signer_list_1,
        signer_list_2,
    ]

    ccs_1 = models.SubCC(
        role="Accounting",
        email_address="accounting@example.com",
    )

    ccs = [
        ccs_1,
    ]

    signature_request_bulk_send_with_template_request = (
        models.SignatureRequestBulkSendWithTemplateRequest(
            template_ids=[
                "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
            ],
            message="Glad we could come to an agreement.",
            subject="Purchase Order",
            test_mode=True,
            signer_list=signer_list,
            ccs=ccs,
        )
    )

    try:
        response = api.SignatureRequestApi(
            api_client
        ).signature_request_bulk_send_with_template(
            signature_request_bulk_send_with_template_request=signature_request_bulk_send_with_template_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_bulk_send_with_template: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_bulk_send_with_template_request` | [**SignatureRequestBulkSendWithTemplateRequest**](SignatureRequestBulkSendWithTemplateRequest.md) |  |  |

### Return type

[**BulkSendJobSendResponse**](BulkSendJobSendResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_cancel```
> ```signature_request_cancel(signature_request_id)```

Cancel Incomplete Signature Request

Cancels an incomplete signature request. This action is **not reversible**.

The request will be canceled and signers will no longer be able to sign. If they try to access the signature request they will receive a HTTP 410 status code indicating that the resource has been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an empty 200 OK response if the signature request is eligible to be canceled and has been successfully queued.

This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the `signature_request_canceled` event. It is recommended that a [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the `signature_request_canceled` event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.

To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.

**NOTE:** To remove your access to a completed signature request, use the endpoint: `POST /signature_request/remove/[:signature_request_id]`.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        api.SignatureRequestApi(api_client).signature_request_cancel(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
        )
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_cancel: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the incomplete SignatureRequest to cancel. |  |

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_create_embedded```
> ```SignatureRequestGetResponse signature_request_create_embedded(signature_request_create_embedded_request)```

Create Embedded Signature Request

Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signing_options = models.SubSigningOptions(
        default_type="draw",
        draw=True,
        phone=False,
        type=True,
        upload=True,
    )

    signers_1 = models.SubSignatureRequestSigner(
        name="Jack",
        email_address="jack@example.com",
        order=0,
    )

    signers_2 = models.SubSignatureRequestSigner(
        name="Jill",
        email_address="jill@example.com",
        order=1,
    )

    signers = [
        signers_1,
        signers_2,
    ]

    signature_request_create_embedded_request = models.SignatureRequestCreateEmbeddedRequest(
        client_id="b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
        message="Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
        subject="The NDA we talked about",
        test_mode=True,
        title="NDA with Acme Co.",
        cc_email_addresses=[
            "lawyer1@dropboxsign.com",
            "lawyer2@dropboxsign.com",
        ],
        files=[
            open("./example_signature_request.pdf", "rb").read(),
        ],
        signing_options=signing_options,
        signers=signers,
    )

    try:
        response = api.SignatureRequestApi(
            api_client
        ).signature_request_create_embedded(
            signature_request_create_embedded_request=signature_request_create_embedded_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_create_embedded: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_create_embedded_request` | [**SignatureRequestCreateEmbeddedRequest**](SignatureRequestCreateEmbeddedRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_create_embedded_with_template```
> ```SignatureRequestGetResponse signature_request_create_embedded_with_template(signature_request_create_embedded_with_template_request)```

Create Embedded Signature Request with Template

Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signing_options = models.SubSigningOptions(
        default_type="draw",
        draw=True,
        phone=False,
        type=True,
        upload=True,
    )

    signers_1 = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="George",
        email_address="george@example.com",
    )

    signers = [
        signers_1,
    ]

    signature_request_create_embedded_with_template_request = (
        models.SignatureRequestCreateEmbeddedWithTemplateRequest(
            client_id="b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            template_ids=[
                "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
            ],
            message="Glad we could come to an agreement.",
            subject="Purchase Order",
            test_mode=True,
            signing_options=signing_options,
            signers=signers,
        )
    )

    try:
        response = api.SignatureRequestApi(
            api_client
        ).signature_request_create_embedded_with_template(
            signature_request_create_embedded_with_template_request=signature_request_create_embedded_with_template_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_create_embedded_with_template: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_create_embedded_with_template_request` | [**SignatureRequestCreateEmbeddedWithTemplateRequest**](SignatureRequestCreateEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_edit```
> ```SignatureRequestGetResponse signature_request_edit(signature_request_id, signature_request_edit_request)```

Edit Signature Request

Edits and sends a SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.

**NOTE:** Edit and resend will not deduct your signature request quota.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    field_options = models.SubFieldOptions(
        date_format="DD - MM - YYYY",
    )

    signing_options = models.SubSigningOptions(
        default_type="draw",
        draw=True,
        phone=False,
        type=True,
        upload=True,
    )

    signers_1 = models.SubSignatureRequestSigner(
        name="Jack",
        email_address="jack@example.com",
        order=0,
    )

    signers_2 = models.SubSignatureRequestSigner(
        name="Jill",
        email_address="jill@example.com",
        order=1,
    )

    signers = [
        signers_1,
        signers_2,
    ]

    signature_request_edit_request = models.SignatureRequestEditRequest(
        message="Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
        subject="The NDA we talked about",
        test_mode=True,
        title="NDA with Acme Co.",
        cc_email_addresses=[
            "lawyer1@dropboxsign.com",
            "lawyer2@dropboxsign.com",
        ],
        files=[
            open("./example_signature_request.pdf", "rb").read(),
        ],
        metadata=json.loads(
            """
            {
                "custom_id": 1234,
                "custom_text": "NDA #9"
            }
        """
        ),
        field_options=field_options,
        signing_options=signing_options,
        signers=signers,
    )

    try:
        response = api.SignatureRequestApi(api_client).signature_request_edit(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
            signature_request_edit_request=signature_request_edit_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_edit: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to edit. |  |
| `signature_request_edit_request` | [**SignatureRequestEditRequest**](SignatureRequestEditRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_edit_embedded```
> ```SignatureRequestGetResponse signature_request_edit_embedded(signature_request_id, signature_request_edit_embedded_request)```

Edit Embedded Signature Request

Edits a SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signing_options = models.SubSigningOptions(
        default_type="draw",
        draw=True,
        phone=False,
        type=True,
        upload=True,
    )

    signers_1 = models.SubSignatureRequestSigner(
        name="Jack",
        email_address="jack@example.com",
        order=0,
    )

    signers_2 = models.SubSignatureRequestSigner(
        name="Jill",
        email_address="jill@example.com",
        order=1,
    )

    signers = [
        signers_1,
        signers_2,
    ]

    signature_request_edit_embedded_request = models.SignatureRequestEditEmbeddedRequest(
        client_id="b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
        message="Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
        subject="The NDA we talked about",
        test_mode=True,
        title="NDA with Acme Co.",
        cc_email_addresses=[
            "lawyer1@dropboxsign.com",
            "lawyer2@dropboxsign.com",
        ],
        files=[
            open("./example_signature_request.pdf", "rb").read(),
        ],
        signing_options=signing_options,
        signers=signers,
    )

    try:
        response = api.SignatureRequestApi(api_client).signature_request_edit_embedded(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
            signature_request_edit_embedded_request=signature_request_edit_embedded_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_edit_embedded: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to edit. |  |
| `signature_request_edit_embedded_request` | [**SignatureRequestEditEmbeddedRequest**](SignatureRequestEditEmbeddedRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_edit_embedded_with_template```
> ```SignatureRequestGetResponse signature_request_edit_embedded_with_template(signature_request_id, signature_request_edit_embedded_with_template_request)```

Edit Embedded Signature Request with Template

Edits a SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signing_options = models.SubSigningOptions(
        default_type="draw",
        draw=True,
        phone=False,
        type=True,
        upload=True,
    )

    signers_1 = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="George",
        email_address="george@example.com",
    )

    signers = [
        signers_1,
    ]

    signature_request_edit_embedded_with_template_request = (
        models.SignatureRequestEditEmbeddedWithTemplateRequest(
            client_id="b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            template_ids=[
                "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
            ],
            message="Glad we could come to an agreement.",
            subject="Purchase Order",
            test_mode=True,
            signing_options=signing_options,
            signers=signers,
        )
    )

    try:
        response = api.SignatureRequestApi(
            api_client
        ).signature_request_edit_embedded_with_template(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
            signature_request_edit_embedded_with_template_request=signature_request_edit_embedded_with_template_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_edit_embedded_with_template: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to edit. |  |
| `signature_request_edit_embedded_with_template_request` | [**SignatureRequestEditEmbeddedWithTemplateRequest**](SignatureRequestEditEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_edit_with_template```
> ```SignatureRequestGetResponse signature_request_edit_with_template(signature_request_id, signature_request_edit_with_template_request)```

Edit Signature Request With Template

Edits and sends a SignatureRequest based off of the Template(s) specified with the template_ids parameter.

**NOTE:** Edit and resend will not deduct your signature request quota.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signing_options = models.SubSigningOptions(
        default_type="draw",
        draw=True,
        phone=False,
        type=True,
        upload=True,
    )

    signers_1 = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="George",
        email_address="george@example.com",
    )

    signers = [
        signers_1,
    ]

    ccs_1 = models.SubCC(
        role="Accounting",
        email_address="accounting@example.com",
    )

    ccs = [
        ccs_1,
    ]

    custom_fields_1 = models.SubCustomField(
        name="Cost",
        editor="Client",
        required=True,
        value="$20,000",
    )

    custom_fields = [
        custom_fields_1,
    ]

    signature_request_edit_with_template_request = (
        models.SignatureRequestEditWithTemplateRequest(
            template_ids=[
                "61a832ff0d8423f91d503e76bfbcc750f7417c78",
            ],
            message="Glad we could come to an agreement.",
            subject="Purchase Order",
            test_mode=True,
            signing_options=signing_options,
            signers=signers,
            ccs=ccs,
            custom_fields=custom_fields,
        )
    )

    try:
        response = api.SignatureRequestApi(
            api_client
        ).signature_request_edit_with_template(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
            signature_request_edit_with_template_request=signature_request_edit_with_template_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_edit_with_template: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to edit. |  |
| `signature_request_edit_with_template_request` | [**SignatureRequestEditWithTemplateRequest**](SignatureRequestEditWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_files```
> ```io.IOBase signature_request_files(signature_request_id)```

Download Files

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a PDF or ZIP file.

If the files are currently being prepared, a status code of `409` will be returned instead.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.SignatureRequestApi(api_client).signature_request_files(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
            file_type="pdf",
        )

        open("./file_response", "wb").write(response.read())
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_files: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to retrieve. |  |
| `file_type` | **str** | Set to `pdf` for a single merged document or `zip` for a collection of individual documents. | [optional][default to pdf] |

### Return type

**io.IOBase**

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/zip, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_files_as_data_uri```
> ```FileResponseDataUri signature_request_files_as_data_uri(signature_request_id)```

Download Files as Data Uri

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.SignatureRequestApi(
            api_client
        ).signature_request_files_as_data_uri(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_files_as_data_uri: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to retrieve. |  |

### Return type

[**FileResponseDataUri**](FileResponseDataUri.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_files_as_file_url```
> ```FileResponse signature_request_files_as_file_url(signature_request_id)```

Download Files as File Url

Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a url to the file (PDFs only).

If the files are currently being prepared, a status code of `409` will be returned instead.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.SignatureRequestApi(
            api_client
        ).signature_request_files_as_file_url(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
            force_download=1,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_files_as_file_url: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to retrieve. |  |
| `force_download` | **int** | By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser. | [optional][default to 1] |

### Return type

[**FileResponse**](FileResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_get```
> ```SignatureRequestGetResponse signature_request_get(signature_request_id)```

Get Signature Request

Returns the status of the SignatureRequest specified by the `signature_request_id` parameter.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.SignatureRequestApi(api_client).signature_request_get(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_get: %s\n" % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to retrieve. |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_list```
> ```SignatureRequestListResponse signature_request_list()```

List Signature Requests

Returns a list of SignatureRequests that you can access. This includes SignatureRequests you have sent as well as received, but not ones that you have been CCed on.

Take a look at our [search guide](/api/reference/search/) to learn more about querying signature requests.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.SignatureRequestApi(api_client).signature_request_list(
            page=1,
            page_size=20,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_list: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_id` | **str** | Which account to return SignatureRequests for. Must be a team member. Use `all` to indicate all team members. Defaults to your account. | [optional] |
| `page` | **int** | Which page number of the SignatureRequest List to return. Defaults to `1`. | [optional][default to 1] |
| `page_size` | **int** | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional][default to 20] |
| `query` | **str** | String that includes search terms and/or fields to be used to filter the SignatureRequest objects. | [optional] |

### Return type

[**SignatureRequestListResponse**](SignatureRequestListResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_release_hold```
> ```SignatureRequestGetResponse signature_request_release_hold(signature_request_id)```

Release On-Hold Signature Request

Releases a held SignatureRequest that was claimed and prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at Draft creation that the SignatureRequest created from the Draft should be held. Releasing the SignatureRequest will send requests to all signers.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.SignatureRequestApi(api_client).signature_request_release_hold(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_release_hold: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to release. |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_remind```
> ```SignatureRequestGetResponse signature_request_remind(signature_request_id, signature_request_remind_request)```

Send Request Reminder

Sends an email to the signer reminding them to sign the signature request. You cannot send a reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic reminders.

**NOTE:** This action can **not** be used with embedded signature requests.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signature_request_remind_request = models.SignatureRequestRemindRequest(
        email_address="john@example.com",
    )

    try:
        response = api.SignatureRequestApi(api_client).signature_request_remind(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
            signature_request_remind_request=signature_request_remind_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_remind: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to send a reminder for. |  |
| `signature_request_remind_request` | [**SignatureRequestRemindRequest**](SignatureRequestRemindRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_remove```
> ```signature_request_remove(signature_request_id)```

Remove Signature Request Access

Removes your access to a completed signature request. This action is **not reversible**.

The signature request must be fully executed by all parties (signed or declined to sign). Other parties will continue to maintain access to the completed signature request document(s).

Unlike /signature_request/cancel, this endpoint is synchronous and your access will be immediately removed. Upon successful removal, this endpoint will return a 200 OK response.

### Example

* Basic Authentication (api_key):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
)

with ApiClient(configuration) as api_client:
    try:
        api.SignatureRequestApi(api_client).signature_request_remove(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
        )
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_remove: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to remove. |  |

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_send```
> ```SignatureRequestGetResponse signature_request_send(signature_request_send_request)```

Send Signature Request

Creates and sends a new SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    field_options = models.SubFieldOptions(
        date_format="DD - MM - YYYY",
    )

    signing_options = models.SubSigningOptions(
        default_type="draw",
        draw=True,
        phone=False,
        type=True,
        upload=True,
    )

    signers_1 = models.SubSignatureRequestSigner(
        name="Jack",
        email_address="jack@example.com",
        order=0,
    )

    signers_2 = models.SubSignatureRequestSigner(
        name="Jill",
        email_address="jill@example.com",
        order=1,
    )

    signers = [
        signers_1,
        signers_2,
    ]

    signature_request_send_request = models.SignatureRequestSendRequest(
        message="Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
        subject="The NDA we talked about",
        test_mode=True,
        title="NDA with Acme Co.",
        cc_email_addresses=[
            "lawyer1@dropboxsign.com",
            "lawyer2@dropboxsign.com",
        ],
        files=[
            open("./example_signature_request.pdf", "rb").read(),
        ],
        metadata=json.loads(
            """
            {
                "custom_id": 1234,
                "custom_text": "NDA #9"
            }
        """
        ),
        field_options=field_options,
        signing_options=signing_options,
        signers=signers,
    )

    try:
        response = api.SignatureRequestApi(api_client).signature_request_send(
            signature_request_send_request=signature_request_send_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_send: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_send_request` | [**SignatureRequestSendRequest**](SignatureRequestSendRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_send_with_template```
> ```SignatureRequestGetResponse signature_request_send_with_template(signature_request_send_with_template_request)```

Send with Template

Creates and sends a new SignatureRequest based off of the Template(s) specified with the `template_ids` parameter.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signing_options = models.SubSigningOptions(
        default_type="draw",
        draw=True,
        phone=False,
        type=True,
        upload=True,
    )

    signers_1 = models.SubSignatureRequestTemplateSigner(
        role="Client",
        name="George",
        email_address="george@example.com",
    )

    signers = [
        signers_1,
    ]

    ccs_1 = models.SubCC(
        role="Accounting",
        email_address="accounting@example.com",
    )

    ccs = [
        ccs_1,
    ]

    custom_fields_1 = models.SubCustomField(
        name="Cost",
        editor="Client",
        required=True,
        value="$20,000",
    )

    custom_fields = [
        custom_fields_1,
    ]

    signature_request_send_with_template_request = (
        models.SignatureRequestSendWithTemplateRequest(
            template_ids=[
                "61a832ff0d8423f91d503e76bfbcc750f7417c78",
            ],
            message="Glad we could come to an agreement.",
            subject="Purchase Order",
            test_mode=True,
            signing_options=signing_options,
            signers=signers,
            ccs=ccs,
            custom_fields=custom_fields,
        )
    )

    try:
        response = api.SignatureRequestApi(
            api_client
        ).signature_request_send_with_template(
            signature_request_send_with_template_request=signature_request_send_with_template_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_send_with_template: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_send_with_template_request` | [**SignatureRequestSendWithTemplateRequest**](SignatureRequestSendWithTemplateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```signature_request_update```
> ```SignatureRequestGetResponse signature_request_update(signature_request_id, signature_request_update_request)```

Update Signature Request

Updates the email address and/or the name for a given signer on a signature request. You can listen for the `signature_request_email_bounce` event on your app or account to detect bounced emails, and respond with this method.

Updating the email address of a signer will generate a new `signature_id` value.

**NOTE:** This action cannot be performed on a signature request with an appended signature page.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
import json
from datetime import date, datetime
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    signature_request_update_request = models.SignatureRequestUpdateRequest(
        signature_id="2f9781e1a8e2045224d808c153c2e1d3df6f8f2f",
        email_address="john@example.com",
    )

    try:
        response = api.SignatureRequestApi(api_client).signature_request_update(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
            signature_request_update_request=signature_request_update_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling SignatureRequestApi#signature_request_update: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The id of the SignatureRequest to update. |  |
| `signature_request_update_request` | [**SignatureRequestUpdateRequest**](SignatureRequestUpdateRequest.md) |  |  |

### Return type

[**SignatureRequestGetResponse**](SignatureRequestGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

