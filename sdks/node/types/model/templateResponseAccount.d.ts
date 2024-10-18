import { AttributeTypeMap } from "./";
import { TemplateResponseAccountQuota } from "./templateResponseAccountQuota";
export declare class TemplateResponseAccount {
    "accountId": string;
    "isLocked": boolean;
    "isPaidHs": boolean;
    "isPaidHf": boolean;
    "quotas": TemplateResponseAccountQuota;
    "emailAddress"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseAccount;
}
