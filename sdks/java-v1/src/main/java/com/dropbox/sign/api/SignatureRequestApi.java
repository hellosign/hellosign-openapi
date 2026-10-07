package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;
import com.dropbox.sign.model.BulkSendJobSendResponse;
import com.dropbox.sign.model.FileResponse;
import com.dropbox.sign.model.FileResponseDataUri;
import com.dropbox.sign.model.SignatureRequestBulkCreateEmbeddedWithTemplateRequest;
import com.dropbox.sign.model.SignatureRequestBulkSendWithTemplateRequest;
import com.dropbox.sign.model.SignatureRequestCreateEmbeddedRequest;
import com.dropbox.sign.model.SignatureRequestCreateEmbeddedWithTemplateRequest;
import com.dropbox.sign.model.SignatureRequestEditEmbeddedRequest;
import com.dropbox.sign.model.SignatureRequestEditEmbeddedWithTemplateRequest;
import com.dropbox.sign.model.SignatureRequestEditRequest;
import com.dropbox.sign.model.SignatureRequestEditWithTemplateRequest;
import com.dropbox.sign.model.SignatureRequestGetResponse;
import com.dropbox.sign.model.SignatureRequestListResponse;
import com.dropbox.sign.model.SignatureRequestRemindRequest;
import com.dropbox.sign.model.SignatureRequestSendRequest;
import com.dropbox.sign.model.SignatureRequestSendWithTemplateRequest;
import com.dropbox.sign.model.SignatureRequestUpdateRequest;
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.ws.rs.core.GenericType;

@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.12.0")
public class SignatureRequestApi {
    private ApiClient apiClient;

    public SignatureRequestApi() {
        this(Configuration.getDefaultApiClient());
    }

