import { AttributeTypeMap } from "./";
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
    "isCreator"?: boolean | null;
    "canEdit"?: boolean | null;
    "isLocked"?: boolean | null;
    "metadata"?: object;
    "signerRoles"?: Array<TemplateResponseSignerRole>;
    "ccRoles"?: Array<TemplateResponseCCRole>;
    "documents"?: Array<TemplateResponseDocument>;
    "customFields"?: Array<TemplateResponseDocumentCustomFieldBase> | null;
    "namedFormFields"?: Array<TemplateResponseDocumentFormFieldBase> | null;
    "accounts"?: Array<TemplateResponseAccount> | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponse;
}
