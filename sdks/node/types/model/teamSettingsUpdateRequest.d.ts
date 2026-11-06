import { AttributeTypeMap } from "./";
import { TeamSettingLock } from "./teamSettingLock";
export declare class TeamSettingsUpdateRequest {
    "set"?: {
        [key: string]: any;
    };
    "lock"?: {
        [key: string]: TeamSettingLock;
    };
    "unset"?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TeamSettingsUpdateRequest;
}
