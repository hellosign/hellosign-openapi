import { AttributeTypeMap } from "./";
export declare class FaxDraftResponse {
    "faxId": string;
    "url": string;
    "expiresAt": number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxDraftResponse;
}
