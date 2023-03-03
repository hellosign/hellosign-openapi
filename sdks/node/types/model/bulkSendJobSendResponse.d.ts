import { AttributeTypeMap } from "./";
import { BulkSendJobResponse } from "./bulkSendJobResponse";
import { WarningResponse } from "./warningResponse";
export declare class BulkSendJobSendResponse {
    "bulkSendJob"?: BulkSendJobResponse;
    "warnings"?: Array<WarningResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): BulkSendJobSendResponse;
}
