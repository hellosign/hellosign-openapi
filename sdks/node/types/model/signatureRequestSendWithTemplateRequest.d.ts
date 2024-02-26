import { RequestFile, AttributeTypeMap } from "./";
import { SubCC } from "./subCC";
import { SubCertificationTypes } from "./subCertificationTypes";
import { SubCustomField } from "./subCustomField";
import { SubSignatureRequestTemplateSigner } from "./subSignatureRequestTemplateSigner";
import { SubSigningOptions } from "./subSigningOptions";
export declare class SignatureRequestSendWithTemplateRequest {
    "templateIds": Array<string>;
    "signers": Array<SubSignatureRequestTemplateSigner>;
    "allowDecline"?: boolean;
    "ccs"?: Array<SubCC>;
    "clientId"?: string;
    "customFields"?: Array<SubCustomField>;
    "files"?: Array<RequestFile>;
    "fileUrls"?: Array<string>;
    "isQualifiedSignature"?: boolean;
    "isEid"?: boolean;
    "message"?: string;
    "metadata"?: {
        [key: string]: any;
    };
    "signingOptions"?: SubSigningOptions;
    "signingRedirectUrl"?: string;
    "subject"?: string;
    "testMode"?: boolean;
    "title"?: string;
    "certificationTypes"?: SubCertificationTypes;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SignatureRequestSendWithTemplateRequest;
}
