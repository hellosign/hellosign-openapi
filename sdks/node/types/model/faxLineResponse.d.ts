import { AttributeTypeMap } from "./";
import { FaxLineResponseFaxLine } from "./faxLineResponseFaxLine";
import { WarningResponse } from "./warningResponse";
export declare class FaxLineResponse {
    "faxLine": FaxLineResponseFaxLine;
    "warnings"?: WarningResponse;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxLineResponse;
}
