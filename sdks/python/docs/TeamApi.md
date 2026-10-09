# ```dropbox_sign.TeamApi```

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
|[```team_add_member```](TeamApi.md#team_add_member) | ```PUT /team/add_member``` | Add User to Team|
|[```team_create```](TeamApi.md#team_create) | ```POST /team/create``` | Create Team|
|[```team_delete```](TeamApi.md#team_delete) | ```DELETE /team/destroy``` | Delete Team|
|[```team_get```](TeamApi.md#team_get) | ```GET /team``` | Get Team|
|[```team_info```](TeamApi.md#team_info) | ```GET /team/info``` | Get Team Info|
|[```team_invites```](TeamApi.md#team_invites) | ```GET /team/invites``` | List Team Invites|
|[```team_members```](TeamApi.md#team_members) | ```GET /team/members/{team_id}``` | List Team Members|
|[```team_remove_member```](TeamApi.md#team_remove_member) | ```POST /team/remove_member``` | Remove User from Team|
|[```team_settings_get```](TeamApi.md#team_settings_get) | ```GET /team/settings``` | Get team settings|
|[```team_settings_update```](TeamApi.md#team_settings_update) | ```POST /team/settings``` | Modify team settings|
|[```team_sub_teams```](TeamApi.md#team_sub_teams) | ```GET /team/sub_teams/{team_id}``` | List Sub Teams|
|[```team_update```](TeamApi.md#team_update) | ```PUT /team``` | Update Team|


# ```team_add_member```
> ```TeamGetResponse team_add_member(team_add_member_request)```

Add User to Team

Invites a user (specified using the `email_address` parameter) to your Team. If the user does not currently have a Dropbox Sign Account, a new one will be created for them. If a user is already a part of another Team, a `team_invite_failed` error will be returned.

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
    team_add_member_request = models.TeamAddMemberRequest(
        email_address="george@example.com",
    )

    try:
        response = api.TeamApi(api_client).team_add_member(
            team_add_member_request=team_add_member_request,
            team_id="4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TeamApi#team_add_member: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `team_add_member_request` | [**TeamAddMemberRequest**](TeamAddMemberRequest.md) |  |  |
| `team_id` | **str** | The id of the team. | [optional] |

### Return type

[**TeamGetResponse**](TeamGetResponse.md)

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

# ```team_create```
> ```TeamGetResponse team_create(team_create_request)```

Create Team

Creates a new Team and makes you a member. You must not currently belong to a Team to invoke.

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
    team_create_request = models.TeamCreateRequest(
        name="New Team Name",
    )

    try:
        response = api.TeamApi(api_client).team_create(
            team_create_request=team_create_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TeamApi#team_create: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `team_create_request` | [**TeamCreateRequest**](TeamCreateRequest.md) |  |  |

### Return type

[**TeamGetResponse**](TeamGetResponse.md)

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

# ```team_delete```
> ```team_delete()```

Delete Team

Deletes your Team. Can only be invoked when you have a Team with only one member (yourself).

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
        api.TeamApi(api_client).team_delete()
    except ApiException as e:
        print("Exception when calling TeamApi#team_delete: %s\n" % e)

```
```

### Parameters
This endpoint does not need any parameter.

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

# ```team_get```
> ```TeamGetResponse team_get()```

Get Team

Returns information about your Team as well as a list of its members. If you do not belong to a Team, a 404 error with an error_name of "not_found" will be returned.

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
        response = api.TeamApi(api_client).team_get()

        pprint(response)
    except ApiException as e:
        print("Exception when calling TeamApi#team_get: %s\n" % e)

```
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TeamGetResponse**](TeamGetResponse.md)

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

# ```team_info```
> ```TeamGetInfoResponse team_info()```

Get Team Info

Provides information about a team.

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
        response = api.TeamApi(api_client).team_info(
            team_id="4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TeamApi#team_info: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `team_id` | **str** | The id of the team. | [optional] |

### Return type

[**TeamGetInfoResponse**](TeamGetInfoResponse.md)

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

# ```team_invites```
> ```TeamInvitesResponse team_invites()```

List Team Invites

Provides a list of team invites (and their roles).

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
        response = api.TeamApi(api_client).team_invites()

        pprint(response)
    except ApiException as e:
        print("Exception when calling TeamApi#team_invites: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `email_address` | **str** | The email address for which to display the team invites. | [optional] |

### Return type

[**TeamInvitesResponse**](TeamInvitesResponse.md)

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

# ```team_members```
> ```TeamMembersResponse team_members(team_id)```

List Team Members

Provides a paginated list of members (and their roles) that belong to a given team.

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
        response = api.TeamApi(api_client).team_members(
            team_id="4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
            page=1,
            page_size=20,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TeamApi#team_members: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `team_id` | **str** | The id of the team that a member list is being requested from. |  |
| `page` | **int** | Which page number of the team member list to return. Defaults to `1`. | [optional][default to 1] |
| `page_size` | **int** | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional][default to 20] |

### Return type

[**TeamMembersResponse**](TeamMembersResponse.md)

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

# ```team_remove_member```
> ```TeamGetResponse team_remove_member(team_remove_member_request)```

Remove User from Team

Removes the provided user Account from your Team. If the Account had an outstanding invitation to your Team, the invitation will be expired. If you choose to transfer documents from the removed Account to an Account provided in the `new_owner_email_address` parameter (available only for Enterprise plans), the response status code will be 201, which indicates that your request has been queued but not fully executed.

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
    team_remove_member_request = models.TeamRemoveMemberRequest(
        email_address="teammate@dropboxsign.com",
        new_owner_email_address="new_teammate@dropboxsign.com",
    )

    try:
        response = api.TeamApi(api_client).team_remove_member(
            team_remove_member_request=team_remove_member_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TeamApi#team_remove_member: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `team_remove_member_request` | [**TeamRemoveMemberRequest**](TeamRemoveMemberRequest.md) |  |  |

### Return type

[**TeamGetResponse**](TeamGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | successful operation |  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  |
**4XX** | failed_operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# ```team_settings_get```
> ```TeamSettingsResponse team_settings_get()```

Get team settings

team_id is an optional query parameter and defaults to the authenticated account's team. An organization admin can specify a subteam.

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
        response = api.TeamApi(api_client).team_settings_get()
        company = response.settings.company
        data_residency = response.settings.data_residency

        pprint(response)
        pprint(
            {
                "team_id": response.team_id,
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
                "data_residency": {
                    "value": data_residency.value,
                    "is_inherited": data_residency.is_inherited,
                    "source": data_residency.source,
                    "type": data_residency.type,
                    "writable": data_residency.writable,
                    "lock": {
                        "mode": data_residency.lock.mode,
                        "source": data_residency.lock.source,
                    },
                },
                "warnings": response.warnings,
            }
        )
    except ApiException as e:
        print("Exception when calling TeamApi#team_settings_get: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `team_id` | **str** | Optional team ID. Defaults to the authenticated account&#39;s team. An organization admin can specify a subteam. | [optional] |

### Return type

[**TeamSettingsResponse**](TeamSettingsResponse.md)

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

# ```team_settings_update```
> ```TeamSettingsResponse team_settings_update(team_settings_update_request)```

Modify team settings

team_id is an optional query parameter and defaults to the authenticated account's team. An organization admin can specify a subteam.

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
    team_settings_update_request = models.TeamSettingsUpdateRequest(
        data_residency=models.DataResidencySettingUpdate(
            value=models.DataResidency.EU,
        ),
        company=models.StringSettingUpdate(
            value="Northwind",
            lock_mode=models.TeamSettingLock.ORGANIZATION_ADMINS,
        ),
    )

    try:
        response = api.TeamApi(api_client).team_settings_update(
            team_settings_update_request=team_settings_update_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TeamApi#team_settings_update: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `team_settings_update_request` | [**TeamSettingsUpdateRequest**](TeamSettingsUpdateRequest.md) |  |  |
| `team_id` | **str** | Optional team ID. Defaults to the authenticated account&#39;s team. An organization admin can specify a subteam. | [optional] |

### Return type

[**TeamSettingsResponse**](TeamSettingsResponse.md)

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

# ```team_sub_teams```
> ```TeamSubTeamsResponse team_sub_teams(team_id)```

List Sub Teams

Provides a paginated list of sub teams that belong to a given team.

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
        response = api.TeamApi(api_client).team_sub_teams(
            team_id="4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
            page=1,
            page_size=20,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TeamApi#team_sub_teams: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `team_id` | **str** | The id of the parent Team. |  |
| `page` | **int** | Which page number of the SubTeam List to return. Defaults to `1`. | [optional][default to 1] |
| `page_size` | **int** | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional][default to 20] |

### Return type

[**TeamSubTeamsResponse**](TeamSubTeamsResponse.md)

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

# ```team_update```
> ```TeamGetResponse team_update(team_update_request)```

Update Team

Updates the name of your Team.

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
    team_update_request = models.TeamUpdateRequest(
        name="New Team Name",
    )

    try:
        response = api.TeamApi(api_client).team_update(
            team_update_request=team_update_request,
        )

        pprint(response)
    except ApiException as e:
        print("Exception when calling TeamApi#team_update: %s\n" % e)

```
```

### Parameters
| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `team_update_request` | [**TeamUpdateRequest**](TeamUpdateRequest.md) |  |  |

### Return type

[**TeamGetResponse**](TeamGetResponse.md)

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

