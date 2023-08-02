import { AttributeTypeMap } from "./";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
export declare class SubFormFieldsPerDocumentHyperlink extends SubFormFieldsPerDocumentBase {
    "type": string;
    "content": string;
    "contentUrl": string;
    "fontFamily"?: SubFormFieldsPerDocumentHyperlink.FontFamilyEnum;
    "fontSize"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubFormFieldsPerDocumentHyperlink;
}
export declare namespace SubFormFieldsPerDocumentHyperlink {
    enum FontFamilyEnum {
        Helvetica = "helvetica",
        Arial = "arial",
        Courier = "courier",
        Calibri = "calibri",
        Cambria = "cambria",
        Georgia = "georgia",
        Times = "times",
        Trebuchet = "trebuchet",
        Verdana = "verdana",
        Roboto = "roboto",
        RobotoMono = "robotoMono",
        NotoSans = "notoSans",
        NotoSerif = "notoSerif",
        NotoCjkJpRegular = "notoCJK-JP-Regular",
        NotoHebrewRegular = "notoHebrew-Regular",
        NotoSanThaiMerged = "notoSanThaiMerged"
    }
}
