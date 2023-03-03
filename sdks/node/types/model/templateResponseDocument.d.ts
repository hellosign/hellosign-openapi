import { AttributeTypeMap } from "./";
import { TemplateResponseDocumentCustomFieldBase } from "./templateResponseDocumentCustomFieldBase";
import { TemplateResponseDocumentFieldGroup } from "./templateResponseDocumentFieldGroup";
import { TemplateResponseDocumentFormFieldBase } from "./templateResponseDocumentFormFieldBase";
import { TemplateResponseDocumentStaticFieldBase } from "./templateResponseDocumentStaticFieldBase";
export declare class TemplateResponseDocument {
    "name"?: string;
    "index"?: number;
    "fieldGroups"?: Array<TemplateResponseDocumentFieldGroup>;
    "formFields"?: Array<TemplateResponseDocumentFormFieldBase>;
    "customFields"?: Array<TemplateResponseDocumentCustomFieldBase>;
    "staticFields"?: Array<TemplateResponseDocumentStaticFieldBase> | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseDocument;
}
