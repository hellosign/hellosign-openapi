package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiResponse;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.Pair;

import javax.ws.rs.core.GenericType;

import com.hellosign.openapi.model.OAuthTokenGenerateRequest;
import com.hellosign.openapi.model.OAuthTokenRefreshRequest;
import com.hellosign.openapi.model.OAuthTokenResponse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class OAuthApi {
  private ApiClient apiClient;

  public OAuthApi() {
    this(Configuration.getDefaultApiClient());
  }

  public OAuthApi(ApiClient apiClient) {
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
   * OAuth Token Generate
   * Once you have retrieved the code from the user callback, you will need to exchange it for an access token via a backend call.
   * @param oauthTokenGenerateRequest  (required)
   * @return OAuthTokenResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     </table>
   */
  public OAuthTokenResponse oauthTokenGenerate(OAuthTokenGenerateRequest oauthTokenGenerateRequest) throws ApiException {
    return oauthTokenGenerateWithHttpInfo(oauthTokenGenerateRequest).getData();
  }

  /**
   * OAuth Token Generate
   * Once you have retrieved the code from the user callback, you will need to exchange it for an access token via a backend call.
   * @param oauthTokenGenerateRequest  (required)
   * @return ApiResponse&lt;OAuthTokenResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     </table>
   */
  public ApiResponse<OAuthTokenResponse> oauthTokenGenerateWithHttpInfo(OAuthTokenGenerateRequest oauthTokenGenerateRequest) throws ApiException {
    
    Object localVarPostBody = oauthTokenGenerateRequest;
    
    // verify the required parameter 'oauthTokenGenerateRequest' is set
    if (oauthTokenGenerateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'oauthTokenGenerateRequest' when calling oauthTokenGenerate");
    }
    
    // create path and map variables
    String localVarPath = "/oauth/token";

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

    localVarFormParams = oauthTokenGenerateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] {  };

    GenericType<OAuthTokenResponse> localVarReturnType = new GenericType<OAuthTokenResponse>() {};

    return apiClient.invokeAPI("OAuthApi.oauthTokenGenerate", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * OAuth Token Refresh
   * Access tokens are only valid for a given period of time (typically one hour) for security reasons. Whenever acquiring an new access token its TTL is also given (see &#x60;expires_in&#x60;), along with a refresh token that can be used to acquire a new access token after the current one has expired.
   * @param oauthTokenRefreshRequest  (required)
   * @return OAuthTokenResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     </table>
   */
  public OAuthTokenResponse oauthTokenRefresh(OAuthTokenRefreshRequest oauthTokenRefreshRequest) throws ApiException {
    return oauthTokenRefreshWithHttpInfo(oauthTokenRefreshRequest).getData();
  }

  /**
   * OAuth Token Refresh
   * Access tokens are only valid for a given period of time (typically one hour) for security reasons. Whenever acquiring an new access token its TTL is also given (see &#x60;expires_in&#x60;), along with a refresh token that can be used to acquire a new access token after the current one has expired.
   * @param oauthTokenRefreshRequest  (required)
   * @return ApiResponse&lt;OAuthTokenResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     </table>
   */
  public ApiResponse<OAuthTokenResponse> oauthTokenRefreshWithHttpInfo(OAuthTokenRefreshRequest oauthTokenRefreshRequest) throws ApiException {
    
    Object localVarPostBody = oauthTokenRefreshRequest;
    
    // verify the required parameter 'oauthTokenRefreshRequest' is set
    if (oauthTokenRefreshRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'oauthTokenRefreshRequest' when calling oauthTokenRefresh");
    }
    
    // create path and map variables
    String localVarPath = "/oauth/token?refresh";

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

    localVarFormParams = oauthTokenRefreshRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] {  };

    GenericType<OAuthTokenResponse> localVarReturnType = new GenericType<OAuthTokenResponse>() {};

    return apiClient.invokeAPI("OAuthApi.oauthTokenRefresh", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
}
