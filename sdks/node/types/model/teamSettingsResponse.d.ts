import { AttributeTypeMap } from "./";
import { TeamSettingsResponseSettings } from "./teamSettingsResponseSettings";
import { WarningResponse } from "./warningResponse";
export declare class TeamSettingsResponse {
    "teamId": string;
    "settings": TeamSettingsResponseSettings;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TeamSettingsResponse;
}
