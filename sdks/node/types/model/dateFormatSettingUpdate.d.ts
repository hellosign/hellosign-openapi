import { AttributeTypeMap } from "./";
import { DateFormat } from "./dateFormat";
import { TeamSettingLock } from "./teamSettingLock";
export declare class DateFormatSettingUpdate {
    "value"?: DateFormat;
    "lockMode"?: TeamSettingLock;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): DateFormatSettingUpdate;
}
export declare namespace DateFormatSettingUpdate { }
