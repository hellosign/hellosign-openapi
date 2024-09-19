import { AttributeTypeMap } from "./";
export declare class SubFile {
    "name"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubFile;
}
