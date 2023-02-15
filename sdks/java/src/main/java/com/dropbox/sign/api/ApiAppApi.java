package com.dropbox.sign.api;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;

import javax.ws.rs.core.GenericType;

import com.dropbox.sign.model.ApiAppCreateRequest;
import com.dropbox.sign.model.ApiAppGetResponse;
import com.dropbox.sign.model.ApiAppListResponse;
import com.dropbox.sign.model.ApiAppUpdateRequest;
import com.dropbox.sign.model.ErrorResponse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ApiAppApi {
  private ApiClient apiClient;

  public ApiAppApi() {
    this(Configuration.getDefaultApiClient());
  }

  public ApiAppApi(ApiClient apiClient) {
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


private ApiResponse<ApiAppGetResponse> apiAppCreateWithHttpInfo(ApiAppCreateRequest apiAppCreateRequest) throws ApiException {
    
    Object localVarPostBody = apiAppCreateRequest;
    
    // verify the required parameter 'apiAppCreateRequest' is set
    if (apiAppCreateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'apiAppCreateRequest' when calling apiAppCreate");
    }
    
    // create path and map variables
    String localVarPath = "/api_app";

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
      "application/json", "multipart/form-data"
    };

    localVarFormParams = apiAppCreateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<ApiAppGetResponse> localVarReturnType = new GenericType<ApiAppGetResponse>() {};

    return apiClient.invokeAPI("ApiAppApi.apiAppCreate", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }

  public class APIapiAppCreateRequest {
    private ApiAppCreateRequest apiAppCreateRequest;

    private APIapiAppCreateRequest() {
    }

    /**
     * Set apiAppCreateRequest
     * @param apiAppCreateRequest  (required)
     * @return APIapiAppCreateRequest
     */
    public APIapiAppCreateRequest apiAppCreateRequest(ApiAppCreateRequest apiAppCreateRequest) {
      this.apiAppCreateRequest = apiAppCreateRequest;
      return this;
    }

    /**
     * Execute apiAppCreate request
     * @return ApiAppGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public ApiAppGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute apiAppCreate request with HTTP info returned
     * @return ApiResponse&lt;ApiAppGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<ApiAppGetResponse> executeWithHttpInfo() throws ApiException {
      return apiAppCreateWithHttpInfo(apiAppCreateRequest);
    }
  }

  /**
   * Create API App
   * Creates a new API App.
   * @return apiAppCreateRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIapiAppCreateRequest apiAppCreate() throws ApiException {
    return new APIapiAppCreateRequest();
  }

private ApiResponse<Void> apiAppDeleteWithHttpInfo(String clientId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'clientId' is set
    if (clientId == null) {
      throw new ApiException(400, "Missing the required parameter 'clientId' when calling apiAppDelete");
    }
    
    // create path and map variables
    String localVarPath = "/api_app/{client_id}"
      .replaceAll("\\{" + "client_id" + "\\}", apiClient.escapeString(clientId.toString()));

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

    return apiClient.invokeAPI("ApiAppApi.apiAppDelete", localVarPath, "DELETE", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, null, false);
  }

  public class APIapiAppDeleteRequest {
    private String clientId;

    private APIapiAppDeleteRequest(String clientId) {
      this.clientId = clientId;
    }

    /**
     * Execute apiAppDelete request
     
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 204 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public void execute() throws ApiException {
      this.executeWithHttpInfo().getData();
    }

    /**
     * Execute apiAppDelete request with HTTP info returned
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 204 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<Void> executeWithHttpInfo() throws ApiException {
      return apiAppDeleteWithHttpInfo(clientId);
    }
  }

  /**
   * Delete API App
   * Deletes an API App. Can only be invoked for apps you own.
   * @param clientId The client id of the API App to delete. (required)
   * @return apiAppDeleteRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIapiAppDeleteRequest apiAppDelete(String clientId) throws ApiException {
    return new APIapiAppDeleteRequest(clientId);
  }

private ApiResponse<ApiAppGetResponse> apiAppGetWithHttpInfo(String clientId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'clientId' is set
    if (clientId == null) {
      throw new ApiException(400, "Missing the required parameter 'clientId' when calling apiAppGet");
    }
    
    // create path and map variables
    String localVarPath = "/api_app/{client_id}"
      .replaceAll("\\{" + "client_id" + "\\}", apiClient.escapeString(clientId.toString()));

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

    GenericType<ApiAppGetResponse> localVarReturnType = new GenericType<ApiAppGetResponse>() {};

    return apiClient.invokeAPI("ApiAppApi.apiAppGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }

  public class APIapiAppGetRequest {
    private String clientId;

    private APIapiAppGetRequest(String clientId) {
      this.clientId = clientId;
    }

    /**
     * Execute apiAppGet request
     * @return ApiAppGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public ApiAppGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute apiAppGet request with HTTP info returned
     * @return ApiResponse&lt;ApiAppGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<ApiAppGetResponse> executeWithHttpInfo() throws ApiException {
      return apiAppGetWithHttpInfo(clientId);
    }
  }

  /**
   * Get API App
   * Returns an object with information about an API App.
   * @param clientId The client id of the API App to retrieve. (required)
   * @return apiAppGetRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIapiAppGetRequest apiAppGet(String clientId) throws ApiException {
    return new APIapiAppGetRequest(clientId);
  }

private ApiResponse<ApiAppListResponse> apiAppListWithHttpInfo(Integer page, Integer pageSize) throws ApiException {
    
    if (page == null) {
        page = 1;
    }
    if (pageSize == null) {
        pageSize = 20;
    }
    Object localVarPostBody = null;
    
    // create path and map variables
    String localVarPath = "/api_app/list";

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

    GenericType<ApiAppListResponse> localVarReturnType = new GenericType<ApiAppListResponse>() {};

    return apiClient.invokeAPI("ApiAppApi.apiAppList", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }

  public class APIapiAppListRequest {
    private Integer page;
    private Integer pageSize;

    private APIapiAppListRequest() {
    }

    /**
     * Set page
     * @param page Which page number of the API App List to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
     * @return APIapiAppListRequest
     */
    public APIapiAppListRequest page(Integer page) {
      this.page = page;
      return this;
    }

    /**
     * Set pageSize
     * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
     * @return APIapiAppListRequest
     */
    public APIapiAppListRequest pageSize(Integer pageSize) {
      this.pageSize = pageSize;
      return this;
    }

    /**
     * Execute apiAppList request
     * @return ApiAppListResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public ApiAppListResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute apiAppList request with HTTP info returned
     * @return ApiResponse&lt;ApiAppListResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<ApiAppListResponse> executeWithHttpInfo() throws ApiException {
      return apiAppListWithHttpInfo(page, pageSize);
    }
  }

  /**
   * List API Apps
   * Returns a list of API Apps that are accessible by you. If you are on a team with an Admin or Developer role, this list will include apps owned by teammates.
   * @return apiAppListRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIapiAppListRequest apiAppList() throws ApiException {
    return new APIapiAppListRequest();
  }

private ApiResponse<ApiAppGetResponse> apiAppUpdateWithHttpInfo(String clientId, ApiAppUpdateRequest apiAppUpdateRequest) throws ApiException {
    
    Object localVarPostBody = apiAppUpdateRequest;
    
    // verify the required parameter 'clientId' is set
    if (clientId == null) {
      throw new ApiException(400, "Missing the required parameter 'clientId' when calling apiAppUpdate");
    }
    
    // verify the required parameter 'apiAppUpdateRequest' is set
    if (apiAppUpdateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'apiAppUpdateRequest' when calling apiAppUpdate");
    }
    
    // create path and map variables
    String localVarPath = "/api_app/{client_id}"
      .replaceAll("\\{" + "client_id" + "\\}", apiClient.escapeString(clientId.toString()));

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
      "application/json", "multipart/form-data"
    };

    localVarFormParams = apiAppUpdateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<ApiAppGetResponse> localVarReturnType = new GenericType<ApiAppGetResponse>() {};

    return apiClient.invokeAPI("ApiAppApi.apiAppUpdate", localVarPath, "PUT", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }

  public class APIapiAppUpdateRequest {
    private String clientId;
    private ApiAppUpdateRequest apiAppUpdateRequest;

    private APIapiAppUpdateRequest(String clientId) {
      this.clientId = clientId;
    }

    /**
     * Set apiAppUpdateRequest
     * @param apiAppUpdateRequest  (required)
     * @return APIapiAppUpdateRequest
     */
    public APIapiAppUpdateRequest apiAppUpdateRequest(ApiAppUpdateRequest apiAppUpdateRequest) {
      this.apiAppUpdateRequest = apiAppUpdateRequest;
      return this;
    }

    /**
     * Execute apiAppUpdate request
     * @return ApiAppGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public ApiAppGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute apiAppUpdate request with HTTP info returned
     * @return ApiResponse&lt;ApiAppGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<ApiAppGetResponse> executeWithHttpInfo() throws ApiException {
      return apiAppUpdateWithHttpInfo(clientId, apiAppUpdateRequest);
    }
  }

  /**
   * Update API App
   * Updates an existing API App. Can only be invoked for apps you own. Only the fields you provide will be updated. If you wish to clear an existing optional field, provide an empty string.
   * @param clientId The client id of the API App to update. (required)
   * @return apiAppUpdateRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIapiAppUpdateRequest apiAppUpdate(String clientId) throws ApiException {
    return new APIapiAppUpdateRequest(clientId);
  }
}
