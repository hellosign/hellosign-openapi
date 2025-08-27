import { AttributeTypeMap } from "./";
import { SubSignerExperience } from "./subSignerExperience";
import { SubUpdateFormField } from "./subUpdateFormField";
export declare class TemplateUpdateRequest {
    "ccRoles"?: Array<string>;
    "title"?: string;
    "subject"?: string;
    "message"?: string;
    "formFields"?: Array<SubUpdateFormField>;
    "signerExperience"?: SubSignerExperience;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateUpdateRequest;
}
