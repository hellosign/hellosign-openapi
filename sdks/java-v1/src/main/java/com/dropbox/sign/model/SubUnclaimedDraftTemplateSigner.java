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
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

/** SubUnclaimedDraftTemplateSigner */
@JsonPropertyOrder({
    SubUnclaimedDraftTemplateSigner.JSON_PROPERTY_ROLE,
    SubUnclaimedDraftTemplateSigner.JSON_PROPERTY_NAME,
    SubUnclaimedDraftTemplateSigner.JSON_PROPERTY_EMAIL_ADDRESS
})
@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.12.0")
@JsonIgnoreProperties(ignoreUnknown = true)
public class SubUnclaimedDraftTemplateSigner {
    public static final String JSON_PROPERTY_ROLE = "role";
    @javax.annotation.Nonnull private String role;

    public static final String JSON_PROPERTY_NAME = "name";
    @javax.annotation.Nonnull private String name;

    public static final String JSON_PROPERTY_EMAIL_ADDRESS = "email_address";
    @javax.annotation.Nonnull private String emailAddress;

    public SubUnclaimedDraftTemplateSigner() {}

    /**
     * Attempt to instantiate and hydrate a new instance of this class
     *
     * @param jsonData String of JSON data representing target object
     */
    public static SubUnclaimedDraftTemplateSigner init(String jsonData) throws Exception {
        return new ObjectMapper().readValue(jsonData, SubUnclaimedDraftTemplateSigner.class);
    }

    public static SubUnclaimedDraftTemplateSigner init(HashMap data) throws Exception {
        return new ObjectMapper()
                .readValue(
                        new ObjectMapper().writeValueAsString(data),
                        SubUnclaimedDraftTemplateSigner.class);
    }

    public SubUnclaimedDraftTemplateSigner role(@javax.annotation.Nonnull String role) {
        this.role = role;
        return this;
    }

    /**
     * Must match an existing role in chosen Template(s).
     *
     * @return role
     */
    @javax.annotation.Nonnull
    @JsonProperty(JSON_PROPERTY_ROLE)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public String getRole() {
        return role;
    }

    @JsonProperty(JSON_PROPERTY_ROLE)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setRole(@javax.annotation.Nonnull String role) {
        this.role = role;
    }

    public SubUnclaimedDraftTemplateSigner name(@javax.annotation.Nonnull String name) {
        this.name = name;
        return this;
    }

    /**
     * The name of the signer filling the role of &#x60;role&#x60;.
     *
     * @return name
     */
    @javax.annotation.Nonnull
    @JsonProperty(JSON_PROPERTY_NAME)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public String getName() {
        return name;
    }

    @JsonProperty(JSON_PROPERTY_NAME)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setName(@javax.annotation.Nonnull String name) {
        this.name = name;
    }

    public SubUnclaimedDraftTemplateSigner emailAddress(
            @javax.annotation.Nonnull String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }

    /**
     * The email address of the signer filling the role of &#x60;role&#x60;.
     *
     * @return emailAddress
     */
    @javax.annotation.Nonnull
    @JsonProperty(JSON_PROPERTY_EMAIL_ADDRESS)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public String getEmailAddress() {
        return emailAddress;
    }

    @JsonProperty(JSON_PROPERTY_EMAIL_ADDRESS)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setEmailAddress(@javax.annotation.Nonnull String emailAddress) {
        this.emailAddress = emailAddress;
    }

    /** Return true if this SubUnclaimedDraftTemplateSigner object is equal to o. */
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        SubUnclaimedDraftTemplateSigner subUnclaimedDraftTemplateSigner =
                (SubUnclaimedDraftTemplateSigner) o;
        return Objects.equals(this.role, subUnclaimedDraftTemplateSigner.role)
                && Objects.equals(this.name, subUnclaimedDraftTemplateSigner.name)
                && Objects.equals(this.emailAddress, subUnclaimedDraftTemplateSigner.emailAddress);
    }

    @Override
    public int hashCode() {
        return Objects.hash(role, name, emailAddress);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class SubUnclaimedDraftTemplateSigner {\n");
        sb.append("    role: ").append(toIndentedString(role)).append("\n");
        sb.append("    name: ").append(toIndentedString(name)).append("\n");
        sb.append("    emailAddress: ").append(toIndentedString(emailAddress)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    public Map<String, Object> createFormData() throws ApiException {
        Map<String, Object> map = new HashMap<>();
        boolean fileTypeFound = false;
        try {
            if (role != null) {
                if (isFileTypeOrListOfFiles(role)) {
                    fileTypeFound = true;
                }

                if (role.getClass().equals(java.io.File.class)
                        || role.getClass().equals(Integer.class)
                        || role.getClass().equals(String.class)
                        || role.getClass().isEnum()) {
                    map.put("role", role);
                } else if (isListOfFile(role)) {
                    for (int i = 0; i < getListSize(role); i++) {
                        map.put("role[" + i + "]", getFromList(role, i));
                    }
                } else {
                    map.put("role", JSON.getDefault().getMapper().writeValueAsString(role));
                }
            }
            if (name != null) {
                if (isFileTypeOrListOfFiles(name)) {
                    fileTypeFound = true;
                }

                if (name.getClass().equals(java.io.File.class)
                        || name.getClass().equals(Integer.class)
                        || name.getClass().equals(String.class)
                        || name.getClass().isEnum()) {
                    map.put("name", name);
                } else if (isListOfFile(name)) {
                    for (int i = 0; i < getListSize(name); i++) {
                        map.put("name[" + i + "]", getFromList(name, i));
                    }
                } else {
                    map.put("name", JSON.getDefault().getMapper().writeValueAsString(name));
                }
            }
            if (emailAddress != null) {
                if (isFileTypeOrListOfFiles(emailAddress)) {
                    fileTypeFound = true;
                }

                if (emailAddress.getClass().equals(java.io.File.class)
                        || emailAddress.getClass().equals(Integer.class)
                        || emailAddress.getClass().equals(String.class)
                        || emailAddress.getClass().isEnum()) {
                    map.put("email_address", emailAddress);
                } else if (isListOfFile(emailAddress)) {
                    for (int i = 0; i < getListSize(emailAddress); i++) {
                        map.put("email_address[" + i + "]", getFromList(emailAddress, i));
                    }
                } else {
                    map.put(
                            "email_address",
                            JSON.getDefault().getMapper().writeValueAsString(emailAddress));
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
