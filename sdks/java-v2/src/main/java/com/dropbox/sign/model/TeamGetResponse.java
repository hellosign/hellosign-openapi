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
import com.dropbox.sign.model.TeamResponse;
import com.dropbox.sign.model.WarningResponse;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.dropbox.sign.JSON;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;


import com.dropbox.sign.ApiException;
/**
 * TeamGetResponse
 */
@JsonPropertyOrder({
  TeamGetResponse.JSON_PROPERTY_TEAM,
  TeamGetResponse.JSON_PROPERTY_WARNINGS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.12.0")
@JsonIgnoreProperties(ignoreUnknown=true)
public class TeamGetResponse {
  public static final String JSON_PROPERTY_TEAM = "team";
  @jakarta.annotation.Nonnull
  private TeamResponse team;

  public static final String JSON_PROPERTY_WARNINGS = "warnings";
  @jakarta.annotation.Nullable
  private List<WarningResponse> warnings = null;

  public TeamGetResponse() { 
  }

  /**
   * Attempt to instantiate and hydrate a new instance of this class
   * @param jsonData String of JSON data representing target object
   */
  static public TeamGetResponse init(String jsonData) throws Exception {
    return new ObjectMapper().readValue(jsonData, TeamGetResponse.class);
  }

  static public TeamGetResponse init(HashMap data) throws Exception {
    return new ObjectMapper().readValue(
      new ObjectMapper().writeValueAsString(data),
      TeamGetResponse.class
    );
  }

  public TeamGetResponse team(@jakarta.annotation.Nonnull TeamResponse team) {
    this.team = team;
    return this;
  }

  /**
   * Get team
   * @return team
   */
  @jakarta.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_TEAM)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public TeamResponse getTeam() {
    return team;
  }


  @JsonProperty(JSON_PROPERTY_TEAM)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTeam(@jakarta.annotation.Nonnull TeamResponse team) {
    this.team = team;
  }


  public TeamGetResponse warnings(@jakarta.annotation.Nullable List<WarningResponse> warnings) {
    this.warnings = warnings;
    return this;
  }

  public TeamGetResponse addWarningsItem(WarningResponse warningsItem) {
    if (this.warnings == null) {
      this.warnings = new ArrayList<>();
    }
    this.warnings.add(warningsItem);
    return this;
  }

  /**
   * A list of warnings.
   * @return warnings
   */
  @jakarta.annotation.Nullable
  @JsonProperty(JSON_PROPERTY_WARNINGS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<WarningResponse> getWarnings() {
    return warnings;
  }


  @JsonProperty(JSON_PROPERTY_WARNINGS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWarnings(@jakarta.annotation.Nullable List<WarningResponse> warnings) {
    this.warnings = warnings;
  }


  /**
   * Return true if this TeamGetResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TeamGetResponse teamGetResponse = (TeamGetResponse) o;
    return Objects.equals(this.team, teamGetResponse.team) &&
        Objects.equals(this.warnings, teamGetResponse.warnings);
  }

  @Override
  public int hashCode() {
    return Objects.hash(team, warnings);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TeamGetResponse {\n");
    sb.append("    team: ").append(toIndentedString(team)).append("\n");
    sb.append("    warnings: ").append(toIndentedString(warnings)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  public Map<String, Object> createFormData() throws ApiException {
    Map<String, Object> map = new HashMap<>();
    boolean fileTypeFound = false;
    try {
    if (team != null) {
        if (isFileTypeOrListOfFiles(team)) {
            fileTypeFound = true;
        }

        if (team.getClass().equals(java.io.File.class) ||
            team.getClass().equals(Integer.class) ||
            team.getClass().equals(String.class) ||
            team.getClass().isEnum()) {
            map.put("team", team);
        } else if (isListOfFile(team)) {
            for(int i = 0; i< getListSize(team); i++) {
                map.put("team[" + i + "]", getFromList(team, i));
            }
        }
        else {
            map.put("team", JSON.getDefault().getMapper().writeValueAsString(team));
        }
    }
    if (warnings != null) {
        if (isFileTypeOrListOfFiles(warnings)) {
            fileTypeFound = true;
        }

        if (warnings.getClass().equals(java.io.File.class) ||
            warnings.getClass().equals(Integer.class) ||
            warnings.getClass().equals(String.class) ||
            warnings.getClass().isEnum()) {
            map.put("warnings", warnings);
        } else if (isListOfFile(warnings)) {
            for(int i = 0; i< getListSize(warnings); i++) {
                map.put("warnings[" + i + "]", getFromList(warnings, i));
            }
        }
        else {
            map.put("warnings", JSON.getDefault().getMapper().writeValueAsString(warnings));
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

