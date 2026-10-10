import { AttributeTypeMap } from "./";
import { TeamSettingLock } from "./teamSettingLock";
export declare class SettingLockResponse {
    "mode": TeamSettingLock;
    "source": SettingLockResponse.SourceEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SettingLockResponse;
}
export declare namespace SettingLockResponse {
    enum SourceEnum {
        Team = "team",
        ParentTeam = "parent_team",
        Default = "default"
    }
}
