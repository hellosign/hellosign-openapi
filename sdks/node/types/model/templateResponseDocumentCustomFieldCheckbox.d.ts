import { AttributeTypeMap } from "./models";
import { TemplateResponseDocumentCustomFieldBase } from "./templateResponseDocumentCustomFieldBase";
export declare class TemplateResponseDocumentCustomFieldCheckbox extends TemplateResponseDocumentCustomFieldBase {
    "type": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseDocumentCustomFieldCheckbox;
}
