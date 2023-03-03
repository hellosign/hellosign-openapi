import { AttributeTypeMap } from "./";
import { TemplateResponseDocumentStaticFieldBase } from "./templateResponseDocumentStaticFieldBase";
export declare class TemplateResponseDocumentStaticFieldText extends TemplateResponseDocumentStaticFieldBase {
    "type": string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseDocumentStaticFieldText;
}
