import { AttributeTypeMap } from "./";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
export declare class SubFormFieldsPerDocumentInitials extends SubFormFieldsPerDocumentBase {
    "type": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubFormFieldsPerDocumentInitials;
}
