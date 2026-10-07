package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;
import com.dropbox.sign.model.FaxLineAddUserRequest;
import com.dropbox.sign.model.FaxLineAreaCodeGetResponse;
import com.dropbox.sign.model.FaxLineCreateRequest;
import com.dropbox.sign.model.FaxLineDeleteRequest;
import com.dropbox.sign.model.FaxLineListResponse;
import com.dropbox.sign.model.FaxLineRemoveUserRequest;
import com.dropbox.sign.model.FaxLineResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import javax.ws.rs.core.GenericType;

@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.12.0")
public class FaxLineApi {
    private ApiClient apiClient;

    public FaxLineApi() {
        this(Configuration.getDefaultApiClient());
    }

    public FaxLineApi(ApiClient apiClient) {
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
     * Add Fax Line User Grants a user access to the specified Fax Line.
     *
     * @param faxLineAddUserRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return FaxLineResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public FaxLineResponse faxLineAddUser(
            FaxLineAddUserRequest faxLineAddUserRequest, String idempotencyKey)
            throws ApiException {
        return faxLineAddUserWithHttpInfo(faxLineAddUserRequest, idempotencyKey).getData();
    }

    /**
     * @see FaxLineApi#faxLineAddUser(FaxLineAddUserRequest, String)
     */
    public FaxLineResponse faxLineAddUser(FaxLineAddUserRequest faxLineAddUserRequest)
            throws ApiException {
        String idempotencyKey = null;

        return faxLineAddUserWithHttpInfo(faxLineAddUserRequest, idempotencyKey).getData();
    }

    /**
     * @see FaxLineApi#faxLineAddUserWithHttpInfo(FaxLineAddUserRequest, String)
     */
    public ApiResponse<FaxLineResponse> faxLineAddUserWithHttpInfo(
            FaxLineAddUserRequest faxLineAddUserRequest) throws ApiException {
        String idempotencyKey = null;

        return faxLineAddUserWithHttpInfo(faxLineAddUserRequest, idempotencyKey);
    }

    /**
     * Add Fax Line User Grants a user access to the specified Fax Line.
     *
     * @param faxLineAddUserRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;FaxLineResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<FaxLineResponse> faxLineAddUserWithHttpInfo(
            FaxLineAddUserRequest faxLineAddUserRequest, String idempotencyKey)
            throws ApiException {

        // Check required parameters
        if (faxLineAddUserRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'faxLineAddUserRequest' when calling"
                            + " faxLineAddUser");
        }

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = faxLineAddUserRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType("application/json");
        String[] localVarAuthNames = new String[] {"api_key"};
        GenericType<FaxLineResponse> localVarReturnType = new GenericType<FaxLineResponse>() {};
        return apiClient.invokeAPI(
                "FaxLineApi.faxLineAddUser",
                "/fax_line/add_user",
                "PUT",
                new ArrayList<>(),
                isFileTypeFound ? null : faxLineAddUserRequest,
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
     * Get Available Fax Line Area Codes Returns a list of available area codes for a given
     * state/province and city
     *
     * @param country Filter area codes by country (required)
     * @param state Filter area codes by state (optional)
     * @param province Filter area codes by province (optional)
     * @param city Filter area codes by city (optional)
     * @return FaxLineAreaCodeGetResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public FaxLineAreaCodeGetResponse faxLineAreaCodeGet(
            String country, String state, String province, String city) throws ApiException {
        return faxLineAreaCodeGetWithHttpInfo(country, state, province, city).getData();
    }

    /**
     * @see FaxLineApi#faxLineAreaCodeGet(String, String, String, String)
     */
    public FaxLineAreaCodeGetResponse faxLineAreaCodeGet(String country) throws ApiException {
        String state = null;
        String province = null;
        String city = null;

        return faxLineAreaCodeGetWithHttpInfo(country, state, province, city).getData();
    }

    /**
     * @see FaxLineApi#faxLineAreaCodeGetWithHttpInfo(String, String, String, String)
     */
    public ApiResponse<FaxLineAreaCodeGetResponse> faxLineAreaCodeGetWithHttpInfo(String country)
            throws ApiException {
        String state = null;
        String province = null;
        String city = null;

        return faxLineAreaCodeGetWithHttpInfo(country, state, province, city);
    }

    /**
     * @see FaxLineApi#faxLineAreaCodeGet(String, String, String, String)
     */
    public FaxLineAreaCodeGetResponse faxLineAreaCodeGet(String country, String state)
            throws ApiException {
        String province = null;
        String city = null;

        return faxLineAreaCodeGetWithHttpInfo(country, state, province, city).getData();
    }

    /**
     * @see FaxLineApi#faxLineAreaCodeGetWithHttpInfo(String, String, String, String)
     */
    public ApiResponse<FaxLineAreaCodeGetResponse> faxLineAreaCodeGetWithHttpInfo(
            String country, String state) throws ApiException {
        String province = null;
        String city = null;

        return faxLineAreaCodeGetWithHttpInfo(country, state, province, city);
    }

    /**
     * @see FaxLineApi#faxLineAreaCodeGet(String, String, String, String)
     */
    public FaxLineAreaCodeGetResponse faxLineAreaCodeGet(
            String country, String state, String province) throws ApiException {
        String city = null;

        return faxLineAreaCodeGetWithHttpInfo(country, state, province, city).getData();
    }

    /**
     * @see FaxLineApi#faxLineAreaCodeGetWithHttpInfo(String, String, String, String)
     */
    public ApiResponse<FaxLineAreaCodeGetResponse> faxLineAreaCodeGetWithHttpInfo(
            String country, String state, String province) throws ApiException {
        String city = null;

        return faxLineAreaCodeGetWithHttpInfo(country, state, province, city);
    }

    /**
     * Get Available Fax Line Area Codes Returns a list of available area codes for a given
     * state/province and city
     *
     * @param country Filter area codes by country (required)
     * @param state Filter area codes by state (optional)
     * @param province Filter area codes by province (optional)
     * @param city Filter area codes by city (optional)
     * @return ApiResponse&lt;FaxLineAreaCodeGetResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<FaxLineAreaCodeGetResponse> faxLineAreaCodeGetWithHttpInfo(
            String country, String state, String province, String city) throws ApiException {

        // Check required parameters
        if (country == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'country' when calling faxLineAreaCodeGet");
        }

        // Query parameters
        List<Pair> localVarQueryParams =
                new ArrayList<>(apiClient.parameterToPairs("", "country", country));
        localVarQueryParams.addAll(apiClient.parameterToPairs("", "state", state));
        localVarQueryParams.addAll(apiClient.parameterToPairs("", "province", province));
        localVarQueryParams.addAll(apiClient.parameterToPairs("", "city", city));

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = new HashMap<String, Object>();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound ? "multipart/form-data" : apiClient.selectHeaderContentType();
        String[] localVarAuthNames = new String[] {"api_key"};
        GenericType<FaxLineAreaCodeGetResponse> localVarReturnType =
                new GenericType<FaxLineAreaCodeGetResponse>() {};
        return apiClient.invokeAPI(
                "FaxLineApi.faxLineAreaCodeGet",
                "/fax_line/area_codes",
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
     * Purchase Fax Line Purchases a new Fax Line
     *
     * @param faxLineCreateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return FaxLineResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public FaxLineResponse faxLineCreate(
            FaxLineCreateRequest faxLineCreateRequest, String idempotencyKey) throws ApiException {
        return faxLineCreateWithHttpInfo(faxLineCreateRequest, idempotencyKey).getData();
    }

    /**
     * @see FaxLineApi#faxLineCreate(FaxLineCreateRequest, String)
     */
    public FaxLineResponse faxLineCreate(FaxLineCreateRequest faxLineCreateRequest)
            throws ApiException {
        String idempotencyKey = null;

        return faxLineCreateWithHttpInfo(faxLineCreateRequest, idempotencyKey).getData();
    }

    /**
     * @see FaxLineApi#faxLineCreateWithHttpInfo(FaxLineCreateRequest, String)
     */
    public ApiResponse<FaxLineResponse> faxLineCreateWithHttpInfo(
            FaxLineCreateRequest faxLineCreateRequest) throws ApiException {
        String idempotencyKey = null;

        return faxLineCreateWithHttpInfo(faxLineCreateRequest, idempotencyKey);
    }

    /**
     * Purchase Fax Line Purchases a new Fax Line
     *
     * @param faxLineCreateRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;FaxLineResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<FaxLineResponse> faxLineCreateWithHttpInfo(
            FaxLineCreateRequest faxLineCreateRequest, String idempotencyKey) throws ApiException {

        // Check required parameters
        if (faxLineCreateRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'faxLineCreateRequest' when calling"
                            + " faxLineCreate");
        }

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = faxLineCreateRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType("application/json");
        String[] localVarAuthNames = new String[] {"api_key"};
        GenericType<FaxLineResponse> localVarReturnType = new GenericType<FaxLineResponse>() {};
        return apiClient.invokeAPI(
                "FaxLineApi.faxLineCreate",
                "/fax_line/create",
                "POST",
                new ArrayList<>(),
                isFileTypeFound ? null : faxLineCreateRequest,
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
     * Delete Fax Line Deletes the specified Fax Line from the subscription.
     *
     * @param faxLineDeleteRequest (required)
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public void faxLineDelete(FaxLineDeleteRequest faxLineDeleteRequest) throws ApiException {
        faxLineDeleteWithHttpInfo(faxLineDeleteRequest);
    }

    /**
     * Delete Fax Line Deletes the specified Fax Line from the subscription.
     *
     * @param faxLineDeleteRequest (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<Void> faxLineDeleteWithHttpInfo(FaxLineDeleteRequest faxLineDeleteRequest)
            throws ApiException {

        // Check required parameters
        if (faxLineDeleteRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'faxLineDeleteRequest' when calling"
                            + " faxLineDelete");
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = faxLineDeleteRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType("application/json");
        String[] localVarAuthNames = new String[] {"api_key"};
        return apiClient.invokeAPI(
                "FaxLineApi.faxLineDelete",
                "/fax_line",
                "DELETE",
                new ArrayList<>(),
                isFileTypeFound ? null : faxLineDeleteRequest,
                new LinkedHashMap<>(),
                new LinkedHashMap<>(),
                localVarFormParams,
                localVarAccept,
                localVarContentType,
                localVarAuthNames,
                null,
                false);
    }

    /**
     * Get Fax Line Returns the properties and settings of a Fax Line.
     *
     * @param number The Fax Line number (required)
     * @return FaxLineResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public FaxLineResponse faxLineGet(String number) throws ApiException {
        return faxLineGetWithHttpInfo(number).getData();
    }

    /**
     * Get Fax Line Returns the properties and settings of a Fax Line.
     *
     * @param number The Fax Line number (required)
     * @return ApiResponse&lt;FaxLineResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<FaxLineResponse> faxLineGetWithHttpInfo(String number) throws ApiException {

        // Check required parameters
        if (number == null) {
            throw new ApiException(
                    400, "Missing the required parameter 'number' when calling faxLineGet");
        }

        // Query parameters
        List<Pair> localVarQueryParams =
                new ArrayList<>(apiClient.parameterToPairs("", "number", number));

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = new HashMap<String, Object>();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound ? "multipart/form-data" : apiClient.selectHeaderContentType();
        String[] localVarAuthNames = new String[] {"api_key"};
        GenericType<FaxLineResponse> localVarReturnType = new GenericType<FaxLineResponse>() {};
        return apiClient.invokeAPI(
                "FaxLineApi.faxLineGet",
                "/fax_line",
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
     * List Fax Lines Returns the properties and settings of multiple Fax Lines.
     *
     * @param accountId Account ID (optional)
     * @param page Which page number of the Fax Line List to return. Defaults to &#x60;1&#x60;.
     *     (optional, default to 1)
     * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and
     *     &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
     * @param showTeamLines Include Fax Lines belonging to team members in the list (optional)
     * @return FaxLineListResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public FaxLineListResponse faxLineList(
            String accountId, Integer page, Integer pageSize, Boolean showTeamLines)
            throws ApiException {
        return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines).getData();
    }

    /**
     * @see FaxLineApi#faxLineList(String, Integer, Integer, Boolean)
     */
    public FaxLineListResponse faxLineList() throws ApiException {
        String accountId = null;
        Integer page = 1;
        Integer pageSize = 20;
        Boolean showTeamLines = null;

        return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines).getData();
    }

