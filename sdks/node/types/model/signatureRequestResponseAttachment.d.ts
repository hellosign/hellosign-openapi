import { AttributeTypeMap } from "./";
export declare class SignatureRequestResponseAttachment {
    "id": string;
    "signer": number | string;
    "name": string;
    "required": boolean;
    "instructions"?: string | null;
    "uploadedAt"?: number | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SignatureRequestResponseAttachment;
}
