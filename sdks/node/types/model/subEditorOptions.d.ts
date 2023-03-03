import { AttributeTypeMap } from "./";
export declare class SubEditorOptions {
    "allowEditSigners"?: boolean;
    "allowEditDocuments"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubEditorOptions;
}
