package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.model.UnclaimedDraftCreateEmbeddedRequest;
import com.dropbox.sign.model.UnclaimedDraftCreateEmbeddedWithTemplateRequest;
import com.dropbox.sign.model.UnclaimedDraftCreateRequest;
import com.dropbox.sign.model.UnclaimedDraftCreateResponse;
import com.dropbox.sign.model.UnclaimedDraftEditAndResendRequest;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;
import javax.ws.rs.core.GenericType;

@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.8.0")
public class UnclaimedDraftApi {
    private ApiClient apiClient;

    public UnclaimedDraftApi() {
        this(Configuration.getDefaultApiClient());
    }

    public UnclaimedDraftApi(ApiClient apiClient) {
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
     * Create Unclaimed Draft. Creates a new Draft that can be claimed using the claim URL. The
     * first authenticated user to access the URL will claim the Draft and will be shown either the
     * \&quot;Sign and send\&quot; or the \&quot;Request signature\&quot; page with the Draft
     * loaded. Subsequent access to the claim URL will result in a 404.
     *
     * @param unclaimedDraftCreateRequest (required)
     * @return UnclaimedDraftCreateResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table summary="Response Details" border="1">
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public UnclaimedDraftCreateResponse unclaimedDraftCreate(
            UnclaimedDraftCreateRequest unclaimedDraftCreateRequest) throws ApiException {
        return unclaimedDraftCreateWithHttpInfo(unclaimedDraftCreateRequest).getData();
    }

    /**
     * Create Unclaimed Draft. Creates a new Draft that can be claimed using the claim URL. The
     * first authenticated user to access the URL will claim the Draft and will be shown either the
     * \&quot;Sign and send\&quot; or the \&quot;Request signature\&quot; page with the Draft
     * loaded. Subsequent access to the claim URL will result in a 404.
     *
     * @param unclaimedDraftCreateRequest (required)
     * @return ApiResponse&lt;UnclaimedDraftCreateResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table summary="Response Details" border="1">
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<UnclaimedDraftCreateResponse> unclaimedDraftCreateWithHttpInfo(
            UnclaimedDraftCreateRequest unclaimedDraftCreateRequest) throws ApiException {

        // Check required parameters
        if (unclaimedDraftCreateRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'unclaimedDraftCreateRequest' when calling"
                            + " unclaimedDraftCreate");
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = unclaimedDraftCreateRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<UnclaimedDraftCreateResponse> localVarReturnType =
                new GenericType<UnclaimedDraftCreateResponse>() {};
        return apiClient.invokeAPI(
                "UnclaimedDraftApi.unclaimedDraftCreate",
                "/unclaimed_draft/create",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : unclaimedDraftCreateRequest,
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
     * Create Embedded Unclaimed Draft. Creates a new Draft that can be claimed and used in an
     * embedded iFrame. The first authenticated user to access the URL will claim the Draft and will
     * be shown the \&quot;Request signature\&quot; page with the Draft loaded. Subsequent access to
     * the claim URL will result in a &#x60;404&#x60;. For this embedded endpoint the
     * &#x60;requester_email_address&#x60; parameter is required. **NOTE:** Embedded unclaimed
     * drafts can only be accessed in embedded iFrames whereas normal drafts can be used and
     * accessed on Dropbox Sign.
     *
     * @param unclaimedDraftCreateEmbeddedRequest (required)
     * @return UnclaimedDraftCreateResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table summary="Response Details" border="1">
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public UnclaimedDraftCreateResponse unclaimedDraftCreateEmbedded(
            UnclaimedDraftCreateEmbeddedRequest unclaimedDraftCreateEmbeddedRequest)
            throws ApiException {
        return unclaimedDraftCreateEmbeddedWithHttpInfo(unclaimedDraftCreateEmbeddedRequest)
                .getData();
    }

    /**
     * Create Embedded Unclaimed Draft. Creates a new Draft that can be claimed and used in an
     * embedded iFrame. The first authenticated user to access the URL will claim the Draft and will
     * be shown the \&quot;Request signature\&quot; page with the Draft loaded. Subsequent access to
     * the claim URL will result in a &#x60;404&#x60;. For this embedded endpoint the
     * &#x60;requester_email_address&#x60; parameter is required. **NOTE:** Embedded unclaimed
     * drafts can only be accessed in embedded iFrames whereas normal drafts can be used and
     * accessed on Dropbox Sign.
     *
     * @param unclaimedDraftCreateEmbeddedRequest (required)
     * @return ApiResponse&lt;UnclaimedDraftCreateResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table summary="Response Details" border="1">
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<UnclaimedDraftCreateResponse> unclaimedDraftCreateEmbeddedWithHttpInfo(
            UnclaimedDraftCreateEmbeddedRequest unclaimedDraftCreateEmbeddedRequest)
            throws ApiException {

        // Check required parameters
        if (unclaimedDraftCreateEmbeddedRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'unclaimedDraftCreateEmbeddedRequest' when"
                            + " calling unclaimedDraftCreateEmbedded");
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = unclaimedDraftCreateEmbeddedRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<UnclaimedDraftCreateResponse> localVarReturnType =
                new GenericType<UnclaimedDraftCreateResponse>() {};
        return apiClient.invokeAPI(
                "UnclaimedDraftApi.unclaimedDraftCreateEmbedded",
                "/unclaimed_draft/create_embedded",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : unclaimedDraftCreateEmbeddedRequest,
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
     * Create Embedded Unclaimed Draft with Template. Creates a new Draft with a previously saved
     * template(s) that can be claimed and used in an embedded iFrame. The first authenticated user
     * to access the URL will claim the Draft and will be shown the \&quot;Request signature\&quot;
     * page with the Draft loaded. Subsequent access to the claim URL will result in a
     * &#x60;404&#x60;. For this embedded endpoint the &#x60;requester_email_address&#x60; parameter
     * is required. **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames
     * whereas normal drafts can be used and accessed on Dropbox Sign.
     *
     * @param unclaimedDraftCreateEmbeddedWithTemplateRequest (required)
     * @return UnclaimedDraftCreateResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table summary="Response Details" border="1">
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public UnclaimedDraftCreateResponse unclaimedDraftCreateEmbeddedWithTemplate(
            UnclaimedDraftCreateEmbeddedWithTemplateRequest
                    unclaimedDraftCreateEmbeddedWithTemplateRequest)
            throws ApiException {
        return unclaimedDraftCreateEmbeddedWithTemplateWithHttpInfo(
                        unclaimedDraftCreateEmbeddedWithTemplateRequest)
                .getData();
    }

    /**
     * Create Embedded Unclaimed Draft with Template. Creates a new Draft with a previously saved
     * template(s) that can be claimed and used in an embedded iFrame. The first authenticated user
     * to access the URL will claim the Draft and will be shown the \&quot;Request signature\&quot;
     * page with the Draft loaded. Subsequent access to the claim URL will result in a
     * &#x60;404&#x60;. For this embedded endpoint the &#x60;requester_email_address&#x60; parameter
     * is required. **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames
     * whereas normal drafts can be used and accessed on Dropbox Sign.
     *
     * @param unclaimedDraftCreateEmbeddedWithTemplateRequest (required)
     * @return ApiResponse&lt;UnclaimedDraftCreateResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table summary="Response Details" border="1">
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<UnclaimedDraftCreateResponse>
            unclaimedDraftCreateEmbeddedWithTemplateWithHttpInfo(
                    UnclaimedDraftCreateEmbeddedWithTemplateRequest
                            unclaimedDraftCreateEmbeddedWithTemplateRequest)
                    throws ApiException {

        // Check required parameters
        if (unclaimedDraftCreateEmbeddedWithTemplateRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter"
                            + " 'unclaimedDraftCreateEmbeddedWithTemplateRequest' when calling"
                            + " unclaimedDraftCreateEmbeddedWithTemplate");
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = unclaimedDraftCreateEmbeddedWithTemplateRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<UnclaimedDraftCreateResponse> localVarReturnType =
                new GenericType<UnclaimedDraftCreateResponse>() {};
        return apiClient.invokeAPI(
                "UnclaimedDraftApi.unclaimedDraftCreateEmbeddedWithTemplate",
                "/unclaimed_draft/create_embedded_with_template",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : unclaimedDraftCreateEmbeddedWithTemplateRequest,
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
     * Edit and Resend Unclaimed Draft. Creates a new signature request from an embedded request
     * that can be edited prior to being sent to the recipients. Parameter &#x60;test_mode&#x60; can
     * be edited prior to request. Signers can be edited in embedded editor. Requester&#39;s email
     * address will remain unchanged if &#x60;requester_email_address&#x60; parameter is not set.
     * **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal
     * drafts can be used and accessed on Dropbox Sign.
     *
     * @param signatureRequestId The ID of the signature request to edit and resend. (required)
     * @param unclaimedDraftEditAndResendRequest (required)
     * @return UnclaimedDraftCreateResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table summary="Response Details" border="1">
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public UnclaimedDraftCreateResponse unclaimedDraftEditAndResend(
            String signatureRequestId,
            UnclaimedDraftEditAndResendRequest unclaimedDraftEditAndResendRequest)
            throws ApiException {
        return unclaimedDraftEditAndResendWithHttpInfo(
                        signatureRequestId, unclaimedDraftEditAndResendRequest)
                .getData();
    }

    /**
     * Edit and Resend Unclaimed Draft. Creates a new signature request from an embedded request
     * that can be edited prior to being sent to the recipients. Parameter &#x60;test_mode&#x60; can
     * be edited prior to request. Signers can be edited in embedded editor. Requester&#39;s email
     * address will remain unchanged if &#x60;requester_email_address&#x60; parameter is not set.
     * **NOTE:** Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal
     * drafts can be used and accessed on Dropbox Sign.
     *
     * @param signatureRequestId The ID of the signature request to edit and resend. (required)
     * @param unclaimedDraftEditAndResendRequest (required)
     * @return ApiResponse&lt;UnclaimedDraftCreateResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table summary="Response Details" border="1">
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<UnclaimedDraftCreateResponse> unclaimedDraftEditAndResendWithHttpInfo(
            String signatureRequestId,
            UnclaimedDraftEditAndResendRequest unclaimedDraftEditAndResendRequest)
            throws ApiException {

        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " unclaimedDraftEditAndResend");
        }
        if (unclaimedDraftEditAndResendRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'unclaimedDraftEditAndResendRequest' when"
                            + " calling unclaimedDraftEditAndResend");
        }

        // Path parameters
        String localVarPath =
                "/unclaimed_draft/edit_and_resend/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = unclaimedDraftEditAndResendRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType("application/json");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<UnclaimedDraftCreateResponse> localVarReturnType =
                new GenericType<UnclaimedDraftCreateResponse>() {};
        return apiClient.invokeAPI(
                "UnclaimedDraftApi.unclaimedDraftEditAndResend",
                localVarPath,
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : unclaimedDraftEditAndResendRequest,
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
