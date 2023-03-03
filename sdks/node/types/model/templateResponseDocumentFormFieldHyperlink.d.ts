import { AttributeTypeMap } from "./";
import { TemplateResponseDocumentFormFieldBase } from "./templateResponseDocumentFormFieldBase";
import { TemplateResponseFieldAvgTextLength } from "./templateResponseFieldAvgTextLength";
export declare class TemplateResponseDocumentFormFieldHyperlink extends TemplateResponseDocumentFormFieldBase {
    "type": string;
    "avgTextLength"?: TemplateResponseFieldAvgTextLength;
    "isMultiline"?: boolean;
    "originalFontSize"?: number;
    "fontFamily"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseDocumentFormFieldHyperlink;
}
