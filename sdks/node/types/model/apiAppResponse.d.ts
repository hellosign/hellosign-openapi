import { AttributeTypeMap } from "./";
import { ApiAppResponseOAuth } from "./apiAppResponseOAuth";
import { ApiAppResponseOptions } from "./apiAppResponseOptions";
import { ApiAppResponseOwnerAccount } from "./apiAppResponseOwnerAccount";
import { ApiAppResponseWhiteLabelingOptions } from "./apiAppResponseWhiteLabelingOptions";
export declare class ApiAppResponse {
    "clientId": string;
    "createdAt": number;
    "domains": Array<string>;
    "name": string;
    "isApproved": boolean;
    "options": ApiAppResponseOptions;
    "ownerAccount": ApiAppResponseOwnerAccount;
    "callbackUrl"?: string | null;
    "oauth"?: ApiAppResponseOAuth | null;
    "whiteLabelingOptions"?: ApiAppResponseWhiteLabelingOptions | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): ApiAppResponse;
}
