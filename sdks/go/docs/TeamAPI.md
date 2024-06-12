# \TeamAPI

All URIs are relative to *https://api.hellosign.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TeamAddMember**](TeamAPI.md#TeamAddMember) | **Put** /team/add_member | Add User to Team
[**TeamCreate**](TeamAPI.md#TeamCreate) | **Post** /team/create | Create Team
[**TeamDelete**](TeamAPI.md#TeamDelete) | **Delete** /team/destroy | Delete Team
[**TeamGet**](TeamAPI.md#TeamGet) | **Get** /team | Get Team
[**TeamInfo**](TeamAPI.md#TeamInfo) | **Get** /team/info | Get Team Info
[**TeamInvites**](TeamAPI.md#TeamInvites) | **Get** /team/invites | List Team Invites
[**TeamMembers**](TeamAPI.md#TeamMembers) | **Get** /team/members/{team_id} | List Team Members
[**TeamRemoveMember**](TeamAPI.md#TeamRemoveMember) | **Post** /team/remove_member | Remove User from Team
[**TeamSubTeams**](TeamAPI.md#TeamSubTeams) | **Get** /team/sub_teams/{team_id} | List Sub Teams
[**TeamUpdate**](TeamAPI.md#TeamUpdate) | **Put** /team | Update Team



## TeamAddMember

> TeamGetResponse TeamAddMember(ctx).TeamAddMemberRequest(teamAddMemberRequest).TeamId(teamId).Execute()

Add User to Team



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	teamAddMemberRequest := *openapiclient.NewTeamAddMemberRequest() // TeamAddMemberRequest | 
	teamId := "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c" // string | The id of the team. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TeamAPI.TeamAddMember(context.Background()).TeamAddMemberRequest(teamAddMemberRequest).TeamId(teamId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TeamAPI.TeamAddMember``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TeamAddMember`: TeamGetResponse
	fmt.Fprintf(os.Stdout, "Response from `TeamAPI.TeamAddMember`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTeamAddMemberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamAddMemberRequest** | [**TeamAddMemberRequest**](TeamAddMemberRequest.md) |  | 
 **teamId** | **string** | The id of the team. | 

### Return type

[**TeamGetResponse**](TeamGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TeamCreate

> TeamGetResponse TeamCreate(ctx).TeamCreateRequest(teamCreateRequest).Execute()

Create Team



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	teamCreateRequest := *openapiclient.NewTeamCreateRequest() // TeamCreateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TeamAPI.TeamCreate(context.Background()).TeamCreateRequest(teamCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TeamAPI.TeamCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TeamCreate`: TeamGetResponse
	fmt.Fprintf(os.Stdout, "Response from `TeamAPI.TeamCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTeamCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamCreateRequest** | [**TeamCreateRequest**](TeamCreateRequest.md) |  | 

### Return type

[**TeamGetResponse**](TeamGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TeamDelete

> TeamDelete(ctx).Execute()

Delete Team



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.TeamAPI.TeamDelete(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TeamAPI.TeamDelete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiTeamDeleteRequest struct via the builder pattern


### Return type

 (empty response body)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TeamGet

> TeamGetResponse TeamGet(ctx).Execute()

Get Team



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TeamAPI.TeamGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TeamAPI.TeamGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TeamGet`: TeamGetResponse
	fmt.Fprintf(os.Stdout, "Response from `TeamAPI.TeamGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiTeamGetRequest struct via the builder pattern


### Return type

[**TeamGetResponse**](TeamGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TeamInfo

> TeamGetInfoResponse TeamInfo(ctx).TeamId(teamId).Execute()

Get Team Info



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	teamId := "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c" // string | The id of the team. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TeamAPI.TeamInfo(context.Background()).TeamId(teamId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TeamAPI.TeamInfo``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TeamInfo`: TeamGetInfoResponse
	fmt.Fprintf(os.Stdout, "Response from `TeamAPI.TeamInfo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTeamInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **string** | The id of the team. | 

### Return type

[**TeamGetInfoResponse**](TeamGetInfoResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TeamInvites

> TeamInvitesResponse TeamInvites(ctx).EmailAddress(emailAddress).Execute()

List Team Invites



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	emailAddress := "emailAddress_example" // string | The email address for which to display the team invites. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TeamAPI.TeamInvites(context.Background()).EmailAddress(emailAddress).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TeamAPI.TeamInvites``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TeamInvites`: TeamInvitesResponse
	fmt.Fprintf(os.Stdout, "Response from `TeamAPI.TeamInvites`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTeamInvitesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailAddress** | **string** | The email address for which to display the team invites. | 

### Return type

[**TeamInvitesResponse**](TeamInvitesResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TeamMembers

> TeamMembersResponse TeamMembers(ctx, teamId).Page(page).PageSize(pageSize).Execute()

List Team Members



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	teamId := "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c" // string | The id of the team that a member list is being requested from.
	page := int32(56) // int32 | Which page number of the team member list to return. Defaults to `1`. (optional) (default to 1)
	pageSize := int32(56) // int32 | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. (optional) (default to 20)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TeamAPI.TeamMembers(context.Background(), teamId).Page(page).PageSize(pageSize).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TeamAPI.TeamMembers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TeamMembers`: TeamMembersResponse
	fmt.Fprintf(os.Stdout, "Response from `TeamAPI.TeamMembers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**teamId** | **string** | The id of the team that a member list is being requested from. | 

### Other Parameters

Other parameters are passed through a pointer to a apiTeamMembersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **page** | **int32** | Which page number of the team member list to return. Defaults to &#x60;1&#x60;. | [default to 1]
 **pageSize** | **int32** | Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. | [default to 20]

### Return type

[**TeamMembersResponse**](TeamMembersResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TeamRemoveMember

> TeamGetResponse TeamRemoveMember(ctx).TeamRemoveMemberRequest(teamRemoveMemberRequest).Execute()

Remove User from Team



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	teamRemoveMemberRequest := *openapiclient.NewTeamRemoveMemberRequest() // TeamRemoveMemberRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TeamAPI.TeamRemoveMember(context.Background()).TeamRemoveMemberRequest(teamRemoveMemberRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TeamAPI.TeamRemoveMember``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TeamRemoveMember`: TeamGetResponse
	fmt.Fprintf(os.Stdout, "Response from `TeamAPI.TeamRemoveMember`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTeamRemoveMemberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamRemoveMemberRequest** | [**TeamRemoveMemberRequest**](TeamRemoveMemberRequest.md) |  | 

### Return type

[**TeamGetResponse**](TeamGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TeamSubTeams

> TeamSubTeamsResponse TeamSubTeams(ctx, teamId).Page(page).PageSize(pageSize).Execute()

List Sub Teams



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	teamId := "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c" // string | The id of the parent Team.
	page := int32(56) // int32 | Which page number of the SubTeam List to return. Defaults to `1`. (optional) (default to 1)
	pageSize := int32(56) // int32 | Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`. (optional) (default to 20)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TeamAPI.TeamSubTeams(context.Background(), teamId).Page(page).PageSize(pageSize).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TeamAPI.TeamSubTeams``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TeamSubTeams`: TeamSubTeamsResponse
	fmt.Fprintf(os.Stdout, "Response from `TeamAPI.TeamSubTeams`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**teamId** | **string** | The id of the parent Team. | 

### Other Parameters

Other parameters are passed through a pointer to a apiTeamSubTeamsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **page** | **int32** | Which page number of the SubTeam List to return. Defaults to &#x60;1&#x60;. | [default to 1]
 **pageSize** | **int32** | Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. | [default to 20]

### Return type

[**TeamSubTeamsResponse**](TeamSubTeamsResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TeamUpdate

> TeamGetResponse TeamUpdate(ctx).TeamUpdateRequest(teamUpdateRequest).Execute()

Update Team



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	teamUpdateRequest := *openapiclient.NewTeamUpdateRequest() // TeamUpdateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TeamAPI.TeamUpdate(context.Background()).TeamUpdateRequest(teamUpdateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TeamAPI.TeamUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TeamUpdate`: TeamGetResponse
	fmt.Fprintf(os.Stdout, "Response from `TeamAPI.TeamUpdate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTeamUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamUpdateRequest** | [**TeamUpdateRequest**](TeamUpdateRequest.md) |  | 

### Return type

[**TeamGetResponse**](TeamGetResponse.md)

### Authorization

[api_key](../README.md#api_key), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

