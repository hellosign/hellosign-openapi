# ```dropbox_sign.UnclaimedDraftApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```unclaimed_draft_create```](UnclaimedDraftApi.md#unclaimed_draft_create) | ```POST /unclaimed_draft/create``` | Create Unclaimed Draft|
|[```unclaimed_draft_create_embedded```](UnclaimedDraftApi.md#unclaimed_draft_create_embedded) | ```POST /unclaimed_draft/create_embedded``` | Create Embedded Unclaimed Draft|
|[```unclaimed_draft_create_embedded_with_template```](UnclaimedDraftApi.md#unclaimed_draft_create_embedded_with_template) | ```POST /unclaimed_draft/create_embedded_with_template``` | Create Embedded Unclaimed Draft with Template|
|[```unclaimed_draft_edit_and_resend```](UnclaimedDraftApi.md#unclaimed_draft_edit_and_resend) | ```POST /unclaimed_draft/edit_and_resend/{signature_request_id}``` | Edit and Resend Unclaimed Draft|


# ```unclaimed_draft_create```
> ```UnclaimedDraftCreateResponse unclaimed_draft_create(unclaimed_draft_create_request)```

Create Unclaimed Draft

Creates a new Draft that can be claimed using the claim URL. The first authenticated user to access the URL will claim the Draft and will be shown either the "Sign and send" or the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a 404.

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
    signers_1 = models.SubUnclaimedDraftSigner(
        name="Jack",
        email_address="jack@example.com",
        order=0,
    )

    signers = [
        signers_1,
    ]

    unclaimed_draft_create_request = models.UnclaimedDraftCreateRequest(
        type="request_signature",
        test_mode=True,
        files=[
            open("./example_signature_request.pdf", "rb").read(),
        ],
        signers=signers,
    )

    try:
        response = api.UnclaimedDraftApi(api_client).unclaimed_draft_create(
            unclaimed_draft_create_request=unclaimed_draft_create_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling UnclaimedDraftApi#unclaimed_draft_create: %s\n" % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `unclaimed_draft_create_request` | [**UnclaimedDraftCreateRequest**](UnclaimedDraftCreateRequest.md) |  |  |

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

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

# ```unclaimed_draft_create_embedded```
> ```UnclaimedDraftCreateResponse unclaimed_draft_create_embedded(unclaimed_draft_create_embedded_request)```

Create Embedded Unclaimed Draft

Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.

**NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

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
    unclaimed_draft_create_embedded_request = (
        models.UnclaimedDraftCreateEmbeddedRequest(
            client_id="b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            requester_email_address="jack@dropboxsign.com",
            test_mode=True,
            files=[
                open("./example_signature_request.pdf", "rb").read(),
            ],
        )
    )

    try:
        response = api.UnclaimedDraftApi(api_client).unclaimed_draft_create_embedded(
            unclaimed_draft_create_embedded_request=unclaimed_draft_create_embedded_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling UnclaimedDraftApi#unclaimed_draft_create_embedded: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `unclaimed_draft_create_embedded_request` | [**UnclaimedDraftCreateEmbeddedRequest**](UnclaimedDraftCreateEmbeddedRequest.md) |  |  |

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

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

# ```unclaimed_draft_create_embedded_with_template```
> ```UnclaimedDraftCreateResponse unclaimed_draft_create_embedded_with_template(unclaimed_draft_create_embedded_with_template_request)```

Create Embedded Unclaimed Draft with Template

Creates a new Draft with a previously saved template(s) that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.

**NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

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
    ccs_1 = models.SubCC(
        role="Accounting",
        email_address="accounting@dropboxsign.com",
    )

    ccs = [
        ccs_1,
    ]

    signers_1 = models.SubUnclaimedDraftTemplateSigner(
        role="Client",
        name="George",
        email_address="george@example.com",
    )

    signers = [
        signers_1,
    ]

    unclaimed_draft_create_embedded_with_template_request = (
        models.UnclaimedDraftCreateEmbeddedWithTemplateRequest(
            client_id="b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            requester_email_address="jack@dropboxsign.com",
            template_ids=[
                "61a832ff0d8423f91d503e76bfbcc750f7417c78",
            ],
            test_mode=False,
            ccs=ccs,
            signers=signers,
        )
    )

    try:
        response = api.UnclaimedDraftApi(
            api_client
        ).unclaimed_draft_create_embedded_with_template(
            unclaimed_draft_create_embedded_with_template_request=unclaimed_draft_create_embedded_with_template_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling UnclaimedDraftApi#unclaimed_draft_create_embedded_with_template: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `unclaimed_draft_create_embedded_with_template_request` | [**UnclaimedDraftCreateEmbeddedWithTemplateRequest**](UnclaimedDraftCreateEmbeddedWithTemplateRequest.md) |  |  |

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

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

# ```unclaimed_draft_edit_and_resend```
> ```UnclaimedDraftCreateResponse unclaimed_draft_edit_and_resend(signature_request_id, unclaimed_draft_edit_and_resend_request)```

Edit and Resend Unclaimed Draft

Creates a new signature request from an embedded request that can be edited prior to being sent to the recipients. Parameter `test_mode` can be edited prior to request. Signers can be edited in embedded editor. Requester's email address will remain unchanged if `requester_email_address` parameter is not set.

**NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.

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
    unclaimed_draft_edit_and_resend_request = models.UnclaimedDraftEditAndResendRequest(
        client_id="b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
        test_mode=False,
    )

    try:
        response = api.UnclaimedDraftApi(api_client).unclaimed_draft_edit_and_resend(
            signature_request_id="fa5c8a0b0f492d768749333ad6fcc214c111e967",
            unclaimed_draft_edit_and_resend_request=unclaimed_draft_edit_and_resend_request,
        )

        pprint(response)
    except ApiException as e:
        print(
            "Exception when calling UnclaimedDraftApi#unclaimed_draft_edit_and_resend: %s\n"
            % e
        )

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `signature_request_id` | **str** | The ID of the signature request to edit and resend. |  |
| `unclaimed_draft_edit_and_resend_request` | [**UnclaimedDraftEditAndResendRequest**](UnclaimedDraftEditAndResendRequest.md) |  |  |

### Return type

[**UnclaimedDraftCreateResponse**](UnclaimedDraftCreateResponse.md)

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

