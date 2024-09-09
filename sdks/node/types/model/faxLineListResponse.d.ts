import { AttributeTypeMap } from "./";
import { FaxLineResponseFaxLine } from "./faxLineResponseFaxLine";
import { ListInfoResponse } from "./listInfoResponse";
import { WarningResponse } from "./warningResponse";
export declare class FaxLineListResponse {
    "listInfo": ListInfoResponse;
    "faxLines": Array<FaxLineResponseFaxLine>;
    "warnings"?: WarningResponse;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxLineListResponse;
}
