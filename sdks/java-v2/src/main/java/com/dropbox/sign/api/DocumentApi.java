package com.dropbox.sign.api;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;

import jakarta.ws.rs.core.GenericType;

import com.dropbox.sign.model.DocumentFieldDetectionResponse;
import com.dropbox.sign.model.ErrorResponse;
import java.io.File;
import java.net.URI;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.12.0")
public class DocumentApi {
  private ApiClient apiClient;

  public DocumentApi() {
    this(Configuration.getDefaultApiClient());
  }

  public DocumentApi(ApiClient apiClient) {
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
   * Detect Document Fields
   * Detects form fields in a PDF document using either PDF form annotations or Dropbox Sign text tags.
   * Example: https://github.com/hellosign/dropbox-sign-java/blob/main/examples/DocumentDetectFieldsExample.java
   * @param detectionMode The field detection method to use. Set to &#x60;annotations&#x60; to detect PDF form annotations or &#x60;text_tags&#x60; to detect Dropbox Sign text tags. (required)
   * @param _file The PDF file to analyze.  This endpoint requires either &#x60;file&#x60; or &#x60;file_url&#x60;, but not both. (optional)
   * @param fileUrl The URL of the PDF file to analyze.  This endpoint requires either &#x60;file&#x60; or &#x60;file_url&#x60;, but not both. (optional)
   * @param pageRange The zero-based page indexes to analyze. Accepts &#x60;all&#x60;, individual pages, inclusive ranges, or comma-separated combinations, such as &#x60;0-2,5,7-9&#x60;. Defaults to &#x60;all&#x60;. (optional)
   * @return DocumentFieldDetectionResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public DocumentFieldDetectionResponse documentDetectFields(String detectionMode, File _file, URI fileUrl, String pageRange) throws ApiException {
    return documentDetectFieldsWithHttpInfo(detectionMode, _file, fileUrl, pageRange).getData();
  }


  /**
   * @see DocumentApi#documentDetectFields(String, File, URI, String)
   */
  public DocumentFieldDetectionResponse documentDetectFields(String detectionMode) throws ApiException {
    File _file = null;
    URI fileUrl = null;
    String pageRange = null;

    return documentDetectFieldsWithHttpInfo(detectionMode, _file, fileUrl, pageRange).getData();
  }

  /**
   * @see DocumentApi#documentDetectFieldsWithHttpInfo(String, File, URI, String)
   */
  public ApiResponse<DocumentFieldDetectionResponse> documentDetectFieldsWithHttpInfo(String detectionMode) throws ApiException {
    File _file = null;
    URI fileUrl = null;
    String pageRange = null;

    return documentDetectFieldsWithHttpInfo(detectionMode, _file, fileUrl, pageRange);
  }

  /**
   * @see DocumentApi#documentDetectFields(String, File, URI, String)
   */
  public DocumentFieldDetectionResponse documentDetectFields(String detectionMode, File _file) throws ApiException {
    URI fileUrl = null;
    String pageRange = null;

    return documentDetectFieldsWithHttpInfo(detectionMode, _file, fileUrl, pageRange).getData();
  }

  /**
   * @see DocumentApi#documentDetectFieldsWithHttpInfo(String, File, URI, String)
   */
  public ApiResponse<DocumentFieldDetectionResponse> documentDetectFieldsWithHttpInfo(String detectionMode, File _file) throws ApiException {
    URI fileUrl = null;
    String pageRange = null;

    return documentDetectFieldsWithHttpInfo(detectionMode, _file, fileUrl, pageRange);
  }

  /**
   * @see DocumentApi#documentDetectFields(String, File, URI, String)
   */
  public DocumentFieldDetectionResponse documentDetectFields(String detectionMode, File _file, URI fileUrl) throws ApiException {
    String pageRange = null;

    return documentDetectFieldsWithHttpInfo(detectionMode, _file, fileUrl, pageRange).getData();
  }

  /**
   * @see DocumentApi#documentDetectFieldsWithHttpInfo(String, File, URI, String)
   */
  public ApiResponse<DocumentFieldDetectionResponse> documentDetectFieldsWithHttpInfo(String detectionMode, File _file, URI fileUrl) throws ApiException {
    String pageRange = null;

    return documentDetectFieldsWithHttpInfo(detectionMode, _file, fileUrl, pageRange);
  }


  /**
   * Detect Document Fields
   * Detects form fields in a PDF document using either PDF form annotations or Dropbox Sign text tags.
   * Example: https://github.com/hellosign/dropbox-sign-java/blob/main/examples/DocumentDetectFieldsExample.java
   * @param detectionMode The field detection method to use. Set to &#x60;annotations&#x60; to detect PDF form annotations or &#x60;text_tags&#x60; to detect Dropbox Sign text tags. (required)
   * @param _file The PDF file to analyze.  This endpoint requires either &#x60;file&#x60; or &#x60;file_url&#x60;, but not both. (optional)
   * @param fileUrl The URL of the PDF file to analyze.  This endpoint requires either &#x60;file&#x60; or &#x60;file_url&#x60;, but not both. (optional)
   * @param pageRange The zero-based page indexes to analyze. Accepts &#x60;all&#x60;, individual pages, inclusive ranges, or comma-separated combinations, such as &#x60;0-2,5,7-9&#x60;. Defaults to &#x60;all&#x60;. (optional)
   * @return ApiResponse&lt;DocumentFieldDetectionResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table border="1">
       <caption>Response Details</caption>
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<DocumentFieldDetectionResponse> documentDetectFieldsWithHttpInfo(String detectionMode, File _file, URI fileUrl, String pageRange) throws ApiException {
    
    // Check required parameters
    if (detectionMode == null) {
      throw new ApiException(400, "Missing the required parameter 'detectionMode' when calling documentDetectFields");
    }

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType("multipart/form-data");
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<DocumentFieldDetectionResponse> localVarReturnType = new GenericType<DocumentFieldDetectionResponse>() {};
    return apiClient.invokeAPI(
        "DocumentApi.documentDetectFields",
        "/document/detect_fields",
        "POST",
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
}