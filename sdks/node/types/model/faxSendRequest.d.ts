import { AttributeTypeMap, RequestFile } from "./";
export declare class FaxSendRequest {
    "recipient": string;
    "sender"?: string;
    "files"?: Array<RequestFile>;
    "fileUrls"?: Array<string>;
    "testMode"?: boolean;
    "coverPageTo"?: string;
    "coverPageFrom"?: string;
    "coverPageMessage"?: string;
    "title"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxSendRequest;
}
