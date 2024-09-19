import { AttributeTypeMap } from "./";
import { FaxResponseFax } from "./faxResponseFax";
import { WarningResponse } from "./warningResponse";
export declare class FaxResponse {
    "fax": FaxResponseFax;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxResponse;
}