    /**
     * @see FaxLineApi#faxLineListWithHttpInfo(String, Integer, Integer, Boolean)
     */
    public ApiResponse<FaxLineListResponse> faxLineListWithHttpInfo() throws ApiException {
        String accountId = null;
        Integer page = 1;
        Integer pageSize = 20;
        Boolean showTeamLines = null;

        return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines);
    }

    /**
     * @see FaxLineApi#faxLineList(String, Integer, Integer, Boolean)
     */
    public FaxLineListResponse faxLineList(String accountId) throws ApiException {
        Integer page = 1;
        Integer pageSize = 20;
        Boolean showTeamLines = null;

        return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines).getData();
    }

    /**
     * @see FaxLineApi#faxLineListWithHttpInfo(String, Integer, Integer, Boolean)
     */
    public ApiResponse<FaxLineListResponse> faxLineListWithHttpInfo(String accountId)
            throws ApiException {
        Integer page = 1;
        Integer pageSize = 20;
        Boolean showTeamLines = null;

        return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines);
    }

    /**
     * @see FaxLineApi#faxLineList(String, Integer, Integer, Boolean)
     */
    public FaxLineListResponse faxLineList(String accountId, Integer page) throws ApiException {
        Integer pageSize = 20;
        Boolean showTeamLines = null;

        return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines).getData();
    }

    /**
     * @see FaxLineApi#faxLineListWithHttpInfo(String, Integer, Integer, Boolean)
     */
    public ApiResponse<FaxLineListResponse> faxLineListWithHttpInfo(String accountId, Integer page)
            throws ApiException {
        Integer pageSize = 20;
        Boolean showTeamLines = null;

        return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines);
    }

    /**
     * @see FaxLineApi#faxLineList(String, Integer, Integer, Boolean)
     */
    public FaxLineListResponse faxLineList(String accountId, Integer page, Integer pageSize)
            throws ApiException {
        Boolean showTeamLines = null;

        return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines).getData();
    }

    /**
     * @see FaxLineApi#faxLineListWithHttpInfo(String, Integer, Integer, Boolean)
     */
    public ApiResponse<FaxLineListResponse> faxLineListWithHttpInfo(
            String accountId, Integer page, Integer pageSize) throws ApiException {
        Boolean showTeamLines = null;

        return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines);
    }

    /**
     * List Fax Lines Returns the properties and settings of multiple Fax Lines.
     *
     * @param accountId Account ID (optional)
     * @param page Which page number of the Fax Line List to return. Defaults to &#x60;1&#x60;.
     *     (optional, default to 1)
     * @param pageSize Number of objects to be returned per page. Must be between &#x60;1&#x60; and
     *     &#x60;100&#x60;. Default is &#x60;20&#x60;. (optional, default to 20)
     * @param showTeamLines Include Fax Lines belonging to team members in the list (optional)
     * @return ApiResponse&lt;FaxLineListResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<FaxLineListResponse> faxLineListWithHttpInfo(
            String accountId, Integer page, Integer pageSize, Boolean showTeamLines)
            throws ApiException {

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
        localVarQueryParams.addAll(
                apiClient.parameterToPairs("", "show_team_lines", showTeamLines));

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = new HashMap<String, Object>();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound ? "multipart/form-data" : apiClient.selectHeaderContentType();
        String[] localVarAuthNames = new String[] {"api_key"};
        GenericType<FaxLineListResponse> localVarReturnType =
                new GenericType<FaxLineListResponse>() {};
        return apiClient.invokeAPI(
                "FaxLineApi.faxLineList",
                "/fax_line/list",
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
     * Remove Fax Line Access Removes a user&#39;s access to the specified Fax Line
     *
     * @param faxLineRemoveUserRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return FaxLineResponse
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public FaxLineResponse faxLineRemoveUser(
            FaxLineRemoveUserRequest faxLineRemoveUserRequest, String idempotencyKey)
            throws ApiException {
        return faxLineRemoveUserWithHttpInfo(faxLineRemoveUserRequest, idempotencyKey).getData();
    }

    /**
     * @see FaxLineApi#faxLineRemoveUser(FaxLineRemoveUserRequest, String)
     */
    public FaxLineResponse faxLineRemoveUser(FaxLineRemoveUserRequest faxLineRemoveUserRequest)
            throws ApiException {
        String idempotencyKey = null;

        return faxLineRemoveUserWithHttpInfo(faxLineRemoveUserRequest, idempotencyKey).getData();
    }

    /**
     * @see FaxLineApi#faxLineRemoveUserWithHttpInfo(FaxLineRemoveUserRequest, String)
     */
    public ApiResponse<FaxLineResponse> faxLineRemoveUserWithHttpInfo(
            FaxLineRemoveUserRequest faxLineRemoveUserRequest) throws ApiException {
        String idempotencyKey = null;

        return faxLineRemoveUserWithHttpInfo(faxLineRemoveUserRequest, idempotencyKey);
    }

    /**
     * Remove Fax Line Access Removes a user&#39;s access to the specified Fax Line
     *
     * @param faxLineRemoveUserRequest (required)
     * @param idempotencyKey Reuse the same key when retrying the same request. Must be 1 to 255
     *     characters. (optional)
     * @return ApiResponse&lt;FaxLineResponse&gt;
     * @throws ApiException if fails to make API call
     * @http.response.details
     *     <table border="1">
     * <caption>Response Details</caption>
     * <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
     * <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  * Idempotent-Replayed -  <br>  </td></tr>
     * <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     * </table>
     */
    public ApiResponse<FaxLineResponse> faxLineRemoveUserWithHttpInfo(
            FaxLineRemoveUserRequest faxLineRemoveUserRequest, String idempotencyKey)
            throws ApiException {

        // Check required parameters
        if (faxLineRemoveUserRequest == null) {
            throw new ApiException(
                    400,
                    "Missing the required parameter 'faxLineRemoveUserRequest' when calling"
                            + " faxLineRemoveUser");
        }

        // Header parameters
        Map<String, String> localVarHeaderParams = new LinkedHashMap<>();
        if (idempotencyKey != null) {
            localVarHeaderParams.put(
                    "Idempotency-Key", apiClient.parameterToString(idempotencyKey));
        }

        String localVarAccept = apiClient.selectHeaderAccept("application/json");
        Map<String, Object> localVarFormParams = new LinkedHashMap<>();
        localVarFormParams = faxLineRemoveUserRequest.createFormData();
        boolean isFileTypeFound = !localVarFormParams.isEmpty();
        String localVarContentType =
                isFileTypeFound
                        ? "multipart/form-data"
                        : apiClient.selectHeaderContentType("application/json");
        String[] localVarAuthNames = new String[] {"api_key"};
        GenericType<FaxLineResponse> localVarReturnType = new GenericType<FaxLineResponse>() {};
        return apiClient.invokeAPI(
                "FaxLineApi.faxLineRemoveUser",
                "/fax_line/remove_user",
                "PUT",
                new ArrayList<>(),
                isFileTypeFound ? null : faxLineRemoveUserRequest,
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
