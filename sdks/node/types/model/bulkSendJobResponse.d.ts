import { AttributeTypeMap } from "./";
export declare class BulkSendJobResponse {
    "bulkSendJobId": string;
    "total": number;
    "isCreator": boolean;
    "createdAt": number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): BulkSendJobResponse;
}
