package com.dropbox.sign.api;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;

import jakarta.ws.rs.core.GenericType;

import com.dropbox.sign.model.BulkSendJobGetResponse;
import com.dropbox.sign.model.BulkSendJobListResponse;
import com.dropbox.sign.model.ErrorResponse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.12.0")
public class BulkSendJobApi {
  private ApiClient apiClient;

  public BulkSendJobApi() {
    this(Configuration.getDefaultApiClient());
  }

  public BulkSendJobApi(ApiClient apiClient) {
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
   * Get Bulk Send Job
   * Returns the status of the BulkSendJob and its SignatureRequests specified by the &#x60;bulk_send_job_id&#x60; parameter.
   * @param bulkSendJobId The id of the BulkSendJob to retrieve. (required)
   * @param page Which page number of the BulkSendJob list to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
   * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is 20. (optional, default to 20)
   * @return BulkSendJobGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public BulkSendJobGetResponse bulkSendJobGet(String bulkSendJobId, Integer page, Integer pageSize) throws ApiException {
    return bulkSendJobGetWithHttpInfo(bulkSendJobId, page, pageSize).getData();
  }


  /**
   * @see BulkSendJobApi#bulkSendJobGet(String, Integer, Integer)
   */
  public BulkSendJobGetResponse bulkSendJobGet(String bulkSendJobId) throws ApiException {
    Integer page = 1;
    Integer pageSize = 20;

    return bulkSendJobGetWithHttpInfo(bulkSendJobId, page, pageSize).getData();
  }

  /**
   * @see BulkSendJobApi#bulkSendJobGetWithHttpInfo(String, Integer, Integer)
   */
  public ApiResponse<BulkSendJobGetResponse> bulkSendJobGetWithHttpInfo(String bulkSendJobId) throws ApiException {
    Integer page = 1;
    Integer pageSize = 20;

    return bulkSendJobGetWithHttpInfo(bulkSendJobId, page, pageSize);
  }

  /**
   * @see BulkSendJobApi#bulkSendJobGet(String, Integer, Integer)
   */
  public BulkSendJobGetResponse bulkSendJobGet(String bulkSendJobId, Integer page) throws ApiException {
    Integer pageSize = 20;

    return bulkSendJobGetWithHttpInfo(bulkSendJobId, page, pageSize).getData();
  }

  /**
   * @see BulkSendJobApi#bulkSendJobGetWithHttpInfo(String, Integer, Integer)
   */
  public ApiResponse<BulkSendJobGetResponse> bulkSendJobGetWithHttpInfo(String bulkSendJobId, Integer page) throws ApiException {
    Integer pageSize = 20;

    return bulkSendJobGetWithHttpInfo(bulkSendJobId, page, pageSize);
  }


  /**
   * Get Bulk Send Job
   * Returns the status of the BulkSendJob and its SignatureRequests specified by the &#x60;bulk_send_job_id&#x60; parameter.
   * @param bulkSendJobId The id of the BulkSendJob to retrieve. (required)
   * @param page Which page number of the BulkSendJob list to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
   * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is 20. (optional, default to 20)
   * @return ApiResponse&lt;BulkSendJobGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<BulkSendJobGetResponse> bulkSendJobGetWithHttpInfo(String bulkSendJobId, Integer page, Integer pageSize) throws ApiException {
    
    if (page == null) {
        page = 1;
    }
    if (pageSize == null) {
        pageSize = 20;
    }
    // Check required parameters
    if (bulkSendJobId == null) {
      throw new ApiException(400, "Missing the required parameter 'bulkSendJobId' when calling bulkSendJobGet");
    }

    // Path parameters
    String localVarPath = "/bulk_send_job/{bulk_send_job_id}"
            .replaceAll("\\{bulk_send_job_id}", apiClient.escapeString(bulkSendJobId.toString()));

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
    GenericType<BulkSendJobGetResponse> localVarReturnType = new GenericType<BulkSendJobGetResponse>() {};
    return apiClient.invokeAPI(
        "BulkSendJobApi.bulkSendJobGet",
        localVarPath,
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
   * List Bulk Send Jobs
   * Returns a list of BulkSendJob that you can access.
   * @param page Which page number of the BulkSendJob List to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
   * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is 20. (optional, default to 20)
   * @return BulkSendJobListResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public BulkSendJobListResponse bulkSendJobList(Integer page, Integer pageSize) throws ApiException {
    return bulkSendJobListWithHttpInfo(page, pageSize).getData();
  }


  /**
   * @see BulkSendJobApi#bulkSendJobList(Integer, Integer)
   */
  public BulkSendJobListResponse bulkSendJobList() throws ApiException {
    Integer page = 1;
    Integer pageSize = 20;

    return bulkSendJobListWithHttpInfo(page, pageSize).getData();
  }

  /**
   * @see BulkSendJobApi#bulkSendJobListWithHttpInfo(Integer, Integer)
   */
  public ApiResponse<BulkSendJobListResponse> bulkSendJobListWithHttpInfo() throws ApiException {
    Integer page = 1;
    Integer pageSize = 20;

    return bulkSendJobListWithHttpInfo(page, pageSize);
  }

  /**
   * @see BulkSendJobApi#bulkSendJobList(Integer, Integer)
   */
  public BulkSendJobListResponse bulkSendJobList(Integer page) throws ApiException {
    Integer pageSize = 20;

    return bulkSendJobListWithHttpInfo(page, pageSize).getData();
  }

  /**
   * @see BulkSendJobApi#bulkSendJobListWithHttpInfo(Integer, Integer)
   */
  public ApiResponse<BulkSendJobListResponse> bulkSendJobListWithHttpInfo(Integer page) throws ApiException {
    Integer pageSize = 20;

    return bulkSendJobListWithHttpInfo(page, pageSize);
  }


  /**
   * List Bulk Send Jobs
   * Returns a list of BulkSendJob that you can access.
   * @param page Which page number of the BulkSendJob List to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
   * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is 20. (optional, default to 20)
   * @return ApiResponse&lt;BulkSendJobListResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<BulkSendJobListResponse> bulkSendJobListWithHttpInfo(Integer page, Integer pageSize) throws ApiException {
    
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
    GenericType<BulkSendJobListResponse> localVarReturnType = new GenericType<BulkSendJobListResponse>() {};
    return apiClient.invokeAPI(
        "BulkSendJobApi.bulkSendJobList",
        "/bulk_send_job/list",
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
}