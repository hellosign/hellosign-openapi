package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;
import com.dropbox.sign.model.AccountCreateRequest;
import com.dropbox.sign.model.AccountCreateResponse;
import com.dropbox.sign.model.AccountGetResponse;
import com.dropbox.sign.model.AccountUpdateRequest;
import com.dropbox.sign.model.AccountVerifyRequest;
import com.dropbox.sign.model.AccountVerifyResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.ws.rs.core.GenericType;

@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.12.0")
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
     * Create Account Creates a new Dropbox Sign Account that is associated with the specified
     * &#x60;email_address&#x60;.
     *
     * @param accountCreateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return AccountCreateResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public AccountCreateResponse accountCreate(
            AccountCreateRequest accountCreateRequest, String idempotencyKey) throws ApiException {
        return accountCreateWithHttpInfo(accountCreateRequest, idempotencyKey).getData();
    }

    /**
     * @see AccountApi#accountCreate(AccountCreateRequest, String)
     */
    public AccountCreateResponse accountCreate(AccountCreateRequest accountCreateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return accountCreateWithHttpInfo(accountCreateRequest, idempotencyKey).getData();
    }

    /**
     * @see AccountApi#accountCreateWithHttpInfo(AccountCreateRequest, String)
     */
    public ApiResponse<AccountCreateResponse> accountCreateWithHttpInfo(
            AccountCreateRequest accountCreateRequest) throws ApiException {
        String idempotencyKey = null;

        return accountCreateWithHttpInfo(accountCreateRequest, idempotencyKey);
    }

    /**
     * Create Account Creates a new Dropbox Sign Account that is associated with the specified
     * &#x60;email_address&#x60;.
     *
     * @param accountCreateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;AccountCreateResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<AccountCreateResponse> accountCreateWithHttpInfo(
            AccountCreateRequest accountCreateRequest, String idempotencyKey) throws ApiException {

        // Check required parameters
        if (accountCreateRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'accountCreateRequest' when calling"
                            + " accountCreate");
        }

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = accountCreateRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType("application/json");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<AccountCreateResponse> localVarReturnType =
                new GenericType<AccountCreateResponse>() {};
        return apiClient.invokeAPI(
                "AccountApi.accountCreate",
                "/account/create",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : accountCreateRequest,
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
     * Get Account Returns the properties and settings of your Account.
     *
     * @param accountId &#x60;account_id&#x60; or &#x60;email_address&#x60; is required. If both are
     *     provided, the account id prevails. The ID of the Account. (optional)
     * @param emailAddress &#x60;account_id&#x60; or &#x60;email_address&#x60; is required, If both
     *     are provided, the account id prevails. The email address of the Account. (optional)
     * @return AccountGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public AccountGetResponse accountGet(String accountId, String emailAddress)
            throws ApiException {
        return accountGetWithHttpInfo(accountId, emailAddress).getData();
    }

    /**
     * @see AccountApi#accountGet(String, String)
     */
    public AccountGetResponse accountGet() throws ApiException {
        String accountId = null;
        String emailAddress = null;

        return accountGetWithHttpInfo(accountId, emailAddress).getData();
    }

    /**
     * @see AccountApi#accountGetWithHttpInfo(String, String)
     */
    public ApiResponse<AccountGetResponse> accountGetWithHttpInfo() throws ApiException {
        String accountId = null;
        String emailAddress = null;

        return accountGetWithHttpInfo(accountId, emailAddress);
    }

    /**
     * @see AccountApi#accountGet(String, String)
     */
    public AccountGetResponse accountGet(String accountId) throws ApiException {
        String emailAddress = null;

        return accountGetWithHttpInfo(accountId, emailAddress).getData();
    }

    /**
     * @see AccountApi#accountGetWithHttpInfo(String, String)
     */
    public ApiResponse<AccountGetResponse> accountGetWithHttpInfo(String accountId)
            throws ApiException {
        String emailAddress = null;

        return accountGetWithHttpInfo(accountId, emailAddress);
    }

    /**
     * Get Account Returns the properties and settings of your Account.
     *
     * @param accountId &#x60;account_id&#x60; or &#x60;email_address&#x60; is required. If both are
     *     provided, the account id prevails. The ID of the Account. (optional)
     * @param emailAddress &#x60;account_id&#x60; or &#x60;email_address&#x60; is required, If both
     *     are provided, the account id prevails. The email address of the Account. (optional)
     * @return ApiResponse&lt;AccountGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<AccountGetResponse> accountGetWithHttpInfo(
            String accountId, String emailAddress) throws ApiException {

        // Query parameters
        List<Pair> localVarQueryParams =
                new ArrayList<>(apiClient.parameterToPairs("", "account_id", accountId));
        localVarQueryParams.addAll(apiClient.parameterToPairs("", "email_address", emailAddress));

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = new HashMap<String, Object>();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound ? "multipart/form-data" : apiClient.selectHeaderContentType();
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<AccountGetResponse> localVarReturnType =
                new GenericType<AccountGetResponse>() {};
        return apiClient.invokeAPI(
                "AccountApi.accountGet",
                "/account",
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
     * Update Account Updates the properties and settings of your Account. Currently only allows for
     * updates to the [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.
     *
     * @param accountUpdateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return AccountGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public AccountGetResponse accountUpdate(
            AccountUpdateRequest accountUpdateRequest, String idempotencyKey) throws ApiException {
        return accountUpdateWithHttpInfo(accountUpdateRequest, idempotencyKey).getData();
    }

    /**
     * @see AccountApi#accountUpdate(AccountUpdateRequest, String)
     */
    public AccountGetResponse accountUpdate(AccountUpdateRequest accountUpdateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return accountUpdateWithHttpInfo(accountUpdateRequest, idempotencyKey).getData();
    }

    /**
     * @see AccountApi#accountUpdateWithHttpInfo(AccountUpdateRequest, String)
     */
    public ApiResponse<AccountGetResponse> accountUpdateWithHttpInfo(
            AccountUpdateRequest accountUpdateRequest) throws ApiException {
        String idempotencyKey = null;

        return accountUpdateWithHttpInfo(accountUpdateRequest, idempotencyKey);
    }

    /**
     * Update Account Updates the properties and settings of your Account. Currently only allows for
     * updates to the [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.
     *
     * @param accountUpdateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;AccountGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<AccountGetResponse> accountUpdateWithHttpInfo(
            AccountUpdateRequest accountUpdateRequest, String idempotencyKey) throws ApiException {

        // Check required parameters
        if (accountUpdateRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'accountUpdateRequest' when calling"
                            + " accountUpdate");
        }

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = accountUpdateRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType("application/json");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<AccountGetResponse> localVarReturnType =
                new GenericType<AccountGetResponse>() {};
        return apiClient.invokeAPI(
                "AccountApi.accountUpdate",
                "/account",
                "PUT",
                new ArrayList<>(),
                isFileTypeFound ? null : accountUpdateRequest,
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
     * Verify Account Verifies whether an Dropbox Sign Account exists for the given email address.
     *
     * @param accountVerifyRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return AccountVerifyResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public AccountVerifyResponse accountVerify(
            AccountVerifyRequest accountVerifyRequest, String idempotencyKey) throws ApiException {
        return accountVerifyWithHttpInfo(accountVerifyRequest, idempotencyKey).getData();
    }

    /**
     * @see AccountApi#accountVerify(AccountVerifyRequest, String)
     */
    public AccountVerifyResponse accountVerify(AccountVerifyRequest accountVerifyRequest)
            throws ApiException {
        String idempotencyKey = null;

        return accountVerifyWithHttpInfo(accountVerifyRequest, idempotencyKey).getData();
    }

    /**
     * @see AccountApi#accountVerifyWithHttpInfo(AccountVerifyRequest, String)
     */
    public ApiResponse<AccountVerifyResponse> accountVerifyWithHttpInfo(
            AccountVerifyRequest accountVerifyRequest) throws ApiException {
        String idempotencyKey = null;

        return accountVerifyWithHttpInfo(accountVerifyRequest, idempotencyKey);
    }

    /**
     * Verify Account Verifies whether an Dropbox Sign Account exists for the given email address.
     *
     * @param accountVerifyRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;AccountVerifyResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<AccountVerifyResponse> accountVerifyWithHttpInfo(
            AccountVerifyRequest accountVerifyRequest, String idempotencyKey) throws ApiException {

        // Check required parameters
        if (accountVerifyRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'accountVerifyRequest' when calling"
                            + " accountVerify");
        }

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = accountVerifyRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType("application/json");
        String[] localVarAuthNames = new String[] {"api_key", "oauth2"};
        GenericType<AccountVerifyResponse> localVarReturnType =
                new GenericType<AccountVerifyResponse>() {};
        return apiClient.invokeAPI(
                "AccountApi.accountVerify",
                "/account/verify",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : accountVerifyRequest,
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
