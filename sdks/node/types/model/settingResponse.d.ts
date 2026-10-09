import { AttributeTypeMap } from "./";
import { SettingLockResponse } from "./settingLockResponse";
export declare class SettingResponse {
    "value": any | null;
    "isInherited": boolean;
    "source": SettingResponse.SourceEnum;
    "type": SettingResponse.TypeEnum;
    "writable": boolean;
    "lock": SettingLockResponse;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SettingResponse;
}
export declare namespace SettingResponse {
    enum SourceEnum {
        Account = "account",
        Team = "team",
        ParentTeam = "parent_team",
        Default = "default"
    }
    enum TypeEnum {
        Boolean = "boolean",
        Integer = "integer",
        String = "string",
        Array = "array"
    }
}
