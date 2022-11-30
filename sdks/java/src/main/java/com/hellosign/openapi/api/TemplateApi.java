package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiResponse;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.Pair;

import javax.ws.rs.core.GenericType;

import com.hellosign.openapi.model.ErrorResponse;
import java.io.File;
import com.hellosign.openapi.model.FileResponse;
import com.hellosign.openapi.model.FileResponseDataUri;
import com.hellosign.openapi.model.TemplateAddUserRequest;
import com.hellosign.openapi.model.TemplateCreateEmbeddedDraftRequest;
import com.hellosign.openapi.model.TemplateCreateEmbeddedDraftResponse;
import com.hellosign.openapi.model.TemplateGetResponse;
import com.hellosign.openapi.model.TemplateListResponse;
import com.hellosign.openapi.model.TemplateRemoveUserRequest;
import com.hellosign.openapi.model.TemplateUpdateFilesRequest;
import com.hellosign.openapi.model.TemplateUpdateFilesResponse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class TemplateApi {
  private ApiClient apiClient;

  public TemplateApi() {
    this(Configuration.getDefaultApiClient());
  }

  public TemplateApi(ApiClient apiClient) {
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
   * Add User to Template
   * Gives the specified Account access to the specified Template. The specified Account must be a part of your Team.
   * @param templateId The id of the Template to give the Account access to. (required)
   * @param templateAddUserRequest  (required)
   * @return TemplateGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public TemplateGetResponse templateAddUser(String templateId, TemplateAddUserRequest templateAddUserRequest) throws ApiException {
    return templateAddUserWithHttpInfo(templateId, templateAddUserRequest).getData();
  }

  /**
   * Add User to Template
   * Gives the specified Account access to the specified Template. The specified Account must be a part of your Team.
   * @param templateId The id of the Template to give the Account access to. (required)
   * @param templateAddUserRequest  (required)
   * @return ApiResponse&lt;TemplateGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<TemplateGetResponse> templateAddUserWithHttpInfo(String templateId, TemplateAddUserRequest templateAddUserRequest) throws ApiException {
    
    Object localVarPostBody = templateAddUserRequest;
    
    // verify the required parameter 'templateId' is set
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateAddUser");
    }
    
    // verify the required parameter 'templateAddUserRequest' is set
    if (templateAddUserRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'templateAddUserRequest' when calling templateAddUser");
    }
    
    // create path and map variables
    String localVarPath = "/template/add_user/{template_id}"
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

    localVarFormParams = templateAddUserRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TemplateGetResponse> localVarReturnType = new GenericType<TemplateGetResponse>() {};

    return apiClient.invokeAPI("TemplateApi.templateAddUser", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Create Embedded Template Draft
   * The first step in an embedded template workflow. Creates a draft template that can then be further set up in the template &#39;edit&#39; stage.
   * @param templateCreateEmbeddedDraftRequest  (required)
   * @return TemplateCreateEmbeddedDraftResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public TemplateCreateEmbeddedDraftResponse templateCreateEmbeddedDraft(TemplateCreateEmbeddedDraftRequest templateCreateEmbeddedDraftRequest) throws ApiException {
    return templateCreateEmbeddedDraftWithHttpInfo(templateCreateEmbeddedDraftRequest).getData();
  }

  /**
   * Create Embedded Template Draft
   * The first step in an embedded template workflow. Creates a draft template that can then be further set up in the template &#39;edit&#39; stage.
   * @param templateCreateEmbeddedDraftRequest  (required)
   * @return ApiResponse&lt;TemplateCreateEmbeddedDraftResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<TemplateCreateEmbeddedDraftResponse> templateCreateEmbeddedDraftWithHttpInfo(TemplateCreateEmbeddedDraftRequest templateCreateEmbeddedDraftRequest) throws ApiException {
    
    Object localVarPostBody = templateCreateEmbeddedDraftRequest;
    
    // verify the required parameter 'templateCreateEmbeddedDraftRequest' is set
    if (templateCreateEmbeddedDraftRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'templateCreateEmbeddedDraftRequest' when calling templateCreateEmbeddedDraft");
    }
    
    // create path and map variables
    String localVarPath = "/template/create_embedded_draft";

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

    localVarFormParams = templateCreateEmbeddedDraftRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TemplateCreateEmbeddedDraftResponse> localVarReturnType = new GenericType<TemplateCreateEmbeddedDraftResponse>() {};

    return apiClient.invokeAPI("TemplateApi.templateCreateEmbeddedDraft", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Delete Template
   * Completely deletes the template specified from the account.
   * @param templateId The id of the Template to delete. (required)
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public void templateDelete(String templateId) throws ApiException {
    templateDeleteWithHttpInfo(templateId);
  }

  /**
   * Delete Template
   * Completely deletes the template specified from the account.
   * @param templateId The id of the Template to delete. (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<Void> templateDeleteWithHttpInfo(String templateId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'templateId' is set
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateDelete");
    }
    
    // create path and map variables
    String localVarPath = "/template/delete/{template_id}"
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
      
    };

    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    return apiClient.invokeAPI("TemplateApi.templateDelete", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, null, false);
  }
  /**
   * Get Template Files
   * Obtain a copy of the current documents specified by the &#x60;template_id&#x60; parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead. In this case please wait for the &#x60;template_created&#x60; callback event.
   * @param templateId The id of the template files to retrieve. (required)
   * @param fileType Set to &#x60;pdf&#x60; for a single merged document or &#x60;zip&#x60; for a collection of individual documents. (optional)
   * @return File
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public File templateFiles(String templateId, String fileType) throws ApiException {
    return templateFilesWithHttpInfo(templateId, fileType).getData();
  }

  /**
   * Get Template Files
   * Obtain a copy of the current documents specified by the &#x60;template_id&#x60; parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead. In this case please wait for the &#x60;template_created&#x60; callback event.
   * @param templateId The id of the template files to retrieve. (required)
   * @param fileType Set to &#x60;pdf&#x60; for a single merged document or &#x60;zip&#x60; for a collection of individual documents. (optional)
   * @return ApiResponse&lt;File&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<File> templateFilesWithHttpInfo(String templateId, String fileType) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'templateId' is set
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateFiles");
    }
    
    // create path and map variables
    String localVarPath = "/template/files/{template_id}"
      .replaceAll("\\{" + "template_id" + "\\}", apiClient.escapeString(templateId.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "file_type", fileType));

    
    
    
    final String[] localVarAccepts = {
      "application/pdf", "application/zip", "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };

    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<File> localVarReturnType = new GenericType<File>() {};

    return apiClient.invokeAPI("TemplateApi.templateFiles", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Get Template Files as Data Uri
   * Obtain a copy of the current documents specified by the &#x60;template_id&#x60; parameter. Returns a JSON object with a &#x60;data_uri&#x60; representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead. In this case please wait for the &#x60;template_created&#x60; callback event.
   * @param templateId The id of the template files to retrieve. (required)
   * @return FileResponseDataUri
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FileResponseDataUri templateFilesAsDataUri(String templateId) throws ApiException {
    return templateFilesAsDataUriWithHttpInfo(templateId).getData();
  }

  /**
   * Get Template Files as Data Uri
   * Obtain a copy of the current documents specified by the &#x60;template_id&#x60; parameter. Returns a JSON object with a &#x60;data_uri&#x60; representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead. In this case please wait for the &#x60;template_created&#x60; callback event.
   * @param templateId The id of the template files to retrieve. (required)
   * @return ApiResponse&lt;FileResponseDataUri&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FileResponseDataUri> templateFilesAsDataUriWithHttpInfo(String templateId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'templateId' is set
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateFilesAsDataUri");
    }
    
    // create path and map variables
    String localVarPath = "/template/files_as_data_uri/{template_id}"
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
      
    };

    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<FileResponseDataUri> localVarReturnType = new GenericType<FileResponseDataUri>() {};

    return apiClient.invokeAPI("TemplateApi.templateFilesAsDataUri", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Get Template Files as File Url
   * Obtain a copy of the current documents specified by the &#x60;template_id&#x60; parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead. In this case please wait for the &#x60;template_created&#x60; callback event.
   * @param templateId The id of the template files to retrieve. (required)
   * @return FileResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FileResponse templateFilesAsFileUrl(String templateId) throws ApiException {
    return templateFilesAsFileUrlWithHttpInfo(templateId).getData();
  }

  /**
   * Get Template Files as File Url
   * Obtain a copy of the current documents specified by the &#x60;template_id&#x60; parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead. In this case please wait for the &#x60;template_created&#x60; callback event.
   * @param templateId The id of the template files to retrieve. (required)
   * @return ApiResponse&lt;FileResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FileResponse> templateFilesAsFileUrlWithHttpInfo(String templateId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'templateId' is set
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateFilesAsFileUrl");
    }
    
    // create path and map variables
    String localVarPath = "/template/files_as_file_url/{template_id}"
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
      
    };

    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<FileResponse> localVarReturnType = new GenericType<FileResponse>() {};

    return apiClient.invokeAPI("TemplateApi.templateFilesAsFileUrl", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Get Template
   * Returns the Template specified by the &#x60;template_id&#x60; parameter.
   * @param templateId The id of the Template to retrieve. (required)
   * @return TemplateGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public TemplateGetResponse templateGet(String templateId) throws ApiException {
    return templateGetWithHttpInfo(templateId).getData();
  }

  /**
   * Get Template
   * Returns the Template specified by the &#x60;template_id&#x60; parameter.
   * @param templateId The id of the Template to retrieve. (required)
   * @return ApiResponse&lt;TemplateGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<TemplateGetResponse> templateGetWithHttpInfo(String templateId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'templateId' is set
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateGet");
    }
    
    // create path and map variables
    String localVarPath = "/template/{template_id}"
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
      
    };

    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TemplateGetResponse> localVarReturnType = new GenericType<TemplateGetResponse>() {};

    return apiClient.invokeAPI("TemplateApi.templateGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * List Templates
   * Returns a list of the Templates that are accessible by you.  Take a look at our [search guide](/api/reference/search/) to learn more about querying templates.
   * @param accountId Which account to return Templates for. Must be a team member. Use &#x60;all&#x60; to indicate all team members. Defaults to your account. (optional)
   * @param page Which page number of the Template List to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
   * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
   * @param query String that includes search terms and/or fields to be used to filter the Template objects. (optional)
   * @return TemplateListResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public TemplateListResponse templateList(String accountId, Integer page, Integer pageSize, String query) throws ApiException {
    return templateListWithHttpInfo(accountId, page, pageSize, query).getData();
  }

  /**
   * List Templates
   * Returns a list of the Templates that are accessible by you.  Take a look at our [search guide](/api/reference/search/) to learn more about querying templates.
   * @param accountId Which account to return Templates for. Must be a team member. Use &#x60;all&#x60; to indicate all team members. Defaults to your account. (optional)
   * @param page Which page number of the Template List to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
   * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
   * @param query String that includes search terms and/or fields to be used to filter the Template objects. (optional)
   * @return ApiResponse&lt;TemplateListResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<TemplateListResponse> templateListWithHttpInfo(String accountId, Integer page, Integer pageSize, String query) throws ApiException {
    
    if (page == null) {
        page = 1;
    }
    if (pageSize == null) {
        pageSize = 20;
    }
    Object localVarPostBody = null;
    
    // create path and map variables
    String localVarPath = "/template/list";

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "account_id", accountId));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "page", page));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "page_size", pageSize));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "query", query));

    
    
    
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

    GenericType<TemplateListResponse> localVarReturnType = new GenericType<TemplateListResponse>() {};

    return apiClient.invokeAPI("TemplateApi.templateList", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Remove User from Template
   * Removes the specified Account&#39;s access to the specified Template.
   * @param templateId The id of the Template to remove the Account&#39;s access to. (required)
   * @param templateRemoveUserRequest  (required)
   * @return TemplateGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public TemplateGetResponse templateRemoveUser(String templateId, TemplateRemoveUserRequest templateRemoveUserRequest) throws ApiException {
    return templateRemoveUserWithHttpInfo(templateId, templateRemoveUserRequest).getData();
  }

  /**
   * Remove User from Template
   * Removes the specified Account&#39;s access to the specified Template.
   * @param templateId The id of the Template to remove the Account&#39;s access to. (required)
   * @param templateRemoveUserRequest  (required)
   * @return ApiResponse&lt;TemplateGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<TemplateGetResponse> templateRemoveUserWithHttpInfo(String templateId, TemplateRemoveUserRequest templateRemoveUserRequest) throws ApiException {
    
    Object localVarPostBody = templateRemoveUserRequest;
    
    // verify the required parameter 'templateId' is set
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateRemoveUser");
    }
    
    // verify the required parameter 'templateRemoveUserRequest' is set
    if (templateRemoveUserRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'templateRemoveUserRequest' when calling templateRemoveUser");
    }
    
    // create path and map variables
    String localVarPath = "/template/remove_user/{template_id}"
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

    localVarFormParams = templateRemoveUserRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TemplateGetResponse> localVarReturnType = new GenericType<TemplateGetResponse>() {};

    return apiClient.invokeAPI("TemplateApi.templateRemoveUser", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Update Template Files
   * Overlays a new file with the overlay of an existing template. The new file(s) must:  1. have the same or higher page count 2. the same orientation as the file(s) being replaced.  This will not overwrite or in any way affect the existing template. Both the existing template and new template will be available for use after executing this endpoint. Also note that this will decrement your template quota.  Overlaying new files is asynchronous and a successful call to this endpoint will return 200 OK response if the request passes initial validation checks.  It is recommended that a callback be implemented to listen for the callback event. A &#x60;template_created&#x60; event will be sent when the files are updated or a &#x60;template_error&#x60; event will be sent if there was a problem while updating the files. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the API dashboard and retry the request if necessary.  If the page orientation or page count is different from the original template document, we will notify you with a &#x60;template_error&#x60; [callback event](https://app.hellosign.com/api/eventsAndCallbacksWalkthrough).
   * @param templateId The ID of the template whose files to update. (required)
   * @param templateUpdateFilesRequest  (required)
   * @return TemplateUpdateFilesResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public TemplateUpdateFilesResponse templateUpdateFiles(String templateId, TemplateUpdateFilesRequest templateUpdateFilesRequest) throws ApiException {
    return templateUpdateFilesWithHttpInfo(templateId, templateUpdateFilesRequest).getData();
  }

  /**
   * Update Template Files
   * Overlays a new file with the overlay of an existing template. The new file(s) must:  1. have the same or higher page count 2. the same orientation as the file(s) being replaced.  This will not overwrite or in any way affect the existing template. Both the existing template and new template will be available for use after executing this endpoint. Also note that this will decrement your template quota.  Overlaying new files is asynchronous and a successful call to this endpoint will return 200 OK response if the request passes initial validation checks.  It is recommended that a callback be implemented to listen for the callback event. A &#x60;template_created&#x60; event will be sent when the files are updated or a &#x60;template_error&#x60; event will be sent if there was a problem while updating the files. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the API dashboard and retry the request if necessary.  If the page orientation or page count is different from the original template document, we will notify you with a &#x60;template_error&#x60; [callback event](https://app.hellosign.com/api/eventsAndCallbacksWalkthrough).
   * @param templateId The ID of the template whose files to update. (required)
   * @param templateUpdateFilesRequest  (required)
   * @return ApiResponse&lt;TemplateUpdateFilesResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<TemplateUpdateFilesResponse> templateUpdateFilesWithHttpInfo(String templateId, TemplateUpdateFilesRequest templateUpdateFilesRequest) throws ApiException {
    
    Object localVarPostBody = templateUpdateFilesRequest;
    
    // verify the required parameter 'templateId' is set
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateUpdateFiles");
    }
    
    // verify the required parameter 'templateUpdateFilesRequest' is set
    if (templateUpdateFilesRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'templateUpdateFilesRequest' when calling templateUpdateFiles");
    }
    
    // create path and map variables
    String localVarPath = "/template/update_files/{template_id}"
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
      "application/json", "multipart/form-data"
    };

    localVarFormParams = templateUpdateFilesRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<TemplateUpdateFilesResponse> localVarReturnType = new GenericType<TemplateUpdateFilesResponse>() {};

    return apiClient.invokeAPI("TemplateApi.templateUpdateFiles", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
}
