package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.model.DocumentFieldDetectionRequest;
import com.dropbox.sign.model.DocumentFieldDetectionResponse;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;
import javax.ws.rs.core.GenericType;

@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.12.0")
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
     * Detect Document Fields Detects form fields in a PDF document using either PDF form
     * annotations or Dropbox Sign text tags.
     *
     * @param documentFieldDetectionRequest (required)
     * @return DocumentFieldDetectionResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public DocumentFieldDetectionResponse documentDetectFields(
            DocumentFieldDetectionRequest documentFieldDetectionRequest) throws ApiException {
        return documentDetectFieldsWithHttpInfo(documentFieldDetectionRequest).getData();
    }

    /**
     * Detect Document Fields Detects form fields in a PDF document using either PDF form
     * annotations or Dropbox Sign text tags.
     *
     * @param documentFieldDetectionRequest (required)
     * @return ApiResponse&lt;DocumentFieldDetectionResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<DocumentFieldDetectionResponse> documentDetectFieldsWithHttpInfo(
            DocumentFieldDetectionRequest documentFieldDetectionRequest) throws ApiException {

        // Check required parameters
        if (documentFieldDetectionRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'documentFieldDetectionRequest' when calling"
                            + " documentDetectFields");
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = documentFieldDetectionRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<DocumentFieldDetectionResponse> localVarReturnType =
                new GenericType<DocumentFieldDetectionResponse>() {};
        return apiClient.invokeAPI(
                "DocumentApi.documentDetectFields",
                "/document/detect_fields",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : documentFieldDetectionRequest,
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
