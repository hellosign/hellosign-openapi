import { AttributeTypeMap } from "./";
import { TeamSettingLock } from "./teamSettingLock";
export declare class AccountSettingsUpdateRequest {
    "set"?: {
        [key: string]: any;
    };
    "unset"?: Set<string>;
    "lock"?: {
        [key: string]: TeamSettingLock;
    };
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): AccountSettingsUpdateRequest;
}
