package com.dropbox.sign.api;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;

import javax.ws.rs.core.GenericType;

import com.dropbox.sign.model.AccountCreateRequest;
import com.dropbox.sign.model.AccountCreateResponse;
import com.dropbox.sign.model.AccountGetResponse;
import com.dropbox.sign.model.AccountUpdateRequest;
import com.dropbox.sign.model.AccountVerifyRequest;
import com.dropbox.sign.model.AccountVerifyResponse;
import com.dropbox.sign.model.ErrorResponse;

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


private ApiResponse<AccountCreateResponse> accountCreateWithHttpInfo(AccountCreateRequest accountCreateRequest) throws ApiException {
    
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

  public class APIaccountCreateRequest {
    private AccountCreateRequest accountCreateRequest;

    private APIaccountCreateRequest() {
    }

    /**
     * Set accountCreateRequest
     * @param accountCreateRequest  (required)
     * @return APIaccountCreateRequest
     */
    public APIaccountCreateRequest accountCreateRequest(AccountCreateRequest accountCreateRequest) {
      this.accountCreateRequest = accountCreateRequest;
      return this;
    }

    /**
     * Execute accountCreate request
     * @return AccountCreateResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public AccountCreateResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute accountCreate request with HTTP info returned
     * @return ApiResponse&lt;AccountCreateResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<AccountCreateResponse> executeWithHttpInfo() throws ApiException {
      return accountCreateWithHttpInfo(accountCreateRequest);
    }
  }

  /**
   * Create Account
   * Creates a new Dropbox Sign Account that is associated with the specified &#x60;email_address&#x60;.
   * @return accountCreateRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIaccountCreateRequest accountCreate() throws ApiException {
    return new APIaccountCreateRequest();
  }

private ApiResponse<AccountGetResponse> accountGetWithHttpInfo(String accountId, String emailAddress) throws ApiException {
    
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

  public class APIaccountGetRequest {
    private String accountId;
    private String emailAddress;

    private APIaccountGetRequest() {
    }

    /**
     * Set accountId
     * @param accountId &#x60;account_id&#x60; or &#x60;email_address&#x60; is required. If both are provided, the account id prevails.  The ID of the Account. (optional)
     * @return APIaccountGetRequest
     */
    public APIaccountGetRequest accountId(String accountId) {
      this.accountId = accountId;
      return this;
    }

    /**
     * Set emailAddress
     * @param emailAddress &#x60;account_id&#x60; or &#x60;email_address&#x60; is required, If both are provided, the account id prevails.  The email address of the Account. (optional)
     * @return APIaccountGetRequest
     */
    public APIaccountGetRequest emailAddress(String emailAddress) {
      this.emailAddress = emailAddress;
      return this;
    }

    /**
     * Execute accountGet request
     * @return AccountGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public AccountGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute accountGet request with HTTP info returned
     * @return ApiResponse&lt;AccountGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<AccountGetResponse> executeWithHttpInfo() throws ApiException {
      return accountGetWithHttpInfo(accountId, emailAddress);
    }
  }

  /**
   * Get Account
   * Returns the properties and settings of your Account.
   * @return accountGetRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIaccountGetRequest accountGet() throws ApiException {
    return new APIaccountGetRequest();
  }

private ApiResponse<AccountGetResponse> accountUpdateWithHttpInfo(AccountUpdateRequest accountUpdateRequest) throws ApiException {
    
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

  public class APIaccountUpdateRequest {
    private AccountUpdateRequest accountUpdateRequest;

    private APIaccountUpdateRequest() {
    }

    /**
     * Set accountUpdateRequest
     * @param accountUpdateRequest  (required)
     * @return APIaccountUpdateRequest
     */
    public APIaccountUpdateRequest accountUpdateRequest(AccountUpdateRequest accountUpdateRequest) {
      this.accountUpdateRequest = accountUpdateRequest;
      return this;
    }

    /**
     * Execute accountUpdate request
     * @return AccountGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public AccountGetResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute accountUpdate request with HTTP info returned
     * @return ApiResponse&lt;AccountGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<AccountGetResponse> executeWithHttpInfo() throws ApiException {
      return accountUpdateWithHttpInfo(accountUpdateRequest);
    }
  }

  /**
   * Update Account
   * Updates the properties and settings of your Account. Currently only allows for updates to the [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.
   * @return accountUpdateRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIaccountUpdateRequest accountUpdate() throws ApiException {
    return new APIaccountUpdateRequest();
  }

private ApiResponse<AccountVerifyResponse> accountVerifyWithHttpInfo(AccountVerifyRequest accountVerifyRequest) throws ApiException {
    
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

  public class APIaccountVerifyRequest {
    private AccountVerifyRequest accountVerifyRequest;

    private APIaccountVerifyRequest() {
    }

    /**
     * Set accountVerifyRequest
     * @param accountVerifyRequest  (required)
     * @return APIaccountVerifyRequest
     */
    public APIaccountVerifyRequest accountVerifyRequest(AccountVerifyRequest accountVerifyRequest) {
      this.accountVerifyRequest = accountVerifyRequest;
      return this;
    }

    /**
     * Execute accountVerify request
     * @return AccountVerifyResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>
     
     */
    
    public AccountVerifyResponse execute() throws ApiException {
      return this.executeWithHttpInfo().getData();
    }

    /**
     * Execute accountVerify request with HTTP info returned
     * @return ApiResponse&lt;AccountVerifyResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
       <table summary="Response Details" border="1">
         <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
         <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
         <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
       </table>

     */
    public ApiResponse<AccountVerifyResponse> executeWithHttpInfo() throws ApiException {
      return accountVerifyWithHttpInfo(accountVerifyRequest);
    }
  }

  /**
   * Verify Account
   * Verifies whether an Dropbox Sign Account exists for the given email address.
   * @return accountVerifyRequest
   * @throws ApiException if fails to make API call
   
   
   */
  public APIaccountVerifyRequest accountVerify() throws ApiException {
    return new APIaccountVerifyRequest();
  }
}
