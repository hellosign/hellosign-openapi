import { AttributeTypeMap } from "./";
export declare abstract class SignatureRequestResponseCustomFieldBase {
    "type": string;
    "name": string;
    "required"?: boolean;
    "apiId"?: string;
    "editor"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static discriminatorClassName(value: any): string | null;
}
