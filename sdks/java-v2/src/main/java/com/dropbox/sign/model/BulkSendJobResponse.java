/*
 * Dropbox Sign API
 * Dropbox Sign v3 API
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: apisupport@hellosign.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.dropbox.sign.model;

import java.util.Objects;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.Arrays;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.dropbox.sign.JSON;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;


import com.dropbox.sign.ApiException;
/**
 * Contains information about the BulkSendJob such as when it was created and how many signature requests are queued.
 */
@JsonPropertyOrder({
  BulkSendJobResponse.JSON_PROPERTY_BULK_SEND_JOB_ID,
  BulkSendJobResponse.JSON_PROPERTY_TOTAL,
  BulkSendJobResponse.JSON_PROPERTY_IS_CREATOR,
  BulkSendJobResponse.JSON_PROPERTY_CREATED_AT
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.12.0")
@JsonIgnoreProperties(ignoreUnknown=true)
public class BulkSendJobResponse {
  public static final String JSON_PROPERTY_BULK_SEND_JOB_ID = "bulk_send_job_id";
  @jakarta.annotation.Nullable
  private String bulkSendJobId;

  public static final String JSON_PROPERTY_TOTAL = "total";
  @jakarta.annotation.Nullable
  private Integer total;

  public static final String JSON_PROPERTY_IS_CREATOR = "is_creator";
  @jakarta.annotation.Nullable
  private Boolean isCreator;

  public static final String JSON_PROPERTY_CREATED_AT = "created_at";
  @jakarta.annotation.Nullable
  private Integer createdAt;

  public BulkSendJobResponse() { 
  }

  /**
   * Attempt to instantiate and hydrate a new instance of this class
   * @param jsonData String of JSON data representing target object
   */
  static public BulkSendJobResponse init(String jsonData) throws Exception {
    return new ObjectMapper().readValue(jsonData, BulkSendJobResponse.class);
  }

  static public BulkSendJobResponse init(HashMap data) throws Exception {
    return new ObjectMapper().readValue(
      new ObjectMapper().writeValueAsString(data),
      BulkSendJobResponse.class
    );
  }

  public BulkSendJobResponse bulkSendJobId(@jakarta.annotation.Nullable String bulkSendJobId) {
    this.bulkSendJobId = bulkSendJobId;
    return this;
  }

  /**
   * The id of the BulkSendJob.
   * @return bulkSendJobId
   */
  @jakarta.annotation.Nullable
  @JsonProperty(JSON_PROPERTY_BULK_SEND_JOB_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getBulkSendJobId() {
    return bulkSendJobId;
  }


  @JsonProperty(JSON_PROPERTY_BULK_SEND_JOB_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBulkSendJobId(@jakarta.annotation.Nullable String bulkSendJobId) {
    this.bulkSendJobId = bulkSendJobId;
  }


  public BulkSendJobResponse total(@jakarta.annotation.Nullable Integer total) {
    this.total = total;
    return this;
  }

  /**
   * The total amount of Signature Requests queued for sending.
   * @return total
   */
  @jakarta.annotation.Nullable
  @JsonProperty(JSON_PROPERTY_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getTotal() {
    return total;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotal(@jakarta.annotation.Nullable Integer total) {
    this.total = total;
  }


  public BulkSendJobResponse isCreator(@jakarta.annotation.Nullable Boolean isCreator) {
    this.isCreator = isCreator;
    return this;
  }

  /**
   * True if you are the owner of this BulkSendJob, false if it&#39;s been shared with you by a team member.
   * @return isCreator
   */
  @jakarta.annotation.Nullable
  @JsonProperty(JSON_PROPERTY_IS_CREATOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getIsCreator() {
    return isCreator;
  }


  @JsonProperty(JSON_PROPERTY_IS_CREATOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsCreator(@jakarta.annotation.Nullable Boolean isCreator) {
    this.isCreator = isCreator;
  }


  public BulkSendJobResponse createdAt(@jakarta.annotation.Nullable Integer createdAt) {
    this.createdAt = createdAt;
    return this;
  }

  /**
   * Time that the BulkSendJob was created.
   * @return createdAt
   */
  @jakarta.annotation.Nullable
  @JsonProperty(JSON_PROPERTY_CREATED_AT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getCreatedAt() {
    return createdAt;
  }


  @JsonProperty(JSON_PROPERTY_CREATED_AT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCreatedAt(@jakarta.annotation.Nullable Integer createdAt) {
    this.createdAt = createdAt;
  }


  /**
   * Return true if this BulkSendJobResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BulkSendJobResponse bulkSendJobResponse = (BulkSendJobResponse) o;
    return Objects.equals(this.bulkSendJobId, bulkSendJobResponse.bulkSendJobId) &&
        Objects.equals(this.total, bulkSendJobResponse.total) &&
        Objects.equals(this.isCreator, bulkSendJobResponse.isCreator) &&
        Objects.equals(this.createdAt, bulkSendJobResponse.createdAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(bulkSendJobId, total, isCreator, createdAt);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BulkSendJobResponse {\n");
    sb.append("    bulkSendJobId: ").append(toIndentedString(bulkSendJobId)).append("\n");
    sb.append("    total: ").append(toIndentedString(total)).append("\n");
    sb.append("    isCreator: ").append(toIndentedString(isCreator)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  public Map<String, Object> createFormData() throws ApiException {
    Map<String, Object> map = new HashMap<>();
    boolean fileTypeFound = false;
    try {
    if (bulkSendJobId != null) {
        if (isFileTypeOrListOfFiles(bulkSendJobId)) {
            fileTypeFound = true;
        }

        if (bulkSendJobId.getClass().equals(java.io.File.class) ||
            bulkSendJobId.getClass().equals(Integer.class) ||
            bulkSendJobId.getClass().equals(String.class) ||
            bulkSendJobId.getClass().isEnum()) {
            map.put("bulk_send_job_id", bulkSendJobId);
        } else if (isListOfFile(bulkSendJobId)) {
            for(int i = 0; i< getListSize(bulkSendJobId); i++) {
                map.put("bulk_send_job_id[" + i + "]", getFromList(bulkSendJobId, i));
            }
        }
        else {
            map.put("bulk_send_job_id", JSON.getDefault().getMapper().writeValueAsString(bulkSendJobId));
        }
    }
    if (total != null) {
        if (isFileTypeOrListOfFiles(total)) {
            fileTypeFound = true;
        }

        if (total.getClass().equals(java.io.File.class) ||
            total.getClass().equals(Integer.class) ||
            total.getClass().equals(String.class) ||
            total.getClass().isEnum()) {
            map.put("total", total);
        } else if (isListOfFile(total)) {
            for(int i = 0; i< getListSize(total); i++) {
                map.put("total[" + i + "]", getFromList(total, i));
            }
        }
        else {
            map.put("total", JSON.getDefault().getMapper().writeValueAsString(total));
        }
    }
    if (isCreator != null) {
        if (isFileTypeOrListOfFiles(isCreator)) {
            fileTypeFound = true;
        }

        if (isCreator.getClass().equals(java.io.File.class) ||
            isCreator.getClass().equals(Integer.class) ||
            isCreator.getClass().equals(String.class) ||
            isCreator.getClass().isEnum()) {
            map.put("is_creator", isCreator);
        } else if (isListOfFile(isCreator)) {
            for(int i = 0; i< getListSize(isCreator); i++) {
                map.put("is_creator[" + i + "]", getFromList(isCreator, i));
            }
        }
        else {
            map.put("is_creator", JSON.getDefault().getMapper().writeValueAsString(isCreator));
        }
    }
    if (createdAt != null) {
        if (isFileTypeOrListOfFiles(createdAt)) {
            fileTypeFound = true;
        }

        if (createdAt.getClass().equals(java.io.File.class) ||
            createdAt.getClass().equals(Integer.class) ||
            createdAt.getClass().equals(String.class) ||
            createdAt.getClass().isEnum()) {
            map.put("created_at", createdAt);
        } else if (isListOfFile(createdAt)) {
            for(int i = 0; i< getListSize(createdAt); i++) {
                map.put("created_at[" + i + "]", getFromList(createdAt, i));
            }
        }
        else {
            map.put("created_at", JSON.getDefault().getMapper().writeValueAsString(createdAt));
        }
    }
    } catch (Exception e) {
        throw new ApiException(e);
    }

    return fileTypeFound ? map : new HashMap<>();
  }

  private boolean isFileTypeOrListOfFiles(Object obj) throws Exception {
    return obj.getClass().equals(java.io.File.class) || isListOfFile(obj);
  }

  private boolean isListOfFile(Object obj) throws Exception {
      return obj instanceof java.util.List && !isListEmpty(obj) && getFromList(obj, 0) instanceof java.io.File;
  }

  private boolean isListEmpty(Object obj) throws Exception {
    return (boolean) Class.forName(java.util.List.class.getName()).getMethod("isEmpty").invoke(obj);
  }

  private Object getFromList(Object obj, int index) throws Exception {
    return Class.forName(java.util.List.class.getName()).getMethod("get", int.class).invoke(obj, index);
  }

  private int getListSize(Object obj) throws Exception {
    return (int) Class.forName(java.util.List.class.getName()).getMethod("size").invoke(obj);
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

