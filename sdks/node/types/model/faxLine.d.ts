import { AttributeTypeMap } from "./";
import { AccountResponse } from "./accountResponse";
export declare class FaxLine {
    "number"?: string;
    "createdAt"?: string;
    "updatedAt"?: string;
    "accounts"?: Array<AccountResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxLine;
}
