import { AttributeTypeMap } from "./";
export declare abstract class TemplateResponseDocumentCustomFieldBase {
    "type": string;
    "apiId"?: string;
    "name"?: string;
    "signer"?: string | null;
    "x"?: number;
    "y"?: number;
    "width"?: number;
    "height"?: number;
    "required"?: boolean;
    "group"?: string | null;
    "fontSize"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static discriminatorClassName(value: any): string | null;
}
