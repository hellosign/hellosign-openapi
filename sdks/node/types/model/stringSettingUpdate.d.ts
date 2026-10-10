import { AttributeTypeMap } from "./";
import { TeamSettingLock } from "./teamSettingLock";
export declare class StringSettingUpdate {
    "value"?: string;
    "lockMode"?: TeamSettingLock;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): StringSettingUpdate;
}
export declare namespace StringSettingUpdate { }
