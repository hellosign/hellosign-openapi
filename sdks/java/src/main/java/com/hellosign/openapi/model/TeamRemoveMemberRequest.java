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


package com.hellosign.openapi.model;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.hellosign.openapi.JSON;


import com.hellosign.openapi.ApiException;
/**
 * TeamRemoveMemberRequest
 */
@JsonPropertyOrder({
    TeamRemoveMemberRequest.JSON_PROPERTY_ACCOUNT_ID,
    TeamRemoveMemberRequest.JSON_PROPERTY_EMAIL_ADDRESS,
    TeamRemoveMemberRequest.JSON_PROPERTY_NEW_OWNER_EMAIL_ADDRESS,
    TeamRemoveMemberRequest.JSON_PROPERTY_NEW_TEAM_ID,
    TeamRemoveMemberRequest.JSON_PROPERTY_NEW_ROLE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class TeamRemoveMemberRequest {
  public static final String JSON_PROPERTY_ACCOUNT_ID = "account_id";
  private String accountId;

  public static final String JSON_PROPERTY_EMAIL_ADDRESS = "email_address";
  private String emailAddress;

  public static final String JSON_PROPERTY_NEW_OWNER_EMAIL_ADDRESS = "new_owner_email_address";
  private String newOwnerEmailAddress;

  public static final String JSON_PROPERTY_NEW_TEAM_ID = "new_team_id";
  private String newTeamId;

  /**
   * A new role member will take in a new Team.  **Note**: This parameter is used only if &#x60;new_team_id&#x60; is provided.
   */
  public enum NewRoleEnum {
    MEMBER("Member"),
    
    DEVELOPER("Developer"),
    
    TEAM_MANAGER("Team Manager"),
    
    ADMIN("Admin");

    private String value;

    NewRoleEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static NewRoleEnum fromValue(String value) {
      for (NewRoleEnum b : NewRoleEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_NEW_ROLE = "new_role";
  private NewRoleEnum newRole;

  public TeamRemoveMemberRequest() { 
  }

  public TeamRemoveMemberRequest accountId(String accountId) {
    this.accountId = accountId;
    return this;
  }

   /**
   * **account_id** or **email_address** is required. If both are provided, the account id prevails.   Account id to remove from your Team.
   * @return accountId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "**account_id** or **email_address** is required. If both are provided, the account id prevails.   Account id to remove from your Team.")
  @JsonProperty(JSON_PROPERTY_ACCOUNT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getAccountId() {
    return accountId;
  }


  @JsonProperty(JSON_PROPERTY_ACCOUNT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAccountId(String accountId) {
    this.accountId = accountId;
  }


  public TeamRemoveMemberRequest emailAddress(String emailAddress) {
    this.emailAddress = emailAddress;
    return this;
  }

   /**
   * **account_id** or **email_address** is required. If both are provided, the account id prevails.   Email address of the Account to remove from your Team.
   * @return emailAddress
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "**account_id** or **email_address** is required. If both are provided, the account id prevails.   Email address of the Account to remove from your Team.")
  @JsonProperty(JSON_PROPERTY_EMAIL_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEmailAddress() {
    return emailAddress;
  }


  @JsonProperty(JSON_PROPERTY_EMAIL_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEmailAddress(String emailAddress) {
    this.emailAddress = emailAddress;
  }


  public TeamRemoveMemberRequest newOwnerEmailAddress(String newOwnerEmailAddress) {
    this.newOwnerEmailAddress = newOwnerEmailAddress;
    return this;
  }

   /**
   * The email address of an Account on this Team to receive all documents, templates, and API apps (if applicable) from the removed Account. If not provided, and on an Enterprise plan, this data will remain with the removed Account.  **Note**: Only available for Enterprise plans.
   * @return newOwnerEmailAddress
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The email address of an Account on this Team to receive all documents, templates, and API apps (if applicable) from the removed Account. If not provided, and on an Enterprise plan, this data will remain with the removed Account.  **Note**: Only available for Enterprise plans.")
  @JsonProperty(JSON_PROPERTY_NEW_OWNER_EMAIL_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getNewOwnerEmailAddress() {
    return newOwnerEmailAddress;
  }


  @JsonProperty(JSON_PROPERTY_NEW_OWNER_EMAIL_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNewOwnerEmailAddress(String newOwnerEmailAddress) {
    this.newOwnerEmailAddress = newOwnerEmailAddress;
  }


  public TeamRemoveMemberRequest newTeamId(String newTeamId) {
    this.newTeamId = newTeamId;
    return this;
  }

   /**
   * Id of the new Team.
   * @return newTeamId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Id of the new Team.")
  @JsonProperty(JSON_PROPERTY_NEW_TEAM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getNewTeamId() {
    return newTeamId;
  }


  @JsonProperty(JSON_PROPERTY_NEW_TEAM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNewTeamId(String newTeamId) {
    this.newTeamId = newTeamId;
  }


  public TeamRemoveMemberRequest newRole(NewRoleEnum newRole) {
    this.newRole = newRole;
    return this;
  }

   /**
   * A new role member will take in a new Team.  **Note**: This parameter is used only if &#x60;new_team_id&#x60; is provided.
   * @return newRole
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "A new role member will take in a new Team.  **Note**: This parameter is used only if `new_team_id` is provided.")
  @JsonProperty(JSON_PROPERTY_NEW_ROLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public NewRoleEnum getNewRole() {
    return newRole;
  }


  @JsonProperty(JSON_PROPERTY_NEW_ROLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNewRole(NewRoleEnum newRole) {
    this.newRole = newRole;
  }


  /**
   * Return true if this TeamRemoveMemberRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TeamRemoveMemberRequest teamRemoveMemberRequest = (TeamRemoveMemberRequest) o;
    return Objects.equals(this.accountId, teamRemoveMemberRequest.accountId) &&
        Objects.equals(this.emailAddress, teamRemoveMemberRequest.emailAddress) &&
        Objects.equals(this.newOwnerEmailAddress, teamRemoveMemberRequest.newOwnerEmailAddress) &&
        Objects.equals(this.newTeamId, teamRemoveMemberRequest.newTeamId) &&
        Objects.equals(this.newRole, teamRemoveMemberRequest.newRole);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountId, emailAddress, newOwnerEmailAddress, newTeamId, newRole);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TeamRemoveMemberRequest {\n");
    sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
    sb.append("    emailAddress: ").append(toIndentedString(emailAddress)).append("\n");
    sb.append("    newOwnerEmailAddress: ").append(toIndentedString(newOwnerEmailAddress)).append("\n");
    sb.append("    newTeamId: ").append(toIndentedString(newTeamId)).append("\n");
    sb.append("    newRole: ").append(toIndentedString(newRole)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  public Map<String, Object> createFormData() throws ApiException {
    Map<String, Object> map = new HashMap<>();
    boolean fileTypeFound = false;
    try {
    if (accountId != null) {
        if (isFileTypeOrListOfFiles(accountId)) {
            fileTypeFound = true;
        }

        if (accountId.getClass().equals(java.io.File.class) ||
            accountId.getClass().equals(Integer.class) ||
            accountId.getClass().equals(String.class) ) {
            map.put("account_id", accountId);
        } else if (isListOfFile(accountId)) {
            for(int i = 0; i< getListSize(accountId); i++) {
                map.put("account_id[" + i + "]", getFromList(accountId, i));
            }
        }
        else {
            map.put("account_id", JSON.getDefault().getMapper().writeValueAsString(accountId));
        }
    }
    if (emailAddress != null) {
        if (isFileTypeOrListOfFiles(emailAddress)) {
            fileTypeFound = true;
        }

        if (emailAddress.getClass().equals(java.io.File.class) ||
            emailAddress.getClass().equals(Integer.class) ||
            emailAddress.getClass().equals(String.class) ) {
            map.put("email_address", emailAddress);
        } else if (isListOfFile(emailAddress)) {
            for(int i = 0; i< getListSize(emailAddress); i++) {
                map.put("email_address[" + i + "]", getFromList(emailAddress, i));
            }
        }
        else {
            map.put("email_address", JSON.getDefault().getMapper().writeValueAsString(emailAddress));
        }
    }
    if (newOwnerEmailAddress != null) {
        if (isFileTypeOrListOfFiles(newOwnerEmailAddress)) {
            fileTypeFound = true;
        }

        if (newOwnerEmailAddress.getClass().equals(java.io.File.class) ||
            newOwnerEmailAddress.getClass().equals(Integer.class) ||
            newOwnerEmailAddress.getClass().equals(String.class) ) {
            map.put("new_owner_email_address", newOwnerEmailAddress);
        } else if (isListOfFile(newOwnerEmailAddress)) {
            for(int i = 0; i< getListSize(newOwnerEmailAddress); i++) {
                map.put("new_owner_email_address[" + i + "]", getFromList(newOwnerEmailAddress, i));
            }
        }
        else {
            map.put("new_owner_email_address", JSON.getDefault().getMapper().writeValueAsString(newOwnerEmailAddress));
        }
    }
    if (newTeamId != null) {
        if (isFileTypeOrListOfFiles(newTeamId)) {
            fileTypeFound = true;
        }

        if (newTeamId.getClass().equals(java.io.File.class) ||
            newTeamId.getClass().equals(Integer.class) ||
            newTeamId.getClass().equals(String.class) ) {
            map.put("new_team_id", newTeamId);
        } else if (isListOfFile(newTeamId)) {
            for(int i = 0; i< getListSize(newTeamId); i++) {
                map.put("new_team_id[" + i + "]", getFromList(newTeamId, i));
            }
        }
        else {
            map.put("new_team_id", JSON.getDefault().getMapper().writeValueAsString(newTeamId));
        }
    }
    if (newRole != null) {
        if (isFileTypeOrListOfFiles(newRole)) {
            fileTypeFound = true;
        }

        if (newRole.getClass().equals(java.io.File.class) ||
            newRole.getClass().equals(Integer.class) ||
            newRole.getClass().equals(String.class) ) {
            map.put("new_role", newRole);
        } else if (isListOfFile(newRole)) {
            for(int i = 0; i< getListSize(newRole); i++) {
                map.put("new_role[" + i + "]", getFromList(newRole, i));
            }
        }
        else {
            map.put("new_role", JSON.getDefault().getMapper().writeValueAsString(newRole));
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
