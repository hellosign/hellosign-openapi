package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiResponse;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.Pair;

import javax.ws.rs.core.GenericType;

import com.hellosign.openapi.model.ErrorResponse;
import com.hellosign.openapi.model.ReportCreateRequest;
import com.hellosign.openapi.model.ReportCreateResponse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ReportApi {
  private ApiClient apiClient;

  public ReportApi() {
    this(Configuration.getDefaultApiClient());
  }

  public ReportApi(ApiClient apiClient) {
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
   * Create Report
   * Request the creation of one or more report(s).  When the report(s) have been generated, you will receive an email (one per requested report type) containing a link to download the report as a CSV file. The requested date range may be up to 12 months in duration, and &#x60;start_date&#x60; must not be more than 10 years in the past.
   * @param reportCreateRequest  (required)
   * @return ReportCreateResponse
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ReportCreateResponse reportCreate(ReportCreateRequest reportCreateRequest) throws ApiException {
    return reportCreateWithHttpInfo(reportCreateRequest).getData();
  }

  /**
   * Create Report
   * Request the creation of one or more report(s).  When the report(s) have been generated, you will receive an email (one per requested report type) containing a link to download the report as a CSV file. The requested date range may be up to 12 months in duration, and &#x60;start_date&#x60; must not be more than 10 years in the past.
   * @param reportCreateRequest  (required)
   * @return ApiResponse&lt;ReportCreateResponse&gt;
   * @throws ApiException if fails to make API call
   * @http.response.details
     <table summary="Response Details" border="1">
       <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
       <tr><td> 200 </td><td> successful operation </td><td>  * X-RateLimit-Limit -  <br>  * X-RateLimit-Remaining -  <br>  * X-Ratelimit-Reset -  <br>  </td></tr>
       <tr><td> 4XX </td><td> failed_operation </td><td>  -  </td></tr>
     </table>
   */
  public ApiResponse<ReportCreateResponse> reportCreateWithHttpInfo(ReportCreateRequest reportCreateRequest) throws ApiException {
    
    Object localVarPostBody = reportCreateRequest;
    
    // verify the required parameter 'reportCreateRequest' is set
    if (reportCreateRequest == null) {
      throw new ApiException(400, "Missing the required parameter 'reportCreateRequest' when calling reportCreate");
    }
    
    // create path and map variables
    String localVarPath = "/report/create";

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

    localVarFormParams = reportCreateRequest.createFormData();
    boolean isFileTypeFound = !localVarFormParams.isEmpty();

    final String localVarContentType = isFileTypeFound? "multipart/form-data" : apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "api_key" };

    GenericType<ReportCreateResponse> localVarReturnType = new GenericType<ReportCreateResponse>() {};

    return apiClient.invokeAPI("ReportApi.reportCreate", localVarPath, "POST", localVarQueryParams, localVarPostBody,
                               localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType,
                               localVarAuthNames, localVarReturnType, false);
  }
}
