import { AttributeTypeMap } from "./";
import { FaxResponseFaxTransmission } from "./faxResponseFaxTransmission";
export declare class FaxResponseFax {
    "faxId"?: string;
    "title"?: string;
    "originalTitle"?: string;
    "subject"?: string;
    "message"?: string;
    "metadata"?: object;
    "createdAt"?: number;
    "from"?: string;
    "transmissions"?: Array<FaxResponseFaxTransmission>;
    "filesUrl"?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxResponseFax;
}
