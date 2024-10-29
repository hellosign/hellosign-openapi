import { AttributeTypeMap } from "./";
import { FaxResponse } from "./faxResponse";
import { ListInfoResponse } from "./listInfoResponse";
export declare class FaxListResponse {
    "faxes": Array<FaxResponse>;
    "listInfo": ListInfoResponse;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxListResponse;
}
