import { AttributeTypeMap } from "./";
import { TemplateCreateResponseTemplate } from "./templateCreateResponseTemplate";
import { WarningResponse } from "./warningResponse";
export declare class TemplateCreateResponse {
    "template": TemplateCreateResponseTemplate;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateCreateResponse;
}
