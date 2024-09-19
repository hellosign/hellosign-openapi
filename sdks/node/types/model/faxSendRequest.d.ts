import { AttributeTypeMap } from "./";
import { SubFile } from "./subFile";
export declare class FaxSendRequest {
    "to"?: string;
    "from"?: string | null;
    "file"?: Array<SubFile>;
    "fileUrl"?: Array<string>;
    "fileUrlNames"?: Array<string>;
    "testMode"?: boolean;
    "coverPageTo"?: string | null;
    "coverPageFrom"?: string | null;
    "coverPageMessage"?: string | null;
    "title"?: string | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): FaxSendRequest;
}
