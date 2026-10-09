import { AttributeTypeMap } from "./";
import { TeamSettingLock } from "./teamSettingLock";
export declare class BooleanSettingUpdate {
    "value"?: boolean;
    "lockMode"?: TeamSettingLock;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): BooleanSettingUpdate;
}
export declare namespace BooleanSettingUpdate { }
