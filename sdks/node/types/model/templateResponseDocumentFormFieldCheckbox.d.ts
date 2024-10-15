import { AttributeTypeMap } from "./";
import { TemplateResponseDocumentFormFieldBase } from "./templateResponseDocumentFormFieldBase";
export declare class TemplateResponseDocumentFormFieldCheckbox extends TemplateResponseDocumentFormFieldBase {
    "type": string;
    "group"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseDocumentFormFieldCheckbox;
}
