import { AttributeTypeMap } from "./";
import { FaxLineResponse } from "./faxLineResponse";
import { ListInfoResponse } from "./listInfoResponse";
import { WarningResponse } from "./warningResponse";
export declare class FaxLineListResponse {
    "listInfo"?: ListInfoResponse;
    "faxLines"?: Array<FaxLineResponse>;
    "warnings"?: WarningResponse;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxLineListResponse;
}
