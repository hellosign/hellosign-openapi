import { AttributeTypeMap } from "./";
import { SignatureRequestResponseDataBase } from "./signatureRequestResponseDataBase";
export declare class SignatureRequestResponseDataValueDateSigned extends SignatureRequestResponseDataBase {
    "type"?: string;
    "value"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SignatureRequestResponseDataValueDateSigned;
}
