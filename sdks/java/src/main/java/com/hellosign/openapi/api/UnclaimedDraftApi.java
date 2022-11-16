package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiResponse;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.Pair;

import javax.ws.rs.core.GenericType;

import com.hellosign.openapi.model.ErrorResponse;
import com.hellosign.openapi.model.UnclaimedDraftCreateEmbeddedRequest;
import com.hellosign.openapi.model.UnclaimedDraftCreateEmbeddedWithTemplateRequest;
import com.hellosign.openapi.model.UnclaimedDraftCreateRequest;
import com.hellosign.openapi.model.UnclaimedDraftCreateResponse;
import com.hellosign.openapi.model.UnclaimedDraftEditAndResendRequest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
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
   * Create Unclaimed Draft
   * Creates a new Draft that can be claimed using the claim URL. The first authenticated user to access the URL will claim the Draft and will be shown either the \&quot;Sign and send\&quot; or the \&quot;Request signature\&quot; page with the Draft loaded. Subsequent access to the claim URL will result in a 404.
   * @param unclaimedDraftCreateRequest  (required)
   * @return UnclaimedDraftCreateResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public UnclaimedDraftCreateResponse unclaimedDraftCreate(UnclaimedDraftCreateRequest unclaimedDraftCreateRequest) throws ApiException {
    return unclaimedDraftCreateWithHttpInfo(unclaimedDraftCreateRequest).getData();
  }

  /**
   * Create Unclaimed Draft
   * Creates a new Draft that can be claimed using the claim URL. The first authenticated user to access the URL will claim the Draft and will be shown either the \&quot;Sign and send\&quot; or the \&quot;Request signature\&quot; page with the Draft loaded. Subsequent access to the claim URL will result in a 404.
   * @param unclaimedDraftCreateRequest  (required)
   * @return ApiResponse&lt;UnclaimedDraftCreateResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<UnclaimedDraftCreateResponse> unclaimedDraftCreateWithHttpInfo(UnclaimedDraftCreateRequest unclaimedDraftCreateRequest) throws ApiException {
    
    Object localVarPostBody = unclaimedDraftCreateRequest;
    
    // verify the required parameter 'unclaimedDraftCreateRequest' is set
    if (unclaimedDraftCreateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'unclaimedDraftCreateRequest' when calling unclaimedDraftCreate");
    }
    
    // create path and map variables
    String localVarPath = "/unclaimed_draft/create";

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

    localVarFormParams = unclaimedDraftCreateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<UnclaimedDraftCreateResponse> localVarReturnType = new GenericType<UnclaimedDraftCreateResponse>() {};

    return apiClient.invokeAPI("UnclaimedDraftApi.unclaimedDraftCreate", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Create Embedded Unclaimed Draft
   * Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \&quot;Request signature\&quot; page with the Draft loaded. Subsequent access to the claim URL will result in a &#x60;404&#x60;. For this embedded endpoint the &#x60;requester_email_address&#x60; parameter is required.  **NOTE**: Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.
   * @param unclaimedDraftCreateEmbeddedRequest  (required)
   * @return UnclaimedDraftCreateResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public UnclaimedDraftCreateResponse unclaimedDraftCreateEmbedded(UnclaimedDraftCreateEmbeddedRequest unclaimedDraftCreateEmbeddedRequest) throws ApiException {
    return unclaimedDraftCreateEmbeddedWithHttpInfo(unclaimedDraftCreateEmbeddedRequest).getData();
  }

  /**
   * Create Embedded Unclaimed Draft
   * Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \&quot;Request signature\&quot; page with the Draft loaded. Subsequent access to the claim URL will result in a &#x60;404&#x60;. For this embedded endpoint the &#x60;requester_email_address&#x60; parameter is required.  **NOTE**: Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.
   * @param unclaimedDraftCreateEmbeddedRequest  (required)
   * @return ApiResponse&lt;UnclaimedDraftCreateResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<UnclaimedDraftCreateResponse> unclaimedDraftCreateEmbeddedWithHttpInfo(UnclaimedDraftCreateEmbeddedRequest unclaimedDraftCreateEmbeddedRequest) throws ApiException {
    
    Object localVarPostBody = unclaimedDraftCreateEmbeddedRequest;
    
    // verify the required parameter 'unclaimedDraftCreateEmbeddedRequest' is set
    if (unclaimedDraftCreateEmbeddedRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'unclaimedDraftCreateEmbeddedRequest' when calling unclaimedDraftCreateEmbedded");
    }
    
    // create path and map variables
    String localVarPath = "/unclaimed_draft/create_embedded";

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

    localVarFormParams = unclaimedDraftCreateEmbeddedRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<UnclaimedDraftCreateResponse> localVarReturnType = new GenericType<UnclaimedDraftCreateResponse>() {};

    return apiClient.invokeAPI("UnclaimedDraftApi.unclaimedDraftCreateEmbedded", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Create Embedded Unclaimed Draft with Template
   * Creates a new Draft with a previously saved template(s) that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \&quot;Request signature\&quot; page with the Draft loaded. Subsequent access to the claim URL will result in a &#x60;404&#x60;. For this embedded endpoint the &#x60;requester_email_address&#x60; parameter is required.  **NOTE**: Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.
   * @param unclaimedDraftCreateEmbeddedWithTemplateRequest  (required)
   * @return UnclaimedDraftCreateResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public UnclaimedDraftCreateResponse unclaimedDraftCreateEmbeddedWithTemplate(UnclaimedDraftCreateEmbeddedWithTemplateRequest unclaimedDraftCreateEmbeddedWithTemplateRequest) throws ApiException {
    return unclaimedDraftCreateEmbeddedWithTemplateWithHttpInfo(unclaimedDraftCreateEmbeddedWithTemplateRequest).getData();
  }

  /**
   * Create Embedded Unclaimed Draft with Template
   * Creates a new Draft with a previously saved template(s) that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the \&quot;Request signature\&quot; page with the Draft loaded. Subsequent access to the claim URL will result in a &#x60;404&#x60;. For this embedded endpoint the &#x60;requester_email_address&#x60; parameter is required.  **NOTE**: Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.
   * @param unclaimedDraftCreateEmbeddedWithTemplateRequest  (required)
   * @return ApiResponse&lt;UnclaimedDraftCreateResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<UnclaimedDraftCreateResponse> unclaimedDraftCreateEmbeddedWithTemplateWithHttpInfo(UnclaimedDraftCreateEmbeddedWithTemplateRequest unclaimedDraftCreateEmbeddedWithTemplateRequest) throws ApiException {
    
    Object localVarPostBody = unclaimedDraftCreateEmbeddedWithTemplateRequest;
    
    // verify the required parameter 'unclaimedDraftCreateEmbeddedWithTemplateRequest' is set
    if (unclaimedDraftCreateEmbeddedWithTemplateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'unclaimedDraftCreateEmbeddedWithTemplateRequest' when calling unclaimedDraftCreateEmbeddedWithTemplate");
    }
    
    // create path and map variables
    String localVarPath = "/unclaimed_draft/create_embedded_with_template";

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

    localVarFormParams = unclaimedDraftCreateEmbeddedWithTemplateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<UnclaimedDraftCreateResponse> localVarReturnType = new GenericType<UnclaimedDraftCreateResponse>() {};

    return apiClient.invokeAPI("UnclaimedDraftApi.unclaimedDraftCreateEmbeddedWithTemplate", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Edit and Resend Unclaimed Draft
   * Creates a new signature request from an embedded request that can be edited prior to being sent to the recipients. Parameter &#x60;test_mode&#x60; can be edited prior to request. Signers can be edited in embedded editor. Requester&#39;s email address will remain unchanged if &#x60;requester_email_address&#x60; parameter is not set.  **NOTE**: Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.
   * @param signatureRequestId The ID of the signature request to edit and resend. (required)
   * @param unclaimedDraftEditAndResendRequest  (required)
   * @return UnclaimedDraftCreateResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public UnclaimedDraftCreateResponse unclaimedDraftEditAndResend(String signatureRequestId, UnclaimedDraftEditAndResendRequest unclaimedDraftEditAndResendRequest) throws ApiException {
    return unclaimedDraftEditAndResendWithHttpInfo(signatureRequestId, unclaimedDraftEditAndResendRequest).getData();
  }

  /**
   * Edit and Resend Unclaimed Draft
   * Creates a new signature request from an embedded request that can be edited prior to being sent to the recipients. Parameter &#x60;test_mode&#x60; can be edited prior to request. Signers can be edited in embedded editor. Requester&#39;s email address will remain unchanged if &#x60;requester_email_address&#x60; parameter is not set.  **NOTE**: Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.
   * @param signatureRequestId The ID of the signature request to edit and resend. (required)
   * @param unclaimedDraftEditAndResendRequest  (required)
   * @return ApiResponse&lt;UnclaimedDraftCreateResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<UnclaimedDraftCreateResponse> unclaimedDraftEditAndResendWithHttpInfo(String signatureRequestId, UnclaimedDraftEditAndResendRequest unclaimedDraftEditAndResendRequest) throws ApiException {
    
    Object localVarPostBody = unclaimedDraftEditAndResendRequest;
    
    // verify the required parameter 'signatureRequestId' is set
    if (signatureRequestId == null) {
      throw new ApiException(400, "Missing the required parameter 'signatureRequestId' when calling unclaimedDraftEditAndResend");
    }
    
    // verify the required parameter 'unclaimedDraftEditAndResendRequest' is set
    if (unclaimedDraftEditAndResendRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'unclaimedDraftEditAndResendRequest' when calling unclaimedDraftEditAndResend");
    }
    
    // create path and map variables
    String localVarPath = "/unclaimed_draft/edit_and_resend/{signature_request_id}"
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

    localVarFormParams = unclaimedDraftEditAndResendRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<UnclaimedDraftCreateResponse> localVarReturnType = new GenericType<UnclaimedDraftCreateResponse>() {};

    return apiClient.invokeAPI("UnclaimedDraftApi.unclaimedDraftEditAndResend", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
}
