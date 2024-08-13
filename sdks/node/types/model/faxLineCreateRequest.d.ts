import { AttributeTypeMap } from "./";
import { FaxLineAreaCodeGetCountryEnum } from "./faxLineAreaCodeGetCountryEnum";
export declare class FaxLineCreateRequest {
    "areaCode": string;
    "country": FaxLineAreaCodeGetCountryEnum;
    "city"?: string;
    "accountId"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxLineCreateRequest;
}
