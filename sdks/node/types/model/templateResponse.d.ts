import { AttributeTypeMap } from "./";
import { SignatureRequestResponseAttachment } from "./signatureRequestResponseAttachment";
import { TemplateResponseAccount } from "./templateResponseAccount";
import { TemplateResponseCCRole } from "./templateResponseCCRole";
import { TemplateResponseDocument } from "./templateResponseDocument";
import { TemplateResponseDocumentCustomFieldBase } from "./templateResponseDocumentCustomFieldBase";
import { TemplateResponseDocumentFormFieldBase } from "./templateResponseDocumentFormFieldBase";
import { TemplateResponseSignerRole } from "./templateResponseSignerRole";
export declare class TemplateResponse {
    "templateId"?: string;
    "title"?: string;
    "message"?: string;
    "updatedAt"?: number;
    "isEmbedded"?: boolean | null;
    "isCreator"?: boolean;
    "canEdit"?: boolean;
    "isLocked"?: boolean;
    "metadata"?: {
        [key: string]: any;
    };
    "signerRoles"?: Array<TemplateResponseSignerRole>;
    "ccRoles"?: Array<TemplateResponseCCRole>;
    "documents"?: Array<TemplateResponseDocument>;
    "customFields"?: Array<TemplateResponseDocumentCustomFieldBase> | null;
    "namedFormFields"?: Array<TemplateResponseDocumentFormFieldBase> | null;
    "accounts"?: Array<TemplateResponseAccount>;
    "attachments"?: Array<SignatureRequestResponseAttachment>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponse;
}
