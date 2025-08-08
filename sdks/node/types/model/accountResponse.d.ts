import { AttributeTypeMap } from "./";
import { AccountResponseQuotas } from "./accountResponseQuotas";
import { AccountResponseSettings } from "./accountResponseSettings";
import { AccountResponseUsage } from "./accountResponseUsage";
export declare class AccountResponse {
    "accountId"?: string;
    "emailAddress"?: string;
    "isLocked"?: boolean;
    "isPaidHs"?: boolean;
    "isPaidHf"?: boolean;
    "quotas"?: AccountResponseQuotas;
    "callbackUrl"?: string | null;
    "roleCode"?: string | null;
    "teamId"?: string | null;
    "locale"?: string | null;
    "usage"?: AccountResponseUsage;
    "settings"?: AccountResponseSettings;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): AccountResponse;
}
