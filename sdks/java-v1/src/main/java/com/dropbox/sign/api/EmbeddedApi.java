package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.model.EmbeddedEditUrlRequest;
import com.dropbox.sign.model.EmbeddedEditUrlResponse;
import com.dropbox.sign.model.EmbeddedSignUrlResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import javax.ws.rs.core.GenericType;

@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.12.0")
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
     * Get Embedded Template Edit URL Retrieves an embedded object containing a template url that
     * can be opened in an iFrame. Note that only templates created via the embedded template
     * process are available to be edited with this endpoint.
     *
     * @param templateId The id of the template to edit. (required)
     * @param embeddedEditUrlRequest (required)
     * @return EmbeddedEditUrlResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public EmbeddedEditUrlResponse embeddedEditUrl(
            String templateId, EmbeddedEditUrlRequest embeddedEditUrlRequest) throws ApiException {
        return embeddedEditUrlWithHttpInfo(templateId, embeddedEditUrlRequest).getData();
    }

    /**
     * Get Embedded Template Edit URL Retrieves an embedded object containing a template url that
     * can be opened in an iFrame. Note that only templates created via the embedded template
     * process are available to be edited with this endpoint.
     *
     * @param templateId The id of the template to edit. (required)
     * @param embeddedEditUrlRequest (required)
     * @return ApiResponse&lt;EmbeddedEditUrlResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<EmbeddedEditUrlResponse> embeddedEditUrlWithHttpInfo(
            String templateId, EmbeddedEditUrlRequest embeddedEditUrlRequest) throws ApiException {

        // Check required parameters
        if (templateId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'templateId' when calling embeddedEditUrl");
        }
        if (embeddedEditUrlRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'embeddedEditUrlRequest' when calling"
                            + " embeddedEditUrl");
        }

        // Path parameters
        String localVarPath =
                "/embedded/edit_url/{template_id}"
                        .replaceAll(
                                "\\{template_id}", apiClient.escapeString(templateId.toString()));

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = embeddedEditUrlRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType("application/json");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<EmbeddedEditUrlResponse> localVarReturnType =
                new GenericType<EmbeddedEditUrlResponse>() {};
        return apiClient.invokeAPI(
                "EmbeddedApi.embeddedEditUrl",
                localVarPath,
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : embeddedEditUrlRequest,
                new LinkedHashMap<>(),
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }

    /**
     * Get Embedded Sign URL Retrieves an embedded object containing a signature url that can be
     * opened in an iFrame. Note that templates created via the embedded template process will only
     * be accessible through the API.
     *
     * @param signatureId The id of the signature to get a signature url for. (required)
     * @return EmbeddedSignUrlResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public EmbeddedSignUrlResponse embeddedSignUrl(String signatureId) throws ApiException {
        return embeddedSignUrlWithHttpInfo(signatureId).getData();
    }

    /**
     * Get Embedded Sign URL Retrieves an embedded object containing a signature url that can be
     * opened in an iFrame. Note that templates created via the embedded template process will only
     * be accessible through the API.
     *
     * @param signatureId The id of the signature to get a signature url for. (required)
     * @return ApiResponse&lt;EmbeddedSignUrlResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<EmbeddedSignUrlResponse> embeddedSignUrlWithHttpInfo(String signatureId)
            throws ApiException {

        // Check required parameters
        if (signatureId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureId' when calling embeddedSignUrl");
        }

        // Path parameters
        String localVarPath =
                "/embedded/sign_url/{signature_id}"
                        .replaceAll(
                                "\\{signature_id}", apiClient.escapeString(signatureId.toString()));

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = new HashMap<String, Object>();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound ? "multipart/form-data" : apiClient.selectHeaderContentType();
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<EmbeddedSignUrlResponse> localVarReturnType =
                new GenericType<EmbeddedSignUrlResponse>() {};
        return apiClient.invokeAPI(
                "EmbeddedApi.embeddedSignUrl",
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
                false);
    }
}
