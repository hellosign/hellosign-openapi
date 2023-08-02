import { AttributeTypeMap } from "./";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
export declare class SubFormFieldsPerDocumentTextMerge extends SubFormFieldsPerDocumentBase {
    "type": string;
    "fontFamily"?: SubFormFieldsPerDocumentTextMerge.FontFamilyEnum;
    "fontSize"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubFormFieldsPerDocumentTextMerge;
}
export declare namespace SubFormFieldsPerDocumentTextMerge {
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
