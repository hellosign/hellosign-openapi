import { AttributeTypeMap } from "./";
import { TemplateResponseDocumentFieldGroupRule } from "./templateResponseDocumentFieldGroupRule";
export declare class TemplateResponseDocumentFieldGroup {
    "name"?: string;
    "rule"?: TemplateResponseDocumentFieldGroupRule;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseDocumentFieldGroup;
}
