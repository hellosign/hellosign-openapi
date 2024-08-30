import { AttributeTypeMap } from "./";
import { ReportResponse } from "./reportResponse";
import { WarningResponse } from "./warningResponse";
export declare class ReportCreateResponse {
    "report": ReportResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): ReportCreateResponse;
}
