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

/** TeamInvitesResponse */
@JsonPropertyOrder({
    TeamInvitesResponse.JSON_PROPERTY_TEAM_INVITES,
    TeamInvitesResponse.JSON_PROPERTY_WARNINGS
})
@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.12.0")
@JsonIgnoreProperties(ignoreUnknown = true)
public class TeamInvitesResponse {
    public static final String JSON_PROPERTY_TEAM_INVITES = "team_invites";
    @javax.annotation.Nonnull private List<TeamInviteResponse> teamInvites = new ArrayList<>();

    public static final String JSON_PROPERTY_WARNINGS = "warnings";
    @javax.annotation.Nullable private List<WarningResponse> warnings = null;

    public TeamInvitesResponse() {}

    /**
     * Attempt to instantiate and hydrate a new instance of this class
     *
     * @param jsonData String of JSON data representing target object
     */
    public static TeamInvitesResponse init(String jsonData) throws Exception {
        return new ObjectMapper().readValue(jsonData, TeamInvitesResponse.class);
    }

    public static TeamInvitesResponse init(HashMap data) throws Exception {
        return new ObjectMapper()
                .readValue(new ObjectMapper().writeValueAsString(data), TeamInvitesResponse.class);
    }

    public TeamInvitesResponse teamInvites(
            @javax.annotation.Nonnull List<TeamInviteResponse> teamInvites) {
        this.teamInvites = teamInvites;
        return this;
    }

    public TeamInvitesResponse addTeamInvitesItem(TeamInviteResponse teamInvitesItem) {
        if (this.teamInvites == null) {
            this.teamInvites = new ArrayList<>();
        }
        this.teamInvites.add(teamInvitesItem);
        return this;
    }

    /**
     * Contains a list of team invites and their roles.
     *
     * @return teamInvites
     */
    @javax.annotation.Nonnull
    @JsonProperty(JSON_PROPERTY_TEAM_INVITES)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public List<TeamInviteResponse> getTeamInvites() {
        return teamInvites;
    }

    @JsonProperty(JSON_PROPERTY_TEAM_INVITES)
    @JsonInclude(value = JsonInclude.Include.ALWAYS)
    public void setTeamInvites(@javax.annotation.Nonnull List<TeamInviteResponse> teamInvites) {
        this.teamInvites = teamInvites;
    }

    public TeamInvitesResponse warnings(@javax.annotation.Nullable List<WarningResponse> warnings) {
        this.warnings = warnings;
        return this;
    }

    public TeamInvitesResponse addWarningsItem(WarningResponse warningsItem) {
        if (this.warnings == null) {
            this.warnings = new ArrayList<>();
        }
        this.warnings.add(warningsItem);
        return this;
    }

    /**
     * Get warnings
     *
     * @return warnings
     */
    @javax.annotation.Nullable @JsonProperty(JSON_PROPERTY_WARNINGS)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public List<WarningResponse> getWarnings() {
        return warnings;
    }

    @JsonProperty(JSON_PROPERTY_WARNINGS)
    @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
    public void setWarnings(@javax.annotation.Nullable List<WarningResponse> warnings) {
        this.warnings = warnings;
    }

    /** Return true if this TeamInvitesResponse object is equal to o. */
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TeamInvitesResponse teamInvitesResponse = (TeamInvitesResponse) o;
        return Objects.equals(this.teamInvites, teamInvitesResponse.teamInvites)
                && Objects.equals(this.warnings, teamInvitesResponse.warnings);
    }

    @Override
    public int hashCode() {
        return Objects.hash(teamInvites, warnings);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class TeamInvitesResponse {\n");
        sb.append("    teamInvites: ").append(toIndentedString(teamInvites)).append("\n");
        sb.append("    warnings: ").append(toIndentedString(warnings)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    public Map<String, Object> createFormData() throws ApiException {
        Map<String, Object> map = new HashMap<>();
        boolean fileTypeFound = false;
        try {
            if (teamInvites != null) {
                if (isFileTypeOrListOfFiles(teamInvites)) {
                    fileTypeFound = true;
                }

                if (teamInvites.getClass().equals(java.io.File.class)
                        || teamInvites.getClass().equals(Integer.class)
                        || teamInvites.getClass().equals(String.class)
                        || teamInvites.getClass().isEnum()) {
                    map.put("team_invites", teamInvites);
                } else if (isListOfFile(teamInvites)) {
                    for (int i = 0; i < getListSize(teamInvites); i++) {
                        map.put("team_invites[" + i + "]", getFromList(teamInvites, i));
                    }
                } else {
                    map.put(
                            "team_invites",
                            JSON.getDefault().getMapper().writeValueAsString(teamInvites));
                }
            }
            if (warnings != null) {
                if (isFileTypeOrListOfFiles(warnings)) {
                    fileTypeFound = true;
                }

                if (warnings.getClass().equals(java.io.File.class)
                        || warnings.getClass().equals(Integer.class)
                        || warnings.getClass().equals(String.class)
                        || warnings.getClass().isEnum()) {
                    map.put("warnings", warnings);
                } else if (isListOfFile(warnings)) {
                    for (int i = 0; i < getListSize(warnings); i++) {
                        map.put("warnings[" + i + "]", getFromList(warnings, i));
                    }
                } else {
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
