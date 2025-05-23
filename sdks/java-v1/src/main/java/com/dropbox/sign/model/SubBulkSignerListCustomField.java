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

/** SubBulkSignerListCustomField */
@JsonPropertyOrder({
    SubBulkSignerListCustomField.JSON_PROPERTY_NAME,
    SubBulkSignerListCustomField.JSON_PROPERTY_VALUE
})
@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.12.0")
@JsonIgnoreProperties(ignoreUnknown = true)
public class SubBulkSignerListCustomField {
    public static final String JSON_PROPERTY_NAME = "name";
    @javax.annotation.Nonnull private String name;

    public static final String JSON_PROPERTY_VALUE = "value";
    @javax.annotation.Nonnull private String value;

    public SubBulkSignerListCustomField() {}

    /**
     * Attempt to instantiate and hydrate a new instance of this class
     *
     * @param jsonData String of JSON data representing target object
     */
    public static SubBulkSignerListCustomField init(String jsonData) throws Exception {
        return new ObjectMapper().readValue(jsonData, SubBulkSignerListCustomField.class);
    }

    public static SubBulkSignerListCustomField init(HashMap data) throws Exception {
        return new ObjectMapper()
                .readValue(
                        new ObjectMapper().writeValueAsString(data),
                        SubBulkSignerListCustomField.class);
    }

    public SubBulkSignerListCustomField name(@javax.annotation.Nonnull String name) {
        this.name = name;
        return this;
    }

    /**
     * The name of the custom field. Must be the field&#39;s &#x60;name&#x60; or &#x60;api_id&#x60;.
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

    public SubBulkSignerListCustomField value(@javax.annotation.Nonnull String value) {
        this.value = value;
        return this;
    }

    /**
     * The value of the custom field.
     *
     * @return value
     */
    @javax.annotation.Nonnull
    @JsonProperty(JSON_PROPERTY_VALUE)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public String getValue() {
        return value;
    }

    @JsonProperty(JSON_PROPERTY_VALUE)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setValue(@javax.annotation.Nonnull String value) {
        this.value = value;
    }

    /** Return true if this SubBulkSignerListCustomField object is equal to o. */
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        SubBulkSignerListCustomField subBulkSignerListCustomField =
                (SubBulkSignerListCustomField) o;
        return Objects.equals(this.name, subBulkSignerListCustomField.name)
                && Objects.equals(this.value, subBulkSignerListCustomField.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, value);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class SubBulkSignerListCustomField {\n");
        sb.append("    name: ").append(toIndentedString(name)).append("\n");
        sb.append("    value: ").append(toIndentedString(value)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    public Map<String, Object> createFormData() throws ApiException {
        Map<String, Object> map = new HashMap<>();
        boolean fileTypeFound = false;
        try {
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
            if (value != null) {
                if (isFileTypeOrListOfFiles(value)) {
                    fileTypeFound = true;
                }

                if (value.getClass().equals(java.io.File.class)
                        || value.getClass().equals(Integer.class)
                        || value.getClass().equals(String.class)
                        || value.getClass().isEnum()) {
                    map.put("value", value);
                } else if (isListOfFile(value)) {
                    for (int i = 0; i < getListSize(value); i++) {
                        map.put("value[" + i + "]", getFromList(value, i));
                    }
                } else {
                    map.put("value", JSON.getDefault().getMapper().writeValueAsString(value));
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