    public SignatureRequestApi(ApiClient apiClient) {
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
     * Embedded Bulk Send with Template Creates BulkSendJob which sends up to 250 SignatureRequests
     * in bulk based off of the provided Template(s) specified with the &#x60;template_ids&#x60;
     * parameter to be signed in an embedded iFrame. These embedded signature requests can only be
     * signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox
     * Sign. **NOTE:** Only available for Standard plan and higher.
     *
     * @param signatureRequestBulkCreateEmbeddedWithTemplateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return BulkSendJobSendResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public BulkSendJobSendResponse signatureRequestBulkCreateEmbeddedWithTemplate(
            SignatureRequestBulkCreateEmbeddedWithTemplateRequest
                    signatureRequestBulkCreateEmbeddedWithTemplateRequest,
            String idempotencyKey)
            throws ApiException {
        return signatureRequestBulkCreateEmbeddedWithTemplateWithHttpInfo(
                        signatureRequestBulkCreateEmbeddedWithTemplateRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see
     *     SignatureRequestApi#signatureRequestBulkCreateEmbeddedWithTemplate(SignatureRequestBulkCreateEmbeddedWithTemplateRequest,
     *     String)
     */
    public BulkSendJobSendResponse signatureRequestBulkCreateEmbeddedWithTemplate(
            SignatureRequestBulkCreateEmbeddedWithTemplateRequest
                    signatureRequestBulkCreateEmbeddedWithTemplateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestBulkCreateEmbeddedWithTemplateWithHttpInfo(
                        signatureRequestBulkCreateEmbeddedWithTemplateRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see
     *     SignatureRequestApi#signatureRequestBulkCreateEmbeddedWithTemplateWithHttpInfo(SignatureRequestBulkCreateEmbeddedWithTemplateRequest,
     *     String)
     */
    public ApiResponse<BulkSendJobSendResponse>
            signatureRequestBulkCreateEmbeddedWithTemplateWithHttpInfo(
                    SignatureRequestBulkCreateEmbeddedWithTemplateRequest
                            signatureRequestBulkCreateEmbeddedWithTemplateRequest)
                    throws ApiException {
        String idempotencyKey = null;

        return signatureRequestBulkCreateEmbeddedWithTemplateWithHttpInfo(
                signatureRequestBulkCreateEmbeddedWithTemplateRequest, idempotencyKey);
    }

    /**
     * Embedded Bulk Send with Template Creates BulkSendJob which sends up to 250 SignatureRequests
     * in bulk based off of the provided Template(s) specified with the &#x60;template_ids&#x60;
     * parameter to be signed in an embedded iFrame. These embedded signature requests can only be
     * signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox
     * Sign. **NOTE:** Only available for Standard plan and higher.
     *
     * @param signatureRequestBulkCreateEmbeddedWithTemplateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;BulkSendJobSendResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<BulkSendJobSendResponse>
            signatureRequestBulkCreateEmbeddedWithTemplateWithHttpInfo(
                    SignatureRequestBulkCreateEmbeddedWithTemplateRequest
                            signatureRequestBulkCreateEmbeddedWithTemplateRequest,
                    String idempotencyKey)
                    throws ApiException {

        // Check required parameters
        if (signatureRequestBulkCreateEmbeddedWithTemplateRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter"
                        + " 'signatureRequestBulkCreateEmbeddedWithTemplateRequest' when calling"
                        + " signatureRequestBulkCreateEmbeddedWithTemplate");
        }

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = signatureRequestBulkCreateEmbeddedWithTemplateRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key"};
        GenericType<BulkSendJobSendResponse> localVarReturnType =
                new GenericType<BulkSendJobSendResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestBulkCreateEmbeddedWithTemplate",
                "/signature_request/bulk_create_embedded_with_template",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : signatureRequestBulkCreateEmbeddedWithTemplateRequest,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }

    /**
     * Bulk Send with Template Creates BulkSendJob which sends up to 250 SignatureRequests in bulk
     * based off of the provided Template(s) specified with the &#x60;template_ids&#x60; parameter.
     * **NOTE:** Only available for Standard plan and higher.
     *
     * @param signatureRequestBulkSendWithTemplateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return BulkSendJobSendResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public BulkSendJobSendResponse signatureRequestBulkSendWithTemplate(
            SignatureRequestBulkSendWithTemplateRequest signatureRequestBulkSendWithTemplateRequest,
            String idempotencyKey)
            throws ApiException {
        return signatureRequestBulkSendWithTemplateWithHttpInfo(
                        signatureRequestBulkSendWithTemplateRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see
     *     SignatureRequestApi#signatureRequestBulkSendWithTemplate(SignatureRequestBulkSendWithTemplateRequest,
     *     String)
     */
    public BulkSendJobSendResponse signatureRequestBulkSendWithTemplate(
            SignatureRequestBulkSendWithTemplateRequest signatureRequestBulkSendWithTemplateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestBulkSendWithTemplateWithHttpInfo(
                        signatureRequestBulkSendWithTemplateRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see
     *     SignatureRequestApi#signatureRequestBulkSendWithTemplateWithHttpInfo(SignatureRequestBulkSendWithTemplateRequest,
     *     String)
     */
    public ApiResponse<BulkSendJobSendResponse> signatureRequestBulkSendWithTemplateWithHttpInfo(
            SignatureRequestBulkSendWithTemplateRequest signatureRequestBulkSendWithTemplateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestBulkSendWithTemplateWithHttpInfo(
                signatureRequestBulkSendWithTemplateRequest, idempotencyKey);
    }

    /**
     * Bulk Send with Template Creates BulkSendJob which sends up to 250 SignatureRequests in bulk
     * based off of the provided Template(s) specified with the &#x60;template_ids&#x60; parameter.
     * **NOTE:** Only available for Standard plan and higher.
     *
     * @param signatureRequestBulkSendWithTemplateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;BulkSendJobSendResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<BulkSendJobSendResponse> signatureRequestBulkSendWithTemplateWithHttpInfo(
            SignatureRequestBulkSendWithTemplateRequest signatureRequestBulkSendWithTemplateRequest,
            String idempotencyKey)
            throws ApiException {

        // Check required parameters
        if (signatureRequestBulkSendWithTemplateRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestBulkSendWithTemplateRequest'"
                            + " when calling signatureRequestBulkSendWithTemplate");
        }

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = signatureRequestBulkSendWithTemplateRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<BulkSendJobSendResponse> localVarReturnType =
                new GenericType<BulkSendJobSendResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestBulkSendWithTemplate",
                "/signature_request/bulk_send_with_template",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : signatureRequestBulkSendWithTemplateRequest,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }

    /**
     * Cancel Incomplete Signature Request Cancels an incomplete signature request. This action is
     * **not reversible**. The request will be canceled and signers will no longer be able to sign.
     * If they try to access the signature request they will receive a HTTP 410 status code
     * indicating that the resource has been deleted. Cancelation is asynchronous and a successful
     * call to this endpoint will return an empty 200 OK response if the signature request is
     * eligible to be canceled and has been successfully queued. This 200 OK response does not
     * indicate a successful cancelation of the signature request itself. The cancelation is
     * confirmed via the &#x60;signature_request_canceled&#x60; event. It is recommended that a
     * [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the
     * &#x60;signature_request_canceled&#x60; event. This callback will be sent only when the
     * cancelation has completed successfully. If a callback handler has been configured and the
     * event has not been received within 60 minutes of making the call, check the status of the
     * request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the
     * cancelation if necessary. To be eligible for cancelation, a signature request must have been
     * sent successfully, must not yet have been signed by all signers, and you must either be the
     * sender or own the API app under which it was sent. A partially signed signature request can
     * be canceled. **NOTE:** To remove your access to a completed signature request, use the
     * endpoint: &#x60;POST /signature_request/remove/[:signature_request_id]&#x60;.
     *
     * @param signatureRequestId The id of the incomplete SignatureRequest to cancel. (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public void signatureRequestCancel(String signatureRequestId, String idempotencyKey)
            throws ApiException {
        signatureRequestCancelWithHttpInfo(signatureRequestId, idempotencyKey);
    }

    /**
     * @see SignatureRequestApi#signatureRequestCancel(String, String)
     */
    public void signatureRequestCancel(String signatureRequestId) throws ApiException {
        String idempotencyKey = null;

        signatureRequestCancelWithHttpInfo(signatureRequestId, idempotencyKey);
    }

    /**
     * @see SignatureRequestApi#signatureRequestCancelWithHttpInfo(String, String)
     */
    public ApiResponse<Void> signatureRequestCancelWithHttpInfo(String signatureRequestId)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestCancelWithHttpInfo(signatureRequestId, idempotencyKey);
    }

    /**
     * Cancel Incomplete Signature Request Cancels an incomplete signature request. This action is
     * **not reversible**. The request will be canceled and signers will no longer be able to sign.
     * If they try to access the signature request they will receive a HTTP 410 status code
     * indicating that the resource has been deleted. Cancelation is asynchronous and a successful
     * call to this endpoint will return an empty 200 OK response if the signature request is
     * eligible to be canceled and has been successfully queued. This 200 OK response does not
     * indicate a successful cancelation of the signature request itself. The cancelation is
     * confirmed via the &#x60;signature_request_canceled&#x60; event. It is recommended that a
     * [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the
     * &#x60;signature_request_canceled&#x60; event. This callback will be sent only when the
     * cancelation has completed successfully. If a callback handler has been configured and the
     * event has not been received within 60 minutes of making the call, check the status of the
     * request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the
     * cancelation if necessary. To be eligible for cancelation, a signature request must have been
     * sent successfully, must not yet have been signed by all signers, and you must either be the
     * sender or own the API app under which it was sent. A partially signed signature request can
     * be canceled. **NOTE:** To remove your access to a completed signature request, use the
     * endpoint: &#x60;POST /signature_request/remove/[:signature_request_id]&#x60;.
     *
     * @param signatureRequestId The id of the incomplete SignatureRequest to cancel. (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<Void> signatureRequestCancelWithHttpInfo(
            String signatureRequestId, String idempotencyKey) throws ApiException {

        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " signatureRequestCancel");
        }

        // Path parameters
        String localVarPath =
                "/signature_request/cancel/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = new HashMap<String, Object>();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound ? "multipart/form-data" : apiClient.selectHeaderContentType();
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestCancel",
                localVarPath,
                "POST",
                new ArrayList<>(),
                null,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                null,
                false);
    }

    /**
     * Create Embedded Signature Request Creates a new SignatureRequest with the submitted documents
     * to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature
     * page will be affixed where all signers will be required to add their signature, signifying
     * their agreement to all contained documents. Note that embedded signature requests can only be
     * signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox
     * Sign.
     *
     * @param signatureRequestCreateEmbeddedRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public SignatureRequestGetResponse signatureRequestCreateEmbedded(
            SignatureRequestCreateEmbeddedRequest signatureRequestCreateEmbeddedRequest,
            String idempotencyKey)
            throws ApiException {
        return signatureRequestCreateEmbeddedWithHttpInfo(
                        signatureRequestCreateEmbeddedRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see
     *     SignatureRequestApi#signatureRequestCreateEmbedded(SignatureRequestCreateEmbeddedRequest,
     *     String)
     */
    public SignatureRequestGetResponse signatureRequestCreateEmbedded(
            SignatureRequestCreateEmbeddedRequest signatureRequestCreateEmbeddedRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestCreateEmbeddedWithHttpInfo(
                        signatureRequestCreateEmbeddedRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see
     *     SignatureRequestApi#signatureRequestCreateEmbeddedWithHttpInfo(SignatureRequestCreateEmbeddedRequest,
     *     String)
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestCreateEmbeddedWithHttpInfo(
            SignatureRequestCreateEmbeddedRequest signatureRequestCreateEmbeddedRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestCreateEmbeddedWithHttpInfo(
                signatureRequestCreateEmbeddedRequest, idempotencyKey);
    }

    /**
     * Create Embedded Signature Request Creates a new SignatureRequest with the submitted documents
     * to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature
     * page will be affixed where all signers will be required to add their signature, signifying
     * their agreement to all contained documents. Note that embedded signature requests can only be
     * signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox
     * Sign.
     *
     * @param signatureRequestCreateEmbeddedRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestCreateEmbeddedWithHttpInfo(
            SignatureRequestCreateEmbeddedRequest signatureRequestCreateEmbeddedRequest,
            String idempotencyKey)
            throws ApiException {

        // Check required parameters
        if (signatureRequestCreateEmbeddedRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestCreateEmbeddedRequest' when"
                            + " calling signatureRequestCreateEmbedded");
        }

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = signatureRequestCreateEmbeddedRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<SignatureRequestGetResponse> localVarReturnType =
                new GenericType<SignatureRequestGetResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestCreateEmbedded",
                "/signature_request/create_embedded",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : signatureRequestCreateEmbeddedRequest,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }

    /**
     * Create Embedded Signature Request with Template Creates a new SignatureRequest based on the
     * given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests
     * can only be signed in embedded iFrames whereas normal signature requests can only be signed
     * on Dropbox Sign.
     *
     * @param signatureRequestCreateEmbeddedWithTemplateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public SignatureRequestGetResponse signatureRequestCreateEmbeddedWithTemplate(
            SignatureRequestCreateEmbeddedWithTemplateRequest
                    signatureRequestCreateEmbeddedWithTemplateRequest,
            String idempotencyKey)
            throws ApiException {
        return signatureRequestCreateEmbeddedWithTemplateWithHttpInfo(
                        signatureRequestCreateEmbeddedWithTemplateRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see
     *     SignatureRequestApi#signatureRequestCreateEmbeddedWithTemplate(SignatureRequestCreateEmbeddedWithTemplateRequest,
     *     String)
     */
    public SignatureRequestGetResponse signatureRequestCreateEmbeddedWithTemplate(
            SignatureRequestCreateEmbeddedWithTemplateRequest
                    signatureRequestCreateEmbeddedWithTemplateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestCreateEmbeddedWithTemplateWithHttpInfo(
                        signatureRequestCreateEmbeddedWithTemplateRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see
     *     SignatureRequestApi#signatureRequestCreateEmbeddedWithTemplateWithHttpInfo(SignatureRequestCreateEmbeddedWithTemplateRequest,
     *     String)
     */
    public ApiResponse<SignatureRequestGetResponse>
            signatureRequestCreateEmbeddedWithTemplateWithHttpInfo(
                    SignatureRequestCreateEmbeddedWithTemplateRequest
                            signatureRequestCreateEmbeddedWithTemplateRequest)
                    throws ApiException {
        String idempotencyKey = null;

        return signatureRequestCreateEmbeddedWithTemplateWithHttpInfo(
                signatureRequestCreateEmbeddedWithTemplateRequest, idempotencyKey);
    }

    /**
     * Create Embedded Signature Request with Template Creates a new SignatureRequest based on the
     * given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests
     * can only be signed in embedded iFrames whereas normal signature requests can only be signed
     * on Dropbox Sign.
     *
     * @param signatureRequestCreateEmbeddedWithTemplateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<SignatureRequestGetResponse>
            signatureRequestCreateEmbeddedWithTemplateWithHttpInfo(
                    SignatureRequestCreateEmbeddedWithTemplateRequest
                            signatureRequestCreateEmbeddedWithTemplateRequest,
                    String idempotencyKey)
                    throws ApiException {

        // Check required parameters
        if (signatureRequestCreateEmbeddedWithTemplateRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter"
                            + " 'signatureRequestCreateEmbeddedWithTemplateRequest' when calling"
                            + " signatureRequestCreateEmbeddedWithTemplate");
        }

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = signatureRequestCreateEmbeddedWithTemplateRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<SignatureRequestGetResponse> localVarReturnType =
                new GenericType<SignatureRequestGetResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestCreateEmbeddedWithTemplate",
                "/signature_request/create_embedded_with_template",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : signatureRequestCreateEmbeddedWithTemplateRequest,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }

    /**
     * Edit Signature Request Edits and sends a SignatureRequest with the submitted documents. If
     * &#x60;form_fields_per_document&#x60; is not specified, a signature page will be affixed where
     * all signers will be required to add their signature, signifying their agreement to all
     * contained documents. **NOTE:** Edit and resend *will* deduct your signature request quota.
     *
     * @param signatureRequestId The id of the SignatureRequest to edit. (required)
     * @param signatureRequestEditRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public SignatureRequestGetResponse signatureRequestEdit(
            String signatureRequestId,
            SignatureRequestEditRequest signatureRequestEditRequest,
            String idempotencyKey)
            throws ApiException {
        return signatureRequestEditWithHttpInfo(
                        signatureRequestId, signatureRequestEditRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestEdit(String, SignatureRequestEditRequest, String)
     */
    public SignatureRequestGetResponse signatureRequestEdit(
            String signatureRequestId, SignatureRequestEditRequest signatureRequestEditRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestEditWithHttpInfo(
                        signatureRequestId, signatureRequestEditRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestEditWithHttpInfo(String,
     *     SignatureRequestEditRequest, String)
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestEditWithHttpInfo(
            String signatureRequestId, SignatureRequestEditRequest signatureRequestEditRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestEditWithHttpInfo(
                signatureRequestId, signatureRequestEditRequest, idempotencyKey);
    }

    /**
     * Edit Signature Request Edits and sends a SignatureRequest with the submitted documents. If
     * &#x60;form_fields_per_document&#x60; is not specified, a signature page will be affixed where
     * all signers will be required to add their signature, signifying their agreement to all
     * contained documents. **NOTE:** Edit and resend *will* deduct your signature request quota.
     *
     * @param signatureRequestId The id of the SignatureRequest to edit. (required)
     * @param signatureRequestEditRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestEditWithHttpInfo(
            String signatureRequestId,
            SignatureRequestEditRequest signatureRequestEditRequest,
            String idempotencyKey)
            throws ApiException {

        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " signatureRequestEdit");
        }
        if (signatureRequestEditRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestEditRequest' when calling"
                            + " signatureRequestEdit");
        }

        // Path parameters
        String localVarPath =
                "/signature_request/edit/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = signatureRequestEditRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<SignatureRequestGetResponse> localVarReturnType =
                new GenericType<SignatureRequestGetResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestEdit",
                localVarPath,
                "PUT",
                new ArrayList<>(),
                isFileTypeFound ? null : signatureRequestEditRequest,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }

    /**
     * Edit Embedded Signature Request Edits a SignatureRequest with the submitted documents to be
     * signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page
     * will be affixed where all signers will be required to add their signature, signifying their
     * agreement to all contained documents. Note that embedded signature requests can only be
     * signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox
     * Sign. **NOTE:** Edit and resend *will* deduct your signature request quota.
     *
     * @param signatureRequestId The id of the SignatureRequest to edit. (required)
     * @param signatureRequestEditEmbeddedRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public SignatureRequestGetResponse signatureRequestEditEmbedded(
            String signatureRequestId,
            SignatureRequestEditEmbeddedRequest signatureRequestEditEmbeddedRequest,
            String idempotencyKey)
            throws ApiException {
        return signatureRequestEditEmbeddedWithHttpInfo(
                        signatureRequestId, signatureRequestEditEmbeddedRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestEditEmbedded(String,
     *     SignatureRequestEditEmbeddedRequest, String)
     */
    public SignatureRequestGetResponse signatureRequestEditEmbedded(
            String signatureRequestId,
            SignatureRequestEditEmbeddedRequest signatureRequestEditEmbeddedRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestEditEmbeddedWithHttpInfo(
                        signatureRequestId, signatureRequestEditEmbeddedRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestEditEmbeddedWithHttpInfo(String,
     *     SignatureRequestEditEmbeddedRequest, String)
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestEditEmbeddedWithHttpInfo(
            String signatureRequestId,
            SignatureRequestEditEmbeddedRequest signatureRequestEditEmbeddedRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestEditEmbeddedWithHttpInfo(
                signatureRequestId, signatureRequestEditEmbeddedRequest, idempotencyKey);
    }

    /**
     * Edit Embedded Signature Request Edits a SignatureRequest with the submitted documents to be
     * signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page
     * will be affixed where all signers will be required to add their signature, signifying their
     * agreement to all contained documents. Note that embedded signature requests can only be
     * signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox
     * Sign. **NOTE:** Edit and resend *will* deduct your signature request quota.
     *
     * @param signatureRequestId The id of the SignatureRequest to edit. (required)
     * @param signatureRequestEditEmbeddedRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestEditEmbeddedWithHttpInfo(
            String signatureRequestId,
            SignatureRequestEditEmbeddedRequest signatureRequestEditEmbeddedRequest,
            String idempotencyKey)
            throws ApiException {

        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " signatureRequestEditEmbedded");
        }
        if (signatureRequestEditEmbeddedRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestEditEmbeddedRequest' when"
                            + " calling signatureRequestEditEmbedded");
        }

        // Path parameters
        String localVarPath =
                "/signature_request/edit_embedded/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = signatureRequestEditEmbeddedRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<SignatureRequestGetResponse> localVarReturnType =
                new GenericType<SignatureRequestGetResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestEditEmbedded",
                localVarPath,
                "PUT",
                new ArrayList<>(),
                isFileTypeFound ? null : signatureRequestEditEmbeddedRequest,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }

    /**
     * Edit Embedded Signature Request with Template Edits a SignatureRequest based on the given
     * Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can
     * only be signed in embedded iFrames whereas normal signature requests can only be signed on
     * Dropbox Sign. **NOTE:** Edit and resend *will* deduct your signature request quota.
     *
     * @param signatureRequestId The id of the SignatureRequest to edit. (required)
     * @param signatureRequestEditEmbeddedWithTemplateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public SignatureRequestGetResponse signatureRequestEditEmbeddedWithTemplate(
            String signatureRequestId,
            SignatureRequestEditEmbeddedWithTemplateRequest
                    signatureRequestEditEmbeddedWithTemplateRequest,
            String idempotencyKey)
            throws ApiException {
        return signatureRequestEditEmbeddedWithTemplateWithHttpInfo(
                        signatureRequestId,
                        signatureRequestEditEmbeddedWithTemplateRequest,
                        idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestEditEmbeddedWithTemplate(String,
     *     SignatureRequestEditEmbeddedWithTemplateRequest, String)
     */
    public SignatureRequestGetResponse signatureRequestEditEmbeddedWithTemplate(
            String signatureRequestId,
            SignatureRequestEditEmbeddedWithTemplateRequest
                    signatureRequestEditEmbeddedWithTemplateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestEditEmbeddedWithTemplateWithHttpInfo(
                        signatureRequestId,
                        signatureRequestEditEmbeddedWithTemplateRequest,
                        idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestEditEmbeddedWithTemplateWithHttpInfo(String,
     *     SignatureRequestEditEmbeddedWithTemplateRequest, String)
     */
    public ApiResponse<SignatureRequestGetResponse>
            signatureRequestEditEmbeddedWithTemplateWithHttpInfo(
                    String signatureRequestId,
                    SignatureRequestEditEmbeddedWithTemplateRequest
                            signatureRequestEditEmbeddedWithTemplateRequest)
                    throws ApiException {
        String idempotencyKey = null;

        return signatureRequestEditEmbeddedWithTemplateWithHttpInfo(
                signatureRequestId,
                signatureRequestEditEmbeddedWithTemplateRequest,
                idempotencyKey);
    }

    /**
     * Edit Embedded Signature Request with Template Edits a SignatureRequest based on the given
     * Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can
     * only be signed in embedded iFrames whereas normal signature requests can only be signed on
     * Dropbox Sign. **NOTE:** Edit and resend *will* deduct your signature request quota.
     *
     * @param signatureRequestId The id of the SignatureRequest to edit. (required)
     * @param signatureRequestEditEmbeddedWithTemplateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<SignatureRequestGetResponse>
            signatureRequestEditEmbeddedWithTemplateWithHttpInfo(
                    String signatureRequestId,
                    SignatureRequestEditEmbeddedWithTemplateRequest
                            signatureRequestEditEmbeddedWithTemplateRequest,
                    String idempotencyKey)
                    throws ApiException {

        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " signatureRequestEditEmbeddedWithTemplate");
        }
        if (signatureRequestEditEmbeddedWithTemplateRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter"
                            + " 'signatureRequestEditEmbeddedWithTemplateRequest' when calling"
                            + " signatureRequestEditEmbeddedWithTemplate");
        }

        // Path parameters
        String localVarPath =
                "/signature_request/edit_embedded_with_template/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = signatureRequestEditEmbeddedWithTemplateRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<SignatureRequestGetResponse> localVarReturnType =
                new GenericType<SignatureRequestGetResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestEditEmbeddedWithTemplate",
                localVarPath,
                "PUT",
                new ArrayList<>(),
                isFileTypeFound ? null : signatureRequestEditEmbeddedWithTemplateRequest,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }

    /**
     * Edit Signature Request With Template Edits and sends a SignatureRequest based off of the
     * Template(s) specified with the template_ids parameter. **NOTE:** Edit and resend *will*
     * deduct your signature request quota.
     *
     * @param signatureRequestId The id of the SignatureRequest to edit. (required)
     * @param signatureRequestEditWithTemplateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public SignatureRequestGetResponse signatureRequestEditWithTemplate(
            String signatureRequestId,
            SignatureRequestEditWithTemplateRequest signatureRequestEditWithTemplateRequest,
            String idempotencyKey)
            throws ApiException {
        return signatureRequestEditWithTemplateWithHttpInfo(
                        signatureRequestId, signatureRequestEditWithTemplateRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestEditWithTemplate(String,
     *     SignatureRequestEditWithTemplateRequest, String)
     */
    public SignatureRequestGetResponse signatureRequestEditWithTemplate(
            String signatureRequestId,
            SignatureRequestEditWithTemplateRequest signatureRequestEditWithTemplateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestEditWithTemplateWithHttpInfo(
                        signatureRequestId, signatureRequestEditWithTemplateRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestEditWithTemplateWithHttpInfo(String,
     *     SignatureRequestEditWithTemplateRequest, String)
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestEditWithTemplateWithHttpInfo(
            String signatureRequestId,
            SignatureRequestEditWithTemplateRequest signatureRequestEditWithTemplateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestEditWithTemplateWithHttpInfo(
                signatureRequestId, signatureRequestEditWithTemplateRequest, idempotencyKey);
    }

    /**
     * Edit Signature Request With Template Edits and sends a SignatureRequest based off of the
     * Template(s) specified with the template_ids parameter. **NOTE:** Edit and resend *will*
     * deduct your signature request quota.
     *
     * @param signatureRequestId The id of the SignatureRequest to edit. (required)
     * @param signatureRequestEditWithTemplateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestEditWithTemplateWithHttpInfo(
            String signatureRequestId,
            SignatureRequestEditWithTemplateRequest signatureRequestEditWithTemplateRequest,
            String idempotencyKey)
            throws ApiException {

        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " signatureRequestEditWithTemplate");
        }
        if (signatureRequestEditWithTemplateRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestEditWithTemplateRequest' when"
                            + " calling signatureRequestEditWithTemplate");
        }

        // Path parameters
        String localVarPath =
                "/signature_request/edit_with_template/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = signatureRequestEditWithTemplateRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<SignatureRequestGetResponse> localVarReturnType =
                new GenericType<SignatureRequestGetResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestEditWithTemplate",
                localVarPath,
                "PUT",
                new ArrayList<>(),
                isFileTypeFound ? null : signatureRequestEditWithTemplateRequest,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }

    /**
     * Download Files Obtain a copy of the current documents specified by the
     * &#x60;signature_request_id&#x60; parameter. Returns a PDF or ZIP file. If the files are
     * currently being prepared, a status code of &#x60;409&#x60; will be returned instead.
     *
     * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
     * @param fileType Set to &#x60;pdf&#x60; for a single merged document or &#x60;zip&#x60; for a
     *     collection of individual documents. (optional, default to pdf)
     * @return File
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public File signatureRequestFiles(String signatureRequestId, String fileType)
            throws ApiException {
        return signatureRequestFilesWithHttpInfo(signatureRequestId, fileType).getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestFiles(String, String)
     */
    public File signatureRequestFiles(String signatureRequestId) throws ApiException {
        String fileType = "pdf";

        return signatureRequestFilesWithHttpInfo(signatureRequestId, fileType).getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestFilesWithHttpInfo(String, String)
     */
    public ApiResponse<File> signatureRequestFilesWithHttpInfo(String signatureRequestId)
            throws ApiException {
        String fileType = "pdf";

        return signatureRequestFilesWithHttpInfo(signatureRequestId, fileType);
    }

    /**
     * Download Files Obtain a copy of the current documents specified by the
     * &#x60;signature_request_id&#x60; parameter. Returns a PDF or ZIP file. If the files are
     * currently being prepared, a status code of &#x60;409&#x60; will be returned instead.
     *
     * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
     * @param fileType Set to &#x60;pdf&#x60; for a single merged document or &#x60;zip&#x60; for a
     *     collection of individual documents. (optional, default to pdf)
     * @return ApiResponse&lt;File&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<File> signatureRequestFilesWithHttpInfo(
            String signatureRequestId, String fileType) throws ApiException {

        if (fileType == null) {
            fileType = "pdf";
        }
        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " signatureRequestFiles");
        }

        // Path parameters
        String localVarPath =
                "/signature_request/files/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        // Query parameters
        List<Pair> localVarQueryParams =
                new ArrayList<>(apiClient.parameterToPairs("", "file_type", fileType));

        String localVarAccept =
                apiClient.selectHeaderAccept(
                        "application/pdf", "application/zip", "application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = new HashMap<String, Object>();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound ? "multipart/form-data" : apiClient.selectHeaderContentType();
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<File> localVarReturnType = new GenericType<File>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestFiles",
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
                false);
    }

    /**
     * Download Files as Data Uri Obtain a copy of the current documents specified by the
     * &#x60;signature_request_id&#x60; parameter. Returns a JSON object with a &#x60;data_uri&#x60;
     * representing the base64 encoded file (PDFs only). If the files are currently being prepared,
     * a status code of &#x60;409&#x60; will be returned instead.
     *
     * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
     * @return FileResponseDataUri
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public FileResponseDataUri signatureRequestFilesAsDataUri(String signatureRequestId)
            throws ApiException {
        return signatureRequestFilesAsDataUriWithHttpInfo(signatureRequestId).getData();
    }

    /**
     * Download Files as Data Uri Obtain a copy of the current documents specified by the
     * &#x60;signature_request_id&#x60; parameter. Returns a JSON object with a &#x60;data_uri&#x60;
     * representing the base64 encoded file (PDFs only). If the files are currently being prepared,
     * a status code of &#x60;409&#x60; will be returned instead.
     *
     * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
     * @return ApiResponse&lt;FileResponseDataUri&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<FileResponseDataUri> signatureRequestFilesAsDataUriWithHttpInfo(
            String signatureRequestId) throws ApiException {

        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " signatureRequestFilesAsDataUri");
        }

        // Path parameters
        String localVarPath =
                "/signature_request/files_as_data_uri/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = new HashMap<String, Object>();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound ? "multipart/form-data" : apiClient.selectHeaderContentType();
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<FileResponseDataUri> localVarReturnType =
                new GenericType<FileResponseDataUri>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestFilesAsDataUri",
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

    /**
     * Download Files as File Url Obtain a copy of the current documents specified by the
     * &#x60;signature_request_id&#x60; parameter. Returns a JSON object with a url to the file
     * (PDFs only). If the files are currently being prepared, a status code of &#x60;409&#x60; will
     * be returned instead.
     *
     * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
     * @param forceDownload By default when opening the &#x60;file_url&#x60; a browser will download
     *     the PDF and save it locally. When set to &#x60;0&#x60; the PDF file will be displayed in
     *     the browser. (optional, default to 1)
     * @return FileResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public FileResponse signatureRequestFilesAsFileUrl(
            String signatureRequestId, Integer forceDownload) throws ApiException {
        return signatureRequestFilesAsFileUrlWithHttpInfo(signatureRequestId, forceDownload)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestFilesAsFileUrl(String, Integer)
     */
    public FileResponse signatureRequestFilesAsFileUrl(String signatureRequestId)
            throws ApiException {
        Integer forceDownload = 1;

        return signatureRequestFilesAsFileUrlWithHttpInfo(signatureRequestId, forceDownload)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestFilesAsFileUrlWithHttpInfo(String, Integer)
     */
    public ApiResponse<FileResponse> signatureRequestFilesAsFileUrlWithHttpInfo(
            String signatureRequestId) throws ApiException {
        Integer forceDownload = 1;

        return signatureRequestFilesAsFileUrlWithHttpInfo(signatureRequestId, forceDownload);
    }

    /**
     * Download Files as File Url Obtain a copy of the current documents specified by the
     * &#x60;signature_request_id&#x60; parameter. Returns a JSON object with a url to the file
     * (PDFs only). If the files are currently being prepared, a status code of &#x60;409&#x60; will
     * be returned instead.
     *
     * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
     * @param forceDownload By default when opening the &#x60;file_url&#x60; a browser will download
     *     the PDF and save it locally. When set to &#x60;0&#x60; the PDF file will be displayed in
     *     the browser. (optional, default to 1)
     * @return ApiResponse&lt;FileResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<FileResponse> signatureRequestFilesAsFileUrlWithHttpInfo(
            String signatureRequestId, Integer forceDownload) throws ApiException {

        if (forceDownload == null) {
            forceDownload = 1;
        }
        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " signatureRequestFilesAsFileUrl");
        }

        // Path parameters
        String localVarPath =
                "/signature_request/files_as_file_url/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        // Query parameters
        List<Pair> localVarQueryParams =
                new ArrayList<>(apiClient.parameterToPairs("", "force_download", forceDownload));

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = new HashMap<String, Object>();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound ? "multipart/form-data" : apiClient.selectHeaderContentType();
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<FileResponse> localVarReturnType = new GenericType<FileResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestFilesAsFileUrl",
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
                false);
    }

    /**
     * Get Signature Request Returns the status of the SignatureRequest specified by the
     * &#x60;signature_request_id&#x60; parameter.
     *
     * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public SignatureRequestGetResponse signatureRequestGet(String signatureRequestId)
            throws ApiException {
        return signatureRequestGetWithHttpInfo(signatureRequestId).getData();
    }

    /**
     * Get Signature Request Returns the status of the SignatureRequest specified by the
     * &#x60;signature_request_id&#x60; parameter.
     *
     * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestGetWithHttpInfo(
            String signatureRequestId) throws ApiException {

        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " signatureRequestGet");
        }

        // Path parameters
        String localVarPath =
                "/signature_request/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = new HashMap<String, Object>();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound ? "multipart/form-data" : apiClient.selectHeaderContentType();
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<SignatureRequestGetResponse> localVarReturnType =
                new GenericType<SignatureRequestGetResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestGet",
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

    /**
     * List Signature Requests Returns a list of SignatureRequests that you can access. This
     * includes SignatureRequests you have sent as well as received, but not ones that you have been
     * CCed on. Take a look at our [search guide](/api/reference/search/) to learn more about
     * querying signature requests.
     *
     * @param accountId Which account to return SignatureRequests for. Must be a team member. Use
     *     &#x60;all&#x60; to indicate all team members. Defaults to your account. (optional)
     * @param page Which page number of the SignatureRequest List to return. Defaults to
     *     &#x60;1&#x60;. (optional, default to 1)
     * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and
     *     &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
     * @param query String that includes search terms and/or fields to be used to filter the
     *     SignatureRequest objects. (optional)
     * @return SignatureRequestListResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public SignatureRequestListResponse signatureRequestList(
            String accountId, Integer page, Integer pageSize, String query) throws ApiException {
        return signatureRequestListWithHttpInfo(accountId, page, pageSize, query).getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestList(String, Integer, Integer, String)
     */
    public SignatureRequestListResponse signatureRequestList() throws ApiException {
        String accountId = null;
        Integer page = 1;
        Integer pageSize = 20;
        String query = null;

        return signatureRequestListWithHttpInfo(accountId, page, pageSize, query).getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestListWithHttpInfo(String, Integer, Integer, String)
     */
    public ApiResponse<SignatureRequestListResponse> signatureRequestListWithHttpInfo()
            throws ApiException {
        String accountId = null;
        Integer page = 1;
        Integer pageSize = 20;
        String query = null;

        return signatureRequestListWithHttpInfo(accountId, page, pageSize, query);
    }

    /**
     * @see SignatureRequestApi#signatureRequestList(String, Integer, Integer, String)
     */
    public SignatureRequestListResponse signatureRequestList(String accountId) throws ApiException {
        Integer page = 1;
        Integer pageSize = 20;
        String query = null;

        return signatureRequestListWithHttpInfo(accountId, page, pageSize, query).getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestListWithHttpInfo(String, Integer, Integer, String)
     */
    public ApiResponse<SignatureRequestListResponse> signatureRequestListWithHttpInfo(
            String accountId) throws ApiException {
        Integer page = 1;
        Integer pageSize = 20;
        String query = null;

        return signatureRequestListWithHttpInfo(accountId, page, pageSize, query);
    }

    /**
     * @see SignatureRequestApi#signatureRequestList(String, Integer, Integer, String)
     */
    public SignatureRequestListResponse signatureRequestList(String accountId, Integer page)
            throws ApiException {
        Integer pageSize = 20;
        String query = null;

        return signatureRequestListWithHttpInfo(accountId, page, pageSize, query).getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestListWithHttpInfo(String, Integer, Integer, String)
     */
    public ApiResponse<SignatureRequestListResponse> signatureRequestListWithHttpInfo(
            String accountId, Integer page) throws ApiException {
        Integer pageSize = 20;
        String query = null;

        return signatureRequestListWithHttpInfo(accountId, page, pageSize, query);
    }

    /**
     * @see SignatureRequestApi#signatureRequestList(String, Integer, Integer, String)
     */
    public SignatureRequestListResponse signatureRequestList(
            String accountId, Integer page, Integer pageSize) throws ApiException {
        String query = null;

        return signatureRequestListWithHttpInfo(accountId, page, pageSize, query).getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestListWithHttpInfo(String, Integer, Integer, String)
     */
    public ApiResponse<SignatureRequestListResponse> signatureRequestListWithHttpInfo(
            String accountId, Integer page, Integer pageSize) throws ApiException {
        String query = null;

        return signatureRequestListWithHttpInfo(accountId, page, pageSize, query);
    }

    /**
     * List Signature Requests Returns a list of SignatureRequests that you can access. This
     * includes SignatureRequests you have sent as well as received, but not ones that you have been
     * CCed on. Take a look at our [search guide](/api/reference/search/) to learn more about
     * querying signature requests.
     *
     * @param accountId Which account to return SignatureRequests for. Must be a team member. Use
     *     &#x60;all&#x60; to indicate all team members. Defaults to your account. (optional)
     * @param page Which page number of the SignatureRequest List to return. Defaults to
     *     &#x60;1&#x60;. (optional, default to 1)
     * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and
     *     &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
     * @param query String that includes search terms and/or fields to be used to filter the
     *     SignatureRequest objects. (optional)
     * @return ApiResponse&lt;SignatureRequestListResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<SignatureRequestListResponse> signatureRequestListWithHttpInfo(
            String accountId, Integer page, Integer pageSize, String query) throws ApiException {

        if (page == null) {
            page = 1;
        }
        if (pageSize == null) {
            pageSize = 20;
        }
        // Query parameters
        List<Pair> localVarQueryParams =
                new ArrayList<>(apiClient.parameterToPairs("", "account_id", accountId));
        localVarQueryParams.addAll(apiClient.parameterToPairs("", "page", page));
        localVarQueryParams.addAll(apiClient.parameterToPairs("", "page_size", pageSize));
        localVarQueryParams.addAll(apiClient.parameterToPairs("", "query", query));

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = new HashMap<String, Object>();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound ? "multipart/form-data" : apiClient.selectHeaderContentType();
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<SignatureRequestListResponse> localVarReturnType =
                new GenericType<SignatureRequestListResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestList",
                "/signature_request/list",
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
                false);
    }

    /**
     * Release On-Hold Signature Request Releases a held SignatureRequest that was claimed and
     * prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft
     * must indicate at Draft creation that the SignatureRequest created from the Draft should be
     * held. Releasing the SignatureRequest will send requests to all signers.
     *
     * @param signatureRequestId The id of the SignatureRequest to release. (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public SignatureRequestGetResponse signatureRequestReleaseHold(
            String signatureRequestId, String idempotencyKey) throws ApiException {
        return signatureRequestReleaseHoldWithHttpInfo(signatureRequestId, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestReleaseHold(String, String)
     */
    public SignatureRequestGetResponse signatureRequestReleaseHold(String signatureRequestId)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestReleaseHoldWithHttpInfo(signatureRequestId, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestReleaseHoldWithHttpInfo(String, String)
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestReleaseHoldWithHttpInfo(
            String signatureRequestId) throws ApiException {
        String idempotencyKey = null;

        return signatureRequestReleaseHoldWithHttpInfo(signatureRequestId, idempotencyKey);
    }

    /**
     * Release On-Hold Signature Request Releases a held SignatureRequest that was claimed and
     * prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft
     * must indicate at Draft creation that the SignatureRequest created from the Draft should be
     * held. Releasing the SignatureRequest will send requests to all signers.
     *
     * @param signatureRequestId The id of the SignatureRequest to release. (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestReleaseHoldWithHttpInfo(
            String signatureRequestId, String idempotencyKey) throws ApiException {

        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " signatureRequestReleaseHold");
        }

        // Path parameters
        String localVarPath =
                "/signature_request/release_hold/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = new HashMap<String, Object>();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound ? "multipart/form-data" : apiClient.selectHeaderContentType();
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<SignatureRequestGetResponse> localVarReturnType =
                new GenericType<SignatureRequestGetResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestReleaseHold",
                localVarPath,
                "POST",
                new ArrayList<>(),
                null,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }

    /**
     * Send Request Reminder Sends an email to the signer reminding them to sign the signature
     * request. You cannot send a reminder within 1 hour of the last reminder that was sent. This
     * includes manual AND automatic reminders. **NOTE:** This action can **not** be used with
     * embedded signature requests.
     *
     * @param signatureRequestId The id of the SignatureRequest to send a reminder for. (required)
     * @param signatureRequestRemindRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public SignatureRequestGetResponse signatureRequestRemind(
            String signatureRequestId,
            SignatureRequestRemindRequest signatureRequestRemindRequest,
            String idempotencyKey)
            throws ApiException {
        return signatureRequestRemindWithHttpInfo(
                        signatureRequestId, signatureRequestRemindRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestRemind(String, SignatureRequestRemindRequest,
     *     String)
     */
    public SignatureRequestGetResponse signatureRequestRemind(
            String signatureRequestId, SignatureRequestRemindRequest signatureRequestRemindRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestRemindWithHttpInfo(
                        signatureRequestId, signatureRequestRemindRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestRemindWithHttpInfo(String,
     *     SignatureRequestRemindRequest, String)
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestRemindWithHttpInfo(
            String signatureRequestId, SignatureRequestRemindRequest signatureRequestRemindRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestRemindWithHttpInfo(
                signatureRequestId, signatureRequestRemindRequest, idempotencyKey);
    }

    /**
     * Send Request Reminder Sends an email to the signer reminding them to sign the signature
     * request. You cannot send a reminder within 1 hour of the last reminder that was sent. This
     * includes manual AND automatic reminders. **NOTE:** This action can **not** be used with
     * embedded signature requests.
     *
     * @param signatureRequestId The id of the SignatureRequest to send a reminder for. (required)
     * @param signatureRequestRemindRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestRemindWithHttpInfo(
            String signatureRequestId,
            SignatureRequestRemindRequest signatureRequestRemindRequest,
            String idempotencyKey)
            throws ApiException {

        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " signatureRequestRemind");
        }
        if (signatureRequestRemindRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestRemindRequest' when calling"
                            + " signatureRequestRemind");
        }

        // Path parameters
        String localVarPath =
                "/signature_request/remind/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = signatureRequestRemindRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType("application/json");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<SignatureRequestGetResponse> localVarReturnType =
                new GenericType<SignatureRequestGetResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestRemind",
                localVarPath,
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : signatureRequestRemindRequest,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }

    /**
     * Remove Signature Request Access Removes your access to a completed signature request. This
     * action is **not reversible**. The signature request must be fully executed by all parties
     * (signed or declined to sign). Other parties will continue to maintain access to the completed
     * signature request document(s). Unlike /signature_request/cancel, this endpoint is synchronous
     * and your access will be immediately removed. Upon successful removal, this endpoint will
     * return a 200 OK response.
     *
     * @param signatureRequestId The id of the SignatureRequest to remove. (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public void signatureRequestRemove(String signatureRequestId, String idempotencyKey)
            throws ApiException {
        signatureRequestRemoveWithHttpInfo(signatureRequestId, idempotencyKey);
    }

    /**
     * @see SignatureRequestApi#signatureRequestRemove(String, String)
     */
    public void signatureRequestRemove(String signatureRequestId) throws ApiException {
        String idempotencyKey = null;

        signatureRequestRemoveWithHttpInfo(signatureRequestId, idempotencyKey);
    }

    /**
     * @see SignatureRequestApi#signatureRequestRemoveWithHttpInfo(String, String)
     */
    public ApiResponse<Void> signatureRequestRemoveWithHttpInfo(String signatureRequestId)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestRemoveWithHttpInfo(signatureRequestId, idempotencyKey);
    }

    /**
     * Remove Signature Request Access Removes your access to a completed signature request. This
     * action is **not reversible**. The signature request must be fully executed by all parties
     * (signed or declined to sign). Other parties will continue to maintain access to the completed
     * signature request document(s). Unlike /signature_request/cancel, this endpoint is synchronous
     * and your access will be immediately removed. Upon successful removal, this endpoint will
     * return a 200 OK response.
     *
     * @param signatureRequestId The id of the SignatureRequest to remove. (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<Void> signatureRequestRemoveWithHttpInfo(
            String signatureRequestId, String idempotencyKey) throws ApiException {

        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " signatureRequestRemove");
        }

        // Path parameters
        String localVarPath =
                "/signature_request/remove/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = new HashMap<String, Object>();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound ? "multipart/form-data" : apiClient.selectHeaderContentType();
        String[] localVarAuthNames = new String[] {"api_key"};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestRemove",
                localVarPath,
                "POST",
                new ArrayList<>(),
                null,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                null,
                false);
    }

    /**
     * Send Signature Request Creates and sends a new SignatureRequest with the submitted documents.
     * If &#x60;form_fields_per_document&#x60; is not specified, a signature page will be affixed
     * where all signers will be required to add their signature, signifying their agreement to all
     * contained documents.
     *
     * @param signatureRequestSendRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public SignatureRequestGetResponse signatureRequestSend(
            SignatureRequestSendRequest signatureRequestSendRequest, String idempotencyKey)
            throws ApiException {
        return signatureRequestSendWithHttpInfo(signatureRequestSendRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestSend(SignatureRequestSendRequest, String)
     */
    public SignatureRequestGetResponse signatureRequestSend(
            SignatureRequestSendRequest signatureRequestSendRequest) throws ApiException {
        String idempotencyKey = null;

        return signatureRequestSendWithHttpInfo(signatureRequestSendRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestSendWithHttpInfo(SignatureRequestSendRequest,
     *     String)
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestSendWithHttpInfo(
            SignatureRequestSendRequest signatureRequestSendRequest) throws ApiException {
        String idempotencyKey = null;

        return signatureRequestSendWithHttpInfo(signatureRequestSendRequest, idempotencyKey);
    }

    /**
     * Send Signature Request Creates and sends a new SignatureRequest with the submitted documents.
     * If &#x60;form_fields_per_document&#x60; is not specified, a signature page will be affixed
     * where all signers will be required to add their signature, signifying their agreement to all
     * contained documents.
     *
     * @param signatureRequestSendRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestSendWithHttpInfo(
            SignatureRequestSendRequest signatureRequestSendRequest, String idempotencyKey)
            throws ApiException {

        // Check required parameters
        if (signatureRequestSendRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestSendRequest' when calling"
                            + " signatureRequestSend");
        }

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = signatureRequestSendRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<SignatureRequestGetResponse> localVarReturnType =
                new GenericType<SignatureRequestGetResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestSend",
                "/signature_request/send",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : signatureRequestSendRequest,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }

    /**
     * Send with Template Creates and sends a new SignatureRequest based off of the Template(s)
     * specified with the &#x60;template_ids&#x60; parameter.
     *
     * @param signatureRequestSendWithTemplateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public SignatureRequestGetResponse signatureRequestSendWithTemplate(
            SignatureRequestSendWithTemplateRequest signatureRequestSendWithTemplateRequest,
            String idempotencyKey)
            throws ApiException {
        return signatureRequestSendWithTemplateWithHttpInfo(
                        signatureRequestSendWithTemplateRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see
     *     SignatureRequestApi#signatureRequestSendWithTemplate(SignatureRequestSendWithTemplateRequest,
     *     String)
     */
    public SignatureRequestGetResponse signatureRequestSendWithTemplate(
            SignatureRequestSendWithTemplateRequest signatureRequestSendWithTemplateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestSendWithTemplateWithHttpInfo(
                        signatureRequestSendWithTemplateRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see
     *     SignatureRequestApi#signatureRequestSendWithTemplateWithHttpInfo(SignatureRequestSendWithTemplateRequest,
     *     String)
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestSendWithTemplateWithHttpInfo(
            SignatureRequestSendWithTemplateRequest signatureRequestSendWithTemplateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestSendWithTemplateWithHttpInfo(
                signatureRequestSendWithTemplateRequest, idempotencyKey);
    }

    /**
     * Send with Template Creates and sends a new SignatureRequest based off of the Template(s)
     * specified with the &#x60;template_ids&#x60; parameter.
     *
     * @param signatureRequestSendWithTemplateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestSendWithTemplateWithHttpInfo(
            SignatureRequestSendWithTemplateRequest signatureRequestSendWithTemplateRequest,
            String idempotencyKey)
            throws ApiException {

        // Check required parameters
        if (signatureRequestSendWithTemplateRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestSendWithTemplateRequest' when"
                            + " calling signatureRequestSendWithTemplate");
        }

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = signatureRequestSendWithTemplateRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType(
                                "application/json", "multipart/form-data");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<SignatureRequestGetResponse> localVarReturnType =
                new GenericType<SignatureRequestGetResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestSendWithTemplate",
                "/signature_request/send_with_template",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : signatureRequestSendWithTemplateRequest,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }

    /**
     * Update Signature Request Updates the email address and/or the name for a given signer on a
     * signature request. You can listen for the &#x60;signature_request_email_bounce&#x60; event on
     * your app or account to detect bounced emails, and respond with this method. Updating the
     * email address of a signer will generate a new &#x60;signature_id&#x60; value. **NOTE:** This
     * action cannot be performed on a signature request with an appended signature page.
     *
     * @param signatureRequestId The id of the SignatureRequest to update. (required)
     * @param signatureRequestUpdateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public SignatureRequestGetResponse signatureRequestUpdate(
            String signatureRequestId,
            SignatureRequestUpdateRequest signatureRequestUpdateRequest,
            String idempotencyKey)
            throws ApiException {
        return signatureRequestUpdateWithHttpInfo(
                        signatureRequestId, signatureRequestUpdateRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestUpdate(String, SignatureRequestUpdateRequest,
     *     String)
     */
    public SignatureRequestGetResponse signatureRequestUpdate(
            String signatureRequestId, SignatureRequestUpdateRequest signatureRequestUpdateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestUpdateWithHttpInfo(
                        signatureRequestId, signatureRequestUpdateRequest, idempotencyKey)
                .getData();
    }

    /**
     * @see SignatureRequestApi#signatureRequestUpdateWithHttpInfo(String,
     *     SignatureRequestUpdateRequest, String)
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestUpdateWithHttpInfo(
            String signatureRequestId, SignatureRequestUpdateRequest signatureRequestUpdateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return signatureRequestUpdateWithHttpInfo(
                signatureRequestId, signatureRequestUpdateRequest, idempotencyKey);
    }

    /**
     * Update Signature Request Updates the email address and/or the name for a given signer on a
     * signature request. You can listen for the &#x60;signature_request_email_bounce&#x60; event on
     * your app or account to detect bounced emails, and respond with this method. Updating the
     * email address of a signer will generate a new &#x60;signature_id&#x60; value. **NOTE:** This
     * action cannot be performed on a signature request with an appended signature page.
     *
     * @param signatureRequestId The id of the SignatureRequest to update. (required)
     * @param signatureRequestUpdateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<SignatureRequestGetResponse> signatureRequestUpdateWithHttpInfo(
            String signatureRequestId,
            SignatureRequestUpdateRequest signatureRequestUpdateRequest,
            String idempotencyKey)
            throws ApiException {

        // Check required parameters
        if (signatureRequestId == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestId' when calling"
                            + " signatureRequestUpdate");
        }
        if (signatureRequestUpdateRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'signatureRequestUpdateRequest' when calling"
                            + " signatureRequestUpdate");
        }

        // Path parameters
        String localVarPath =
                "/signature_request/update/{signature_request_id}"
                        .replaceAll(
                                "\\{signature_request_id}",
                                apiClient.escapeString(signatureRequestId.toString()));

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = signatureRequestUpdateRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType("application/json");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<SignatureRequestGetResponse> localVarReturnType =
                new GenericType<SignatureRequestGetResponse>() {};
        return apiClient.invokeAPI(
                "SignatureRequestApi.signatureRequestUpdate",
                localVarPath,
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : signatureRequestUpdateRequest,
                localVarHeaderParams,
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                localVarReturnType,
                false);
    }
}
