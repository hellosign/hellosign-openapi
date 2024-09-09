import { AttributeTypeMap, RequestFile } from "./";
import { SubAttachment } from "./subAttachment";
import { SubFieldOptions } from "./subFieldOptions";
import { SubFormFieldGroup } from "./subFormFieldGroup";
import { SubFormFieldRule } from "./subFormFieldRule";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
import { SubMergeField } from "./subMergeField";
import { SubTemplateRole } from "./subTemplateRole";
export declare class TemplateCreateRequest {
    "formFieldsPerDocument": Array<SubFormFieldsPerDocumentBase>;
    "signerRoles": Array<SubTemplateRole>;
    "files"?: Array<RequestFile>;
    "fileUrls"?: Array<string>;
    "allowReassign"?: boolean;
    "attachments"?: Array<SubAttachment>;
    "ccRoles"?: Array<string>;
    "clientId"?: string;
    "fieldOptions"?: SubFieldOptions;
    "formFieldGroups"?: Array<SubFormFieldGroup>;
    "formFieldRules"?: Array<SubFormFieldRule>;
    "mergeFields"?: Array<SubMergeField>;
    "message"?: string;
    "metadata"?: {
        [key: string]: any;
    };
    "subject"?: string;
    "testMode"?: boolean;
    "title"?: string;
    "usePreexistingFields"?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateCreateRequest;
}
