package com.dropbox.sign.api;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;

import javax.ws.rs.core.GenericType;

import com.dropbox.sign.model.ErrorResponse;
import com.dropbox.sign.model.TeamAddMemberRequest;
import com.dropbox.sign.model.TeamCreateRequest;
import com.dropbox.sign.model.TeamGetInfoResponse;
import com.dropbox.sign.model.TeamGetResponse;
import com.dropbox.sign.model.TeamInvitesResponse;
import com.dropbox.sign.model.TeamMembersResponse;
import com.dropbox.sign.model.TeamRemoveMemberRequest;
import com.dropbox.sign.model.TeamSubTeamsResponse;
import com.dropbox.sign.model.TeamUpdateRequest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class TeamApi {
  private ApiClient apiClient;

  public TeamApi() {
    this(Configuration.getDefaultApiClient());
  }

  public TeamApi(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Get the API client
   *
   * @return API client
   */
  public ApiClient getApiClient() {
    return apiClient;
  }

  /**
   * Set the API client
   *
   * @param apiClient an instance of API client
   */
  public void setApiClient(ApiClient apiClient) {
    this.apiClient = apiClient;
  }


private ApiResponse<TeamGetResponse> teamAddMemberWithHttpInfo(TeamAddMemberRequest teamAddMemberRequest, String teamId) throws ApiException {
    
    Object localVarPostBody = teamAddMemberRequest;
    
    // verify the required parameter 'teamAddMemberRequest' is set
    if (teamAddMemberRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'teamAddMemberRequest' when calling teamAddMember");
    }
    
    // create path and map variables
    String localVarPath = "/team/add_member";

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "team_id", teamId));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };

    localVarFormParams = teamAddMemberRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TeamGetResponse> localVarReturnType = new GenericType<TeamGetResponse>() {};

    return apiClient.invokeAPI("TeamApi.teamAddMember", localVarPath, "PUT", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }

  public class APIteamAddMemberRequest {
    private TeamAddMemberRequest teamAddMemberRequest;
    private String teamId;

    private APIteamAddMemberRequest() {
    }

    /**
     * Set teamAddMemberRequest
     * @param teamAddMemberRequest  (required)
     * @return APIteamAddMemberRequest
     */
    public APIteamAddMemberRequest teamAddMemberRequest(TeamAddMemberRequest teamAddMemberRequest) {
      this.teamAddMemberRequest = teamAddMemberRequest;
      return this;
    }

    /**
     * Set teamId
     * @param teamId The id of the team. (optional)
     * @return APIteamAddMemberRequest
     */
    public APIteamAddMemberRequest teamId(String teamId) {
      this.teamId = teamId;
      return this;
    }

    /**
     * Execute teamAddMember request
     * @return TeamGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public TeamGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute teamAddMember request with HTTP info returned
     * @return ApiResponse&lt;TeamGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<TeamGetResponse> executeWithHttpInfo() throws ApiException {
      return teamAddMemberWithHttpInfo(teamAddMemberRequest, teamId);
    }
  }

  /**
   * Add User to Team
   * Invites a user (specified using the &#x60;email_address&#x60; parameter) to your Team. If the user does not currently have a Dropbox Sign Account, a new one will be created for them. If a user is already a part of another Team, a &#x60;team_invite_failed&#x60; error will be returned.
   * @return teamAddMemberRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIteamAddMemberRequest teamAddMember() throws ApiException {
    return new APIteamAddMemberRequest();
  }

private ApiResponse<TeamGetResponse> teamCreateWithHttpInfo(TeamCreateRequest teamCreateRequest) throws ApiException {
    
    Object localVarPostBody = teamCreateRequest;
    
    // verify the required parameter 'teamCreateRequest' is set
    if (teamCreateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'teamCreateRequest' when calling teamCreate");
    }
    
    // create path and map variables
    String localVarPath = "/team/create";

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };

    localVarFormParams = teamCreateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TeamGetResponse> localVarReturnType = new GenericType<TeamGetResponse>() {};

    return apiClient.invokeAPI("TeamApi.teamCreate", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }

  public class APIteamCreateRequest {
    private TeamCreateRequest teamCreateRequest;

    private APIteamCreateRequest() {
    }

    /**
     * Set teamCreateRequest
     * @param teamCreateRequest  (required)
     * @return APIteamCreateRequest
     */
    public APIteamCreateRequest teamCreateRequest(TeamCreateRequest teamCreateRequest) {
      this.teamCreateRequest = teamCreateRequest;
      return this;
    }

    /**
     * Execute teamCreate request
     * @return TeamGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public TeamGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute teamCreate request with HTTP info returned
     * @return ApiResponse&lt;TeamGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<TeamGetResponse> executeWithHttpInfo() throws ApiException {
      return teamCreateWithHttpInfo(teamCreateRequest);
    }
  }

  /**
   * Create Team
   * Creates a new Team and makes you a member. You must not currently belong to a Team to invoke.
   * @return teamCreateRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIteamCreateRequest teamCreate() throws ApiException {
    return new APIteamCreateRequest();
  }

private ApiResponse<Void> teamDeleteWithHttpInfo() throws ApiException {
    
    Object localVarPostBody = null;
    
    // create path and map variables
    String localVarPath = "/team/destroy";

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };

    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    return apiClient.invokeAPI("TeamApi.teamDelete", localVarPath, "DELETE", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, null, false);
  }

  public class APIteamDeleteRequest {

    private APIteamDeleteRequest() {
    }

    /**
     * Execute teamDelete request
     
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public void execute() throws ApiException {
      this.executeWithHttpInfo().getData();
    }

    /**
     * Execute teamDelete request with HTTP info returned
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<Void> executeWithHttpInfo() throws ApiException {
      return teamDeleteWithHttpInfo();
    }
  }

  /**
   * Delete Team
   * Deletes your Team. Can only be invoked when you have a Team with only one member (yourself).
   * @return teamDeleteRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIteamDeleteRequest teamDelete() throws ApiException {
    return new APIteamDeleteRequest();
  }

private ApiResponse<TeamGetResponse> teamGetWithHttpInfo() throws ApiException {
    
    Object localVarPostBody = null;
    
    // create path and map variables
    String localVarPath = "/team";

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };

    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TeamGetResponse> localVarReturnType = new GenericType<TeamGetResponse>() {};

    return apiClient.invokeAPI("TeamApi.teamGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }

  public class APIteamGetRequest {

    private APIteamGetRequest() {
    }

    /**
     * Execute teamGet request
     * @return TeamGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public TeamGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute teamGet request with HTTP info returned
     * @return ApiResponse&lt;TeamGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<TeamGetResponse> executeWithHttpInfo() throws ApiException {
      return teamGetWithHttpInfo();
    }
  }

  /**
   * Get Team
   * Returns information about your Team as well as a list of its members. If you do not belong to a Team, a 404 error with an error_name of \&quot;not_found\&quot; will be returned.
   * @return teamGetRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIteamGetRequest teamGet() throws ApiException {
    return new APIteamGetRequest();
  }

private ApiResponse<TeamGetInfoResponse> teamInfoWithHttpInfo(String teamId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // create path and map variables
    String localVarPath = "/team/info";

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "team_id", teamId));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };

    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TeamGetInfoResponse> localVarReturnType = new GenericType<TeamGetInfoResponse>() {};

    return apiClient.invokeAPI("TeamApi.teamInfo", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }

  public class APIteamInfoRequest {
    private String teamId;

    private APIteamInfoRequest() {
    }

    /**
     * Set teamId
     * @param teamId The id of the team. (optional)
     * @return APIteamInfoRequest
     */
    public APIteamInfoRequest teamId(String teamId) {
      this.teamId = teamId;
      return this;
    }

    /**
     * Execute teamInfo request
     * @return TeamGetInfoResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public TeamGetInfoResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute teamInfo request with HTTP info returned
     * @return ApiResponse&lt;TeamGetInfoResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<TeamGetInfoResponse> executeWithHttpInfo() throws ApiException {
      return teamInfoWithHttpInfo(teamId);
    }
  }

  /**
   * Get Team Info
   * Provides information about a team.
   * @return teamInfoRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIteamInfoRequest teamInfo() throws ApiException {
    return new APIteamInfoRequest();
  }

private ApiResponse<TeamInvitesResponse> teamInvitesWithHttpInfo(String emailAddress) throws ApiException {
    
    Object localVarPostBody = null;
    
    // create path and map variables
    String localVarPath = "/team/invites";

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "email_address", emailAddress));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };

    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TeamInvitesResponse> localVarReturnType = new GenericType<TeamInvitesResponse>() {};

    return apiClient.invokeAPI("TeamApi.teamInvites", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }

  public class APIteamInvitesRequest {
    private String emailAddress;

    private APIteamInvitesRequest() {
    }

    /**
     * Set emailAddress
     * @param emailAddress The email address for which to display the team invites. (optional)
     * @return APIteamInvitesRequest
     */
    public APIteamInvitesRequest emailAddress(String emailAddress) {
      this.emailAddress = emailAddress;
      return this;
    }

    /**
     * Execute teamInvites request
     * @return TeamInvitesResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public TeamInvitesResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute teamInvites request with HTTP info returned
     * @return ApiResponse&lt;TeamInvitesResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<TeamInvitesResponse> executeWithHttpInfo() throws ApiException {
      return teamInvitesWithHttpInfo(emailAddress);
    }
  }

  /**
   * List Team Invites
   * Provides a list of team invites (and their roles).
   * @return teamInvitesRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIteamInvitesRequest teamInvites() throws ApiException {
    return new APIteamInvitesRequest();
  }

private ApiResponse<TeamMembersResponse> teamMembersWithHttpInfo(String teamId, Integer page, Integer pageSize) throws ApiException {
    
    if (page == null) {
        page = 1;
    }
    if (pageSize == null) {
        pageSize = 20;
    }
    Object localVarPostBody = null;
    
    // verify the required parameter 'teamId' is set
    if (teamId == null) {
      throw new ApiException(400, "Missing the required parameter 'teamId' when calling teamMembers");
    }
    
    // create path and map variables
    String localVarPath = "/team/members/{team_id}"
      .replaceAll("\\{" + "team_id" + "\\}", apiClient.escapeString(teamId.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "page", page));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "page_size", pageSize));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };

    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TeamMembersResponse> localVarReturnType = new GenericType<TeamMembersResponse>() {};

    return apiClient.invokeAPI("TeamApi.teamMembers", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }

  public class APIteamMembersRequest {
    private String teamId;
    private Integer page;
    private Integer pageSize;

    private APIteamMembersRequest(String teamId) {
      this.teamId = teamId;
    }

    /**
     * Set page
     * @param page Which page number of the team member list to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
     * @return APIteamMembersRequest
     */
    public APIteamMembersRequest page(Integer page) {
      this.page = page;
      return this;
    }

    /**
     * Set pageSize
     * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
     * @return APIteamMembersRequest
     */
    public APIteamMembersRequest pageSize(Integer pageSize) {
      this.pageSize = pageSize;
      return this;
    }

    /**
     * Execute teamMembers request
     * @return TeamMembersResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public TeamMembersResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute teamMembers request with HTTP info returned
     * @return ApiResponse&lt;TeamMembersResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<TeamMembersResponse> executeWithHttpInfo() throws ApiException {
      return teamMembersWithHttpInfo(teamId, page, pageSize);
    }
  }

  /**
   * List Team Members
   * Provides a paginated list of members (and their roles) that belong to a given team.
   * @param teamId The id of the team that a member list is being requested from. (required)
   * @return teamMembersRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIteamMembersRequest teamMembers(String teamId) throws ApiException {
    return new APIteamMembersRequest(teamId);
  }

private ApiResponse<TeamGetResponse> teamRemoveMemberWithHttpInfo(TeamRemoveMemberRequest teamRemoveMemberRequest) throws ApiException {
    
    Object localVarPostBody = teamRemoveMemberRequest;
    
    // verify the required parameter 'teamRemoveMemberRequest' is set
    if (teamRemoveMemberRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'teamRemoveMemberRequest' when calling teamRemoveMember");
    }
    
    // create path and map variables
    String localVarPath = "/team/remove_member";

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };

    localVarFormParams = teamRemoveMemberRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TeamGetResponse> localVarReturnType = new GenericType<TeamGetResponse>() {};

    return apiClient.invokeAPI("TeamApi.teamRemoveMember", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }

  public class APIteamRemoveMemberRequest {
    private TeamRemoveMemberRequest teamRemoveMemberRequest;

    private APIteamRemoveMemberRequest() {
    }

    /**
     * Set teamRemoveMemberRequest
     * @param teamRemoveMemberRequest  (required)
     * @return APIteamRemoveMemberRequest
     */
    public APIteamRemoveMemberRequest teamRemoveMemberRequest(TeamRemoveMemberRequest teamRemoveMemberRequest) {
      this.teamRemoveMemberRequest = teamRemoveMemberRequest;
      return this;
    }

    /**
     * Execute teamRemoveMember request
     * @return TeamGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public TeamGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute teamRemoveMember request with HTTP info returned
     * @return ApiResponse&lt;TeamGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<TeamGetResponse> executeWithHttpInfo() throws ApiException {
      return teamRemoveMemberWithHttpInfo(teamRemoveMemberRequest);
    }
  }

  /**
   * Remove User from Team
   * Removes the provided user Account from your Team. If the Account had an outstanding invitation to your Team, the invitation will be expired. If you choose to transfer documents from the removed Account to an Account provided in the &#x60;new_owner_email_address&#x60; parameter (available only for Enterprise plans), the response status code will be 201, which indicates that your request has been queued but not fully executed.
   * @return teamRemoveMemberRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIteamRemoveMemberRequest teamRemoveMember() throws ApiException {
    return new APIteamRemoveMemberRequest();
  }

private ApiResponse<TeamSubTeamsResponse> teamSubTeamsWithHttpInfo(String teamId, Integer page, Integer pageSize) throws ApiException {
    
    if (page == null) {
        page = 1;
    }
    if (pageSize == null) {
        pageSize = 20;
    }
    Object localVarPostBody = null;
    
    // verify the required parameter 'teamId' is set
    if (teamId == null) {
      throw new ApiException(400, "Missing the required parameter 'teamId' when calling teamSubTeams");
    }
    
    // create path and map variables
    String localVarPath = "/team/sub_teams/{team_id}"
      .replaceAll("\\{" + "team_id" + "\\}", apiClient.escapeString(teamId.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "page", page));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "page_size", pageSize));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };

    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TeamSubTeamsResponse> localVarReturnType = new GenericType<TeamSubTeamsResponse>() {};

    return apiClient.invokeAPI("TeamApi.teamSubTeams", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }

  public class APIteamSubTeamsRequest {
    private String teamId;
    private Integer page;
    private Integer pageSize;

    private APIteamSubTeamsRequest(String teamId) {
      this.teamId = teamId;
    }

    /**
     * Set page
     * @param page Which page number of the SubTeam List to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
     * @return APIteamSubTeamsRequest
     */
    public APIteamSubTeamsRequest page(Integer page) {
      this.page = page;
      return this;
    }

    /**
     * Set pageSize
     * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
     * @return APIteamSubTeamsRequest
     */
    public APIteamSubTeamsRequest pageSize(Integer pageSize) {
      this.pageSize = pageSize;
      return this;
    }

    /**
     * Execute teamSubTeams request
     * @return TeamSubTeamsResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public TeamSubTeamsResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute teamSubTeams request with HTTP info returned
     * @return ApiResponse&lt;TeamSubTeamsResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<TeamSubTeamsResponse> executeWithHttpInfo() throws ApiException {
      return teamSubTeamsWithHttpInfo(teamId, page, pageSize);
    }
  }

  /**
   * List Sub Teams
   * Provides a paginated list of sub teams that belong to a given team.
   * @param teamId The id of the parent Team. (required)
   * @return teamSubTeamsRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIteamSubTeamsRequest teamSubTeams(String teamId) throws ApiException {
    return new APIteamSubTeamsRequest(teamId);
  }

private ApiResponse<TeamGetResponse> teamUpdateWithHttpInfo(TeamUpdateRequest teamUpdateRequest) throws ApiException {
    
    Object localVarPostBody = teamUpdateRequest;
    
    // verify the required parameter 'teamUpdateRequest' is set
    if (teamUpdateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'teamUpdateRequest' when calling teamUpdate");
    }
    
    // create path and map variables
    String localVarPath = "/team";

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };

    localVarFormParams = teamUpdateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TeamGetResponse> localVarReturnType = new GenericType<TeamGetResponse>() {};

    return apiClient.invokeAPI("TeamApi.teamUpdate", localVarPath, "PUT", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }

  public class APIteamUpdateRequest {
    private TeamUpdateRequest teamUpdateRequest;

    private APIteamUpdateRequest() {
    }

    /**
     * Set teamUpdateRequest
     * @param teamUpdateRequest  (required)
     * @return APIteamUpdateRequest
     */
    public APIteamUpdateRequest teamUpdateRequest(TeamUpdateRequest teamUpdateRequest) {
      this.teamUpdateRequest = teamUpdateRequest;
      return this;
    }

    /**
     * Execute teamUpdate request
     * @return TeamGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public TeamGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute teamUpdate request with HTTP info returned
     * @return ApiResponse&lt;TeamGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<TeamGetResponse> executeWithHttpInfo() throws ApiException {
      return teamUpdateWithHttpInfo(teamUpdateRequest);
    }
  }

  /**
   * Update Team
   * Updates the name of your Team.
   * @return teamUpdateRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIteamUpdateRequest teamUpdate() throws ApiException {
    return new APIteamUpdateRequest();
  }
}
