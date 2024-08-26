import { AttributeTypeMap } from "./";
export declare class FaxLineCreateRequest {
    "areaCode": number;
    "country": FaxLineCreateRequest.CountryEnum;
    "city"?: string;
    "accountId"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxLineCreateRequest;
}
export declare namespace FaxLineCreateRequest {
    enum CountryEnum {
        Ca = "CA",
        Us = "US",
        Uk = "UK"
    }
}
