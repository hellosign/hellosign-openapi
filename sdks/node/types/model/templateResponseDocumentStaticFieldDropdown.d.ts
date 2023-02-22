import { AttributeTypeMap } from "./models";
import { TemplateResponseDocumentStaticFieldBase } from "./templateResponseDocumentStaticFieldBase";
export declare class TemplateResponseDocumentStaticFieldDropdown extends TemplateResponseDocumentStaticFieldBase {
    "type": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseDocumentStaticFieldDropdown;
}
