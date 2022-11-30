package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiResponse;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.Pair;

import javax.ws.rs.core.GenericType;

import com.hellosign.openapi.model.BulkSendJobSendResponse;
import com.hellosign.openapi.model.ErrorResponse;
import java.io.File;
import com.hellosign.openapi.model.FileResponse;
import com.hellosign.openapi.model.FileResponseDataUri;
import com.hellosign.openapi.model.SignatureRequestBulkCreateEmbeddedWithTemplateRequest;
import com.hellosign.openapi.model.SignatureRequestBulkSendWithTemplateRequest;
import com.hellosign.openapi.model.SignatureRequestCreateEmbeddedRequest;
import com.hellosign.openapi.model.SignatureRequestCreateEmbeddedWithTemplateRequest;
import com.hellosign.openapi.model.SignatureRequestGetResponse;
import com.hellosign.openapi.model.SignatureRequestListResponse;
import com.hellosign.openapi.model.SignatureRequestRemindRequest;
import com.hellosign.openapi.model.SignatureRequestSendRequest;
import com.hellosign.openapi.model.SignatureRequestSendWithTemplateRequest;
import com.hellosign.openapi.model.SignatureRequestUpdateRequest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
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
   * Embedded Bulk Send with Template
   * Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the &#x60;template_ids&#x60; parameter to be signed in an embedded iFrame. These embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.  **NOTE**: Only available for Standard plan and higher.
   * @param signatureRequestBulkCreateEmbeddedWithTemplateRequest  (required)
   * @return BulkSendJobSendResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public BulkSendJobSendResponse signatureRequestBulkCreateEmbeddedWithTemplate(SignatureRequestBulkCreateEmbeddedWithTemplateRequest signatureRequestBulkCreateEmbeddedWithTemplateRequest) throws ApiException {
    return signatureRequestBulkCreateEmbeddedWithTemplateWithHttpInfo(signatureRequestBulkCreateEmbeddedWithTemplateRequest).getData();
  }

  /**
   * Embedded Bulk Send with Template
   * Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the &#x60;template_ids&#x60; parameter to be signed in an embedded iFrame. These embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.  **NOTE**: Only available for Standard plan and higher.
   * @param signatureRequestBulkCreateEmbeddedWithTemplateRequest  (required)
   * @return ApiResponse&lt;BulkSendJobSendResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<BulkSendJobSendResponse> signatureRequestBulkCreateEmbeddedWithTemplateWithHttpInfo(SignatureRequestBulkCreateEmbeddedWithTemplateRequest signatureRequestBulkCreateEmbeddedWithTemplateRequest) throws ApiException {
    
    Object localVarPostBody = signatureRequestBulkCreateEmbeddedWithTemplateRequest;
    
    // verify the required parameter 'signatureRequestBulkCreateEmbeddedWithTemplateRequest' is set
    if (signatureRequestBulkCreateEmbeddedWithTemplateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestBulkCreateEmbeddedWithTemplateRequest' when calling signatureRequestBulkCreateEmbeddedWithTemplate");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/bulk_create_embedded_with_template";

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

    localVarFormParams = signatureRequestBulkCreateEmbeddedWithTemplateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key" };

    GenericType<BulkSendJobSendResponse> localVarReturnType = new GenericType<BulkSendJobSendResponse>() {};

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestBulkCreateEmbeddedWithTemplate", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Bulk Send with Template
   * Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the &#x60;template_ids&#x60; parameter.  **NOTE**: Only available for Standard plan and higher.
   * @param signatureRequestBulkSendWithTemplateRequest  (required)
   * @return BulkSendJobSendResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public BulkSendJobSendResponse signatureRequestBulkSendWithTemplate(SignatureRequestBulkSendWithTemplateRequest signatureRequestBulkSendWithTemplateRequest) throws ApiException {
    return signatureRequestBulkSendWithTemplateWithHttpInfo(signatureRequestBulkSendWithTemplateRequest).getData();
  }

  /**
   * Bulk Send with Template
   * Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the &#x60;template_ids&#x60; parameter.  **NOTE**: Only available for Standard plan and higher.
   * @param signatureRequestBulkSendWithTemplateRequest  (required)
   * @return ApiResponse&lt;BulkSendJobSendResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<BulkSendJobSendResponse> signatureRequestBulkSendWithTemplateWithHttpInfo(SignatureRequestBulkSendWithTemplateRequest signatureRequestBulkSendWithTemplateRequest) throws ApiException {
    
    Object localVarPostBody = signatureRequestBulkSendWithTemplateRequest;
    
    // verify the required parameter 'signatureRequestBulkSendWithTemplateRequest' is set
    if (signatureRequestBulkSendWithTemplateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestBulkSendWithTemplateRequest' when calling signatureRequestBulkSendWithTemplate");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/bulk_send_with_template";

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

    localVarFormParams = signatureRequestBulkSendWithTemplateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<BulkSendJobSendResponse> localVarReturnType = new GenericType<BulkSendJobSendResponse>() {};

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestBulkSendWithTemplate", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Cancel Incomplete Signature Request
   * Cancels an incomplete signature request. This action is **not reversible**.  The request will be canceled and signers will no longer be able to sign. If they try to access the signature request they will receive a HTTP 410 status code indicating that the resource has been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an empty 200 OK response if the signature request is eligible to be canceled and has been successfully queued.  This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the &#x60;signature_request_canceled&#x60; event. It is recommended that a  [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the &#x60;signature_request_canceled&#x60; event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.  To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.  **NOTE**: To remove your access to a completed signature request, use the endpoint: &#x60;POST /signature_request/remove/[:signature_request_id]&#x60;.
   * @param signatureRequestId The id of the incomplete SignatureRequest to cancel. (required)
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public void signatureRequestCancel(String signatureRequestId) throws ApiException {
    signatureRequestCancelWithHttpInfo(signatureRequestId);
  }

  /**
   * Cancel Incomplete Signature Request
   * Cancels an incomplete signature request. This action is **not reversible**.  The request will be canceled and signers will no longer be able to sign. If they try to access the signature request they will receive a HTTP 410 status code indicating that the resource has been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an empty 200 OK response if the signature request is eligible to be canceled and has been successfully queued.  This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the &#x60;signature_request_canceled&#x60; event. It is recommended that a  [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the &#x60;signature_request_canceled&#x60; event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.  To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.  **NOTE**: To remove your access to a completed signature request, use the endpoint: &#x60;POST /signature_request/remove/[:signature_request_id]&#x60;.
   * @param signatureRequestId The id of the incomplete SignatureRequest to cancel. (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<Void> signatureRequestCancelWithHttpInfo(String signatureRequestId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'signatureRequestId' is set
    if (signatureRequestId == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestId' when calling signatureRequestCancel");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/cancel/{signature_request_id}"
      .replaceAll("\\{" + "signature_request_id" + "\\}", apiClient.escapeString(signatureRequestId.toString()));

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

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestCancel", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, null, false);
  }
  /**
   * Create Embedded Signature Request
   * Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. &lt;u&gt;Note&lt;/u&gt; that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.
   * @param signatureRequestCreateEmbeddedRequest  (required)
   * @return SignatureRequestGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public SignatureRequestGetResponse signatureRequestCreateEmbedded(SignatureRequestCreateEmbeddedRequest signatureRequestCreateEmbeddedRequest) throws ApiException {
    return signatureRequestCreateEmbeddedWithHttpInfo(signatureRequestCreateEmbeddedRequest).getData();
  }

  /**
   * Create Embedded Signature Request
   * Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. &lt;u&gt;Note&lt;/u&gt; that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.
   * @param signatureRequestCreateEmbeddedRequest  (required)
   * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<SignatureRequestGetResponse> signatureRequestCreateEmbeddedWithHttpInfo(SignatureRequestCreateEmbeddedRequest signatureRequestCreateEmbeddedRequest) throws ApiException {
    
    Object localVarPostBody = signatureRequestCreateEmbeddedRequest;
    
    // verify the required parameter 'signatureRequestCreateEmbeddedRequest' is set
    if (signatureRequestCreateEmbeddedRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestCreateEmbeddedRequest' when calling signatureRequestCreateEmbedded");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/create_embedded";

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

    localVarFormParams = signatureRequestCreateEmbeddedRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<SignatureRequestGetResponse> localVarReturnType = new GenericType<SignatureRequestGetResponse>() {};

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestCreateEmbedded", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Create Embedded Signature Request with Template
   * Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. &lt;u&gt;Note&lt;/u&gt; that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.
   * @param signatureRequestCreateEmbeddedWithTemplateRequest  (required)
   * @return SignatureRequestGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public SignatureRequestGetResponse signatureRequestCreateEmbeddedWithTemplate(SignatureRequestCreateEmbeddedWithTemplateRequest signatureRequestCreateEmbeddedWithTemplateRequest) throws ApiException {
    return signatureRequestCreateEmbeddedWithTemplateWithHttpInfo(signatureRequestCreateEmbeddedWithTemplateRequest).getData();
  }

  /**
   * Create Embedded Signature Request with Template
   * Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. &lt;u&gt;Note&lt;/u&gt; that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.
   * @param signatureRequestCreateEmbeddedWithTemplateRequest  (required)
   * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<SignatureRequestGetResponse> signatureRequestCreateEmbeddedWithTemplateWithHttpInfo(SignatureRequestCreateEmbeddedWithTemplateRequest signatureRequestCreateEmbeddedWithTemplateRequest) throws ApiException {
    
    Object localVarPostBody = signatureRequestCreateEmbeddedWithTemplateRequest;
    
    // verify the required parameter 'signatureRequestCreateEmbeddedWithTemplateRequest' is set
    if (signatureRequestCreateEmbeddedWithTemplateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestCreateEmbeddedWithTemplateRequest' when calling signatureRequestCreateEmbeddedWithTemplate");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/create_embedded_with_template";

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

    localVarFormParams = signatureRequestCreateEmbeddedWithTemplateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<SignatureRequestGetResponse> localVarReturnType = new GenericType<SignatureRequestGetResponse>() {};

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestCreateEmbeddedWithTemplate", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Download Files
   * Obtain a copy of the current documents specified by the &#x60;signature_request_id&#x60; parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead.
   * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
   * @param fileType Set to &#x60;pdf&#x60; for a single merged document or &#x60;zip&#x60; for a collection of individual documents. (optional, default to pdf)
   * @return File
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public File signatureRequestFiles(String signatureRequestId, String fileType) throws ApiException {
    return signatureRequestFilesWithHttpInfo(signatureRequestId, fileType).getData();
  }

  /**
   * Download Files
   * Obtain a copy of the current documents specified by the &#x60;signature_request_id&#x60; parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead.
   * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
   * @param fileType Set to &#x60;pdf&#x60; for a single merged document or &#x60;zip&#x60; for a collection of individual documents. (optional, default to pdf)
   * @return ApiResponse&lt;File&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<File> signatureRequestFilesWithHttpInfo(String signatureRequestId, String fileType) throws ApiException {
    
    if (fileType == null) {
        fileType = "pdf";
    }
    Object localVarPostBody = null;
    
    // verify the required parameter 'signatureRequestId' is set
    if (signatureRequestId == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestId' when calling signatureRequestFiles");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/files/{signature_request_id}"
      .replaceAll("\\{" + "signature_request_id" + "\\}", apiClient.escapeString(signatureRequestId.toString()));

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

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestFiles", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Download Files as Data Uri
   * Obtain a copy of the current documents specified by the &#x60;signature_request_id&#x60; parameter. Returns a JSON object with a &#x60;data_uri&#x60; representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead.
   * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
   * @return FileResponseDataUri
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FileResponseDataUri signatureRequestFilesAsDataUri(String signatureRequestId) throws ApiException {
    return signatureRequestFilesAsDataUriWithHttpInfo(signatureRequestId).getData();
  }

  /**
   * Download Files as Data Uri
   * Obtain a copy of the current documents specified by the &#x60;signature_request_id&#x60; parameter. Returns a JSON object with a &#x60;data_uri&#x60; representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead.
   * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
   * @return ApiResponse&lt;FileResponseDataUri&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FileResponseDataUri> signatureRequestFilesAsDataUriWithHttpInfo(String signatureRequestId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'signatureRequestId' is set
    if (signatureRequestId == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestId' when calling signatureRequestFilesAsDataUri");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/files_as_data_uri/{signature_request_id}"
      .replaceAll("\\{" + "signature_request_id" + "\\}", apiClient.escapeString(signatureRequestId.toString()));

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

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestFilesAsDataUri", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Download Files as File Url
   * Obtain a copy of the current documents specified by the &#x60;signature_request_id&#x60; parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead.
   * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
   * @return FileResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FileResponse signatureRequestFilesAsFileUrl(String signatureRequestId) throws ApiException {
    return signatureRequestFilesAsFileUrlWithHttpInfo(signatureRequestId).getData();
  }

  /**
   * Download Files as File Url
   * Obtain a copy of the current documents specified by the &#x60;signature_request_id&#x60; parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead.
   * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
   * @return ApiResponse&lt;FileResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FileResponse> signatureRequestFilesAsFileUrlWithHttpInfo(String signatureRequestId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'signatureRequestId' is set
    if (signatureRequestId == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestId' when calling signatureRequestFilesAsFileUrl");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/files_as_file_url/{signature_request_id}"
      .replaceAll("\\{" + "signature_request_id" + "\\}", apiClient.escapeString(signatureRequestId.toString()));

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

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestFilesAsFileUrl", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Get Signature Request
   * Returns the status of the SignatureRequest specified by the &#x60;signature_request_id&#x60; parameter.
   * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
   * @return SignatureRequestGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public SignatureRequestGetResponse signatureRequestGet(String signatureRequestId) throws ApiException {
    return signatureRequestGetWithHttpInfo(signatureRequestId).getData();
  }

  /**
   * Get Signature Request
   * Returns the status of the SignatureRequest specified by the &#x60;signature_request_id&#x60; parameter.
   * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
   * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<SignatureRequestGetResponse> signatureRequestGetWithHttpInfo(String signatureRequestId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'signatureRequestId' is set
    if (signatureRequestId == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestId' when calling signatureRequestGet");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/{signature_request_id}"
      .replaceAll("\\{" + "signature_request_id" + "\\}", apiClient.escapeString(signatureRequestId.toString()));

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

    GenericType<SignatureRequestGetResponse> localVarReturnType = new GenericType<SignatureRequestGetResponse>() {};

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * List Signature Requests
   * Returns a list of SignatureRequests that you can access. This includes SignatureRequests you have sent as well as received, but not ones that you have been CCed on.  Take a look at our [search guide](/api/reference/search/) to learn more about querying signature requests.
   * @param accountId Which account to return SignatureRequests for. Must be a team member. Use &#x60;all&#x60; to indicate all team members. Defaults to your account. (optional)
   * @param page Which page number of the SignatureRequest List to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
   * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
   * @param query String that includes search terms and/or fields to be used to filter the SignatureRequest objects. (optional)
   * @return SignatureRequestListResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public SignatureRequestListResponse signatureRequestList(String accountId, Integer page, Integer pageSize, String query) throws ApiException {
    return signatureRequestListWithHttpInfo(accountId, page, pageSize, query).getData();
  }

  /**
   * List Signature Requests
   * Returns a list of SignatureRequests that you can access. This includes SignatureRequests you have sent as well as received, but not ones that you have been CCed on.  Take a look at our [search guide](/api/reference/search/) to learn more about querying signature requests.
   * @param accountId Which account to return SignatureRequests for. Must be a team member. Use &#x60;all&#x60; to indicate all team members. Defaults to your account. (optional)
   * @param page Which page number of the SignatureRequest List to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
   * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
   * @param query String that includes search terms and/or fields to be used to filter the SignatureRequest objects. (optional)
   * @return ApiResponse&lt;SignatureRequestListResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<SignatureRequestListResponse> signatureRequestListWithHttpInfo(String accountId, Integer page, Integer pageSize, String query) throws ApiException {
    
    if (page == null) {
        page = 1;
    }
    if (pageSize == null) {
        pageSize = 20;
    }
    Object localVarPostBody = null;
    
    // create path and map variables
    String localVarPath = "/signature_request/list";

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

    GenericType<SignatureRequestListResponse> localVarReturnType = new GenericType<SignatureRequestListResponse>() {};

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestList", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Release On-Hold Signature Request
   * Releases a held SignatureRequest that was claimed and prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at Draft creation that the SignatureRequest created from the Draft should be held. Releasing the SignatureRequest will send requests to all signers.
   * @param signatureRequestId The id of the SignatureRequest to release. (required)
   * @return SignatureRequestGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public SignatureRequestGetResponse signatureRequestReleaseHold(String signatureRequestId) throws ApiException {
    return signatureRequestReleaseHoldWithHttpInfo(signatureRequestId).getData();
  }

  /**
   * Release On-Hold Signature Request
   * Releases a held SignatureRequest that was claimed and prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at Draft creation that the SignatureRequest created from the Draft should be held. Releasing the SignatureRequest will send requests to all signers.
   * @param signatureRequestId The id of the SignatureRequest to release. (required)
   * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<SignatureRequestGetResponse> signatureRequestReleaseHoldWithHttpInfo(String signatureRequestId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'signatureRequestId' is set
    if (signatureRequestId == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestId' when calling signatureRequestReleaseHold");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/release_hold/{signature_request_id}"
      .replaceAll("\\{" + "signature_request_id" + "\\}", apiClient.escapeString(signatureRequestId.toString()));

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

    GenericType<SignatureRequestGetResponse> localVarReturnType = new GenericType<SignatureRequestGetResponse>() {};

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestReleaseHold", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Send Request Reminder
   * Sends an email to the signer reminding them to sign the signature request. You cannot send a reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic reminders.  **NOTE**: This action can **not** be used with embedded signature requests.
   * @param signatureRequestId The id of the SignatureRequest to send a reminder for. (required)
   * @param signatureRequestRemindRequest  (required)
   * @return SignatureRequestGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public SignatureRequestGetResponse signatureRequestRemind(String signatureRequestId, SignatureRequestRemindRequest signatureRequestRemindRequest) throws ApiException {
    return signatureRequestRemindWithHttpInfo(signatureRequestId, signatureRequestRemindRequest).getData();
  }

  /**
   * Send Request Reminder
   * Sends an email to the signer reminding them to sign the signature request. You cannot send a reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic reminders.  **NOTE**: This action can **not** be used with embedded signature requests.
   * @param signatureRequestId The id of the SignatureRequest to send a reminder for. (required)
   * @param signatureRequestRemindRequest  (required)
   * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<SignatureRequestGetResponse> signatureRequestRemindWithHttpInfo(String signatureRequestId, SignatureRequestRemindRequest signatureRequestRemindRequest) throws ApiException {
    
    Object localVarPostBody = signatureRequestRemindRequest;
    
    // verify the required parameter 'signatureRequestId' is set
    if (signatureRequestId == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestId' when calling signatureRequestRemind");
    }
    
    // verify the required parameter 'signatureRequestRemindRequest' is set
    if (signatureRequestRemindRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestRemindRequest' when calling signatureRequestRemind");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/remind/{signature_request_id}"
      .replaceAll("\\{" + "signature_request_id" + "\\}", apiClient.escapeString(signatureRequestId.toString()));

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

    localVarFormParams = signatureRequestRemindRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<SignatureRequestGetResponse> localVarReturnType = new GenericType<SignatureRequestGetResponse>() {};

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestRemind", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Remove Signature Request Access
   * Removes your access to a completed signature request. This action is **not reversible**.  The signature request must be fully executed by all parties (signed or declined to sign). Other parties will continue to maintain access to the completed signature request document(s).  Unlike /signature_request/cancel, this endpoint is synchronous and your access will be immediately removed. Upon successful removal, this endpoint will return a 200 OK response.
   * @param signatureRequestId The id of the SignatureRequest to remove. (required)
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public void signatureRequestRemove(String signatureRequestId) throws ApiException {
    signatureRequestRemoveWithHttpInfo(signatureRequestId);
  }

  /**
   * Remove Signature Request Access
   * Removes your access to a completed signature request. This action is **not reversible**.  The signature request must be fully executed by all parties (signed or declined to sign). Other parties will continue to maintain access to the completed signature request document(s).  Unlike /signature_request/cancel, this endpoint is synchronous and your access will be immediately removed. Upon successful removal, this endpoint will return a 200 OK response.
   * @param signatureRequestId The id of the SignatureRequest to remove. (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<Void> signatureRequestRemoveWithHttpInfo(String signatureRequestId) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'signatureRequestId' is set
    if (signatureRequestId == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestId' when calling signatureRequestRemove");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/remove/{signature_request_id}"
      .replaceAll("\\{" + "signature_request_id" + "\\}", apiClient.escapeString(signatureRequestId.toString()));

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

    String[] localVarAuthNames = new String[] { "api_key" };

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestRemove", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, null, false);
  }
  /**
   * Send Signature Request
   * Creates and sends a new SignatureRequest with the submitted documents. If &#x60;form_fields_per_document&#x60; is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.
   * @param signatureRequestSendRequest  (required)
   * @return SignatureRequestGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public SignatureRequestGetResponse signatureRequestSend(SignatureRequestSendRequest signatureRequestSendRequest) throws ApiException {
    return signatureRequestSendWithHttpInfo(signatureRequestSendRequest).getData();
  }

  /**
   * Send Signature Request
   * Creates and sends a new SignatureRequest with the submitted documents. If &#x60;form_fields_per_document&#x60; is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.
   * @param signatureRequestSendRequest  (required)
   * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<SignatureRequestGetResponse> signatureRequestSendWithHttpInfo(SignatureRequestSendRequest signatureRequestSendRequest) throws ApiException {
    
    Object localVarPostBody = signatureRequestSendRequest;
    
    // verify the required parameter 'signatureRequestSendRequest' is set
    if (signatureRequestSendRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestSendRequest' when calling signatureRequestSend");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/send";

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

    localVarFormParams = signatureRequestSendRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<SignatureRequestGetResponse> localVarReturnType = new GenericType<SignatureRequestGetResponse>() {};

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestSend", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Send with Template
   * Creates and sends a new SignatureRequest based off of the Template(s) specified with the &#x60;template_ids&#x60; parameter.
   * @param signatureRequestSendWithTemplateRequest  (required)
   * @return SignatureRequestGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public SignatureRequestGetResponse signatureRequestSendWithTemplate(SignatureRequestSendWithTemplateRequest signatureRequestSendWithTemplateRequest) throws ApiException {
    return signatureRequestSendWithTemplateWithHttpInfo(signatureRequestSendWithTemplateRequest).getData();
  }

  /**
   * Send with Template
   * Creates and sends a new SignatureRequest based off of the Template(s) specified with the &#x60;template_ids&#x60; parameter.
   * @param signatureRequestSendWithTemplateRequest  (required)
   * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<SignatureRequestGetResponse> signatureRequestSendWithTemplateWithHttpInfo(SignatureRequestSendWithTemplateRequest signatureRequestSendWithTemplateRequest) throws ApiException {
    
    Object localVarPostBody = signatureRequestSendWithTemplateRequest;
    
    // verify the required parameter 'signatureRequestSendWithTemplateRequest' is set
    if (signatureRequestSendWithTemplateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestSendWithTemplateRequest' when calling signatureRequestSendWithTemplate");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/send_with_template";

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

    localVarFormParams = signatureRequestSendWithTemplateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<SignatureRequestGetResponse> localVarReturnType = new GenericType<SignatureRequestGetResponse>() {};

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestSendWithTemplate", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Update Signature Request
   * Updates the email address and/or the name for a given signer on a signature request. You can listen for the &#x60;signature_request_email_bounce&#x60; event on your app or account to detect bounced emails, and respond with this method.  **NOTE**: This action cannot be performed on a signature request with an appended signature page.
   * @param signatureRequestId The id of the SignatureRequest to update. (required)
   * @param signatureRequestUpdateRequest  (required)
   * @return SignatureRequestGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public SignatureRequestGetResponse signatureRequestUpdate(String signatureRequestId, SignatureRequestUpdateRequest signatureRequestUpdateRequest) throws ApiException {
    return signatureRequestUpdateWithHttpInfo(signatureRequestId, signatureRequestUpdateRequest).getData();
  }

  /**
   * Update Signature Request
   * Updates the email address and/or the name for a given signer on a signature request. You can listen for the &#x60;signature_request_email_bounce&#x60; event on your app or account to detect bounced emails, and respond with this method.  **NOTE**: This action cannot be performed on a signature request with an appended signature page.
   * @param signatureRequestId The id of the SignatureRequest to update. (required)
   * @param signatureRequestUpdateRequest  (required)
   * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<SignatureRequestGetResponse> signatureRequestUpdateWithHttpInfo(String signatureRequestId, SignatureRequestUpdateRequest signatureRequestUpdateRequest) throws ApiException {
    
    Object localVarPostBody = signatureRequestUpdateRequest;
    
    // verify the required parameter 'signatureRequestId' is set
    if (signatureRequestId == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestId' when calling signatureRequestUpdate");
    }
    
    // verify the required parameter 'signatureRequestUpdateRequest' is set
    if (signatureRequestUpdateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestUpdateRequest' when calling signatureRequestUpdate");
    }
    
    // create path and map variables
    String localVarPath = "/signature_request/update/{signature_request_id}"
      .replaceAll("\\{" + "signature_request_id" + "\\}", apiClient.escapeString(signatureRequestId.toString()));

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

    localVarFormParams = signatureRequestUpdateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<SignatureRequestGetResponse> localVarReturnType = new GenericType<SignatureRequestGetResponse>() {};

    return apiClient.invokeAPI("SignatureRequestApi.signatureRequestUpdate", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
}
