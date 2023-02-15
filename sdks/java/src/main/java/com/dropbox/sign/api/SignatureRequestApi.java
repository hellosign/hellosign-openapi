package com.dropbox.sign.api;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;

import javax.ws.rs.core.GenericType;

import com.dropbox.sign.model.BulkSendJobSendResponse;
import com.dropbox.sign.model.ErrorResponse;
import java.io.File;
import com.dropbox.sign.model.FileResponse;
import com.dropbox.sign.model.FileResponseDataUri;
import com.dropbox.sign.model.SignatureRequestBulkCreateEmbeddedWithTemplateRequest;
import com.dropbox.sign.model.SignatureRequestBulkSendWithTemplateRequest;
import com.dropbox.sign.model.SignatureRequestCreateEmbeddedRequest;
import com.dropbox.sign.model.SignatureRequestCreateEmbeddedWithTemplateRequest;
import com.dropbox.sign.model.SignatureRequestGetResponse;
import com.dropbox.sign.model.SignatureRequestListResponse;
import com.dropbox.sign.model.SignatureRequestRemindRequest;
import com.dropbox.sign.model.SignatureRequestSendRequest;
import com.dropbox.sign.model.SignatureRequestSendWithTemplateRequest;
import com.dropbox.sign.model.SignatureRequestUpdateRequest;

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


