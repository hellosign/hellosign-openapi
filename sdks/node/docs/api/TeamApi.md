# TeamApi

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

```typescript
teamAddMember(teamAddMemberRequest: TeamAddMemberRequest, teamId: string): TeamGetResponse
```

Add User to Team

Invites a user (specified using the `email_address` parameter) to your Team. If the user does not currently have a Dropbox Sign Account, a new one will be created for them. If a user is already a part of another Team, a `team_invite_failed` error will be returned.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const teamAddMemberRequest: models.TeamAddMemberRequest = {
  emailAddress: "george@example.com",
};

apiCaller.teamAddMember(
  teamAddMemberRequest,
  "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c", // teamId
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamAddMember:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **teamAddMemberRequest** | [**TeamAddMemberRequest**](../model/TeamAddMemberRequest.md)|  | |
| **teamId** | **string**| The id of the team. | [optional] |

### Return type

[**TeamGetResponse**](../model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamCreate()`

```typescript
teamCreate(teamCreateRequest: TeamCreateRequest): TeamGetResponse
```

Create Team

Creates a new Team and makes you a member. You must not currently belong to a Team to invoke.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const teamCreateRequest: models.TeamCreateRequest = {
  name: "New Team Name",
};

apiCaller.teamCreate(
  teamCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamCreate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **teamCreateRequest** | [**TeamCreateRequest**](../model/TeamCreateRequest.md)|  | |

### Return type

[**TeamGetResponse**](../model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamDelete()`

```typescript
teamDelete()
```

Delete Team

Deletes your Team. Can only be invoked when you have a Team with only one member (yourself).

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.teamDelete().catch(error => {
  console.log("Exception when calling TeamApi#teamDelete:");
  console.log(error.body);
});

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

```typescript
teamGet(): TeamGetResponse
```

Get Team

Returns information about your Team as well as a list of its members. If you do not belong to a Team, a 404 error with an error_name of \"not_found\" will be returned.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.teamGet().then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamGet:");
  console.log(error.body);
});

```

### Parameters

|This endpoint does not need any parameter. |

### Return type

[**TeamGetResponse**](../model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamInfo()`

```typescript
teamInfo(teamId: string): TeamGetInfoResponse
```

Get Team Info

Provides information about a team.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.teamInfo(
  "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c", // teamId
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamInfo:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **teamId** | **string**| The id of the team. | [optional] |

### Return type

[**TeamGetInfoResponse**](../model/TeamGetInfoResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamInvites()`

```typescript
teamInvites(emailAddress: string): TeamInvitesResponse
```

List Team Invites

Provides a list of team invites (and their roles).

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.teamInvites().then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamInvites:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **emailAddress** | **string**| The email address for which to display the team invites. | [optional] |

### Return type

[**TeamInvitesResponse**](../model/TeamInvitesResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamMembers()`

```typescript
teamMembers(teamId: string, page: number, pageSize: number): TeamMembersResponse
```

List Team Members

Provides a paginated list of members (and their roles) that belong to a given team.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.teamMembers(
  "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c", // teamId
  1, // page
  20, // pageSize
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamMembers:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **teamId** | **string**| The id of the team that a member list is being requested from. | |
| **page** | **number**| Which page number of the team member list to return. Defaults to `1`. | [optional] [default to 1] |
| **pageSize** | **number**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |

### Return type

[**TeamMembersResponse**](../model/TeamMembersResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamRemoveMember()`

```typescript
teamRemoveMember(teamRemoveMemberRequest: TeamRemoveMemberRequest): TeamGetResponse
```

Remove User from Team

Removes the provided user Account from your Team. If the Account had an outstanding invitation to your Team, the invitation will be expired. If you choose to transfer documents from the removed Account to an Account provided in the `new_owner_email_address` parameter (available only for Enterprise plans), the response status code will be 201, which indicates that your request has been queued but not fully executed.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const teamRemoveMemberRequest: models.TeamRemoveMemberRequest = {
  emailAddress: "teammate@dropboxsign.com",
  newOwnerEmailAddress: "new_teammate@dropboxsign.com",
};

apiCaller.teamRemoveMember(
  teamRemoveMemberRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamRemoveMember:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **teamRemoveMemberRequest** | [**TeamRemoveMemberRequest**](../model/TeamRemoveMemberRequest.md)|  | |

### Return type

[**TeamGetResponse**](../model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamSubTeams()`

```typescript
teamSubTeams(teamId: string, page: number, pageSize: number): TeamSubTeamsResponse
```

List Sub Teams

Provides a paginated list of sub teams that belong to a given team.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.teamSubTeams(
  "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c", // teamId
  1, // page
  20, // pageSize
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamSubTeams:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **teamId** | **string**| The id of the parent Team. | |
| **page** | **number**| Which page number of the SubTeam List to return. Defaults to `1`. | [optional] [default to 1] |
| **pageSize** | **number**| Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. | [optional] [default to 20] |

### Return type

[**TeamSubTeamsResponse**](../model/TeamSubTeamsResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `teamUpdate()`

```typescript
teamUpdate(teamUpdateRequest: TeamUpdateRequest): TeamGetResponse
```

Update Team

Updates the name of your Team.

### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const teamUpdateRequest: models.TeamUpdateRequest = {
  name: "New Team Name",
};

apiCaller.teamUpdate(
  teamUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamUpdate:");
  console.log(error.body);
});

```

### Parameters

|Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **teamUpdateRequest** | [**TeamUpdateRequest**](../model/TeamUpdateRequest.md)|  | |

### Return type

[**TeamGetResponse**](../model/TeamGetResponse.md)

### Authorization

[api_key](../../README.md#api_key), [oauth2](../../README.md#oauth2)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
