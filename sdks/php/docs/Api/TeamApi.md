# Dropbox\Sign\TeamApi

All URIs are relative to https://api.hellosign.com/v3.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**teamAddMember()**](TeamApi.md#teamAddMember) | **PUT** /team/add_member | Add User to Team |
| [**teamCreate()**](TeamApi.md#teamCreate) | **POST** /team/create | Create Team |
| [**teamDelete()**](TeamApi.md#teamDelete) | **DELETE** /team/destroy | Delete Team |
| [**teamGet()**](TeamApi.md#teamGet) | **GET** /team | Get Team |
| [**teamInfo()**](TeamApi.md#teamInfo) | **GET** /team/info | Get Team Info |
| [**teamInvites()**](TeamApi.md#teamInvites) | **GET** /team/invites | List Team Invites |
| [**teamMembers()**](TeamApi.md#teamMembers) | **GET** /team/members/{team_id} | List Team Members |
| [**teamRemoveMember()**](TeamApi.md#teamRemoveMember) | **POST** /team/remove_member | Remove User from Team |
| [**teamSubTeams()**](TeamApi.md#teamSubTeams) | **GET** /team/sub_teams/{team_id} | List Sub Teams |
| [**teamUpdate()**](TeamApi.md#teamUpdate) | **PUT** /team | Update Team |


## `teamAddMember()`

```php
teamAddMember($team_add_member_request, $team_id): \Dropbox\Sign\Model\TeamGetResponse
```
Add User to Team

Invites a user (specified using the `email_address` parameter) to your Team. If the user does not currently have a Dropbox Sign Account, a new one will be created for them. If a user is already a part of another Team, a `team_invite_failed` error will be returned.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$team_add_member_request = (new Dropbox\Sign\Model\TeamAddMemberRequest())
    ->setEmailAddress("george@example.com");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamAddMember(
        team_add_member_request: $team_add_member_request,
        team_id: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamAddMember: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **team_add_member_request** | [**\Dropbox\Sign\Model\TeamAddMemberRequest**](../Model/TeamAddMemberRequest.md)|  | |
| **team_id** | **string**| The id of the team. | [optional] |

### Return type

[**\Dropbox\Sign\Model\TeamGetResponse**](../Model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamCreate()`

```php
teamCreate($team_create_request): \Dropbox\Sign\Model\TeamGetResponse
```
Create Team

Creates a new Team and makes you a member. You must not currently belong to a Team to invoke.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$team_create_request = (new Dropbox\Sign\Model\TeamCreateRequest())
    ->setName("New Team Name");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamCreate(
        team_create_request: $team_create_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamCreate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **team_create_request** | [**\Dropbox\Sign\Model\TeamCreateRequest**](../Model/TeamCreateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\TeamGetResponse**](../Model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamDelete()`

```php
teamDelete()
```
Delete Team

Deletes your Team. Can only be invoked when you have a Team with only one member (yourself).

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    (new Dropbox\Sign\Api\TeamApi(config: $config))->teamDelete();
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamDelete: {$e->getMessage()}";
}

```

### Parameters

|This endpoint does not need any parameter. |

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

## `teamGet()`

```php
teamGet(): \Dropbox\Sign\Model\TeamGetResponse
```
Get Team

Returns information about your Team as well as a list of its members. If you do not belong to a Team, a 404 error with an error_name of \"not_found\" will be returned.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamGet();

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamGet: {$e->getMessage()}";
}

```

### Parameters

|This endpoint does not need any parameter. |

### Return type

[**\Dropbox\Sign\Model\TeamGetResponse**](../Model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamInfo()`

```php
teamInfo($team_id): \Dropbox\Sign\Model\TeamGetInfoResponse
```
Get Team Info

Provides information about a team.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamInfo(
        team_id: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamInfo: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **team_id** | **string**| The id of the team. | [optional] |

### Return type

[**\Dropbox\Sign\Model\TeamGetInfoResponse**](../Model/TeamGetInfoResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamInvites()`

```php
teamInvites($email_address): \Dropbox\Sign\Model\TeamInvitesResponse
```
List Team Invites

Provides a list of team invites (and their roles).

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamInvites();

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamInvites: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **email_address** | **string**| The email address for which to display the team invites. | [optional] |

### Return type

[**\Dropbox\Sign\Model\TeamInvitesResponse**](../Model/TeamInvitesResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamMembers()`

```php
teamMembers($team_id, $page, $page_size): \Dropbox\Sign\Model\TeamMembersResponse
```
List Team Members

Provides a paginated list of members (and their roles) that belong to a given team.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamMembers(
        team_id: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
        page: 1,
        page_size: 20,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamMembers: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **team_id** | **string**| The id of the team that a member list is being requested from. | |
| **page** | **int**| Which page number of the team member list to return. Defaults to `1`. | [optional] [default to 1] |
| **page_size** | **int**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |

### Return type

[**\Dropbox\Sign\Model\TeamMembersResponse**](../Model/TeamMembersResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamRemoveMember()`

```php
teamRemoveMember($team_remove_member_request): \Dropbox\Sign\Model\TeamGetResponse
```
Remove User from Team

Removes the provided user Account from your Team. If the Account had an outstanding invitation to your Team, the invitation will be expired. If you choose to transfer documents from the removed Account to an Account provided in the `new_owner_email_address` parameter (available only for Enterprise plans), the response status code will be 201, which indicates that your request has been queued but not fully executed.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$team_remove_member_request = (new Dropbox\Sign\Model\TeamRemoveMemberRequest())
    ->setEmailAddress("teammate@dropboxsign.com")
    ->setNewOwnerEmailAddress("new_teammate@dropboxsign.com");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamRemoveMember(
        team_remove_member_request: $team_remove_member_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamRemoveMember: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **team_remove_member_request** | [**\Dropbox\Sign\Model\TeamRemoveMemberRequest**](../Model/TeamRemoveMemberRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\TeamGetResponse**](../Model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamSubTeams()`

```php
teamSubTeams($team_id, $page, $page_size): \Dropbox\Sign\Model\TeamSubTeamsResponse
```
List Sub Teams

Provides a paginated list of sub teams that belong to a given team.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamSubTeams(
        team_id: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
        page: 1,
        page_size: 20,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamSubTeams: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **team_id** | **string**| The id of the parent Team. | |
| **page** | **int**| Which page number of the SubTeam List to return. Defaults to `1`. | [optional] [default to 1] |
| **page_size** | **int**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |

### Return type

[**\Dropbox\Sign\Model\TeamSubTeamsResponse**](../Model/TeamSubTeamsResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamUpdate()`

```php
teamUpdate($team_update_request): \Dropbox\Sign\Model\TeamGetResponse
```
Update Team

Updates the name of your Team.

### Example

```php
<?php

namespace Dropbox\SignSandbox;

require_once __DIR__ . '/../vendor/autoload.php';

use SplFileObject;
use Dropbox;

$config = Dropbox\Sign\Configuration::getDefaultConfiguration();
$config->setUsername("YOUR_API_KEY");
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

$team_update_request = (new Dropbox\Sign\Model\TeamUpdateRequest())
    ->setName("New Team Name");

try {
    $response = (new Dropbox\Sign\Api\TeamApi(config: $config))->teamUpdate(
        team_update_request: $team_update_request,
    );

    print_r($response);
} catch (Dropbox\Sign\ApiException $e) {
    echo "Exception when calling TeamApi#teamUpdate: {$e->getMessage()}";
}

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **team_update_request** | [**\Dropbox\Sign\Model\TeamUpdateRequest**](../Model/TeamUpdateRequest.md)|  | |

### Return type

[**\Dropbox\Sign\Model\TeamGetResponse**](../Model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
