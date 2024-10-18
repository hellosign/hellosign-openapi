import { AttributeTypeMap } from "./";
export declare abstract class TemplateResponseDocumentFormFieldBase {
    "apiId": string;
    "name": string;
    "type": string;
    "signer": number | string;
    "x": number;
    "y": number;
    "width": number;
    "height": number;
    "required": boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static discriminatorClassName(value: any): string | null;
}
