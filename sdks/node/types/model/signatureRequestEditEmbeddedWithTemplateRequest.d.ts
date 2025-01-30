import { AttributeTypeMap, RequestFile } from "./";
import { SubCC } from "./subCC";
import { SubCustomField } from "./subCustomField";
import { SubSignatureRequestTemplateSigner } from "./subSignatureRequestTemplateSigner";
import { SubSigningOptions } from "./subSigningOptions";
export declare class SignatureRequestEditEmbeddedWithTemplateRequest {
    "templateIds": Array<string>;
    "clientId": string;
    "signers": Array<SubSignatureRequestTemplateSigner>;
    "allowDecline"?: boolean;
    "ccs"?: Array<SubCC>;
    "customFields"?: Array<SubCustomField>;
    "files"?: Array<RequestFile>;
    "fileUrls"?: Array<string>;
    "message"?: string;
    "metadata"?: {
        [key: string]: any;
    };
    "signingOptions"?: SubSigningOptions;
    "subject"?: string;
    "testMode"?: boolean;
    "title"?: string;
    "populateAutoFillFields"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SignatureRequestEditEmbeddedWithTemplateRequest;
}
