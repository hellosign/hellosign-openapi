import { AttributeTypeMap } from "./";
export declare class SubOptions {
    "canInsertEverywhere"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubOptions;
}
