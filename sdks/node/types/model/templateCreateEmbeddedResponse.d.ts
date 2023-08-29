import { AttributeTypeMap } from "./";
import { WarningResponse } from "./warningResponse";
export declare class TemplateCreateEmbeddedResponse {
    "template"?: TemplateCreateEmbeddedResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateCreateEmbeddedResponse;
}
