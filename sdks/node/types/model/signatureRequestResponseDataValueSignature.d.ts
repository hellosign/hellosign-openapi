import { AttributeTypeMap } from "./";
import { SignatureRequestResponseDataBase } from "./signatureRequestResponseDataBase";
export declare class SignatureRequestResponseDataValueSignature extends SignatureRequestResponseDataBase {
    "type"?: string;
    "value"?: string;
    "isSigned"?: boolean | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SignatureRequestResponseDataValueSignature;
}
