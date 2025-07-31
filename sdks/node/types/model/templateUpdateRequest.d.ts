import { AttributeTypeMap } from "./";
import { SubUpdateFormField } from "./subUpdateFormField";
export declare class TemplateUpdateRequest {
    "ccRoles"?: Array<string>;
    "allowFormView"?: boolean;
    "title"?: string;
    "subject"?: string;
    "message"?: string;
    "formFields"?: Array<SubUpdateFormField>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateUpdateRequest;
}
