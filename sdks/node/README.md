# @dropbox/sign

Dropbox Sign v3 API


## Migrating from legacy SDK

This SDK is generated from our officially maintained [OpenAPI spec](https://github.com/hellosign/hellosign-openapi/blob/main/openapi.yaml).
We've made important updates that introduce new functionality and create feature parity between the Dropbox Sign API and the SDK.
However, some of these changes are considered "breaking" in the sense that they'll require you to update your existing code in order to continue using the SDK.
Please refer to this [migration guide](https://developers.hellosign.com/docs/sdks/node/migration-guide/) for more information.

## Contributing

This repo is no longer accepting new issues or Pull Requests. All issues or
Pull Requests *must* be opened against the
[hellosign/hellosign-openapi](https://github.com/hellosign/hellosign-openapi) repo!

### Changes to the SDK code

You must make SDK code changes in the mustache file within the `templates`
directory that corresponds to the file you want updated.

## Installation & Usage

### From NPM Package

```
npm install @dropbox/sign
```

### From Repo

* Clone this repo locally
* Run `npm pack`
* The generated file will be named similar to `dropbox-sign-1.0.0.tgz`
* Move this file to your project directory
* Add the following to your project's `package.json` under `dependencies`:
* `"@dropbox/sign": "file:dropbox-sign-1.0.0.tgz"`
* Run `npm install`

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:


### TypeScript Example

```typescript
import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const accountCreateRequest: models.AccountCreateRequest = {
  emailAddress: "newuser@dropboxsign.com",
};

apiCaller.accountCreate(
  accountCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling AccountApi#accountCreate:");
  console.log(error.body);
});


```



## API Endpoints

All URIs are relative to *https://api.hellosign.com/v3*

| Class      | Method        | HTTP request  | Description   |
| ---------- | ------------- | ------------- | ------------- |
| *AccountApi* | [**accountCreate**](./docs/api/AccountApi.md#accountcreate) | **POST** /account/create | Create Account |
| *AccountApi* | [**accountGet**](./docs/api/AccountApi.md#accountget) | **GET** /account | Get Account |
| *AccountApi* | [**accountUpdate**](./docs/api/AccountApi.md#accountupdate) | **PUT** /account | Update Account |
| *AccountApi* | [**accountVerify**](./docs/api/AccountApi.md#accountverify) | **POST** /account/verify | Verify Account |
| *ApiAppApi* | [**apiAppCreate**](./docs/api/ApiAppApi.md#apiappcreate) | **POST** /api_app | Create API App |
| *ApiAppApi* | [**apiAppDelete**](./docs/api/ApiAppApi.md#apiappdelete) | **DELETE** /api_app/{client_id} | Delete API App |
| *ApiAppApi* | [**apiAppGet**](./docs/api/ApiAppApi.md#apiappget) | **GET** /api_app/{client_id} | Get API App |
| *ApiAppApi* | [**apiAppList**](./docs/api/ApiAppApi.md#apiapplist) | **GET** /api_app/list | List API Apps |
| *ApiAppApi* | [**apiAppUpdate**](./docs/api/ApiAppApi.md#apiappupdate) | **PUT** /api_app/{client_id} | Update API App |
| *BulkSendJobApi* | [**bulkSendJobGet**](./docs/api/BulkSendJobApi.md#bulksendjobget) | **GET** /bulk_send_job/{bulk_send_job_id} | Get Bulk Send Job |
| *BulkSendJobApi* | [**bulkSendJobList**](./docs/api/BulkSendJobApi.md#bulksendjoblist) | **GET** /bulk_send_job/list | List Bulk Send Jobs |
| *EmbeddedApi* | [**embeddedEditUrl**](./docs/api/EmbeddedApi.md#embeddedediturl) | **POST** /embedded/edit_url/{template_id} | Get Embedded Template Edit URL |
| *EmbeddedApi* | [**embeddedSignUrl**](./docs/api/EmbeddedApi.md#embeddedsignurl) | **GET** /embedded/sign_url/{signature_id} | Get Embedded Sign URL |
| *FaxApi* | [**faxDelete**](./docs/api/FaxApi.md#faxdelete) | **DELETE** /fax/{fax_id} | Delete Fax |
| *FaxApi* | [**faxFiles**](./docs/api/FaxApi.md#faxfiles) | **GET** /fax/files/{fax_id} | Download Fax Files |
| *FaxApi* | [**faxGet**](./docs/api/FaxApi.md#faxget) | **GET** /fax/{fax_id} | Get Fax |
| *FaxApi* | [**faxList**](./docs/api/FaxApi.md#faxlist) | **GET** /fax/list | Lists Faxes |
| *FaxApi* | [**faxSend**](./docs/api/FaxApi.md#faxsend) | **POST** /fax/send | Send Fax |
| *FaxLineApi* | [**faxLineAddUser**](./docs/api/FaxLineApi.md#faxlineadduser) | **PUT** /fax_line/add_user | Add Fax Line User |
| *FaxLineApi* | [**faxLineAreaCodeGet**](./docs/api/FaxLineApi.md#faxlineareacodeget) | **GET** /fax_line/area_codes | Get Available Fax Line Area Codes |
| *FaxLineApi* | [**faxLineCreate**](./docs/api/FaxLineApi.md#faxlinecreate) | **POST** /fax_line/create | Purchase Fax Line |
| *FaxLineApi* | [**faxLineDelete**](./docs/api/FaxLineApi.md#faxlinedelete) | **DELETE** /fax_line | Delete Fax Line |
| *FaxLineApi* | [**faxLineGet**](./docs/api/FaxLineApi.md#faxlineget) | **GET** /fax_line | Get Fax Line |
| *FaxLineApi* | [**faxLineList**](./docs/api/FaxLineApi.md#faxlinelist) | **GET** /fax_line/list | List Fax Lines |
| *FaxLineApi* | [**faxLineRemoveUser**](./docs/api/FaxLineApi.md#faxlineremoveuser) | **PUT** /fax_line/remove_user | Remove Fax Line Access |
| *OAuthApi* | [**oauthTokenGenerate**](./docs/api/OAuthApi.md#oauthtokengenerate) | **POST** /oauth/token | OAuth Token Generate |
| *OAuthApi* | [**oauthTokenRefresh**](./docs/api/OAuthApi.md#oauthtokenrefresh) | **POST** /oauth/token?refresh | OAuth Token Refresh |
| *ReportApi* | [**reportCreate**](./docs/api/ReportApi.md#reportcreate) | **POST** /report/create | Create Report |
| *SignatureRequestApi* | [**signatureRequestBulkCreateEmbeddedWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequestbulkcreateembeddedwithtemplate) | **POST** /signature_request/bulk_create_embedded_with_template | Embedded Bulk Send with Template |
| *SignatureRequestApi* | [**signatureRequestBulkSendWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequestbulksendwithtemplate) | **POST** /signature_request/bulk_send_with_template | Bulk Send with Template |
| *SignatureRequestApi* | [**signatureRequestCancel**](./docs/api/SignatureRequestApi.md#signaturerequestcancel) | **POST** /signature_request/cancel/{signature_request_id} | Cancel Incomplete Signature Request |
| *SignatureRequestApi* | [**signatureRequestCreateEmbedded**](./docs/api/SignatureRequestApi.md#signaturerequestcreateembedded) | **POST** /signature_request/create_embedded | Create Embedded Signature Request |
| *SignatureRequestApi* | [**signatureRequestCreateEmbeddedWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequestcreateembeddedwithtemplate) | **POST** /signature_request/create_embedded_with_template | Create Embedded Signature Request with Template |
| *SignatureRequestApi* | [**signatureRequestEdit**](./docs/api/SignatureRequestApi.md#signaturerequestedit) | **PUT** /signature_request/edit/{signature_request_id} | Edit Signature Request |
| *SignatureRequestApi* | [**signatureRequestEditEmbedded**](./docs/api/SignatureRequestApi.md#signaturerequesteditembedded) | **PUT** /signature_request/edit_embedded/{signature_request_id} | Edit Embedded Signature Request |
| *SignatureRequestApi* | [**signatureRequestEditEmbeddedWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequesteditembeddedwithtemplate) | **PUT** /signature_request/edit_embedded_with_template/{signature_request_id} | Edit Embedded Signature Request with Template |
| *SignatureRequestApi* | [**signatureRequestEditWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequesteditwithtemplate) | **PUT** /signature_request/edit_with_template/{signature_request_id} | Edit Signature Request With Template |
| *SignatureRequestApi* | [**signatureRequestFiles**](./docs/api/SignatureRequestApi.md#signaturerequestfiles) | **GET** /signature_request/files/{signature_request_id} | Download Files |
| *SignatureRequestApi* | [**signatureRequestFilesAsDataUri**](./docs/api/SignatureRequestApi.md#signaturerequestfilesasdatauri) | **GET** /signature_request/files_as_data_uri/{signature_request_id} | Download Files as Data Uri |
| *SignatureRequestApi* | [**signatureRequestFilesAsFileUrl**](./docs/api/SignatureRequestApi.md#signaturerequestfilesasfileurl) | **GET** /signature_request/files_as_file_url/{signature_request_id} | Download Files as File Url |
| *SignatureRequestApi* | [**signatureRequestGet**](./docs/api/SignatureRequestApi.md#signaturerequestget) | **GET** /signature_request/{signature_request_id} | Get Signature Request |
| *SignatureRequestApi* | [**signatureRequestList**](./docs/api/SignatureRequestApi.md#signaturerequestlist) | **GET** /signature_request/list | List Signature Requests |
| *SignatureRequestApi* | [**signatureRequestReleaseHold**](./docs/api/SignatureRequestApi.md#signaturerequestreleasehold) | **POST** /signature_request/release_hold/{signature_request_id} | Release On-Hold Signature Request |
| *SignatureRequestApi* | [**signatureRequestRemind**](./docs/api/SignatureRequestApi.md#signaturerequestremind) | **POST** /signature_request/remind/{signature_request_id} | Send Request Reminder |
| *SignatureRequestApi* | [**signatureRequestRemove**](./docs/api/SignatureRequestApi.md#signaturerequestremove) | **POST** /signature_request/remove/{signature_request_id} | Remove Signature Request Access |
| *SignatureRequestApi* | [**signatureRequestSend**](./docs/api/SignatureRequestApi.md#signaturerequestsend) | **POST** /signature_request/send | Send Signature Request |
| *SignatureRequestApi* | [**signatureRequestSendWithTemplate**](./docs/api/SignatureRequestApi.md#signaturerequestsendwithtemplate) | **POST** /signature_request/send_with_template | Send with Template |
| *SignatureRequestApi* | [**signatureRequestUpdate**](./docs/api/SignatureRequestApi.md#signaturerequestupdate) | **POST** /signature_request/update/{signature_request_id} | Update Signature Request |
| *TeamApi* | [**teamAddMember**](./docs/api/TeamApi.md#teamaddmember) | **PUT** /team/add_member | Add User to Team |
| *TeamApi* | [**teamCreate**](./docs/api/TeamApi.md#teamcreate) | **POST** /team/create | Create Team |
| *TeamApi* | [**teamDelete**](./docs/api/TeamApi.md#teamdelete) | **DELETE** /team/destroy | Delete Team |
| *TeamApi* | [**teamGet**](./docs/api/TeamApi.md#teamget) | **GET** /team | Get Team |
| *TeamApi* | [**teamInfo**](./docs/api/TeamApi.md#teaminfo) | **GET** /team/info | Get Team Info |
| *TeamApi* | [**teamInvites**](./docs/api/TeamApi.md#teaminvites) | **GET** /team/invites | List Team Invites |
| *TeamApi* | [**teamMembers**](./docs/api/TeamApi.md#teammembers) | **GET** /team/members/{team_id} | List Team Members |
| *TeamApi* | [**teamRemoveMember**](./docs/api/TeamApi.md#teamremovemember) | **POST** /team/remove_member | Remove User from Team |
| *TeamApi* | [**teamSubTeams**](./docs/api/TeamApi.md#teamsubteams) | **GET** /team/sub_teams/{team_id} | List Sub Teams |
| *TeamApi* | [**teamUpdate**](./docs/api/TeamApi.md#teamupdate) | **PUT** /team | Update Team |
| *TemplateApi* | [**templateAddUser**](./docs/api/TemplateApi.md#templateadduser) | **POST** /template/add_user/{template_id} | Add User to Template |
| *TemplateApi* | [**templateCreate**](./docs/api/TemplateApi.md#templatecreate) | **POST** /template/create | Create Template |
| *TemplateApi* | [**templateCreateEmbeddedDraft**](./docs/api/TemplateApi.md#templatecreateembeddeddraft) | **POST** /template/create_embedded_draft | Create Embedded Template Draft |
| *TemplateApi* | [**templateDelete**](./docs/api/TemplateApi.md#templatedelete) | **POST** /template/delete/{template_id} | Delete Template |
| *TemplateApi* | [**templateFiles**](./docs/api/TemplateApi.md#templatefiles) | **GET** /template/files/{template_id} | Get Template Files |
| *TemplateApi* | [**templateFilesAsDataUri**](./docs/api/TemplateApi.md#templatefilesasdatauri) | **GET** /template/files_as_data_uri/{template_id} | Get Template Files as Data Uri |
| *TemplateApi* | [**templateFilesAsFileUrl**](./docs/api/TemplateApi.md#templatefilesasfileurl) | **GET** /template/files_as_file_url/{template_id} | Get Template Files as File Url |
| *TemplateApi* | [**templateGet**](./docs/api/TemplateApi.md#templateget) | **GET** /template/{template_id} | Get Template |
| *TemplateApi* | [**templateList**](./docs/api/TemplateApi.md#templatelist) | **GET** /template/list | List Templates |
| *TemplateApi* | [**templateRemoveUser**](./docs/api/TemplateApi.md#templateremoveuser) | **POST** /template/remove_user/{template_id} | Remove User from Template |
| *TemplateApi* | [**templateUpdateFiles**](./docs/api/TemplateApi.md#templateupdatefiles) | **POST** /template/update_files/{template_id} | Update Template Files |
| *UnclaimedDraftApi* | [**unclaimedDraftCreate**](./docs/api/UnclaimedDraftApi.md#unclaimeddraftcreate) | **POST** /unclaimed_draft/create | Create Unclaimed Draft |
| *UnclaimedDraftApi* | [**unclaimedDraftCreateEmbedded**](./docs/api/UnclaimedDraftApi.md#unclaimeddraftcreateembedded) | **POST** /unclaimed_draft/create_embedded | Create Embedded Unclaimed Draft |
| *UnclaimedDraftApi* | [**unclaimedDraftCreateEmbeddedWithTemplate**](./docs/api/UnclaimedDraftApi.md#unclaimeddraftcreateembeddedwithtemplate) | **POST** /unclaimed_draft/create_embedded_with_template | Create Embedded Unclaimed Draft with Template |
| *UnclaimedDraftApi* | [**unclaimedDraftEditAndResend**](./docs/api/UnclaimedDraftApi.md#unclaimeddrafteditandresend) | **POST** /unclaimed_draft/edit_and_resend/{signature_request_id} | Edit and Resend Unclaimed Draft |

## Models

- [AccountCreateRequest](./docs/model/AccountCreateRequest.md)
- [AccountCreateResponse](./docs/model/AccountCreateResponse.md)
- [AccountGetResponse](./docs/model/AccountGetResponse.md)
- [AccountResponse](./docs/model/AccountResponse.md)
- [AccountResponseQuotas](./docs/model/AccountResponseQuotas.md)
- [AccountResponseUsage](./docs/model/AccountResponseUsage.md)
- [AccountUpdateRequest](./docs/model/AccountUpdateRequest.md)
- [AccountVerifyRequest](./docs/model/AccountVerifyRequest.md)
- [AccountVerifyResponse](./docs/model/AccountVerifyResponse.md)
- [AccountVerifyResponseAccount](./docs/model/AccountVerifyResponseAccount.md)
- [ApiAppCreateRequest](./docs/model/ApiAppCreateRequest.md)
- [ApiAppGetResponse](./docs/model/ApiAppGetResponse.md)
- [ApiAppListResponse](./docs/model/ApiAppListResponse.md)
- [ApiAppResponse](./docs/model/ApiAppResponse.md)
- [ApiAppResponseOAuth](./docs/model/ApiAppResponseOAuth.md)
- [ApiAppResponseOptions](./docs/model/ApiAppResponseOptions.md)
- [ApiAppResponseOwnerAccount](./docs/model/ApiAppResponseOwnerAccount.md)
- [ApiAppResponseWhiteLabelingOptions](./docs/model/ApiAppResponseWhiteLabelingOptions.md)
- [ApiAppUpdateRequest](./docs/model/ApiAppUpdateRequest.md)
- [BulkSendJobGetResponse](./docs/model/BulkSendJobGetResponse.md)
- [BulkSendJobGetResponseSignatureRequests](./docs/model/BulkSendJobGetResponseSignatureRequests.md)
- [BulkSendJobListResponse](./docs/model/BulkSendJobListResponse.md)
- [BulkSendJobResponse](./docs/model/BulkSendJobResponse.md)
- [BulkSendJobSendResponse](./docs/model/BulkSendJobSendResponse.md)
- [EmbeddedEditUrlRequest](./docs/model/EmbeddedEditUrlRequest.md)
- [EmbeddedEditUrlResponse](./docs/model/EmbeddedEditUrlResponse.md)
- [EmbeddedEditUrlResponseEmbedded](./docs/model/EmbeddedEditUrlResponseEmbedded.md)
- [EmbeddedSignUrlResponse](./docs/model/EmbeddedSignUrlResponse.md)
- [EmbeddedSignUrlResponseEmbedded](./docs/model/EmbeddedSignUrlResponseEmbedded.md)
- [ErrorResponse](./docs/model/ErrorResponse.md)
- [ErrorResponseError](./docs/model/ErrorResponseError.md)
- [EventCallbackRequest](./docs/model/EventCallbackRequest.md)
- [EventCallbackRequestEvent](./docs/model/EventCallbackRequestEvent.md)
- [EventCallbackRequestEventMetadata](./docs/model/EventCallbackRequestEventMetadata.md)
- [FaxGetResponse](./docs/model/FaxGetResponse.md)
- [FaxLineAddUserRequest](./docs/model/FaxLineAddUserRequest.md)
- [FaxLineAreaCodeGetCountryEnum](./docs/model/FaxLineAreaCodeGetCountryEnum.md)
- [FaxLineAreaCodeGetProvinceEnum](./docs/model/FaxLineAreaCodeGetProvinceEnum.md)
- [FaxLineAreaCodeGetResponse](./docs/model/FaxLineAreaCodeGetResponse.md)
- [FaxLineAreaCodeGetStateEnum](./docs/model/FaxLineAreaCodeGetStateEnum.md)
- [FaxLineCreateRequest](./docs/model/FaxLineCreateRequest.md)
- [FaxLineDeleteRequest](./docs/model/FaxLineDeleteRequest.md)
- [FaxLineListResponse](./docs/model/FaxLineListResponse.md)
- [FaxLineRemoveUserRequest](./docs/model/FaxLineRemoveUserRequest.md)
- [FaxLineResponse](./docs/model/FaxLineResponse.md)
- [FaxLineResponseFaxLine](./docs/model/FaxLineResponseFaxLine.md)
- [FaxListResponse](./docs/model/FaxListResponse.md)
- [FaxResponse](./docs/model/FaxResponse.md)
- [FaxResponseTransmission](./docs/model/FaxResponseTransmission.md)
- [FaxSendRequest](./docs/model/FaxSendRequest.md)
- [FileResponse](./docs/model/FileResponse.md)
- [FileResponseDataUri](./docs/model/FileResponseDataUri.md)
- [ListInfoResponse](./docs/model/ListInfoResponse.md)
- [OAuthTokenGenerateRequest](./docs/model/OAuthTokenGenerateRequest.md)
- [OAuthTokenRefreshRequest](./docs/model/OAuthTokenRefreshRequest.md)
- [OAuthTokenResponse](./docs/model/OAuthTokenResponse.md)
- [ReportCreateRequest](./docs/model/ReportCreateRequest.md)
- [ReportCreateResponse](./docs/model/ReportCreateResponse.md)
- [ReportResponse](./docs/model/ReportResponse.md)
- [SignatureRequestBulkCreateEmbeddedWithTemplateRequest](./docs/model/SignatureRequestBulkCreateEmbeddedWithTemplateRequest.md)
- [SignatureRequestBulkSendWithTemplateRequest](./docs/model/SignatureRequestBulkSendWithTemplateRequest.md)
- [SignatureRequestCreateEmbeddedRequest](./docs/model/SignatureRequestCreateEmbeddedRequest.md)
- [SignatureRequestCreateEmbeddedWithTemplateRequest](./docs/model/SignatureRequestCreateEmbeddedWithTemplateRequest.md)
- [SignatureRequestEditEmbeddedRequest](./docs/model/SignatureRequestEditEmbeddedRequest.md)
- [SignatureRequestEditEmbeddedWithTemplateRequest](./docs/model/SignatureRequestEditEmbeddedWithTemplateRequest.md)
- [SignatureRequestEditRequest](./docs/model/SignatureRequestEditRequest.md)
- [SignatureRequestEditWithTemplateRequest](./docs/model/SignatureRequestEditWithTemplateRequest.md)
- [SignatureRequestGetResponse](./docs/model/SignatureRequestGetResponse.md)
- [SignatureRequestListResponse](./docs/model/SignatureRequestListResponse.md)
- [SignatureRequestRemindRequest](./docs/model/SignatureRequestRemindRequest.md)
- [SignatureRequestResponse](./docs/model/SignatureRequestResponse.md)
- [SignatureRequestResponseAttachment](./docs/model/SignatureRequestResponseAttachment.md)
- [SignatureRequestResponseCustomFieldBase](./docs/model/SignatureRequestResponseCustomFieldBase.md)
- [SignatureRequestResponseCustomFieldCheckbox](./docs/model/SignatureRequestResponseCustomFieldCheckbox.md)
- [SignatureRequestResponseCustomFieldText](./docs/model/SignatureRequestResponseCustomFieldText.md)
- [SignatureRequestResponseCustomFieldTypeEnum](./docs/model/SignatureRequestResponseCustomFieldTypeEnum.md)
- [SignatureRequestResponseDataBase](./docs/model/SignatureRequestResponseDataBase.md)
- [SignatureRequestResponseDataTypeEnum](./docs/model/SignatureRequestResponseDataTypeEnum.md)
- [SignatureRequestResponseDataValueCheckbox](./docs/model/SignatureRequestResponseDataValueCheckbox.md)
- [SignatureRequestResponseDataValueCheckboxMerge](./docs/model/SignatureRequestResponseDataValueCheckboxMerge.md)
- [SignatureRequestResponseDataValueDateSigned](./docs/model/SignatureRequestResponseDataValueDateSigned.md)
- [SignatureRequestResponseDataValueDropdown](./docs/model/SignatureRequestResponseDataValueDropdown.md)
- [SignatureRequestResponseDataValueInitials](./docs/model/SignatureRequestResponseDataValueInitials.md)
- [SignatureRequestResponseDataValueRadio](./docs/model/SignatureRequestResponseDataValueRadio.md)
- [SignatureRequestResponseDataValueSignature](./docs/model/SignatureRequestResponseDataValueSignature.md)
- [SignatureRequestResponseDataValueText](./docs/model/SignatureRequestResponseDataValueText.md)
- [SignatureRequestResponseDataValueTextMerge](./docs/model/SignatureRequestResponseDataValueTextMerge.md)
- [SignatureRequestResponseSignatures](./docs/model/SignatureRequestResponseSignatures.md)
- [SignatureRequestSendRequest](./docs/model/SignatureRequestSendRequest.md)
- [SignatureRequestSendWithTemplateRequest](./docs/model/SignatureRequestSendWithTemplateRequest.md)
- [SignatureRequestUpdateRequest](./docs/model/SignatureRequestUpdateRequest.md)
- [SubAttachment](./docs/model/SubAttachment.md)
- [SubBulkSignerList](./docs/model/SubBulkSignerList.md)
- [SubBulkSignerListCustomField](./docs/model/SubBulkSignerListCustomField.md)
- [SubCC](./docs/model/SubCC.md)
- [SubCustomField](./docs/model/SubCustomField.md)
- [SubEditorOptions](./docs/model/SubEditorOptions.md)
- [SubFieldOptions](./docs/model/SubFieldOptions.md)
- [SubFormFieldGroup](./docs/model/SubFormFieldGroup.md)
- [SubFormFieldRule](./docs/model/SubFormFieldRule.md)
- [SubFormFieldRuleAction](./docs/model/SubFormFieldRuleAction.md)
- [SubFormFieldRuleTrigger](./docs/model/SubFormFieldRuleTrigger.md)
- [SubFormFieldsPerDocumentBase](./docs/model/SubFormFieldsPerDocumentBase.md)
- [SubFormFieldsPerDocumentCheckbox](./docs/model/SubFormFieldsPerDocumentCheckbox.md)
- [SubFormFieldsPerDocumentCheckboxMerge](./docs/model/SubFormFieldsPerDocumentCheckboxMerge.md)
- [SubFormFieldsPerDocumentDateSigned](./docs/model/SubFormFieldsPerDocumentDateSigned.md)
- [SubFormFieldsPerDocumentDropdown](./docs/model/SubFormFieldsPerDocumentDropdown.md)
- [SubFormFieldsPerDocumentFontEnum](./docs/model/SubFormFieldsPerDocumentFontEnum.md)
- [SubFormFieldsPerDocumentHyperlink](./docs/model/SubFormFieldsPerDocumentHyperlink.md)
- [SubFormFieldsPerDocumentInitials](./docs/model/SubFormFieldsPerDocumentInitials.md)
- [SubFormFieldsPerDocumentRadio](./docs/model/SubFormFieldsPerDocumentRadio.md)
- [SubFormFieldsPerDocumentSignature](./docs/model/SubFormFieldsPerDocumentSignature.md)
- [SubFormFieldsPerDocumentText](./docs/model/SubFormFieldsPerDocumentText.md)
- [SubFormFieldsPerDocumentTextMerge](./docs/model/SubFormFieldsPerDocumentTextMerge.md)
- [SubFormFieldsPerDocumentTypeEnum](./docs/model/SubFormFieldsPerDocumentTypeEnum.md)
- [SubMergeField](./docs/model/SubMergeField.md)
- [SubOAuth](./docs/model/SubOAuth.md)
- [SubOptions](./docs/model/SubOptions.md)
- [SubSignatureRequestGroupedSigners](./docs/model/SubSignatureRequestGroupedSigners.md)
- [SubSignatureRequestSigner](./docs/model/SubSignatureRequestSigner.md)
- [SubSignatureRequestTemplateSigner](./docs/model/SubSignatureRequestTemplateSigner.md)
- [SubSigningOptions](./docs/model/SubSigningOptions.md)
- [SubTeamResponse](./docs/model/SubTeamResponse.md)
- [SubTemplateRole](./docs/model/SubTemplateRole.md)
- [SubUnclaimedDraftSigner](./docs/model/SubUnclaimedDraftSigner.md)
- [SubUnclaimedDraftTemplateSigner](./docs/model/SubUnclaimedDraftTemplateSigner.md)
- [SubWhiteLabelingOptions](./docs/model/SubWhiteLabelingOptions.md)
- [TeamAddMemberRequest](./docs/model/TeamAddMemberRequest.md)
- [TeamCreateRequest](./docs/model/TeamCreateRequest.md)
- [TeamGetInfoResponse](./docs/model/TeamGetInfoResponse.md)
- [TeamGetResponse](./docs/model/TeamGetResponse.md)
- [TeamInfoResponse](./docs/model/TeamInfoResponse.md)
- [TeamInviteResponse](./docs/model/TeamInviteResponse.md)
- [TeamInvitesResponse](./docs/model/TeamInvitesResponse.md)
- [TeamMemberResponse](./docs/model/TeamMemberResponse.md)
- [TeamMembersResponse](./docs/model/TeamMembersResponse.md)
- [TeamParentResponse](./docs/model/TeamParentResponse.md)
- [TeamRemoveMemberRequest](./docs/model/TeamRemoveMemberRequest.md)
- [TeamResponse](./docs/model/TeamResponse.md)
- [TeamSubTeamsResponse](./docs/model/TeamSubTeamsResponse.md)
- [TeamUpdateRequest](./docs/model/TeamUpdateRequest.md)
- [TemplateAddUserRequest](./docs/model/TemplateAddUserRequest.md)
- [TemplateCreateEmbeddedDraftRequest](./docs/model/TemplateCreateEmbeddedDraftRequest.md)
- [TemplateCreateEmbeddedDraftResponse](./docs/model/TemplateCreateEmbeddedDraftResponse.md)
- [TemplateCreateEmbeddedDraftResponseTemplate](./docs/model/TemplateCreateEmbeddedDraftResponseTemplate.md)
- [TemplateCreateRequest](./docs/model/TemplateCreateRequest.md)
- [TemplateCreateResponse](./docs/model/TemplateCreateResponse.md)
- [TemplateCreateResponseTemplate](./docs/model/TemplateCreateResponseTemplate.md)
- [TemplateEditResponse](./docs/model/TemplateEditResponse.md)
- [TemplateGetResponse](./docs/model/TemplateGetResponse.md)
- [TemplateListResponse](./docs/model/TemplateListResponse.md)
- [TemplateRemoveUserRequest](./docs/model/TemplateRemoveUserRequest.md)
- [TemplateResponse](./docs/model/TemplateResponse.md)
- [TemplateResponseAccount](./docs/model/TemplateResponseAccount.md)
- [TemplateResponseAccountQuota](./docs/model/TemplateResponseAccountQuota.md)
- [TemplateResponseCCRole](./docs/model/TemplateResponseCCRole.md)
- [TemplateResponseDocument](./docs/model/TemplateResponseDocument.md)
- [TemplateResponseDocumentCustomFieldBase](./docs/model/TemplateResponseDocumentCustomFieldBase.md)
- [TemplateResponseDocumentCustomFieldCheckbox](./docs/model/TemplateResponseDocumentCustomFieldCheckbox.md)
- [TemplateResponseDocumentCustomFieldText](./docs/model/TemplateResponseDocumentCustomFieldText.md)
- [TemplateResponseDocumentFieldGroup](./docs/model/TemplateResponseDocumentFieldGroup.md)
- [TemplateResponseDocumentFieldGroupRule](./docs/model/TemplateResponseDocumentFieldGroupRule.md)
- [TemplateResponseDocumentFormFieldBase](./docs/model/TemplateResponseDocumentFormFieldBase.md)
- [TemplateResponseDocumentFormFieldCheckbox](./docs/model/TemplateResponseDocumentFormFieldCheckbox.md)
- [TemplateResponseDocumentFormFieldDateSigned](./docs/model/TemplateResponseDocumentFormFieldDateSigned.md)
- [TemplateResponseDocumentFormFieldDropdown](./docs/model/TemplateResponseDocumentFormFieldDropdown.md)
- [TemplateResponseDocumentFormFieldHyperlink](./docs/model/TemplateResponseDocumentFormFieldHyperlink.md)
- [TemplateResponseDocumentFormFieldInitials](./docs/model/TemplateResponseDocumentFormFieldInitials.md)
- [TemplateResponseDocumentFormFieldRadio](./docs/model/TemplateResponseDocumentFormFieldRadio.md)
- [TemplateResponseDocumentFormFieldSignature](./docs/model/TemplateResponseDocumentFormFieldSignature.md)
- [TemplateResponseDocumentFormFieldText](./docs/model/TemplateResponseDocumentFormFieldText.md)
- [TemplateResponseDocumentStaticFieldBase](./docs/model/TemplateResponseDocumentStaticFieldBase.md)
- [TemplateResponseDocumentStaticFieldCheckbox](./docs/model/TemplateResponseDocumentStaticFieldCheckbox.md)
- [TemplateResponseDocumentStaticFieldDateSigned](./docs/model/TemplateResponseDocumentStaticFieldDateSigned.md)
- [TemplateResponseDocumentStaticFieldDropdown](./docs/model/TemplateResponseDocumentStaticFieldDropdown.md)
- [TemplateResponseDocumentStaticFieldHyperlink](./docs/model/TemplateResponseDocumentStaticFieldHyperlink.md)
- [TemplateResponseDocumentStaticFieldInitials](./docs/model/TemplateResponseDocumentStaticFieldInitials.md)
- [TemplateResponseDocumentStaticFieldRadio](./docs/model/TemplateResponseDocumentStaticFieldRadio.md)
- [TemplateResponseDocumentStaticFieldSignature](./docs/model/TemplateResponseDocumentStaticFieldSignature.md)
- [TemplateResponseDocumentStaticFieldText](./docs/model/TemplateResponseDocumentStaticFieldText.md)
- [TemplateResponseFieldAvgTextLength](./docs/model/TemplateResponseFieldAvgTextLength.md)
- [TemplateResponseSignerRole](./docs/model/TemplateResponseSignerRole.md)
- [TemplateUpdateFilesRequest](./docs/model/TemplateUpdateFilesRequest.md)
- [TemplateUpdateFilesResponse](./docs/model/TemplateUpdateFilesResponse.md)
- [TemplateUpdateFilesResponseTemplate](./docs/model/TemplateUpdateFilesResponseTemplate.md)
- [UnclaimedDraftCreateEmbeddedRequest](./docs/model/UnclaimedDraftCreateEmbeddedRequest.md)
- [UnclaimedDraftCreateEmbeddedWithTemplateRequest](./docs/model/UnclaimedDraftCreateEmbeddedWithTemplateRequest.md)
- [UnclaimedDraftCreateRequest](./docs/model/UnclaimedDraftCreateRequest.md)
- [UnclaimedDraftCreateResponse](./docs/model/UnclaimedDraftCreateResponse.md)
- [UnclaimedDraftEditAndResendRequest](./docs/model/UnclaimedDraftEditAndResendRequest.md)
- [UnclaimedDraftResponse](./docs/model/UnclaimedDraftResponse.md)
- [WarningResponse](./docs/model/WarningResponse.md)

## Authorization

### api_key

- **Type**: HTTP basic authentication


### oauth2

- **Type**: Bearer authentication (JWT)


## Author

apisupport@hellosign.com

## About this package

This package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `3.0.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptNodeClientCodegen`
