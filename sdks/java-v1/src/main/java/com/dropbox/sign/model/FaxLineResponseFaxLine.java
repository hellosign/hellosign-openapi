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

import com.dropbox.sign.ApiException;
import com.dropbox.sign.JSON;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

/** FaxLineResponseFaxLine */
@JsonPropertyOrder({
    FaxLineResponseFaxLine.JSON_PROPERTY_NUMBER,
    FaxLineResponseFaxLine.JSON_PROPERTY_CREATED_AT,
    FaxLineResponseFaxLine.JSON_PROPERTY_UPDATED_AT,
    FaxLineResponseFaxLine.JSON_PROPERTY_ACCOUNTS
})
@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.12.0")
@JsonIgnoreProperties(ignoreUnknown = true)
public class FaxLineResponseFaxLine {
    public static final String JSON_PROPERTY_NUMBER = "number";
    @javax.annotation.Nullable private String number;

    public static final String JSON_PROPERTY_CREATED_AT = "created_at";
    @javax.annotation.Nullable private Integer createdAt;

    public static final String JSON_PROPERTY_UPDATED_AT = "updated_at";
    @javax.annotation.Nullable private Integer updatedAt;

    public static final String JSON_PROPERTY_ACCOUNTS = "accounts";
    @javax.annotation.Nullable private List<AccountResponse> accounts = null;

    public FaxLineResponseFaxLine() {}

    /**
     * Attempt to instantiate and hydrate a new instance of this class
     *
     * @param jsonData String of JSON data representing target object
     */
    public static FaxLineResponseFaxLine init(String jsonData) throws Exception {
        return new ObjectMapper().readValue(jsonData, FaxLineResponseFaxLine.class);
    }

    public static FaxLineResponseFaxLine init(HashMap data) throws Exception {
        return new ObjectMapper()
                .readValue(
                        new ObjectMapper().writeValueAsString(data), FaxLineResponseFaxLine.class);
    }

    public FaxLineResponseFaxLine number(@javax.annotation.Nullable String number) {
        this.number = number;
        return this;
    }

    /**
     * Number
     *
     * @return number
     */
    @javax.annotation.Nullable @JsonProperty(JSON_PROPERTY_NUMBER)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public String getNumber() {
        return number;
    }

    @JsonProperty(JSON_PROPERTY_NUMBER)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public void setNumber(@javax.annotation.Nullable String number) {
        this.number = number;
    }

    public FaxLineResponseFaxLine createdAt(@javax.annotation.Nullable Integer createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    /**
     * Created at
     *
     * @return createdAt
     */
    @javax.annotation.Nullable @JsonProperty(JSON_PROPERTY_CREATED_AT)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public Integer getCreatedAt() {
        return createdAt;
    }

    @JsonProperty(JSON_PROPERTY_CREATED_AT)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public void setCreatedAt(@javax.annotation.Nullable Integer createdAt) {
        this.createdAt = createdAt;
    }

    public FaxLineResponseFaxLine updatedAt(@javax.annotation.Nullable Integer updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }

    /**
     * Updated at
     *
     * @return updatedAt
     */
    @javax.annotation.Nullable @JsonProperty(JSON_PROPERTY_UPDATED_AT)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public Integer getUpdatedAt() {
        return updatedAt;
    }

    @JsonProperty(JSON_PROPERTY_UPDATED_AT)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public void setUpdatedAt(@javax.annotation.Nullable Integer updatedAt) {
        this.updatedAt = updatedAt;
    }

    public FaxLineResponseFaxLine accounts(
            @javax.annotation.Nullable List<AccountResponse> accounts) {
        this.accounts = accounts;
        return this;
    }

    public FaxLineResponseFaxLine addAccountsItem(AccountResponse accountsItem) {
        if (this.accounts == null) {
            this.accounts = new ArrayList<>();
        }
        this.accounts.add(accountsItem);
        return this;
    }

    /**
     * Get accounts
     *
     * @return accounts
     */
    @javax.annotation.Nullable @JsonProperty(JSON_PROPERTY_ACCOUNTS)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public List<AccountResponse> getAccounts() {
        return accounts;
    }

    @JsonProperty(JSON_PROPERTY_ACCOUNTS)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public void setAccounts(@javax.annotation.Nullable List<AccountResponse> accounts) {
        this.accounts = accounts;
    }

    /** Return true if this FaxLineResponseFaxLine object is equal to o. */
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        FaxLineResponseFaxLine faxLineResponseFaxLine = (FaxLineResponseFaxLine) o;
        return Objects.equals(this.number, faxLineResponseFaxLine.number)
                && Objects.equals(this.createdAt, faxLineResponseFaxLine.createdAt)
                && Objects.equals(this.updatedAt, faxLineResponseFaxLine.updatedAt)
                && Objects.equals(this.accounts, faxLineResponseFaxLine.accounts);
    }

