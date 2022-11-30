package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiResponse;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.Pair;

import javax.ws.rs.core.GenericType;

import com.hellosign.openapi.model.AccountCreateRequest;
import com.hellosign.openapi.model.AccountCreateResponse;
import com.hellosign.openapi.model.AccountGetResponse;
import com.hellosign.openapi.model.AccountUpdateRequest;
import com.hellosign.openapi.model.AccountVerifyRequest;
import com.hellosign.openapi.model.AccountVerifyResponse;
import com.hellosign.openapi.model.ErrorResponse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class AccountApi {
  private ApiClient apiClient;

  public AccountApi() {
    this(Configuration.getDefaultApiClient());
  }

  public AccountApi(ApiClient apiClient) {
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
   * Create Account
   * Creates a new Dropbox Sign Account that is associated with the specified &#x60;email_address&#x60;.
   * @param accountCreateRequest  (required)
   * @return AccountCreateResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public AccountCreateResponse accountCreate(AccountCreateRequest accountCreateRequest) throws ApiException {
    return accountCreateWithHttpInfo(accountCreateRequest).getData();
  }

  /**
   * Create Account
   * Creates a new Dropbox Sign Account that is associated with the specified &#x60;email_address&#x60;.
   * @param accountCreateRequest  (required)
   * @return ApiResponse&lt;AccountCreateResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<AccountCreateResponse> accountCreateWithHttpInfo(AccountCreateRequest accountCreateRequest) throws ApiException {
    
    Object localVarPostBody = accountCreateRequest;
    
    // verify the required parameter 'accountCreateRequest' is set
    if (accountCreateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'accountCreateRequest' when calling accountCreate");
    }
    
    // create path and map variables
    String localVarPath = "/account/create";

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

    localVarFormParams = accountCreateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<AccountCreateResponse> localVarReturnType = new GenericType<AccountCreateResponse>() {};

    return apiClient.invokeAPI("AccountApi.accountCreate", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Get Account
   * Returns the properties and settings of your Account.
   * @param accountId &#x60;account_id&#x60; or &#x60;email_address&#x60; is required. If both are provided, the account id prevails.  The ID of the Account. (optional)
   * @param emailAddress &#x60;account_id&#x60; or &#x60;email_address&#x60; is required, If both are provided, the account id prevails.  The email address of the Account. (optional)
   * @return AccountGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public AccountGetResponse accountGet(String accountId, String emailAddress) throws ApiException {
    return accountGetWithHttpInfo(accountId, emailAddress).getData();
  }

  /**
   * Get Account
   * Returns the properties and settings of your Account.
   * @param accountId &#x60;account_id&#x60; or &#x60;email_address&#x60; is required. If both are provided, the account id prevails.  The ID of the Account. (optional)
   * @param emailAddress &#x60;account_id&#x60; or &#x60;email_address&#x60; is required, If both are provided, the account id prevails.  The email address of the Account. (optional)
   * @return ApiResponse&lt;AccountGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<AccountGetResponse> accountGetWithHttpInfo(String accountId, String emailAddress) throws ApiException {
    
    Object localVarPostBody = null;
    
    // create path and map variables
    String localVarPath = "/account";

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "account_id", accountId));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "email_address", emailAddress));

    
    
    
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

    GenericType<AccountGetResponse> localVarReturnType = new GenericType<AccountGetResponse>() {};

    return apiClient.invokeAPI("AccountApi.accountGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Update Account
   * Updates the properties and settings of your Account. Currently only allows for updates to the [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.
   * @param accountUpdateRequest  (required)
   * @return AccountGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public AccountGetResponse accountUpdate(AccountUpdateRequest accountUpdateRequest) throws ApiException {
    return accountUpdateWithHttpInfo(accountUpdateRequest).getData();
  }

  /**
   * Update Account
   * Updates the properties and settings of your Account. Currently only allows for updates to the [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.
   * @param accountUpdateRequest  (required)
   * @return ApiResponse&lt;AccountGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<AccountGetResponse> accountUpdateWithHttpInfo(AccountUpdateRequest accountUpdateRequest) throws ApiException {
    
    Object localVarPostBody = accountUpdateRequest;
    
    // verify the required parameter 'accountUpdateRequest' is set
    if (accountUpdateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'accountUpdateRequest' when calling accountUpdate");
    }
    
    // create path and map variables
    String localVarPath = "/account";

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

    localVarFormParams = accountUpdateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<AccountGetResponse> localVarReturnType = new GenericType<AccountGetResponse>() {};

    return apiClient.invokeAPI("AccountApi.accountUpdate", localVarPath, "PUT", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Verify Account
   * Verifies whether an Dropbox Sign Account exists for the given email address.
   * @param accountVerifyRequest  (required)
   * @return AccountVerifyResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public AccountVerifyResponse accountVerify(AccountVerifyRequest accountVerifyRequest) throws ApiException {
    return accountVerifyWithHttpInfo(accountVerifyRequest).getData();
  }

  /**
   * Verify Account
   * Verifies whether an Dropbox Sign Account exists for the given email address.
   * @param accountVerifyRequest  (required)
   * @return ApiResponse&lt;AccountVerifyResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<AccountVerifyResponse> accountVerifyWithHttpInfo(AccountVerifyRequest accountVerifyRequest) throws ApiException {
    
    Object localVarPostBody = accountVerifyRequest;
    
    // verify the required parameter 'accountVerifyRequest' is set
    if (accountVerifyRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'accountVerifyRequest' when calling accountVerify");
    }
    
    // create path and map variables
    String localVarPath = "/account/verify";

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

    localVarFormParams = accountVerifyRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key", "oauth2" };

    GenericType<AccountVerifyResponse> localVarReturnType = new GenericType<AccountVerifyResponse>() {};

    return apiClient.invokeAPI("AccountApi.accountVerify", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
}
