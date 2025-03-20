package com.dropbox.sign.api;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;

import jakarta.ws.rs.core.GenericType;

import com.dropbox.sign.model.ErrorResponse;
import com.dropbox.sign.model.FaxGetResponse;
import com.dropbox.sign.model.FaxListResponse;
import com.dropbox.sign.model.FaxSendRequest;
import java.io.File;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.12.0")
public class FaxApi {
  private ApiClient apiClient;

  public FaxApi() {
    this(Configuration.getDefaultApiClient());
  }

  public FaxApi(ApiClient apiClient) {
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
   * Delete Fax
   * Deletes the specified Fax from the system
   * @param faxId Fax ID (required)
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 204 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public void faxDelete(String faxId) throws ApiException {
    faxDeleteWithHttpInfo(faxId);
  }


  /**
   * Delete Fax
   * Deletes the specified Fax from the system
   * @param faxId Fax ID (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 204 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<Void> faxDeleteWithHttpInfo(String faxId) throws ApiException {
    
    // Check required parameters
    if (faxId == null) {
      throw new ApiException(400, "Missing the required parameter 'faxId' when calling faxDelete");
    }

    // Path parameters
    String localVarPath = "/fax/{fax_id}"
            .replaceAll("\\{fax_id}", apiClient.escapeString(faxId.toString()));

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType();
    String[] localVarAuthNames = new String[] {"api_key"};
    return apiClient.invokeAPI(
        "FaxApi.faxDelete",
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
   * Download Fax Files
   * Downloads files associated with a Fax
   * @param faxId Fax ID (required)
   * @return File
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public File faxFiles(String faxId) throws ApiException {
    return faxFilesWithHttpInfo(faxId).getData();
  }


  /**
   * Download Fax Files
   * Downloads files associated with a Fax
   * @param faxId Fax ID (required)
   * @return ApiResponse&lt;File&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<File> faxFilesWithHttpInfo(String faxId) throws ApiException {
    
    // Check required parameters
    if (faxId == null) {
      throw new ApiException(400, "Missing the required parameter 'faxId' when calling faxFiles");
    }

    // Path parameters
    String localVarPath = "/fax/files/{fax_id}"
            .replaceAll("\\{fax_id}", apiClient.escapeString(faxId.toString()));

    String localVarAccept = apiClient.selectHeaderAccept("application/pdf", "application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType();
    String[] localVarAuthNames = new String[] {"api_key"};
    GenericType<File> localVarReturnType = new GenericType<File>() {};
    return apiClient.invokeAPI(
        "FaxApi.faxFiles",
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
   * Get Fax
   * Returns information about a Fax
   * @param faxId Fax ID (required)
   * @return FaxGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FaxGetResponse faxGet(String faxId) throws ApiException {
    return faxGetWithHttpInfo(faxId).getData();
  }


  /**
   * Get Fax
   * Returns information about a Fax
   * @param faxId Fax ID (required)
   * @return ApiResponse&lt;FaxGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FaxGetResponse> faxGetWithHttpInfo(String faxId) throws ApiException {
    
    // Check required parameters
    if (faxId == null) {
      throw new ApiException(400, "Missing the required parameter 'faxId' when calling faxGet");
    }

    // Path parameters
    String localVarPath = "/fax/{fax_id}"
            .replaceAll("\\{fax_id}", apiClient.escapeString(faxId.toString()));

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType();
    String[] localVarAuthNames = new String[] {"api_key"};
    GenericType<FaxGetResponse> localVarReturnType = new GenericType<FaxGetResponse>() {};
    return apiClient.invokeAPI(
        "FaxApi.faxGet",
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
   * Lists Faxes
   * Returns properties of multiple Faxes
   * @param page Which page number of the Fax List to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
   * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
   * @return FaxListResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FaxListResponse faxList(Integer page, Integer pageSize) throws ApiException {
    return faxListWithHttpInfo(page, pageSize).getData();
  }


  /**
   * @see FaxApi#faxList(Integer, Integer)
   */
  public FaxListResponse faxList() throws ApiException {
    Integer page = 1;
    Integer pageSize = 20;

    return faxListWithHttpInfo(page, pageSize).getData();
  }

  /**
   * @see FaxApi#faxListWithHttpInfo(Integer, Integer)
   */
  public ApiResponse<FaxListResponse> faxListWithHttpInfo() throws ApiException {
    Integer page = 1;
    Integer pageSize = 20;

    return faxListWithHttpInfo(page, pageSize);
  }

  /**
   * @see FaxApi#faxList(Integer, Integer)
   */
  public FaxListResponse faxList(Integer page) throws ApiException {
    Integer pageSize = 20;

    return faxListWithHttpInfo(page, pageSize).getData();
  }

  /**
   * @see FaxApi#faxListWithHttpInfo(Integer, Integer)
   */
  public ApiResponse<FaxListResponse> faxListWithHttpInfo(Integer page) throws ApiException {
    Integer pageSize = 20;

    return faxListWithHttpInfo(page, pageSize);
  }


  /**
   * Lists Faxes
   * Returns properties of multiple Faxes
   * @param page Which page number of the Fax List to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
   * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
   * @return ApiResponse&lt;FaxListResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FaxListResponse> faxListWithHttpInfo(Integer page, Integer pageSize) throws ApiException {
    
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
    String[] localVarAuthNames = new String[] {"api_key"};
    GenericType<FaxListResponse> localVarReturnType = new GenericType<FaxListResponse>() {};
    return apiClient.invokeAPI(
        "FaxApi.faxList",
        "/fax/list",
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
   * Send Fax
   * Creates and sends a new Fax with the submitted file(s)
   * @param faxSendRequest  (required)
   * @return FaxGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FaxGetResponse faxSend(FaxSendRequest faxSendRequest) throws ApiException {
    return faxSendWithHttpInfo(faxSendRequest).getData();
  }


  /**
   * Send Fax
   * Creates and sends a new Fax with the submitted file(s)
   * @param faxSendRequest  (required)
   * @return ApiResponse&lt;FaxGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FaxGetResponse> faxSendWithHttpInfo(FaxSendRequest faxSendRequest) throws ApiException {
    
    // Check required parameters
    if (faxSendRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'faxSendRequest' when calling faxSend");
    }

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = faxSendRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType("application/json", "multipart/form-data");
    String[] localVarAuthNames = new String[] {"api_key"};
    GenericType<FaxGetResponse> localVarReturnType = new GenericType<FaxGetResponse>() {};
    return apiClient.invokeAPI(
        "FaxApi.faxSend",
        "/fax/send",
        "POST",
        new ArrayList<>(),
        isFileTypeFound ? null : faxSendRequest,
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