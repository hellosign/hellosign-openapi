import { AttributeTypeMap } from "./";
import { TemplateResponseDocumentFormFieldBase } from "./templateResponseDocumentFormFieldBase";
export declare class TemplateResponseDocumentFormFieldDropdown extends TemplateResponseDocumentFormFieldBase {
    "type": string;
    "group"?: string | null;
    "options"?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseDocumentFormFieldDropdown;
}
