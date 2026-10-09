import { AttributeTypeMap } from "./";
import { DataResidency } from "./dataResidency";
import { TeamSettingLock } from "./teamSettingLock";
export declare class DataResidencySettingUpdate {
    "value"?: DataResidency;
    "lockMode"?: TeamSettingLock;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): DataResidencySettingUpdate;
}
export declare namespace DataResidencySettingUpdate { }
