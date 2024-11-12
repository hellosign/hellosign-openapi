import { AttributeTypeMap } from "./";
import { SignatureRequestResponseDataBase } from "./signatureRequestResponseDataBase";
export declare class SignatureRequestResponseDataValueInitials extends SignatureRequestResponseDataBase {
    "type"?: string;
    "value"?: string;
    "signedAt"?: number | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SignatureRequestResponseDataValueInitials;
}
