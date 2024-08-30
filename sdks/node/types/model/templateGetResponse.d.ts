import { AttributeTypeMap } from "./";
import { TemplateResponse } from "./templateResponse";
import { WarningResponse } from "./warningResponse";
export declare class TemplateGetResponse {
    "template"?: TemplateResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateGetResponse;
}
