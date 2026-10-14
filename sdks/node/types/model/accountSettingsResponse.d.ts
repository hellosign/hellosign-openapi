import { AttributeTypeMap } from "./";
import { AccountSettingsResponseSettings } from "./accountSettingsResponseSettings";
import { WarningResponse } from "./warningResponse";
export declare class AccountSettingsResponse {
    "accountId": string;
    "settings": AccountSettingsResponseSettings;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): AccountSettingsResponse;
}
