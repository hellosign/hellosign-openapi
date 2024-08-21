import { AttributeTypeMap } from "./";
import { FaxLine } from "./faxLine";
import { WarningResponse } from "./warningResponse";
export declare class FaxLineResponse {
    "faxLine"?: FaxLine;
    "warnings"?: WarningResponse;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxLineResponse;
}
