import { AttributeTypeMap } from "./";
import { SubSignatureRequestSigner } from "./subSignatureRequestSigner";
export declare class SubSignatureRequestGroupedSigners {
    "group": string;
    "signers": Array<SubSignatureRequestSigner>;
    "order"?: number | null;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubSignatureRequestGroupedSigners;
}
