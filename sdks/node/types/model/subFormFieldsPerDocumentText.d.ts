import { AttributeTypeMap } from "./";
import { SubFormFieldsPerDocumentBase } from "./subFormFieldsPerDocumentBase";
export declare class SubFormFieldsPerDocumentText extends SubFormFieldsPerDocumentBase {
    "type": string;
    "placeholder"?: string;
    "autoFillType"?: string;
    "linkId"?: string;
    "masked"?: boolean;
    "validationType"?: SubFormFieldsPerDocumentText.ValidationTypeEnum;
    "validationCustomRegex"?: string;
    "validationCustomRegexFormatLabel"?: string;
    "fontFamily"?: SubFormFieldsPerDocumentText.FontFamilyEnum;
    "fontSize"?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): SubFormFieldsPerDocumentText;
}
export declare namespace SubFormFieldsPerDocumentText {
    enum ValidationTypeEnum {
        NumbersOnly = "numbers_only",
        LettersOnly = "letters_only",
        PhoneNumber = "phone_number",
        BankRoutingNumber = "bank_routing_number",
        BankAccountNumber = "bank_account_number",
        EmailAddress = "email_address",
        ZipCode = "zip_code",
        SocialSecurityNumber = "social_security_number",
        EmployerIdentificationNumber = "employer_identification_number",
        CustomRegex = "custom_regex"
    }
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
