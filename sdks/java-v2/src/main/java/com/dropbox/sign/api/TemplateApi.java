package com.dropbox.sign.api;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;

import jakarta.ws.rs.core.GenericType;

import com.dropbox.sign.model.ErrorResponse;
import java.io.File;
import com.dropbox.sign.model.FileResponse;
import com.dropbox.sign.model.FileResponseDataUri;
import com.dropbox.sign.model.TemplateAddUserRequest;
import com.dropbox.sign.model.TemplateCreateEmbeddedDraftRequest;
import com.dropbox.sign.model.TemplateCreateEmbeddedDraftResponse;
import com.dropbox.sign.model.TemplateCreateRequest;
import com.dropbox.sign.model.TemplateCreateResponse;
import com.dropbox.sign.model.TemplateGetResponse;
import com.dropbox.sign.model.TemplateListResponse;
import com.dropbox.sign.model.TemplateRemoveUserRequest;
import com.dropbox.sign.model.TemplateUpdateFilesRequest;
import com.dropbox.sign.model.TemplateUpdateFilesResponse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.8.0")
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
    
    // Check required parameters
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateAddUser");
    }
    if (templateAddUserRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'templateAddUserRequest' when calling templateAddUser");
    }

    // Path parameters
    String localVarPath = "/template/add_user/{template_id}"
            .replaceAll("\\{template_id}", apiClient.escapeString(templateId.toString()));

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = templateAddUserRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType("application/json");
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<TemplateGetResponse> localVarReturnType = new GenericType<TemplateGetResponse>() {};
    return apiClient.invokeAPI(
        "TemplateApi.templateAddUser",
        localVarPath,
        "POST",
        new ArrayList<>(),
        isFileTypeFound ? null : templateAddUserRequest,
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
   * Create  Template
   * Creates a template that can then be used.
   * @param templateCreateRequest  (required)
   * @return TemplateCreateResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public TemplateCreateResponse templateCreate(TemplateCreateRequest templateCreateRequest) throws ApiException {
    return templateCreateWithHttpInfo(templateCreateRequest).getData();
  }


  /**
   * Create  Template
   * Creates a template that can then be used.
   * @param templateCreateRequest  (required)
   * @return ApiResponse&lt;TemplateCreateResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<TemplateCreateResponse> templateCreateWithHttpInfo(TemplateCreateRequest templateCreateRequest) throws ApiException {
    
    // Check required parameters
    if (templateCreateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'templateCreateRequest' when calling templateCreate");
    }

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = templateCreateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType("application/json", "multipart/form-data");
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<TemplateCreateResponse> localVarReturnType = new GenericType<TemplateCreateResponse>() {};
    return apiClient.invokeAPI(
        "TemplateApi.templateCreate",
        "/template/create",
        "POST",
        new ArrayList<>(),
        isFileTypeFound ? null : templateCreateRequest,
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
    
    // Check required parameters
    if (templateCreateEmbeddedDraftRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'templateCreateEmbeddedDraftRequest' when calling templateCreateEmbeddedDraft");
    }

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = templateCreateEmbeddedDraftRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType("application/json", "multipart/form-data");
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<TemplateCreateEmbeddedDraftResponse> localVarReturnType = new GenericType<TemplateCreateEmbeddedDraftResponse>() {};
    return apiClient.invokeAPI(
        "TemplateApi.templateCreateEmbeddedDraft",
        "/template/create_embedded_draft",
        "POST",
        new ArrayList<>(),
        isFileTypeFound ? null : templateCreateEmbeddedDraftRequest,
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
    
    // Check required parameters
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateDelete");
    }

    // Path parameters
    String localVarPath = "/template/delete/{template_id}"
            .replaceAll("\\{template_id}", apiClient.escapeString(templateId.toString()));

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType();
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    return apiClient.invokeAPI(
        "TemplateApi.templateDelete",
        localVarPath,
        "POST",
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
   * @see TemplateApi#templateFiles(String, String)
   */
  public File templateFiles(String templateId) throws ApiException {
    String fileType = null;

    return templateFilesWithHttpInfo(templateId, fileType).getData();
  }

  /**
   * @see TemplateApi#templateFilesWithHttpInfo(String, String)
   */
  public ApiResponse<File> templateFilesWithHttpInfo(String templateId) throws ApiException {
    String fileType = null;

    return templateFilesWithHttpInfo(templateId, fileType);
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
    
    // Check required parameters
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateFiles");
    }

    // Path parameters
    String localVarPath = "/template/files/{template_id}"
            .replaceAll("\\{template_id}", apiClient.escapeString(templateId.toString()));

    // Query parameters
    List<Pair> localVarQueryParams = new ArrayList<>(
            apiClient.parameterToPairs("", "file_type", fileType)
    );

    String localVarAccept = apiClient.selectHeaderAccept("application/pdf", "application/zip", "application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType();
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<File> localVarReturnType = new GenericType<File>() {};
    return apiClient.invokeAPI(
        "TemplateApi.templateFiles",
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
    
    // Check required parameters
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateFilesAsDataUri");
    }

    // Path parameters
    String localVarPath = "/template/files_as_data_uri/{template_id}"
            .replaceAll("\\{template_id}", apiClient.escapeString(templateId.toString()));

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType();
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<FileResponseDataUri> localVarReturnType = new GenericType<FileResponseDataUri>() {};
    return apiClient.invokeAPI(
        "TemplateApi.templateFilesAsDataUri",
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
   * Get Template Files as File Url
   * Obtain a copy of the current documents specified by the &#x60;template_id&#x60; parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead. In this case please wait for the &#x60;template_created&#x60; callback event.
   * @param templateId The id of the template files to retrieve. (required)
   * @param forceDownload By default when opening the &#x60;file_url&#x60; a browser will download the PDF and save it locally. When set to &#x60;0&#x60; the PDF file will be displayed in the browser. (optional, default to 1)
   * @return FileResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FileResponse templateFilesAsFileUrl(String templateId, Integer forceDownload) throws ApiException {
    return templateFilesAsFileUrlWithHttpInfo(templateId, forceDownload).getData();
  }


  /**
   * @see TemplateApi#templateFilesAsFileUrl(String, Integer)
   */
  public FileResponse templateFilesAsFileUrl(String templateId) throws ApiException {
    Integer forceDownload = 1;

    return templateFilesAsFileUrlWithHttpInfo(templateId, forceDownload).getData();
  }

  /**
   * @see TemplateApi#templateFilesAsFileUrlWithHttpInfo(String, Integer)
   */
  public ApiResponse<FileResponse> templateFilesAsFileUrlWithHttpInfo(String templateId) throws ApiException {
    Integer forceDownload = 1;

    return templateFilesAsFileUrlWithHttpInfo(templateId, forceDownload);
  }


  /**
   * Get Template Files as File Url
   * Obtain a copy of the current documents specified by the &#x60;template_id&#x60; parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead. In this case please wait for the &#x60;template_created&#x60; callback event.
   * @param templateId The id of the template files to retrieve. (required)
   * @param forceDownload By default when opening the &#x60;file_url&#x60; a browser will download the PDF and save it locally. When set to &#x60;0&#x60; the PDF file will be displayed in the browser. (optional, default to 1)
   * @return ApiResponse&lt;FileResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FileResponse> templateFilesAsFileUrlWithHttpInfo(String templateId, Integer forceDownload) throws ApiException {
    
    if (forceDownload == null) {
        forceDownload = 1;
    }
    // Check required parameters
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateFilesAsFileUrl");
    }

    // Path parameters
    String localVarPath = "/template/files_as_file_url/{template_id}"
            .replaceAll("\\{template_id}", apiClient.escapeString(templateId.toString()));

    // Query parameters
    List<Pair> localVarQueryParams = new ArrayList<>(
            apiClient.parameterToPairs("", "force_download", forceDownload)
    );

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType();
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<FileResponse> localVarReturnType = new GenericType<FileResponse>() {};
    return apiClient.invokeAPI(
        "TemplateApi.templateFilesAsFileUrl",
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
    
    // Check required parameters
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateGet");
    }

    // Path parameters
    String localVarPath = "/template/{template_id}"
            .replaceAll("\\{template_id}", apiClient.escapeString(templateId.toString()));

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType();
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<TemplateGetResponse> localVarReturnType = new GenericType<TemplateGetResponse>() {};
    return apiClient.invokeAPI(
        "TemplateApi.templateGet",
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
   * @see TemplateApi#templateList(String, Integer, Integer, String)
   */
  public TemplateListResponse templateList() throws ApiException {
    String accountId = null;
    Integer page = 1;
    Integer pageSize = 20;
    String query = null;

    return templateListWithHttpInfo(accountId, page, pageSize, query).getData();
  }

  /**
   * @see TemplateApi#templateListWithHttpInfo(String, Integer, Integer, String)
   */
  public ApiResponse<TemplateListResponse> templateListWithHttpInfo() throws ApiException {
    String accountId = null;
    Integer page = 1;
    Integer pageSize = 20;
    String query = null;

    return templateListWithHttpInfo(accountId, page, pageSize, query);
  }

  /**
   * @see TemplateApi#templateList(String, Integer, Integer, String)
   */
  public TemplateListResponse templateList(String accountId) throws ApiException {
    Integer page = 1;
    Integer pageSize = 20;
    String query = null;

    return templateListWithHttpInfo(accountId, page, pageSize, query).getData();
  }

  /**
   * @see TemplateApi#templateListWithHttpInfo(String, Integer, Integer, String)
   */
  public ApiResponse<TemplateListResponse> templateListWithHttpInfo(String accountId) throws ApiException {
    Integer page = 1;
    Integer pageSize = 20;
    String query = null;

    return templateListWithHttpInfo(accountId, page, pageSize, query);
  }

  /**
   * @see TemplateApi#templateList(String, Integer, Integer, String)
   */
  public TemplateListResponse templateList(String accountId, Integer page) throws ApiException {
    Integer pageSize = 20;
    String query = null;

    return templateListWithHttpInfo(accountId, page, pageSize, query).getData();
  }

  /**
   * @see TemplateApi#templateListWithHttpInfo(String, Integer, Integer, String)
   */
  public ApiResponse<TemplateListResponse> templateListWithHttpInfo(String accountId, Integer page) throws ApiException {
    Integer pageSize = 20;
    String query = null;

    return templateListWithHttpInfo(accountId, page, pageSize, query);
  }

  /**
   * @see TemplateApi#templateList(String, Integer, Integer, String)
   */
  public TemplateListResponse templateList(String accountId, Integer page, Integer pageSize) throws ApiException {
    String query = null;

    return templateListWithHttpInfo(accountId, page, pageSize, query).getData();
  }

  /**
   * @see TemplateApi#templateListWithHttpInfo(String, Integer, Integer, String)
   */
  public ApiResponse<TemplateListResponse> templateListWithHttpInfo(String accountId, Integer page, Integer pageSize) throws ApiException {
    String query = null;

    return templateListWithHttpInfo(accountId, page, pageSize, query);
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
    // Query parameters
    List<Pair> localVarQueryParams = new ArrayList<>(
            apiClient.parameterToPairs("", "account_id", accountId)
    );
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "page", page));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "page_size", pageSize));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "query", query));

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = new HashMap<String, Object>();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType();
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<TemplateListResponse> localVarReturnType = new GenericType<TemplateListResponse>() {};
    return apiClient.invokeAPI(
        "TemplateApi.templateList",
        "/template/list",
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
    
    // Check required parameters
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateRemoveUser");
    }
    if (templateRemoveUserRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'templateRemoveUserRequest' when calling templateRemoveUser");
    }

    // Path parameters
    String localVarPath = "/template/remove_user/{template_id}"
            .replaceAll("\\{template_id}", apiClient.escapeString(templateId.toString()));

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = templateRemoveUserRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType("application/json");
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<TemplateGetResponse> localVarReturnType = new GenericType<TemplateGetResponse>() {};
    return apiClient.invokeAPI(
        "TemplateApi.templateRemoveUser",
        localVarPath,
        "POST",
        new ArrayList<>(),
        isFileTypeFound ? null : templateRemoveUserRequest,
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
    
    // Check required parameters
    if (templateId == null) {
      throw new ApiException(400, "Missing the required parameter 'templateId' when calling templateUpdateFiles");
    }
    if (templateUpdateFilesRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'templateUpdateFilesRequest' when calling templateUpdateFiles");
    }

    // Path parameters
    String localVarPath = "/template/update_files/{template_id}"
            .replaceAll("\\{template_id}", apiClient.escapeString(templateId.toString()));

    String localVarAccept = apiClient.selectHeaderAccept("application/json");
    Map<String, Object> localVarFormParams = new LinkedHashMap<>();
    localVarFormParams = templateUpdateFilesRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();
    String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType("application/json", "multipart/form-data");
    String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
    GenericType<TemplateUpdateFilesResponse> localVarReturnType = new GenericType<TemplateUpdateFilesResponse>() {};
    return apiClient.invokeAPI(
        "TemplateApi.templateUpdateFiles",
        localVarPath,
        "POST",
        new ArrayList<>(),
        isFileTypeFound ? null : templateUpdateFilesRequest,
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