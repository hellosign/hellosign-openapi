import { AttributeTypeMap } from "./models";
export declare class SubSigningOptions {
    "defaultType": SubSigningOptions.DefaultTypeEnum;
    "draw"?: boolean;
    "phone"?: boolean;
    "type"?: boolean;
    "upload"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubSigningOptions;
}
export declare namespace SubSigningOptions {
    enum DefaultTypeEnum {
        Draw = "draw",
        Phone = "phone",
        Type = "type",
        Upload = "upload"
    }
}
