import { AttributeTypeMap } from "./";
import { TemplateResponseDocumentFormFieldBase } from "./templateResponseDocumentFormFieldBase";
export declare class TemplateResponseDocumentFormFieldRadio extends TemplateResponseDocumentFormFieldBase {
    "type": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseDocumentFormFieldRadio;
}
