import { AttributeTypeMap } from "./";
export declare class FaxResponseTransmission {
    "recipient": string;
    "statusCode": FaxResponseTransmission.StatusCodeEnum;
    "sentAt"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxResponseTransmission;
}
export declare namespace FaxResponseTransmission {
    enum StatusCodeEnum {
        Success = "success",
        Transmitting = "transmitting",
        ErrorCouldNotFax = "error_could_not_fax",
        ErrorUnknown = "error_unknown",
        ErrorBusy = "error_busy",
        ErrorNoAnswer = "error_no_answer",
        ErrorDisconnected = "error_disconnected",
        ErrorBadDestination = "error_bad_destination"
    }
}
