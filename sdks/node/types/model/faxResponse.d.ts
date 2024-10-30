import { AttributeTypeMap } from "./";
import { FaxResponseTransmission } from "./faxResponseTransmission";
export declare class FaxResponse {
    "faxId": string;
    "title": string;
    "originalTitle": string;
    "metadata": {
        [key: string]: any;
    };
    "createdAt": number;
    "sender": string;
    "filesUrl": string;
    "transmissions": Array<FaxResponseTransmission>;
    "subject"?: string | null;
    "message"?: string | null;
    "finalCopyUri"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxResponse;
}
