import { AttributeTypeMap } from "./models";
import { AccountResponse } from "./accountResponse";
export declare class TeamResponse {
    "name"?: string;
    "accounts"?: Array<AccountResponse>;
    "invitedAccounts"?: Array<AccountResponse>;
    "invitedEmails"?: Array<string>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TeamResponse;
}
