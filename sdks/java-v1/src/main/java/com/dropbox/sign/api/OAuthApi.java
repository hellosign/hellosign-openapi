package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.model.OAuthTokenGenerateRequest;
import com.dropbox.sign.model.OAuthTokenRefreshRequest;
import com.dropbox.sign.model.OAuthTokenResponse;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;
import javax.ws.rs.core.GenericType;

@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.8.0")
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
     * OAuth Token Generate. Once you have retrieved the code from the user callback, you will need
     * to exchange it for an access token via a backend call.
     *
     * @param oauthTokenGenerateRequest (required)
     * @return OAuthTokenResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table summary="Response Details" border="1">
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public OAuthTokenResponse oauthTokenGenerate(
            OAuthTokenGenerateRequest oauthTokenGenerateRequest) throws ApiException {
        return oauthTokenGenerateWithHttpInfo(oauthTokenGenerateRequest).getData();
    }

    /**
     * OAuth Token Generate. Once you have retrieved the code from the user callback, you will need
     * to exchange it for an access token via a backend call.
     *
     * @param oauthTokenGenerateRequest (required)
     * @return ApiResponse&lt;OAuthTokenResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table summary="Response Details" border="1">
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<OAuthTokenResponse> oauthTokenGenerateWithHttpInfo(
            OAuthTokenGenerateRequest oauthTokenGenerateRequest) throws ApiException {

        // Check required parameters
        if (oauthTokenGenerateRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'oauthTokenGenerateRequest' when calling"
                            + " oauthTokenGenerate");
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = oauthTokenGenerateRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType("application/json");
        GenericType<OAuthTokenResponse> localVarReturnType =
                new GenericType<OAuthTokenResponse>() {};
        return apiClient.invokeAPI(
                "OAuthApi.oauthTokenGenerate",
                "/oauth/token",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : oauthTokenGenerateRequest,
                new LinkedHashMap<>(),
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                null,
                localVarReturnType,
                false);
    }

    /**
     * OAuth Token Refresh. Access tokens are only valid for a given period of time (typically one
     * hour) for security reasons. Whenever acquiring an new access token its TTL is also given (see
     * &#x60;expires_in&#x60;), along with a refresh token that can be used to acquire a new access
     * token after the current one has expired.
     *
     * @param oauthTokenRefreshRequest (required)
     * @return OAuthTokenResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table summary="Response Details" border="1">
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public OAuthTokenResponse oauthTokenRefresh(OAuthTokenRefreshRequest oauthTokenRefreshRequest)
            throws ApiException {
        return oauthTokenRefreshWithHttpInfo(oauthTokenRefreshRequest).getData();
    }

    /**
     * OAuth Token Refresh. Access tokens are only valid for a given period of time (typically one
     * hour) for security reasons. Whenever acquiring an new access token its TTL is also given (see
     * &#x60;expires_in&#x60;), along with a refresh token that can be used to acquire a new access
     * token after the current one has expired.
     *
     * @param oauthTokenRefreshRequest (required)
     * @return ApiResponse&lt;OAuthTokenResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table summary="Response Details" border="1">
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<OAuthTokenResponse> oauthTokenRefreshWithHttpInfo(
            OAuthTokenRefreshRequest oauthTokenRefreshRequest) throws ApiException {

        // Check required parameters
        if (oauthTokenRefreshRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'oauthTokenRefreshRequest' when calling"
                            + " oauthTokenRefresh");
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = oauthTokenRefreshRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType("application/json");
        GenericType<OAuthTokenResponse> localVarReturnType =
                new GenericType<OAuthTokenResponse>() {};
        return apiClient.invokeAPI(
                "OAuthApi.oauthTokenRefresh",
                "/oauth/token?refresh",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : oauthTokenRefreshRequest,
                new LinkedHashMap<>(),
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                null,
                localVarReturnType,
                false);
    }
}
