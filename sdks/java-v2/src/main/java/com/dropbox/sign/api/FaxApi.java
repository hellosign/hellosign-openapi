package com.dropbox.sign.api;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;

import jakarta.ws.rs.core.GenericType;

import com.dropbox.sign.model.ErrorResponse;
import com.dropbox.sign.model.FaxListResponse;
import com.dropbox.sign.model.FaxResponse;
import com.dropbox.sign.model.FaxSendRequest;
import java.io.File;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
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
   * Delete Fax.
   * Deletes the specified Fax from the system.
   * @param faxId Fax ID (required)
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public void deleteFax(String faxId) throws ApiException {
    deleteFaxWithHttpInfo(faxId);
  }


  /**
   * Delete Fax.
   * Deletes the specified Fax from the system.
   * @param faxId Fax ID (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<Void> deleteFaxWithHttpInfo(String faxId) throws ApiException {
    
    // Check required parameters
    if (faxId == null) {
      throw new ApiException(400, "Missing the required parameter 'faxId' when calling deleteFax");
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
        "FaxApi.deleteFax",
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
   * Get Fax.
   * Returns information about fax
   * @param faxId Fax ID (required)
   * @return FaxResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FaxResponse getFaxById(String faxId) throws ApiException {
    return getFaxByIdWithHttpInfo(faxId).getData();
  }


  /**
   * Get Fax.
   * Returns information about fax
   * @param faxId Fax ID (required)
   * @return ApiResponse&lt;FaxResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FaxResponse> getFaxByIdWithHttpInfo(String faxId) throws ApiException {
    
    // Check required parameters
    if (faxId == null) {
      throw new ApiException(400, "Missing the required parameter 'faxId' when calling getFaxById");
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
    GenericType<FaxResponse> localVarReturnType = new GenericType<FaxResponse>() {};
    return apiClient.invokeAPI(
        "FaxApi.getFaxById",
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
   * List Fax Files.
   * Returns list of fax files
   * @param faxId Fax ID (required)
   * @return File
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public File getFaxFiles(String faxId) throws ApiException {
    return getFaxFilesWithHttpInfo(faxId).getData();
  }


  /**
   * List Fax Files.
   * Returns list of fax files
   * @param faxId Fax ID (required)
   * @return ApiResponse&lt;File&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<File> getFaxFilesWithHttpInfo(String faxId) throws ApiException {
    
    // Check required parameters
    if (faxId == null) {
      throw new ApiException(400, "Missing the required parameter 'faxId' when calling getFaxFiles");
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
        "FaxApi.getFaxFiles",
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
   * Lists Faxes.
   * Returns properties of multiple faxes
   * @param page Page (required)
   * @param pageSize Page size (required)
   * @return FaxListResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FaxListResponse listFaxes(Integer page, Integer pageSize) throws ApiException {
    return listFaxesWithHttpInfo(page, pageSize).getData();
  }


  /**
   * Lists Faxes.
   * Returns properties of multiple faxes
   * @param page Page (required)
   * @param pageSize Page size (required)
   * @return ApiResponse&lt;FaxListResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FaxListResponse> listFaxesWithHttpInfo(Integer page, Integer pageSize) throws ApiException {
    
    // Check required parameters
    if (page == null) {
      throw new ApiException(400, "Missing the required parameter 'page' when calling listFaxes");
    }
    if (pageSize == null) {
      throw new ApiException(400, "Missing the required parameter 'pageSize' when calling listFaxes");
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
        "FaxApi.listFaxes",
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
   * Send Fax.
   * Action to prepare and send a fax
   * @param faxSendRequest  (required)
   * @return FaxResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FaxResponse sendFax(FaxSendRequest faxSendRequest) throws ApiException {
    return sendFaxWithHttpInfo(faxSendRequest).getData();
  }


  /**
   * Send Fax.
   * Action to prepare and send a fax
   * @param faxSendRequest  (required)
   * @return ApiResponse&lt;FaxResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FaxResponse> sendFaxWithHttpInfo(FaxSendRequest faxSendRequest) throws ApiException {
    
    // Check required parameters
    if (faxSendRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'faxSendRequest' when calling sendFax");
    }

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = faxSendRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType("application/json");
    String[] localVarAuthNames = new String[] {"api_key"};
    GenericType<FaxResponse> localVarReturnType = new GenericType<FaxResponse>() {};
    return apiClient.invokeAPI(
        "FaxApi.sendFax",
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