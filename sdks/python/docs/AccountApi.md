# ```dropbox_sign.AccountApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```account_create```](AccountApi.md#account_create) | ```POST /account/create``` | Create Account|
|[```account_get```](AccountApi.md#account_get) | ```GET /account``` | Get Account|
|[```account_settings_get```](AccountApi.md#account_settings_get) | ```GET /account/settings``` | Get account settings|
|[```account_settings_update```](AccountApi.md#account_settings_update) | ```POST /account/settings``` | Modify account settings|
|[```account_update```](AccountApi.md#account_update) | ```PUT /account``` | Update Account|
|[```account_verify```](AccountApi.md#account_verify) | ```POST /account/verify``` | Verify Account|


# ```account_create```
> ```AccountCreateResponse account_create(account_create_request)```

Create Account

Creates a new Dropbox Sign Account that is associated with the specified `email_address`.

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
    account_create_request = models.AccountCreateRequest(
        email_address="newuser@dropboxsign.com",
    )

    try:
        response = api.AccountApi(api_client).account_create(
            account_create_request=account_create_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling AccountApi#account_create: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_create_request` | [**AccountCreateRequest**](AccountCreateRequest.md) |  |  |

### Return type

[**AccountCreateResponse**](AccountCreateResponse.md)

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

# ```account_get```
> ```AccountGetResponse account_get()```

Get Account

Returns the properties and settings of your Account.

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
        response = api.AccountApi(api_client).account_get()

        pprint(response)
    except ApiException as e:
        print("Exception when calling AccountApi#account_get: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_id` | **str** | `account_id` or `email_address` is required. If both are provided, the account id prevails.  The ID of the Account. | [optional] |
| `email_address` | **str** | `account_id` or `email_address` is required, If both are provided, the account id prevails.  The email address of the Account. | [optional] |

### Return type

[**AccountGetResponse**](AccountGetResponse.md)

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

# ```account_settings_get```
> ```AccountSettingsResponse account_settings_get()```

Get account settings

account_id is an optional query parameter and defaults to the authenticated account. A team admin can specify another account on a team they administer.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    try:
        response = api.AccountApi(api_client).account_settings_get()
        company = response.settings.company

        pprint(response)
        pprint(
            {
                "account_id": response.account_id,
                "company": {
                    "value": company.value,
                    "is_inherited": company.is_inherited,
                    "source": company.source,
                    "type": company.type,
                    "writable": company.writable,
                    "lock": {
                        "mode": company.lock.mode,
                        "source": company.lock.source,
                    },
                },
                "warnings": response.warnings,
            }
        )
    except ApiException as e:
        print("Exception when calling AccountApi#account_settings_get: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_id` | **str** | Optional account ID. Defaults to the authenticated account. A team admin can specify another account on a team they administer. | [optional] |

### Return type

[**AccountSettingsResponse**](AccountSettingsResponse.md)

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

# ```account_settings_update```
> ```AccountSettingsResponse account_settings_update(account_settings_update_request)```

Modify account settings

account_id is an optional query parameter and defaults to the authenticated account. A team admin can specify another account on a team they administer.

### Example

* Basic Authentication (api_key):
* Bearer (JWT) Authentication (oauth2):

```python
from pprint import pprint

from dropbox_sign import ApiClient, ApiException, Configuration, api, models

configuration = Configuration(
    username="YOUR_API_KEY",
    # access_token="YOUR_ACCESS_TOKEN",
)

with ApiClient(configuration) as api_client:
    account_settings_update_request = models.AccountSettingsUpdateRequest(
        date_format=models.DateFormat.MM_SLASH_DD_SLASH_YYYY,
        required_signature_types=[
            models.RequiredSignatureType.DRAW,
            models.RequiredSignatureType.TYPE,
        ],
        should_enable_tamper_proof=False,
        unset=["company"],
    )

    try:
        response = api.AccountApi(api_client).account_settings_update(
            account_settings_update_request=account_settings_update_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling AccountApi#account_settings_update: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_settings_update_request` | [**AccountSettingsUpdateRequest**](AccountSettingsUpdateRequest.md) |  |  |
| `account_id` | **str** | Optional account ID. Defaults to the authenticated account. A team admin can specify another account on a team they administer. | [optional] |

### Return type

[**AccountSettingsResponse**](AccountSettingsResponse.md)

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

# ```account_update```
> ```AccountGetResponse account_update(account_update_request)```

Update Account

Updates the properties and settings of your Account. Currently only allows for updates to the [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.

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
    account_update_request = models.AccountUpdateRequest(
        callback_url="https://www.example.com/callback",
        locale="en-US",
    )

    try:
        response = api.AccountApi(api_client).account_update(
            account_update_request=account_update_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling AccountApi#account_update: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_update_request` | [**AccountUpdateRequest**](AccountUpdateRequest.md) |  |  |

### Return type

[**AccountGetResponse**](AccountGetResponse.md)

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

# ```account_verify```
> ```AccountVerifyResponse account_verify(account_verify_request)```

Verify Account

Verifies whether an Dropbox Sign Account exists for the given email address.

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
    account_verify_request = models.AccountVerifyRequest(
        email_address="some_user@dropboxsign.com",
    )

    try:
        response = api.AccountApi(api_client).account_verify(
            account_verify_request=account_verify_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling AccountApi#account_verify: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `account_verify_request` | [**AccountVerifyRequest**](AccountVerifyRequest.md) |  |  |

### Return type

[**AccountVerifyResponse**](AccountVerifyResponse.md)

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

