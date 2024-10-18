import { AttributeTypeMap } from "./";
export declare class SignatureRequestResponseSignatures {
    "signatureId"?: string;
    "signerGroupGuid"?: string | null;
    "signerEmailAddress"?: string;
    "signerName"?: string;
    "signerRole"?: string | null;
    "order"?: number | null;
    "statusCode"?: string;
    "declineReason"?: string | null;
    "signedAt"?: number | null;
    "lastViewedAt"?: number | null;
    "lastRemindedAt"?: number | null;
    "hasPin"?: boolean;
    "hasSmsAuth"?: boolean;
    "hasSmsDelivery"?: boolean;
    "smsPhoneNumber"?: string | null;
    "reassignedBy"?: string | null;
    "reassignmentReason"?: string | null;
    "reassignedFrom"?: string | null;
    "error"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SignatureRequestResponseSignatures;
}
