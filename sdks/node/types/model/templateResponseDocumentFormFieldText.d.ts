import { AttributeTypeMap } from "./";
import { TemplateResponseDocumentFormFieldBase } from "./templateResponseDocumentFormFieldBase";
import { TemplateResponseFieldAvgTextLength } from "./templateResponseFieldAvgTextLength";
export declare class TemplateResponseDocumentFormFieldText extends TemplateResponseDocumentFormFieldBase {
    "type": string;
    "avgTextLength"?: TemplateResponseFieldAvgTextLength;
    "isMultiline"?: boolean;
    "originalFontSize"?: number;
    "fontFamily"?: string;
    "validationType"?: TemplateResponseDocumentFormFieldText.ValidationTypeEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: AttributeTypeMap;
    static getAttributeTypeMap(): AttributeTypeMap;
    static init(data: any): TemplateResponseDocumentFormFieldText;
}
export declare namespace TemplateResponseDocumentFormFieldText {
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
}
