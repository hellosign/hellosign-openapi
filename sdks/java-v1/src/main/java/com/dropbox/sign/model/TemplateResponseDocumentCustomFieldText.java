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
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

/** This class extends &#x60;TemplateResponseDocumentCustomFieldBase&#x60; */
@JsonPropertyOrder({
    TemplateResponseDocumentCustomFieldText.JSON_PROPERTY_TYPE,
    TemplateResponseDocumentCustomFieldText.JSON_PROPERTY_AVG_TEXT_LENGTH,
    TemplateResponseDocumentCustomFieldText.JSON_PROPERTY_IS_MULTILINE,
    TemplateResponseDocumentCustomFieldText.JSON_PROPERTY_ORIGINAL_FONT_SIZE,
    TemplateResponseDocumentCustomFieldText.JSON_PROPERTY_FONT_FAMILY
})
@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.12.0")
@JsonIgnoreProperties(
        allowSetters = true, // allows the type to be set during deserialization
        ignoreUnknown = true)
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.EXISTING_PROPERTY,
        property = "type",
        visible = true)
public class TemplateResponseDocumentCustomFieldText
        extends TemplateResponseDocumentCustomFieldBase {
    public static final String JSON_PROPERTY_TYPE = "type";
    @javax.annotation.Nonnull private String type = "text";

    public static final String JSON_PROPERTY_AVG_TEXT_LENGTH = "avg_text_length";
    @javax.annotation.Nullable private TemplateResponseFieldAvgTextLength avgTextLength;

    public static final String JSON_PROPERTY_IS_MULTILINE = "isMultiline";
    @javax.annotation.Nullable private Boolean isMultiline;

    public static final String JSON_PROPERTY_ORIGINAL_FONT_SIZE = "originalFontSize";
    @javax.annotation.Nullable private Integer originalFontSize;

    public static final String JSON_PROPERTY_FONT_FAMILY = "fontFamily";
    @javax.annotation.Nullable private String fontFamily;

    public TemplateResponseDocumentCustomFieldText() {}

    /**
     * Attempt to instantiate and hydrate a new instance of this class
     *
     * @param jsonData String of JSON data representing target object
     */
    public static TemplateResponseDocumentCustomFieldText init(String jsonData) throws Exception {
        return new ObjectMapper()
                .readValue(jsonData, TemplateResponseDocumentCustomFieldText.class);
    }

    public static TemplateResponseDocumentCustomFieldText init(HashMap data) throws Exception {
        return new ObjectMapper()
                .readValue(
                        new ObjectMapper().writeValueAsString(data),
                        TemplateResponseDocumentCustomFieldText.class);
    }

    public TemplateResponseDocumentCustomFieldText type(@javax.annotation.Nonnull String type) {
        this.type = type;
        return this;
    }

    /**
     * The type of this Custom Field. Only &#x60;text&#x60; and &#x60;checkbox&#x60; are currently
     * supported. * Text uses &#x60;TemplateResponseDocumentCustomFieldText&#x60; * Checkbox uses
     * &#x60;TemplateResponseDocumentCustomFieldCheckbox&#x60;
     *
     * @return type
     */
    @javax.annotation.Nonnull
    @JsonProperty(JSON_PROPERTY_TYPE)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public String getType() {
        return type;
    }

    @JsonProperty(JSON_PROPERTY_TYPE)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setType(@javax.annotation.Nonnull String type) {
        this.type = type;
    }

    public TemplateResponseDocumentCustomFieldText avgTextLength(
            @javax.annotation.Nullable TemplateResponseFieldAvgTextLength avgTextLength) {
        this.avgTextLength = avgTextLength;
        return this;
    }

    /**
     * Get avgTextLength
     *
     * @return avgTextLength
     */
    @javax.annotation.Nullable @JsonProperty(JSON_PROPERTY_AVG_TEXT_LENGTH)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public TemplateResponseFieldAvgTextLength getAvgTextLength() {
        return avgTextLength;
    }

    @JsonProperty(JSON_PROPERTY_AVG_TEXT_LENGTH)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public void setAvgTextLength(
            @javax.annotation.Nullable TemplateResponseFieldAvgTextLength avgTextLength) {
        this.avgTextLength = avgTextLength;
    }

    public TemplateResponseDocumentCustomFieldText isMultiline(
            @javax.annotation.Nullable Boolean isMultiline) {
        this.isMultiline = isMultiline;
        return this;
    }

    /**
     * Whether this form field is multiline text.
     *
     * @return isMultiline
     */
    @javax.annotation.Nullable @JsonProperty(JSON_PROPERTY_IS_MULTILINE)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public Boolean getIsMultiline() {
        return isMultiline;
    }

    @JsonProperty(JSON_PROPERTY_IS_MULTILINE)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public void setIsMultiline(@javax.annotation.Nullable Boolean isMultiline) {
        this.isMultiline = isMultiline;
    }

    public TemplateResponseDocumentCustomFieldText originalFontSize(
            @javax.annotation.Nullable Integer originalFontSize) {
        this.originalFontSize = originalFontSize;
        return this;
    }

    /**
     * Original font size used in this form field&#39;s text.
     *
     * @return originalFontSize
     */
    @javax.annotation.Nullable @JsonProperty(JSON_PROPERTY_ORIGINAL_FONT_SIZE)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public Integer getOriginalFontSize() {
        return originalFontSize;
    }

    @JsonProperty(JSON_PROPERTY_ORIGINAL_FONT_SIZE)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public void setOriginalFontSize(@javax.annotation.Nullable Integer originalFontSize) {
        this.originalFontSize = originalFontSize;
    }

    public TemplateResponseDocumentCustomFieldText fontFamily(
            @javax.annotation.Nullable String fontFamily) {
        this.fontFamily = fontFamily;
        return this;
    }

    /**
     * Font family used in this form field&#39;s text.
     *
     * @return fontFamily
     */
    @javax.annotation.Nullable @JsonProperty(JSON_PROPERTY_FONT_FAMILY)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public String getFontFamily() {
        return fontFamily;
    }

    @JsonProperty(JSON_PROPERTY_FONT_FAMILY)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public void setFontFamily(@javax.annotation.Nullable String fontFamily) {
        this.fontFamily = fontFamily;
    }

    /** Return true if this TemplateResponseDocumentCustomFieldText object is equal to o. */
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TemplateResponseDocumentCustomFieldText templateResponseDocumentCustomFieldText =
                (TemplateResponseDocumentCustomFieldText) o;
        return Objects.equals(this.type, templateResponseDocumentCustomFieldText.type)
                && Objects.equals(
                        this.avgTextLength, templateResponseDocumentCustomFieldText.avgTextLength)
                && Objects.equals(
                        this.isMultiline, templateResponseDocumentCustomFieldText.isMultiline)
                && Objects.equals(
                        this.originalFontSize,
                        templateResponseDocumentCustomFieldText.originalFontSize)
                && Objects.equals(
                        this.fontFamily, templateResponseDocumentCustomFieldText.fontFamily)
                && super.equals(o);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                type, avgTextLength, isMultiline, originalFontSize, fontFamily, super.hashCode());
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class TemplateResponseDocumentCustomFieldText {\n");
        sb.append("    ").append(toIndentedString(super.toString())).append("\n");
        sb.append("    type: ").append(toIndentedString(type)).append("\n");
        sb.append("    avgTextLength: ").append(toIndentedString(avgTextLength)).append("\n");
        sb.append("    isMultiline: ").append(toIndentedString(isMultiline)).append("\n");
        sb.append("    originalFontSize: ").append(toIndentedString(originalFontSize)).append("\n");
        sb.append("    fontFamily: ").append(toIndentedString(fontFamily)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    public Map<String, Object> createFormData() throws ApiException {
        Map<String, Object> map = new HashMap<>();
        boolean fileTypeFound = false;
        map.putAll(super.createFormData());
        try {
            if (type != null) {
                if (isFileTypeOrListOfFiles(type)) {
                    fileTypeFound = true;
                }

                if (type.getClass().equals(java.io.File.class)
                        || type.getClass().equals(Integer.class)
                        || type.getClass().equals(String.class)
                        || type.getClass().isEnum()) {
                    map.put("type", type);
                } else if (isListOfFile(type)) {
                    for (int i = 0; i < getListSize(type); i++) {
                        map.put("type[" + i + "]", getFromList(type, i));
                    }
                } else {
                    map.put("type", JSON.getDefault().getMapper().writeValueAsString(type));
                }
            }
            if (avgTextLength != null) {
                if (isFileTypeOrListOfFiles(avgTextLength)) {
                    fileTypeFound = true;
                }

                if (avgTextLength.getClass().equals(java.io.File.class)
                        || avgTextLength.getClass().equals(Integer.class)
                        || avgTextLength.getClass().equals(String.class)
                        || avgTextLength.getClass().isEnum()) {
                    map.put("avg_text_length", avgTextLength);
                } else if (isListOfFile(avgTextLength)) {
                    for (int i = 0; i < getListSize(avgTextLength); i++) {
                        map.put("avg_text_length[" + i + "]", getFromList(avgTextLength, i));
                    }
                } else {
                    map.put(
                            "avg_text_length",
                            JSON.getDefault().getMapper().writeValueAsString(avgTextLength));
                }
            }
            if (isMultiline != null) {
                if (isFileTypeOrListOfFiles(isMultiline)) {
                    fileTypeFound = true;
                }

                if (isMultiline.getClass().equals(java.io.File.class)
                        || isMultiline.getClass().equals(Integer.class)
                        || isMultiline.getClass().equals(String.class)
                        || isMultiline.getClass().isEnum()) {
                    map.put("isMultiline", isMultiline);
                } else if (isListOfFile(isMultiline)) {
                    for (int i = 0; i < getListSize(isMultiline); i++) {
                        map.put("isMultiline[" + i + "]", getFromList(isMultiline, i));
                    }
                } else {
                    map.put(
                            "isMultiline",
                            JSON.getDefault().getMapper().writeValueAsString(isMultiline));
                }
            }
            if (originalFontSize != null) {
                if (isFileTypeOrListOfFiles(originalFontSize)) {
                    fileTypeFound = true;
                }

                if (originalFontSize.getClass().equals(java.io.File.class)
                        || originalFontSize.getClass().equals(Integer.class)
                        || originalFontSize.getClass().equals(String.class)
                        || originalFontSize.getClass().isEnum()) {
                    map.put("originalFontSize", originalFontSize);
                } else if (isListOfFile(originalFontSize)) {
                    for (int i = 0; i < getListSize(originalFontSize); i++) {
                        map.put("originalFontSize[" + i + "]", getFromList(originalFontSize, i));
                    }
                } else {
                    map.put(
                            "originalFontSize",
                            JSON.getDefault().getMapper().writeValueAsString(originalFontSize));
                }
            }
            if (fontFamily != null) {
                if (isFileTypeOrListOfFiles(fontFamily)) {
                    fileTypeFound = true;
                }

                if (fontFamily.getClass().equals(java.io.File.class)
                        || fontFamily.getClass().equals(Integer.class)
                        || fontFamily.getClass().equals(String.class)
                        || fontFamily.getClass().isEnum()) {
                    map.put("fontFamily", fontFamily);
                } else if (isListOfFile(fontFamily)) {
                    for (int i = 0; i < getListSize(fontFamily); i++) {
                        map.put("fontFamily[" + i + "]", getFromList(fontFamily, i));
                    }
                } else {
                    map.put(
                            "fontFamily",
                            JSON.getDefault().getMapper().writeValueAsString(fontFamily));
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

    static {
        // Initialize and register the discriminator mappings.
        Map<String, Class<?>> mappings = new HashMap<>();
        mappings.put(
                "TemplateResponseDocumentCustomFieldText",
                TemplateResponseDocumentCustomFieldText.class);
        JSON.registerDiscriminator(TemplateResponseDocumentCustomFieldText.class, "type", mappings);
    }
}
