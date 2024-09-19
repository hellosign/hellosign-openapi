import { AttributeTypeMap } from "./";
import { FaxResponseFax } from "./faxResponseFax";
import { ListInfoResponse } from "./listInfoResponse";
export declare class FaxListResponse {
    "faxes": Array<FaxResponseFax>;
    "listInfo": ListInfoResponse;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxListResponse;
}