    @Override
    public int hashCode() {
        return Objects.hash(number, createdAt, updatedAt, accounts);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class FaxLineResponseFaxLine {\n");
        sb.append("    number: ").append(toIndentedString(number)).append("\n");
        sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
        sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
        sb.append("    accounts: ").append(toIndentedString(accounts)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    public Map<String, Object> createFormData() throws ApiException {
        Map<String, Object> map = new HashMap<>();
        boolean fileTypeFound = false;
        try {
            if (number != null) {
                if (isFileTypeOrListOfFiles(number)) {
                    fileTypeFound = true;
                }

                if (number.getClass().equals(java.io.File.class)
                        || number.getClass().equals(Integer.class)
                        || number.getClass().equals(String.class)
                        || number.getClass().isEnum()) {
                    map.put("number", number);
                } else if (isListOfFile(number)) {
                    for (int i = 0; i < getListSize(number); i++) {
                        map.put("number[" + i + "]", getFromList(number, i));
                    }
                } else {
                    map.put("number", JSON.getDefault().getMapper().writeValueAsString(number));
                }
            }
            if (createdAt != null) {
                if (isFileTypeOrListOfFiles(createdAt)) {
                    fileTypeFound = true;
                }

                if (createdAt.getClass().equals(java.io.File.class)
                        || createdAt.getClass().equals(Integer.class)
                        || createdAt.getClass().equals(String.class)
                        || createdAt.getClass().isEnum()) {
                    map.put("created_at", createdAt);
                } else if (isListOfFile(createdAt)) {
                    for (int i = 0; i < getListSize(createdAt); i++) {
                        map.put("created_at[" + i + "]", getFromList(createdAt, i));
                    }
                } else {
                    map.put(
                            "created_at",
                            JSON.getDefault().getMapper().writeValueAsString(createdAt));
                }
            }
            if (updatedAt != null) {
                if (isFileTypeOrListOfFiles(updatedAt)) {
                    fileTypeFound = true;
                }

                if (updatedAt.getClass().equals(java.io.File.class)
                        || updatedAt.getClass().equals(Integer.class)
                        || updatedAt.getClass().equals(String.class)
                        || updatedAt.getClass().isEnum()) {
                    map.put("updated_at", updatedAt);
                } else if (isListOfFile(updatedAt)) {
                    for (int i = 0; i < getListSize(updatedAt); i++) {
                        map.put("updated_at[" + i + "]", getFromList(updatedAt, i));
                    }
                } else {
                    map.put(
                            "updated_at",
                            JSON.getDefault().getMapper().writeValueAsString(updatedAt));
                }
            }
            if (accounts != null) {
                if (isFileTypeOrListOfFiles(accounts)) {
                    fileTypeFound = true;
                }

                if (accounts.getClass().equals(java.io.File.class)
                        || accounts.getClass().equals(Integer.class)
                        || accounts.getClass().equals(String.class)
                        || accounts.getClass().isEnum()) {
                    map.put("accounts", accounts);
                } else if (isListOfFile(accounts)) {
                    for (int i = 0; i < getListSize(accounts); i++) {
                        map.put("accounts[" + i + "]", getFromList(accounts, i));
                    }
                } else {
                    map.put("accounts", JSON.getDefault().getMapper().writeValueAsString(accounts));
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
        return obj instanceof java.util.List
                && !isListEmpty(obj)
                && getFromList(obj, 0) instanceof java.io.File;
    }

    private boolean isListEmpty(Object obj) throws Exception {
        return (boolean)
                Class.forName(java.util.List.class.getName()).getMethod("isEmpty").invoke(obj);
    }

    private Object getFromList(Object obj, int index) throws Exception {
        return Class.forName(java.util.List.class.getName())
                .getMethod("get", int.class)
                .invoke(obj, index);
    }

    private int getListSize(Object obj) throws Exception {
        return (int) Class.forName(java.util.List.class.getName()).getMethod("size").invoke(obj);
    }

    /**
     * Convert the given object to string with each line indented by 4 spaces (except the first
     * line).
     */
    private String toIndentedString(Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }
}
