import { AttributeTypeMap } from "./";
import { AccountResponse } from "./accountResponse";
import { WarningResponse } from "./warningResponse";
export declare class AccountGetResponse {
    "account": AccountResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): AccountGetResponse;
}
