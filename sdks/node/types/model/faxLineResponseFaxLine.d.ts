import { AttributeTypeMap } from "./";
import { AccountResponse } from "./accountResponse";
export declare class FaxLineResponseFaxLine {
    "number"?: string;
    "createdAt"?: number;
    "updatedAt"?: number;
    "accounts"?: Array<AccountResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxLineResponseFaxLine;
}
