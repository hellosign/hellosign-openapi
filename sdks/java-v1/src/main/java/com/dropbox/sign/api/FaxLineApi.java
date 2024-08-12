package com.dropbox.sign.api;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiResponse;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.Pair;

import javax.ws.rs.core.GenericType;

import com.dropbox.sign.model.ErrorResponse;
import com.dropbox.sign.model.FaxLineAddUserRequest;
import com.dropbox.sign.model.FaxLineAreaCodeGetCountryEnum;
import com.dropbox.sign.model.FaxLineAreaCodeGetProvinceEnum;
import com.dropbox.sign.model.FaxLineAreaCodeGetResponse;
import com.dropbox.sign.model.FaxLineAreaCodeGetStateEnum;
import com.dropbox.sign.model.FaxLineCreateRequest;
import com.dropbox.sign.model.FaxLineDeleteRequest;
import com.dropbox.sign.model.FaxLineListResponse;
import com.dropbox.sign.model.FaxLineRemoveUserRequest;
import com.dropbox.sign.model.FaxLineResponse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
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
   * Add Fax Line User
   * Grants a user access to the specified Fax Line.
   * @param faxLineAddUserRequest  (required)
   * @return FaxLineResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FaxLineResponse faxLineAddUser(FaxLineAddUserRequest faxLineAddUserRequest) throws ApiException {
    return faxLineAddUserWithHttpInfo(faxLineAddUserRequest).getData();
  }


  /**
   * Add Fax Line User
   * Grants a user access to the specified Fax Line.
   * @param faxLineAddUserRequest  (required)
   * @return ApiResponse&lt;FaxLineResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FaxLineResponse> faxLineAddUserWithHttpInfo(FaxLineAddUserRequest faxLineAddUserRequest) throws ApiException {
    
    Object localVarPostBody = faxLineAddUserRequest;
    
    // verify the required parameter 'faxLineAddUserRequest' is set
    if (faxLineAddUserRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'faxLineAddUserRequest' when calling faxLineAddUser");
    }
    
    // create path and map variables
    String localVarPath = "/fax_line/add_user";

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

    localVarFormParams = faxLineAddUserRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key" };

    GenericType<FaxLineResponse> localVarReturnType = new GenericType<FaxLineResponse>() {};

    return apiClient.invokeAPI("FaxLineApi.faxLineAddUser", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Get Available Fax Line Area Codes
   * Returns a response with the area codes available for a given state/provice and city.
   * @param country Filter area codes by country. (required)
   * @param state Filter area codes by state. (optional)
   * @param province Filter area codes by province. (optional)
   * @param city Filter area codes by city. (optional)
   * @return FaxLineAreaCodeGetResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FaxLineAreaCodeGetResponse faxLineAreaCodeGet(FaxLineAreaCodeGetCountryEnum country, FaxLineAreaCodeGetStateEnum state, FaxLineAreaCodeGetProvinceEnum province, String city) throws ApiException {
    return faxLineAreaCodeGetWithHttpInfo(country, state, province, city).getData();
  }


  /**
   * @see FaxLineApi#faxLineAreaCodeGet(FaxLineAreaCodeGetCountryEnum, FaxLineAreaCodeGetStateEnum, FaxLineAreaCodeGetProvinceEnum, String)
   */
  public FaxLineAreaCodeGetResponse faxLineAreaCodeGet(FaxLineAreaCodeGetCountryEnum country) throws ApiException {
    FaxLineAreaCodeGetStateEnum state = null;
    FaxLineAreaCodeGetProvinceEnum province = null;
    String city = null;

    return faxLineAreaCodeGetWithHttpInfo(country, state, province, city).getData();
  }

  /**
   * @see FaxLineApi#faxLineAreaCodeGetWithHttpInfo(FaxLineAreaCodeGetCountryEnum, FaxLineAreaCodeGetStateEnum, FaxLineAreaCodeGetProvinceEnum, String)
   */
  public ApiResponse<FaxLineAreaCodeGetResponse> faxLineAreaCodeGetWithHttpInfo(FaxLineAreaCodeGetCountryEnum country) throws ApiException {
    FaxLineAreaCodeGetStateEnum state = null;
    FaxLineAreaCodeGetProvinceEnum province = null;
    String city = null;

    return faxLineAreaCodeGetWithHttpInfo(country, state, province, city);
  }

  /**
   * @see FaxLineApi#faxLineAreaCodeGet(FaxLineAreaCodeGetCountryEnum, FaxLineAreaCodeGetStateEnum, FaxLineAreaCodeGetProvinceEnum, String)
   */
  public FaxLineAreaCodeGetResponse faxLineAreaCodeGet(FaxLineAreaCodeGetCountryEnum country, FaxLineAreaCodeGetStateEnum state) throws ApiException {
    FaxLineAreaCodeGetProvinceEnum province = null;
    String city = null;

    return faxLineAreaCodeGetWithHttpInfo(country, state, province, city).getData();
  }

  /**
   * @see FaxLineApi#faxLineAreaCodeGetWithHttpInfo(FaxLineAreaCodeGetCountryEnum, FaxLineAreaCodeGetStateEnum, FaxLineAreaCodeGetProvinceEnum, String)
   */
  public ApiResponse<FaxLineAreaCodeGetResponse> faxLineAreaCodeGetWithHttpInfo(FaxLineAreaCodeGetCountryEnum country, FaxLineAreaCodeGetStateEnum state) throws ApiException {
    FaxLineAreaCodeGetProvinceEnum province = null;
    String city = null;

    return faxLineAreaCodeGetWithHttpInfo(country, state, province, city);
  }

  /**
   * @see FaxLineApi#faxLineAreaCodeGet(FaxLineAreaCodeGetCountryEnum, FaxLineAreaCodeGetStateEnum, FaxLineAreaCodeGetProvinceEnum, String)
   */
  public FaxLineAreaCodeGetResponse faxLineAreaCodeGet(FaxLineAreaCodeGetCountryEnum country, FaxLineAreaCodeGetStateEnum state, FaxLineAreaCodeGetProvinceEnum province) throws ApiException {
    String city = null;

    return faxLineAreaCodeGetWithHttpInfo(country, state, province, city).getData();
  }

  /**
   * @see FaxLineApi#faxLineAreaCodeGetWithHttpInfo(FaxLineAreaCodeGetCountryEnum, FaxLineAreaCodeGetStateEnum, FaxLineAreaCodeGetProvinceEnum, String)
   */
  public ApiResponse<FaxLineAreaCodeGetResponse> faxLineAreaCodeGetWithHttpInfo(FaxLineAreaCodeGetCountryEnum country, FaxLineAreaCodeGetStateEnum state, FaxLineAreaCodeGetProvinceEnum province) throws ApiException {
    String city = null;

    return faxLineAreaCodeGetWithHttpInfo(country, state, province, city);
  }


  /**
   * Get Available Fax Line Area Codes
   * Returns a response with the area codes available for a given state/provice and city.
   * @param country Filter area codes by country. (required)
   * @param state Filter area codes by state. (optional)
   * @param province Filter area codes by province. (optional)
   * @param city Filter area codes by city. (optional)
   * @return ApiResponse&lt;FaxLineAreaCodeGetResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FaxLineAreaCodeGetResponse> faxLineAreaCodeGetWithHttpInfo(FaxLineAreaCodeGetCountryEnum country, FaxLineAreaCodeGetStateEnum state, FaxLineAreaCodeGetProvinceEnum province, String city) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'country' is set
    if (country == null) {
      throw new ApiException(400, "Missing the required parameter 'country' when calling faxLineAreaCodeGet");
    }
    
    // create path and map variables
    String localVarPath = "/fax_line/area_codes";

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "country", country));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "state", state));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "province", province));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "city", city));

    
    
    
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

    GenericType<FaxLineAreaCodeGetResponse> localVarReturnType = new GenericType<FaxLineAreaCodeGetResponse>() {};

    return apiClient.invokeAPI("FaxLineApi.faxLineAreaCodeGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Purchase Fax Line
   * Purchases a new Fax Line.
   * @param faxLineCreateRequest  (required)
   * @return FaxLineResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FaxLineResponse faxLineCreate(FaxLineCreateRequest faxLineCreateRequest) throws ApiException {
    return faxLineCreateWithHttpInfo(faxLineCreateRequest).getData();
  }


  /**
   * Purchase Fax Line
   * Purchases a new Fax Line.
   * @param faxLineCreateRequest  (required)
   * @return ApiResponse&lt;FaxLineResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FaxLineResponse> faxLineCreateWithHttpInfo(FaxLineCreateRequest faxLineCreateRequest) throws ApiException {
    
    Object localVarPostBody = faxLineCreateRequest;
    
    // verify the required parameter 'faxLineCreateRequest' is set
    if (faxLineCreateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'faxLineCreateRequest' when calling faxLineCreate");
    }
    
    // create path and map variables
    String localVarPath = "/fax_line/create";

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

    localVarFormParams = faxLineCreateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key" };

    GenericType<FaxLineResponse> localVarReturnType = new GenericType<FaxLineResponse>() {};

    return apiClient.invokeAPI("FaxLineApi.faxLineCreate", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Delete Fax Line
   * Deletes the specified Fax Line from the subscription.
   * @param faxLineDeleteRequest  (required)
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public void faxLineDelete(FaxLineDeleteRequest faxLineDeleteRequest) throws ApiException {
    faxLineDeleteWithHttpInfo(faxLineDeleteRequest);
  }


  /**
   * Delete Fax Line
   * Deletes the specified Fax Line from the subscription.
   * @param faxLineDeleteRequest  (required)
   * @return ApiResponse&lt;Void&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<Void> faxLineDeleteWithHttpInfo(FaxLineDeleteRequest faxLineDeleteRequest) throws ApiException {
    
    Object localVarPostBody = faxLineDeleteRequest;
    
    // verify the required parameter 'faxLineDeleteRequest' is set
    if (faxLineDeleteRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'faxLineDeleteRequest' when calling faxLineDelete");
    }
    
    // create path and map variables
    String localVarPath = "/fax_line/delete";

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

    localVarFormParams = faxLineDeleteRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key" };

    return apiClient.invokeAPI("FaxLineApi.faxLineDelete", localVarPath, "DELETE", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, null, false);
  }
  /**
   * Get Fax Line
   * Returns the properties and settings of a Fax Line.
   * @param number The Fax Line number. (required)
   * @return FaxLineResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FaxLineResponse faxLineGet(String number) throws ApiException {
    return faxLineGetWithHttpInfo(number).getData();
  }


  /**
   * Get Fax Line
   * Returns the properties and settings of a Fax Line.
   * @param number The Fax Line number. (required)
   * @return ApiResponse&lt;FaxLineResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FaxLineResponse> faxLineGetWithHttpInfo(String number) throws ApiException {
    
    Object localVarPostBody = null;
    
    // verify the required parameter 'number' is set
    if (number == null) {
      throw new ApiException(400, "Missing the required parameter 'number' when calling faxLineGet");
    }
    
    // create path and map variables
    String localVarPath = "/fax_line/{number}"
      .replaceAll("\\{" + "number" + "\\}", apiClient.escapeString(number.toString()));

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

    GenericType<FaxLineResponse> localVarReturnType = new GenericType<FaxLineResponse>() {};

    return apiClient.invokeAPI("FaxLineApi.faxLineGet", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * List Fax Lines
   * Returns the properties and settings of multiple Fax Lines.
   * @param accountId Account ID (optional)
   * @param page Page (optional)
   * @param pageSize Page size (optional)
   * @param showTeamLines Show team lines (optional)
   * @return FaxLineListResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FaxLineListResponse faxLineList(String accountId, Integer page, Integer pageSize, Boolean showTeamLines) throws ApiException {
    return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines).getData();
  }


  /**
   * @see FaxLineApi#faxLineList(String, Integer, Integer, Boolean)
   */
  public FaxLineListResponse faxLineList() throws ApiException {
    String accountId = null;
    Integer page = null;
    Integer pageSize = null;
    Boolean showTeamLines = null;

    return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines).getData();
  }

  /**
   * @see FaxLineApi#faxLineListWithHttpInfo(String, Integer, Integer, Boolean)
   */
  public ApiResponse<FaxLineListResponse> faxLineListWithHttpInfo() throws ApiException {
    String accountId = null;
    Integer page = null;
    Integer pageSize = null;
    Boolean showTeamLines = null;

    return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines);
  }

  /**
   * @see FaxLineApi#faxLineList(String, Integer, Integer, Boolean)
   */
  public FaxLineListResponse faxLineList(String accountId) throws ApiException {
    Integer page = null;
    Integer pageSize = null;
    Boolean showTeamLines = null;

    return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines).getData();
  }

  /**
   * @see FaxLineApi#faxLineListWithHttpInfo(String, Integer, Integer, Boolean)
   */
  public ApiResponse<FaxLineListResponse> faxLineListWithHttpInfo(String accountId) throws ApiException {
    Integer page = null;
    Integer pageSize = null;
    Boolean showTeamLines = null;

    return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines);
  }

  /**
   * @see FaxLineApi#faxLineList(String, Integer, Integer, Boolean)
   */
  public FaxLineListResponse faxLineList(String accountId, Integer page) throws ApiException {
    Integer pageSize = null;
    Boolean showTeamLines = null;

    return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines).getData();
  }

  /**
   * @see FaxLineApi#faxLineListWithHttpInfo(String, Integer, Integer, Boolean)
   */
  public ApiResponse<FaxLineListResponse> faxLineListWithHttpInfo(String accountId, Integer page) throws ApiException {
    Integer pageSize = null;
    Boolean showTeamLines = null;

    return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines);
  }

  /**
   * @see FaxLineApi#faxLineList(String, Integer, Integer, Boolean)
   */
  public FaxLineListResponse faxLineList(String accountId, Integer page, Integer pageSize) throws ApiException {
    Boolean showTeamLines = null;

    return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines).getData();
  }

  /**
   * @see FaxLineApi#faxLineListWithHttpInfo(String, Integer, Integer, Boolean)
   */
  public ApiResponse<FaxLineListResponse> faxLineListWithHttpInfo(String accountId, Integer page, Integer pageSize) throws ApiException {
    Boolean showTeamLines = null;

    return faxLineListWithHttpInfo(accountId, page, pageSize, showTeamLines);
  }


  /**
   * List Fax Lines
   * Returns the properties and settings of multiple Fax Lines.
   * @param accountId Account ID (optional)
   * @param page Page (optional)
   * @param pageSize Page size (optional)
   * @param showTeamLines Show team lines (optional)
   * @return ApiResponse&lt;FaxLineListResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FaxLineListResponse> faxLineListWithHttpInfo(String accountId, Integer page, Integer pageSize, Boolean showTeamLines) throws ApiException {
    
    Object localVarPostBody = null;
    
    // create path and map variables
    String localVarPath = "/fax_line/list";

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPairs("", "account_id", accountId));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "page", page));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "page_size", pageSize));
    localVarQueryParams.addAll(apiClient.parameterToPairs("", "show_team_lines", showTeamLines));

    
    
    
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

    GenericType<FaxLineListResponse> localVarReturnType = new GenericType<FaxLineListResponse>() {};

    return apiClient.invokeAPI("FaxLineApi.faxLineList", localVarPath, "GET", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
  /**
   * Remove Fax Line Access
   * Removes a user&#39;s access to the specified Fax Line.
   * @param faxLineRemoveUserRequest  (required)
   * @return FaxLineResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public FaxLineResponse faxLineRemoveUser(FaxLineRemoveUserRequest faxLineRemoveUserRequest) throws ApiException {
    return faxLineRemoveUserWithHttpInfo(faxLineRemoveUserRequest).getData();
  }


  /**
   * Remove Fax Line Access
   * Removes a user&#39;s access to the specified Fax Line.
   * @param faxLineRemoveUserRequest  (required)
   * @return ApiResponse&lt;FaxLineResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<FaxLineResponse> faxLineRemoveUserWithHttpInfo(FaxLineRemoveUserRequest faxLineRemoveUserRequest) throws ApiException {
    
    Object localVarPostBody = faxLineRemoveUserRequest;
    
    // verify the required parameter 'faxLineRemoveUserRequest' is set
    if (faxLineRemoveUserRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'faxLineRemoveUserRequest' when calling faxLineRemoveUser");
    }
    
    // create path and map variables
    String localVarPath = "/fax_line/remove_user";

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

    localVarFormParams = faxLineRemoveUserRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key" };

    GenericType<FaxLineResponse> localVarReturnType = new GenericType<FaxLineResponse>() {};

    return apiClient.invokeAPI("FaxLineApi.faxLineRemoveUser", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
}