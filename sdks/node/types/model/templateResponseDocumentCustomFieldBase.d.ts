import { AttributeTypeMap } from "./";
export declare abstract class TemplateResponseDocumentCustomFieldBase {
    "apiId": string;
    "name": string;
    "type": string;
    "x": number;
    "y": number;
    "width": number;
    "height": number;
    "required": boolean;
    "signer"?: number | string | null;
    "group"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static discriminatorClassName(value: any): string | null;
}
