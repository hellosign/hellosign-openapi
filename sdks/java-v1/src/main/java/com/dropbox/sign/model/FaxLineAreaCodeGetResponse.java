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

/** FaxLineAreaCodeGetResponse */
@JsonPropertyOrder({FaxLineAreaCodeGetResponse.JSON_PROPERTY_AREA_CODES})
@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.12.0")
@JsonIgnoreProperties(ignoreUnknown = true)
public class FaxLineAreaCodeGetResponse {
    public static final String JSON_PROPERTY_AREA_CODES = "area_codes";
    @javax.annotation.Nonnull private List<Integer> areaCodes = new ArrayList<>();

    public FaxLineAreaCodeGetResponse() {}

    /**
     * Attempt to instantiate and hydrate a new instance of this class
     *
     * @param jsonData String of JSON data representing target object
     */
    public static FaxLineAreaCodeGetResponse init(String jsonData) throws Exception {
        return new ObjectMapper().readValue(jsonData, FaxLineAreaCodeGetResponse.class);
    }

    public static FaxLineAreaCodeGetResponse init(HashMap data) throws Exception {
        return new ObjectMapper()
                .readValue(
                        new ObjectMapper().writeValueAsString(data),
                        FaxLineAreaCodeGetResponse.class);
    }

    public FaxLineAreaCodeGetResponse areaCodes(@javax.annotation.Nonnull List<Integer> areaCodes) {
        this.areaCodes = areaCodes;
        return this;
    }

    public FaxLineAreaCodeGetResponse addAreaCodesItem(Integer areaCodesItem) {
        if (this.areaCodes == null) {
            this.areaCodes = new ArrayList<>();
        }
        this.areaCodes.add(areaCodesItem);
        return this;
    }

    /**
     * Get areaCodes
     *
     * @return areaCodes
     */
    @javax.annotation.Nonnull
    @JsonProperty(JSON_PROPERTY_AREA_CODES)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public List<Integer> getAreaCodes() {
        return areaCodes;
    }

    @JsonProperty(JSON_PROPERTY_AREA_CODES)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setAreaCodes(@javax.annotation.Nonnull List<Integer> areaCodes) {
        this.areaCodes = areaCodes;
    }

    /** Return true if this FaxLineAreaCodeGetResponse object is equal to o. */
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        FaxLineAreaCodeGetResponse faxLineAreaCodeGetResponse = (FaxLineAreaCodeGetResponse) o;
        return Objects.equals(this.areaCodes, faxLineAreaCodeGetResponse.areaCodes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(areaCodes);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class FaxLineAreaCodeGetResponse {\n");
        sb.append("    areaCodes: ").append(toIndentedString(areaCodes)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    public Map<String, Object> createFormData() throws ApiException {
        Map<String, Object> map = new HashMap<>();
        boolean fileTypeFound = false;
        try {
            if (areaCodes != null) {
                if (isFileTypeOrListOfFiles(areaCodes)) {
                    fileTypeFound = true;
                }

                if (areaCodes.getClass().equals(java.io.File.class)
                        || areaCodes.getClass().equals(Integer.class)
                        || areaCodes.getClass().equals(String.class)
                        || areaCodes.getClass().isEnum()) {
                    map.put("area_codes", areaCodes);
                } else if (isListOfFile(areaCodes)) {
                    for (int i = 0; i < getListSize(areaCodes); i++) {
                        map.put("area_codes[" + i + "]", getFromList(areaCodes, i));
                    }
                } else {
                    map.put(
                            "area_codes",
                            JSON.getDefault().getMapper().writeValueAsString(areaCodes));
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
