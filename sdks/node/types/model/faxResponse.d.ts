import { AttributeTypeMap } from "./";
import { FaxResponseTransmission } from "./faxResponseTransmission";
export declare class FaxResponse {
    "faxId"?: string;
    "title"?: string;
    "originalTitle"?: string;
    "subject"?: string;
    "message"?: string;
    "metadata"?: object;
    "createdAt"?: number;
    "from"?: string;
    "transmissions"?: Array<FaxResponseTransmission>;
    "filesUrl"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxResponse;
}
