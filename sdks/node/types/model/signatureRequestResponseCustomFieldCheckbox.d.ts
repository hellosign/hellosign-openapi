import { AttributeTypeMap } from "./";
import { SignatureRequestResponseCustomFieldBase } from "./signatureRequestResponseCustomFieldBase";
export declare class SignatureRequestResponseCustomFieldCheckbox extends SignatureRequestResponseCustomFieldBase {
    "type": string;
    "value"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SignatureRequestResponseCustomFieldCheckbox;
}
