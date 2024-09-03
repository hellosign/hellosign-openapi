package com.dropbox.sign.api;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;

import jakarta.ws.rs.core.GenericType;

import com.dropbox.sign.model.ApiAppCreateRequest;
import com.dropbox.sign.model.ApiAppGetResponse;
import com.dropbox.sign.model.ApiAppListResponse;
import com.dropbox.sign.model.ApiAppUpdateRequest;
import com.dropbox.sign.model.ErrorResponse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
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

  /**
   * Create API App
   * Creates a new API App.
   * @param apiAppCreateRequest  (required)
   * @return ApiAppGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 201 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiAppGetResponse apiAppCreate(ApiAppCreateRequest apiAppCreateRequest) throws ApiException {
    return apiAppCreateWithHttpInfo(apiAppCreateRequest).getData();
  }


  /**
   * Create API App
   * Creates a new API App.
   * @param apiAppCreateRequest  (required)
   * @return ApiResponse&lt;ApiAppGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 201 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<ApiAppGetResponse> apiAppCreateWithHttpInfo(ApiAppCreateRequest apiAppCreateRequest) throws ApiException {
    
    // Check required parameters
    if (apiAppCreateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'apiAppCreateRequest' when calling apiAppCreate");
    }

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = apiAppCreateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType("application/json", "multipart/form-data");
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<ApiAppGetResponse> localVarReturnType = new GenericType<ApiAppGetResponse>() {};
    return apiClient.invokeAPI(
        "ApiAppApi.apiAppCreate",
        "/api_app",
        "POST",
        new ArrayList<>(),
        isFileTypeFound ? null : apiAppCreateRequest,
        new LinkedHashMap<>(),
        new LinkedHashMap<>(),
        localVarFormParams,
        localVarAccept,
        localVarContentType,
        localVarAuthNames,
        localVarReturnType,
        false
    );
  }
  /**
   * Delete API App
   * Deletes an API App. Can only be invoked for apps you own.
   * @param clientId The client id of the API App to delete. (required)
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 204 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public void apiAppDelete(String clientId) throws ApiException {
    apiAppDeleteWithHttpInfo(clientId);
  }


  /**
   * Delete API App
   * Deletes an API App. Can only be invoked for apps you own.
   * @param clientId The client id of the API App to delete. (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 204 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<Void> apiAppDeleteWithHttpInfo(String clientId) throws ApiException {
    
    // Check required parameters
    if (clientId == null) {
      throw new ApiException(400, "Missing the required parameter 'clientId' when calling apiAppDelete");
    }

    // Path parameters
    String localVarPath = "/api_app/{client_id}"
            .replaceAll("\\{client_id}", apiClient.escapeString(clientId.toString()));

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType();
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    return apiClient.invokeAPI(
        "ApiAppApi.apiAppDelete",
        localVarPath,
        "DELETE",
        new ArrayList<>(),
        null,
        new LinkedHashMap<>(),
        new LinkedHashMap<>(),
        localVarFormParams,
        localVarAccept,
        localVarContentType,
        localVarAuthNames,
        null,
        false
    );
  }
  /**
   * Get API App
   * Returns an object with information about an API App.
   * @param clientId The client id of the API App to retrieve. (required)
   * @return ApiAppGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiAppGetResponse apiAppGet(String clientId) throws ApiException {
    return apiAppGetWithHttpInfo(clientId).getData();
  }


  /**
   * Get API App
   * Returns an object with information about an API App.
   * @param clientId The client id of the API App to retrieve. (required)
   * @return ApiResponse&lt;ApiAppGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<ApiAppGetResponse> apiAppGetWithHttpInfo(String clientId) throws ApiException {
    
    // Check required parameters
    if (clientId == null) {
      throw new ApiException(400, "Missing the required parameter 'clientId' when calling apiAppGet");
    }

    // Path parameters
    String localVarPath = "/api_app/{client_id}"
            .replaceAll("\\{client_id}", apiClient.escapeString(clientId.toString()));

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType();
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<ApiAppGetResponse> localVarReturnType = new GenericType<ApiAppGetResponse>() {};
    return apiClient.invokeAPI(
        "ApiAppApi.apiAppGet",
        localVarPath,
        "GET",
        new ArrayList<>(),
        null,
        new LinkedHashMap<>(),
        new LinkedHashMap<>(),
        localVarFormParams,
        localVarAccept,
        localVarContentType,
        localVarAuthNames,
        localVarReturnType,
        false
    );
  }
  /**
   * List API Apps
   * Returns a list of API Apps that are accessible by you. If you are on a team with an Admin or Developer role, this list will include apps owned by teammates.
   * @param page Which page number of the API App List to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
   * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
   * @return ApiAppListResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiAppListResponse apiAppList(Integer page, Integer pageSize) throws ApiException {
    return apiAppListWithHttpInfo(page, pageSize).getData();
  }


  /**
   * @see ApiAppApi#apiAppList(Integer, Integer)
   */
  public ApiAppListResponse apiAppList() throws ApiException {
    Integer page = 1;
    Integer pageSize = 20;

    return apiAppListWithHttpInfo(page, pageSize).getData();
  }

  /**
   * @see ApiAppApi#apiAppListWithHttpInfo(Integer, Integer)
   */
  public ApiResponse<ApiAppListResponse> apiAppListWithHttpInfo() throws ApiException {
    Integer page = 1;
    Integer pageSize = 20;

    return apiAppListWithHttpInfo(page, pageSize);
  }

  /**
   * @see ApiAppApi#apiAppList(Integer, Integer)
   */
  public ApiAppListResponse apiAppList(Integer page) throws ApiException {
    Integer pageSize = 20;

    return apiAppListWithHttpInfo(page, pageSize).getData();
  }

  /**
   * @see ApiAppApi#apiAppListWithHttpInfo(Integer, Integer)
   */
  public ApiResponse<ApiAppListResponse> apiAppListWithHttpInfo(Integer page) throws ApiException {
    Integer pageSize = 20;

    return apiAppListWithHttpInfo(page, pageSize);
  }


  /**
   * List API Apps
   * Returns a list of API Apps that are accessible by you. If you are on a team with an Admin or Developer role, this list will include apps owned by teammates.
   * @param page Which page number of the API App List to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
   * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
   * @return ApiResponse&lt;ApiAppListResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<ApiAppListResponse> apiAppListWithHttpInfo(Integer page, Integer pageSize) throws ApiException {
    
    if (page == null) {
        page = 1;
    }
    if (pageSize == null) {
        pageSize = 20;
    }
    // Query parameters
    List<Pair> localVarQueryParams = new ArrayList<>(
            apiClient.parameterToPairs("", "page", page)
    );
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "page_size", pageSize));

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType();
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<ApiAppListResponse> localVarReturnType = new GenericType<ApiAppListResponse>() {};
    return apiClient.invokeAPI(
        "ApiAppApi.apiAppList",
        "/api_app/list",
        "GET",
        localVarQueryParams,
        null,
        new LinkedHashMap<>(),
        new LinkedHashMap<>(),
        localVarFormParams,
        localVarAccept,
        localVarContentType,
        localVarAuthNames,
        localVarReturnType,
        false
    );
  }
  /**
   * Update API App
   * Updates an existing API App. Can only be invoked for apps you own. Only the fields you provide will be updated. If you wish to clear an existing optional field, provide an empty string.
   * @param clientId The client id of the API App to update. (required)
   * @param apiAppUpdateRequest  (required)
   * @return ApiAppGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiAppGetResponse apiAppUpdate(String clientId, ApiAppUpdateRequest apiAppUpdateRequest) throws ApiException {
    return apiAppUpdateWithHttpInfo(clientId, apiAppUpdateRequest).getData();
  }


  /**
   * Update API App
   * Updates an existing API App. Can only be invoked for apps you own. Only the fields you provide will be updated. If you wish to clear an existing optional field, provide an empty string.
   * @param clientId The client id of the API App to update. (required)
   * @param apiAppUpdateRequest  (required)
   * @return ApiResponse&lt;ApiAppGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<ApiAppGetResponse> apiAppUpdateWithHttpInfo(String clientId, ApiAppUpdateRequest apiAppUpdateRequest) throws ApiException {
    
    // Check required parameters
    if (clientId == null) {
      throw new ApiException(400, "Missing the required parameter 'clientId' when calling apiAppUpdate");
    }
    if (apiAppUpdateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'apiAppUpdateRequest' when calling apiAppUpdate");
    }

    // Path parameters
    String localVarPath = "/api_app/{client_id}"
            .replaceAll("\\{client_id}", apiClient.escapeString(clientId.toString()));

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = apiAppUpdateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType("application/json", "multipart/form-data");
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<ApiAppGetResponse> localVarReturnType = new GenericType<ApiAppGetResponse>() {};
    return apiClient.invokeAPI(
        "ApiAppApi.apiAppUpdate",
        localVarPath,
        "PUT",
        new ArrayList<>(),
        isFileTypeFound ? null : apiAppUpdateRequest,
        new LinkedHashMap<>(),
        new LinkedHashMap<>(),
        localVarFormParams,
        localVarAccept,
        localVarContentType,
        localVarAuthNames,
        localVarReturnType,
        false
    );
  }
}