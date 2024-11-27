import { AttributeTypeMap } from "./";
import { SignatureRequestResponseAttachment } from "./signatureRequestResponseAttachment";
import { SignatureRequestResponseCustomFieldBase } from "./signatureRequestResponseCustomFieldBase";
import { SignatureRequestResponseDataBase } from "./signatureRequestResponseDataBase";
import { SignatureRequestResponseSignatures } from "./signatureRequestResponseSignatures";
export declare class SignatureRequestResponse {
    "testMode"?: boolean;
    "signatureRequestId"?: string;
    "requesterEmailAddress"?: string | null;
    "title"?: string;
    "originalTitle"?: string;
    "subject"?: string | null;
    "message"?: string | null;
    "metadata"?: {
        [key: string]: any;
    };
    "createdAt"?: number;
    "expiresAt"?: number | null;
    "isComplete"?: boolean;
    "isDeclined"?: boolean;
    "hasError"?: boolean;
    "filesUrl"?: string;
    "signingUrl"?: string | null;
    "detailsUrl"?: string;
    "ccEmailAddresses"?: Array<string>;
    "signingRedirectUrl"?: string | null;
    "finalCopyUri"?: string | null;
    "templateIds"?: Array<string> | null;
    "customFields"?: Array<SignatureRequestResponseCustomFieldBase> | null;
    "attachments"?: Array<SignatureRequestResponseAttachment> | null;
    "responseData"?: Array<SignatureRequestResponseDataBase> | null;
    "signatures"?: Array<SignatureRequestResponseSignatures>;
    "bulkSendJobId"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SignatureRequestResponse;
}