private ApiResponse<BulkSendJobSendResponse> signatureRequestBulkCreateEmbeddedWithTemplateWithHttpInfo(SignatureRequestBulkCreateEmbeddedWithTemplateRequest signatureRequestBulkCreateEmbeddedWithTemplateRequest) throws ApiException {
    
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

  public class APIsignatureRequestBulkCreateEmbeddedWithTemplateRequest {
    private SignatureRequestBulkCreateEmbeddedWithTemplateRequest signatureRequestBulkCreateEmbeddedWithTemplateRequest;

    private APIsignatureRequestBulkCreateEmbeddedWithTemplateRequest() {
    }

    /**
     * Set signatureRequestBulkCreateEmbeddedWithTemplateRequest
     * @param signatureRequestBulkCreateEmbeddedWithTemplateRequest  (required)
     * @return APIsignatureRequestBulkCreateEmbeddedWithTemplateRequest
     */
    public APIsignatureRequestBulkCreateEmbeddedWithTemplateRequest signatureRequestBulkCreateEmbeddedWithTemplateRequest(SignatureRequestBulkCreateEmbeddedWithTemplateRequest signatureRequestBulkCreateEmbeddedWithTemplateRequest) {
      this.signatureRequestBulkCreateEmbeddedWithTemplateRequest = signatureRequestBulkCreateEmbeddedWithTemplateRequest;
      return this;
    }

    /**
     * Execute signatureRequestBulkCreateEmbeddedWithTemplate request
     * @return BulkSendJobSendResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public BulkSendJobSendResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestBulkCreateEmbeddedWithTemplate request with HTTP info returned
     * @return ApiResponse&lt;BulkSendJobSendResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<BulkSendJobSendResponse> executeWithHttpInfo() throws ApiException {
      return signatureRequestBulkCreateEmbeddedWithTemplateWithHttpInfo(signatureRequestBulkCreateEmbeddedWithTemplateRequest);
    }
  }

  /**
   * Embedded Bulk Send with Template
   * Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the &#x60;template_ids&#x60; parameter to be signed in an embedded iFrame. These embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.  **NOTE**: Only available for Standard plan and higher.
   * @return signatureRequestBulkCreateEmbeddedWithTemplateRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestBulkCreateEmbeddedWithTemplateRequest signatureRequestBulkCreateEmbeddedWithTemplate() throws ApiException {
    return new APIsignatureRequestBulkCreateEmbeddedWithTemplateRequest();
  }

private ApiResponse<BulkSendJobSendResponse> signatureRequestBulkSendWithTemplateWithHttpInfo(SignatureRequestBulkSendWithTemplateRequest signatureRequestBulkSendWithTemplateRequest) throws ApiException {
    
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

  public class APIsignatureRequestBulkSendWithTemplateRequest {
    private SignatureRequestBulkSendWithTemplateRequest signatureRequestBulkSendWithTemplateRequest;

    private APIsignatureRequestBulkSendWithTemplateRequest() {
    }

    /**
     * Set signatureRequestBulkSendWithTemplateRequest
     * @param signatureRequestBulkSendWithTemplateRequest  (required)
     * @return APIsignatureRequestBulkSendWithTemplateRequest
     */
    public APIsignatureRequestBulkSendWithTemplateRequest signatureRequestBulkSendWithTemplateRequest(SignatureRequestBulkSendWithTemplateRequest signatureRequestBulkSendWithTemplateRequest) {
      this.signatureRequestBulkSendWithTemplateRequest = signatureRequestBulkSendWithTemplateRequest;
      return this;
    }

    /**
     * Execute signatureRequestBulkSendWithTemplate request
     * @return BulkSendJobSendResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public BulkSendJobSendResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestBulkSendWithTemplate request with HTTP info returned
     * @return ApiResponse&lt;BulkSendJobSendResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<BulkSendJobSendResponse> executeWithHttpInfo() throws ApiException {
      return signatureRequestBulkSendWithTemplateWithHttpInfo(signatureRequestBulkSendWithTemplateRequest);
    }
  }

  /**
   * Bulk Send with Template
   * Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the &#x60;template_ids&#x60; parameter.  **NOTE**: Only available for Standard plan and higher.
   * @return signatureRequestBulkSendWithTemplateRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestBulkSendWithTemplateRequest signatureRequestBulkSendWithTemplate() throws ApiException {
    return new APIsignatureRequestBulkSendWithTemplateRequest();
  }

private ApiResponse<Void> signatureRequestCancelWithHttpInfo(String signatureRequestId) throws ApiException {
    
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

  public class APIsignatureRequestCancelRequest {
    private String signatureRequestId;

    private APIsignatureRequestCancelRequest(String signatureRequestId) {
      this.signatureRequestId = signatureRequestId;
    }

    /**
     * Execute signatureRequestCancel request
     
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public void execute() throws ApiException {
      this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestCancel request with HTTP info returned
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<Void> executeWithHttpInfo() throws ApiException {
      return signatureRequestCancelWithHttpInfo(signatureRequestId);
    }
  }

  /**
   * Cancel Incomplete Signature Request
   * Cancels an incomplete signature request. This action is **not reversible**.  The request will be canceled and signers will no longer be able to sign. If they try to access the signature request they will receive a HTTP 410 status code indicating that the resource has been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an empty 200 OK response if the signature request is eligible to be canceled and has been successfully queued.  This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the &#x60;signature_request_canceled&#x60; event. It is recommended that a  [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the &#x60;signature_request_canceled&#x60; event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.  To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.  **NOTE**: To remove your access to a completed signature request, use the endpoint: &#x60;POST /signature_request/remove/[:signature_request_id]&#x60;.
   * @param signatureRequestId The id of the incomplete SignatureRequest to cancel. (required)
   * @return signatureRequestCancelRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestCancelRequest signatureRequestCancel(String signatureRequestId) throws ApiException {
    return new APIsignatureRequestCancelRequest(signatureRequestId);
  }

private ApiResponse<SignatureRequestGetResponse> signatureRequestCreateEmbeddedWithHttpInfo(SignatureRequestCreateEmbeddedRequest signatureRequestCreateEmbeddedRequest) throws ApiException {
    
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

  public class APIsignatureRequestCreateEmbeddedRequest {
    private SignatureRequestCreateEmbeddedRequest signatureRequestCreateEmbeddedRequest;

    private APIsignatureRequestCreateEmbeddedRequest() {
    }

    /**
     * Set signatureRequestCreateEmbeddedRequest
     * @param signatureRequestCreateEmbeddedRequest  (required)
     * @return APIsignatureRequestCreateEmbeddedRequest
     */
    public APIsignatureRequestCreateEmbeddedRequest signatureRequestCreateEmbeddedRequest(SignatureRequestCreateEmbeddedRequest signatureRequestCreateEmbeddedRequest) {
      this.signatureRequestCreateEmbeddedRequest = signatureRequestCreateEmbeddedRequest;
      return this;
    }

    /**
     * Execute signatureRequestCreateEmbedded request
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public SignatureRequestGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestCreateEmbedded request with HTTP info returned
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<SignatureRequestGetResponse> executeWithHttpInfo() throws ApiException {
      return signatureRequestCreateEmbeddedWithHttpInfo(signatureRequestCreateEmbeddedRequest);
    }
  }

  /**
   * Create Embedded Signature Request
   * Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. &lt;u&gt;Note&lt;/u&gt; that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.
   * @return signatureRequestCreateEmbeddedRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestCreateEmbeddedRequest signatureRequestCreateEmbedded() throws ApiException {
    return new APIsignatureRequestCreateEmbeddedRequest();
  }

private ApiResponse<SignatureRequestGetResponse> signatureRequestCreateEmbeddedWithTemplateWithHttpInfo(SignatureRequestCreateEmbeddedWithTemplateRequest signatureRequestCreateEmbeddedWithTemplateRequest) throws ApiException {
    
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

  public class APIsignatureRequestCreateEmbeddedWithTemplateRequest {
    private SignatureRequestCreateEmbeddedWithTemplateRequest signatureRequestCreateEmbeddedWithTemplateRequest;

    private APIsignatureRequestCreateEmbeddedWithTemplateRequest() {
    }

    /**
     * Set signatureRequestCreateEmbeddedWithTemplateRequest
     * @param signatureRequestCreateEmbeddedWithTemplateRequest  (required)
     * @return APIsignatureRequestCreateEmbeddedWithTemplateRequest
     */
    public APIsignatureRequestCreateEmbeddedWithTemplateRequest signatureRequestCreateEmbeddedWithTemplateRequest(SignatureRequestCreateEmbeddedWithTemplateRequest signatureRequestCreateEmbeddedWithTemplateRequest) {
      this.signatureRequestCreateEmbeddedWithTemplateRequest = signatureRequestCreateEmbeddedWithTemplateRequest;
      return this;
    }

    /**
     * Execute signatureRequestCreateEmbeddedWithTemplate request
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public SignatureRequestGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestCreateEmbeddedWithTemplate request with HTTP info returned
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<SignatureRequestGetResponse> executeWithHttpInfo() throws ApiException {
      return signatureRequestCreateEmbeddedWithTemplateWithHttpInfo(signatureRequestCreateEmbeddedWithTemplateRequest);
    }
  }

  /**
   * Create Embedded Signature Request with Template
   * Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. &lt;u&gt;Note&lt;/u&gt; that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.
   * @return signatureRequestCreateEmbeddedWithTemplateRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestCreateEmbeddedWithTemplateRequest signatureRequestCreateEmbeddedWithTemplate() throws ApiException {
    return new APIsignatureRequestCreateEmbeddedWithTemplateRequest();
  }

private ApiResponse<File> signatureRequestFilesWithHttpInfo(String signatureRequestId, String fileType) throws ApiException {
    
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

  public class APIsignatureRequestFilesRequest {
    private String signatureRequestId;
    private String fileType;

    private APIsignatureRequestFilesRequest(String signatureRequestId) {
      this.signatureRequestId = signatureRequestId;
    }

    /**
     * Set fileType
     * @param fileType Set to &#x60;pdf&#x60; for a single merged document or &#x60;zip&#x60; for a collection of individual documents. (optional, default to pdf)
     * @return APIsignatureRequestFilesRequest
     */
    public APIsignatureRequestFilesRequest fileType(String fileType) {
      this.fileType = fileType;
      return this;
    }

    /**
     * Execute signatureRequestFiles request
     * @return File
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public File execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestFiles request with HTTP info returned
     * @return ApiResponse&lt;File&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<File> executeWithHttpInfo() throws ApiException {
      return signatureRequestFilesWithHttpInfo(signatureRequestId, fileType);
    }
  }

  /**
   * Download Files
   * Obtain a copy of the current documents specified by the &#x60;signature_request_id&#x60; parameter. Returns a PDF or ZIP file.  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead.
   * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
   * @return signatureRequestFilesRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestFilesRequest signatureRequestFiles(String signatureRequestId) throws ApiException {
    return new APIsignatureRequestFilesRequest(signatureRequestId);
  }

private ApiResponse<FileResponseDataUri> signatureRequestFilesAsDataUriWithHttpInfo(String signatureRequestId) throws ApiException {
    
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

  public class APIsignatureRequestFilesAsDataUriRequest {
    private String signatureRequestId;

    private APIsignatureRequestFilesAsDataUriRequest(String signatureRequestId) {
      this.signatureRequestId = signatureRequestId;
    }

    /**
     * Execute signatureRequestFilesAsDataUri request
     * @return FileResponseDataUri
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public FileResponseDataUri execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestFilesAsDataUri request with HTTP info returned
     * @return ApiResponse&lt;FileResponseDataUri&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<FileResponseDataUri> executeWithHttpInfo() throws ApiException {
      return signatureRequestFilesAsDataUriWithHttpInfo(signatureRequestId);
    }
  }

  /**
   * Download Files as Data Uri
   * Obtain a copy of the current documents specified by the &#x60;signature_request_id&#x60; parameter. Returns a JSON object with a &#x60;data_uri&#x60; representing the base64 encoded file (PDFs only).  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead.
   * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
   * @return signatureRequestFilesAsDataUriRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestFilesAsDataUriRequest signatureRequestFilesAsDataUri(String signatureRequestId) throws ApiException {
    return new APIsignatureRequestFilesAsDataUriRequest(signatureRequestId);
  }

private ApiResponse<FileResponse> signatureRequestFilesAsFileUrlWithHttpInfo(String signatureRequestId) throws ApiException {
    
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

  public class APIsignatureRequestFilesAsFileUrlRequest {
    private String signatureRequestId;

    private APIsignatureRequestFilesAsFileUrlRequest(String signatureRequestId) {
      this.signatureRequestId = signatureRequestId;
    }

    /**
     * Execute signatureRequestFilesAsFileUrl request
     * @return FileResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public FileResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestFilesAsFileUrl request with HTTP info returned
     * @return ApiResponse&lt;FileResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<FileResponse> executeWithHttpInfo() throws ApiException {
      return signatureRequestFilesAsFileUrlWithHttpInfo(signatureRequestId);
    }
  }

  /**
   * Download Files as File Url
   * Obtain a copy of the current documents specified by the &#x60;signature_request_id&#x60; parameter. Returns a JSON object with a url to the file (PDFs only).  If the files are currently being prepared, a status code of &#x60;409&#x60; will be returned instead.
   * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
   * @return signatureRequestFilesAsFileUrlRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestFilesAsFileUrlRequest signatureRequestFilesAsFileUrl(String signatureRequestId) throws ApiException {
    return new APIsignatureRequestFilesAsFileUrlRequest(signatureRequestId);
  }

private ApiResponse<SignatureRequestGetResponse> signatureRequestGetWithHttpInfo(String signatureRequestId) throws ApiException {
    
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

  public class APIsignatureRequestGetRequest {
    private String signatureRequestId;

    private APIsignatureRequestGetRequest(String signatureRequestId) {
      this.signatureRequestId = signatureRequestId;
    }

    /**
     * Execute signatureRequestGet request
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public SignatureRequestGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestGet request with HTTP info returned
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<SignatureRequestGetResponse> executeWithHttpInfo() throws ApiException {
      return signatureRequestGetWithHttpInfo(signatureRequestId);
    }
  }

  /**
   * Get Signature Request
   * Returns the status of the SignatureRequest specified by the &#x60;signature_request_id&#x60; parameter.
   * @param signatureRequestId The id of the SignatureRequest to retrieve. (required)
   * @return signatureRequestGetRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestGetRequest signatureRequestGet(String signatureRequestId) throws ApiException {
    return new APIsignatureRequestGetRequest(signatureRequestId);
  }

private ApiResponse<SignatureRequestListResponse> signatureRequestListWithHttpInfo(String accountId, Integer page, Integer pageSize, String query) throws ApiException {
    
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

  public class APIsignatureRequestListRequest {
    private String accountId;
    private Integer page;
    private Integer pageSize;
    private String query;

    private APIsignatureRequestListRequest() {
    }

    /**
     * Set accountId
     * @param accountId Which account to return SignatureRequests for. Must be a team member. Use &#x60;all&#x60; to indicate all team members. Defaults to your account. (optional)
     * @return APIsignatureRequestListRequest
     */
    public APIsignatureRequestListRequest accountId(String accountId) {
      this.accountId = accountId;
      return this;
    }

    /**
     * Set page
     * @param page Which page number of the SignatureRequest List to return. Defaults to &#x60;1&#x60;. (optional, default to 1)
     * @return APIsignatureRequestListRequest
     */
    public APIsignatureRequestListRequest page(Integer page) {
      this.page = page;
      return this;
    }

    /**
     * Set pageSize
     * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
     * @return APIsignatureRequestListRequest
     */
    public APIsignatureRequestListRequest pageSize(Integer pageSize) {
      this.pageSize = pageSize;
      return this;
    }

    /**
     * Set query
     * @param query String that includes search terms and/or fields to be used to filter the SignatureRequest objects. (optional)
     * @return APIsignatureRequestListRequest
     */
    public APIsignatureRequestListRequest query(String query) {
      this.query = query;
      return this;
    }

    /**
     * Execute signatureRequestList request
     * @return SignatureRequestListResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public SignatureRequestListResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestList request with HTTP info returned
     * @return ApiResponse&lt;SignatureRequestListResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<SignatureRequestListResponse> executeWithHttpInfo() throws ApiException {
      return signatureRequestListWithHttpInfo(accountId, page, pageSize, query);
    }
  }

  /**
   * List Signature Requests
   * Returns a list of SignatureRequests that you can access. This includes SignatureRequests you have sent as well as received, but not ones that you have been CCed on.  Take a look at our [search guide](/api/reference/search/) to learn more about querying signature requests.
   * @return signatureRequestListRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestListRequest signatureRequestList() throws ApiException {
    return new APIsignatureRequestListRequest();
  }

private ApiResponse<SignatureRequestGetResponse> signatureRequestReleaseHoldWithHttpInfo(String signatureRequestId) throws ApiException {
    
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

  public class APIsignatureRequestReleaseHoldRequest {
    private String signatureRequestId;

    private APIsignatureRequestReleaseHoldRequest(String signatureRequestId) {
      this.signatureRequestId = signatureRequestId;
    }

    /**
     * Execute signatureRequestReleaseHold request
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public SignatureRequestGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestReleaseHold request with HTTP info returned
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<SignatureRequestGetResponse> executeWithHttpInfo() throws ApiException {
      return signatureRequestReleaseHoldWithHttpInfo(signatureRequestId);
    }
  }

  /**
   * Release On-Hold Signature Request
   * Releases a held SignatureRequest that was claimed and prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at Draft creation that the SignatureRequest created from the Draft should be held. Releasing the SignatureRequest will send requests to all signers.
   * @param signatureRequestId The id of the SignatureRequest to release. (required)
   * @return signatureRequestReleaseHoldRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestReleaseHoldRequest signatureRequestReleaseHold(String signatureRequestId) throws ApiException {
    return new APIsignatureRequestReleaseHoldRequest(signatureRequestId);
  }

private ApiResponse<SignatureRequestGetResponse> signatureRequestRemindWithHttpInfo(String signatureRequestId, SignatureRequestRemindRequest signatureRequestRemindRequest) throws ApiException {
    
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

  public class APIsignatureRequestRemindRequest {
    private String signatureRequestId;
    private SignatureRequestRemindRequest signatureRequestRemindRequest;

    private APIsignatureRequestRemindRequest(String signatureRequestId) {
      this.signatureRequestId = signatureRequestId;
    }

    /**
     * Set signatureRequestRemindRequest
     * @param signatureRequestRemindRequest  (required)
     * @return APIsignatureRequestRemindRequest
     */
    public APIsignatureRequestRemindRequest signatureRequestRemindRequest(SignatureRequestRemindRequest signatureRequestRemindRequest) {
      this.signatureRequestRemindRequest = signatureRequestRemindRequest;
      return this;
    }

    /**
     * Execute signatureRequestRemind request
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public SignatureRequestGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestRemind request with HTTP info returned
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<SignatureRequestGetResponse> executeWithHttpInfo() throws ApiException {
      return signatureRequestRemindWithHttpInfo(signatureRequestId, signatureRequestRemindRequest);
    }
  }

  /**
   * Send Request Reminder
   * Sends an email to the signer reminding them to sign the signature request. You cannot send a reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic reminders.  **NOTE**: This action can **not** be used with embedded signature requests.
   * @param signatureRequestId The id of the SignatureRequest to send a reminder for. (required)
   * @return signatureRequestRemindRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestRemindRequest signatureRequestRemind(String signatureRequestId) throws ApiException {
    return new APIsignatureRequestRemindRequest(signatureRequestId);
  }

private ApiResponse<Void> signatureRequestRemoveWithHttpInfo(String signatureRequestId) throws ApiException {
    
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

  public class APIsignatureRequestRemoveRequest {
    private String signatureRequestId;

    private APIsignatureRequestRemoveRequest(String signatureRequestId) {
      this.signatureRequestId = signatureRequestId;
    }

    /**
     * Execute signatureRequestRemove request
     
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public void execute() throws ApiException {
      this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestRemove request with HTTP info returned
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<Void> executeWithHttpInfo() throws ApiException {
      return signatureRequestRemoveWithHttpInfo(signatureRequestId);
    }
  }

  /**
   * Remove Signature Request Access
   * Removes your access to a completed signature request. This action is **not reversible**.  The signature request must be fully executed by all parties (signed or declined to sign). Other parties will continue to maintain access to the completed signature request document(s).  Unlike /signature_request/cancel, this endpoint is synchronous and your access will be immediately removed. Upon successful removal, this endpoint will return a 200 OK response.
   * @param signatureRequestId The id of the SignatureRequest to remove. (required)
   * @return signatureRequestRemoveRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestRemoveRequest signatureRequestRemove(String signatureRequestId) throws ApiException {
    return new APIsignatureRequestRemoveRequest(signatureRequestId);
  }

private ApiResponse<SignatureRequestGetResponse> signatureRequestSendWithHttpInfo(SignatureRequestSendRequest signatureRequestSendRequest) throws ApiException {
    
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

  public class APIsignatureRequestSendRequest {
    private SignatureRequestSendRequest signatureRequestSendRequest;

    private APIsignatureRequestSendRequest() {
    }

    /**
     * Set signatureRequestSendRequest
     * @param signatureRequestSendRequest  (required)
     * @return APIsignatureRequestSendRequest
     */
    public APIsignatureRequestSendRequest signatureRequestSendRequest(SignatureRequestSendRequest signatureRequestSendRequest) {
      this.signatureRequestSendRequest = signatureRequestSendRequest;
      return this;
    }

    /**
     * Execute signatureRequestSend request
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public SignatureRequestGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestSend request with HTTP info returned
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<SignatureRequestGetResponse> executeWithHttpInfo() throws ApiException {
      return signatureRequestSendWithHttpInfo(signatureRequestSendRequest);
    }
  }

  /**
   * Send Signature Request
   * Creates and sends a new SignatureRequest with the submitted documents. If &#x60;form_fields_per_document&#x60; is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.
   * @return signatureRequestSendRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestSendRequest signatureRequestSend() throws ApiException {
    return new APIsignatureRequestSendRequest();
  }

private ApiResponse<SignatureRequestGetResponse> signatureRequestSendWithTemplateWithHttpInfo(SignatureRequestSendWithTemplateRequest signatureRequestSendWithTemplateRequest) throws ApiException {
    
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

  public class APIsignatureRequestSendWithTemplateRequest {
    private SignatureRequestSendWithTemplateRequest signatureRequestSendWithTemplateRequest;

    private APIsignatureRequestSendWithTemplateRequest() {
    }

    /**
     * Set signatureRequestSendWithTemplateRequest
     * @param signatureRequestSendWithTemplateRequest  (required)
     * @return APIsignatureRequestSendWithTemplateRequest
     */
    public APIsignatureRequestSendWithTemplateRequest signatureRequestSendWithTemplateRequest(SignatureRequestSendWithTemplateRequest signatureRequestSendWithTemplateRequest) {
      this.signatureRequestSendWithTemplateRequest = signatureRequestSendWithTemplateRequest;
      return this;
    }

    /**
     * Execute signatureRequestSendWithTemplate request
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public SignatureRequestGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestSendWithTemplate request with HTTP info returned
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<SignatureRequestGetResponse> executeWithHttpInfo() throws ApiException {
      return signatureRequestSendWithTemplateWithHttpInfo(signatureRequestSendWithTemplateRequest);
    }
  }

  /**
   * Send with Template
   * Creates and sends a new SignatureRequest based off of the Template(s) specified with the &#x60;template_ids&#x60; parameter.
   * @return signatureRequestSendWithTemplateRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestSendWithTemplateRequest signatureRequestSendWithTemplate() throws ApiException {
    return new APIsignatureRequestSendWithTemplateRequest();
  }

private ApiResponse<SignatureRequestGetResponse> signatureRequestUpdateWithHttpInfo(String signatureRequestId, SignatureRequestUpdateRequest signatureRequestUpdateRequest) throws ApiException {
    
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

  public class APIsignatureRequestUpdateRequest {
    private String signatureRequestId;
    private SignatureRequestUpdateRequest signatureRequestUpdateRequest;

    private APIsignatureRequestUpdateRequest(String signatureRequestId) {
      this.signatureRequestId = signatureRequestId;
    }

    /**
     * Set signatureRequestUpdateRequest
     * @param signatureRequestUpdateRequest  (required)
     * @return APIsignatureRequestUpdateRequest
     */
    public APIsignatureRequestUpdateRequest signatureRequestUpdateRequest(SignatureRequestUpdateRequest signatureRequestUpdateRequest) {
      this.signatureRequestUpdateRequest = signatureRequestUpdateRequest;
      return this;
    }

    /**
     * Execute signatureRequestUpdate request
     * @return SignatureRequestGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public SignatureRequestGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute signatureRequestUpdate request with HTTP info returned
     * @return ApiResponse&lt;SignatureRequestGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<SignatureRequestGetResponse> executeWithHttpInfo() throws ApiException {
      return signatureRequestUpdateWithHttpInfo(signatureRequestId, signatureRequestUpdateRequest);
    }
  }

  /**
   * Update Signature Request
   * Updates the email address and/or the name for a given signer on a signature request. You can listen for the &#x60;signature_request_email_bounce&#x60; event on your app or account to detect bounced emails, and respond with this method.  **NOTE**: This action cannot be performed on a signature request with an appended signature page.
   * @param signatureRequestId The id of the SignatureRequest to update. (required)
   * @return signatureRequestUpdateRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIsignatureRequestUpdateRequest signatureRequestUpdate(String signatureRequestId) throws ApiException {
    return new APIsignatureRequestUpdateRequest(signatureRequestId);
  }
}
