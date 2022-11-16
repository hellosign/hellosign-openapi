package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiResponse;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.Pair;

import javax.ws.rs.core.GenericType;

import com.hellosign.openapi.model.EmbeddedEditUrlRequest;
import com.hellosign.openapi.model.EmbeddedEditUrlResponse;
import com.hellosign.openapi.model.EmbeddedSignUrlResponse;
import com.hellosign.openapi.model.ErrorResponse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class EmbeddedApi {
  private ApiClient apiClient;

  public EmbeddedApi() {
    this(Configuration.getDefaultApiClient());
  }

  public EmbeddedApi(ApiClient apiClient) {
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
   * Get Embedded Template Edit URL
   * Retrieves an embedded object containing a template url that can be opened in an iFrame. Note that only templates created via the embedded template process are available to be edited with this endpoint.
   * @param templateId The id of the template to edit. (required)
   * @param embeddedEditUrlRequest  (required)
   * @return EmbeddedEditUrlResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public EmbeddedEditUrlResponse embeddedEditUrl(String templateId, EmbeddedEditUrlRequest embeddedEditUrlRequest) throws ApiException {
    return embeddedEditUrlWithHttpInfo(templateId, embeddedEditUrlRequest).getData();
  }

  /**
   * Get Embedded Template Edit URL
   * Retrieves an embedded object containing a template url that can be opened in an iFrame. Note that only templates created via the embedded template process are available to be edited with this endpoint.
   * @param templateId The id of the template to edit. (required)
   * @param embeddedEditUrlRequest  (required)
   * @return ApiResponse&lt;EmbeddedEditUrlResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<EmbeddedEditUrlResponse> embeddedEditUrlWithHttpInfo(String templateId, EmbeddedEditUrlRequest embeddedEditUrlRequest) throws ApiException {
    
    Object localVarPostBody = embeddedEditUrlRequest;
    
    // verify the required parameter 'templateId' is set
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling embeddedEditUrl");
    }
    
    // verify the required parameter 'embeddedEditUrlRequest' is set
    if (embeddedEditUrlRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'embeddedEditUrlRequest' when calling embeddedEditUrl");
    }
    
    // create path and map variables
    String localVarPath = "/embedded/edit_url/{template_id}"
      .replaceAll("\\{" + "template_id" + "\\}", apiClient.escapeString(templateId.toString()));

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

    localVarFormParams = embeddedEditUrlRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<EmbeddedEditUrlResponse> localVarReturnType = new GenericType<EmbeddedEditUrlResponse>() {};

    return apiClient.invokeAPI("EmbeddedApi.embeddedEditUrl", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Get Embedded Sign URL
   * Retrieves an embedded object containing a signature url that can be opened in an iFrame. Note that templates created via the embedded template process will only be accessible through the API.
   * @param signatureId The id of the signature to get a signature url for. (required)
   * @return EmbeddedSignUrlResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public EmbeddedSignUrlResponse embeddedSignUrl(String signatureId) throws ApiException {
    return embeddedSignUrlWithHttpInfo(signatureId).getData();
  }

  /**
   * Get Embedded Sign URL
   * Retrieves an embedded object containing a signature url that can be opened in an iFrame. Note that templates created via the embedded template process will only be accessible through the API.
   * @param signatureId The id of the signature to get a signature url for. (required)
   * @return ApiResponse&lt;EmbeddedSignUrlResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<EmbeddedSignUrlResponse> embeddedSignUrlWithHttpInfo(String signatureId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'signatureId' is set
    if (signatureId == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureId' when calling embeddedSignUrl");
    }
    
    // create path and map variables
    String localVarPath = "/embedded/sign_url/{signature_id}"
      .replaceAll("\\{" + "signature_id" + "\\}", apiClient.escapeString(signatureId.toString()));

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

    GenericType<EmbeddedSignUrlResponse> localVarReturnType = new GenericType<EmbeddedSignUrlResponse>() {};

    return apiClient.invokeAPI("EmbeddedApi.embeddedSignUrl", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
}
