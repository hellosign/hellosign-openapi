import { AttributeTypeMap } from "./";
import { FaxResponse } from "./faxResponse";
import { WarningResponse } from "./warningResponse";
export declare class FaxGetResponse {
    "fax": FaxResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxGetResponse;
}
