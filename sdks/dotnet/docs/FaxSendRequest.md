# Dropbox.Sign.Model.FaxSendRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Recipient** | **string** |  Recipient of the fax  Can be a phone number in E.164 format or email address  | **Sender** | **string** |  Fax Send From Sender (used only with fax number)  | [optional] **Files** | **List&lt;System.IO.Stream&gt;** |  Use `files[]` to indicate the uploaded file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  | [optional] **FileUrls** | **List&lt;string&gt;** |  Use `file_urls[]` to have Dropbox Fax download the file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  | [optional] **TestMode** | **bool** |  API Test Mode Setting  | [optional] [default to false]**CoverPageTo** | **string** |  Fax cover page recipient information  | [optional] **CoverPageFrom** | **string** |  Fax cover page sender information  | [optional] **CoverPageMessage** | **string** |  Fax Cover Page Message  | [optional] **Title** | **string** |  Fax Title  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

