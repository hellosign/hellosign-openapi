import { AttributeTypeMap } from "./";
export declare abstract class TemplateResponseDocumentStaticFieldBase {
    "type": string;
    "apiId"?: string;
    "name"?: string;
    "signer"?: string;
    "x"?: number;
    "y"?: number;
    "width"?: number;
    "height"?: number;
    "required"?: boolean;
    "group"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static discriminatorClassName(value: any): string | null;
}
