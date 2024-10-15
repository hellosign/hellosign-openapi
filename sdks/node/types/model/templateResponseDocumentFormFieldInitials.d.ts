import { AttributeTypeMap } from "./";
import { TemplateResponseDocumentFormFieldBase } from "./templateResponseDocumentFormFieldBase";
export declare class TemplateResponseDocumentFormFieldInitials extends TemplateResponseDocumentFormFieldBase {
    "type": string;
    "group"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseDocumentFormFieldInitials;
}
