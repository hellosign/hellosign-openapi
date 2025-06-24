# Dropbox::Sign::BulkSendJobGetResponseSignatureRequests



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `test_mode` | ```Boolean``` |  _t__SignatureRequestResponse::TEST_MODE  |  [default to false] |
| `signature_request_id` | ```String``` |  _t__SignatureRequestResponse::SIGNATURE_REQUEST_ID  |  |
| `requester_email_address` | ```String``` |  _t__SignatureRequestResponse::REQUESTER_EMAIL_ADDRESS  |  |
| `title` | ```String``` |  _t__SignatureRequestResponse::TITLE  |  |
| `original_title` | ```String``` |  _t__SignatureRequestResponse::ORIGINAL_TITLE  |  |
| `subject` | ```String``` |  _t__SignatureRequestResponse::SUBJECT  |  |
| `message` | ```String``` |  _t__SignatureRequestResponse::MESSAGE  |  |
| `metadata` | ```Hash<String, Object>``` |  _t__SignatureRequestResponse::METADATA  |  |
| `created_at` | ```Integer``` |  _t__SignatureRequestResponse::CREATED_AT  |  |
| `expires_at` | ```Integer``` |  _t__SignatureRequestResponse::EXPIRES_AT  |  |
| `is_complete` | ```Boolean``` |  _t__SignatureRequestResponse::IS_COMPLETE  |  |
| `is_declined` | ```Boolean``` |  _t__SignatureRequestResponse::IS_DECLINED  |  |
| `has_error` | ```Boolean``` |  _t__SignatureRequestResponse::HAS_ERROR  |  |
| `files_url` | ```String``` |  _t__SignatureRequestResponse::FILES_URL  |  |
| `signing_url` | ```String``` |  _t__SignatureRequestResponse::SIGNING_URL  |  |
| `details_url` | ```String``` |  _t__SignatureRequestResponse::DETAILS_URL  |  |
| `cc_email_addresses` | ```Array<String>``` |  _t__SignatureRequestResponse::CC_EMAIL_ADDRESSES  |  |
| `signing_redirect_url` | ```String``` |  _t__SignatureRequestResponse::SIGNING_REDIRECT_URL  |  |
| `final_copy_uri` | ```String``` |  _t__SignatureRequestResponse::FINAL_COPY_URI  |  |
| `template_ids` | ```Array<String>``` |  _t__SignatureRequestResponse::TEMPLATE_IDS  |  |
| `custom_fields` | [```Array<SignatureRequestResponseCustomFieldBase>```](SignatureRequestResponseCustomFieldBase.md) |  _t__SignatureRequestResponseCustomField::DESCRIPTION  |  |
| `attachments` | [```Array<SignatureRequestResponseAttachment>```](SignatureRequestResponseAttachment.md) |  _t__SignatureRequestResponseAttachment::DESCRIPTION  |  |
| `response_data` | [```Array<SignatureRequestResponseDataBase>```](SignatureRequestResponseDataBase.md) |  _t__SignatureRequestResponseData::DESCRIPTION  |  |
| `signatures` | [```Array<SignatureRequestResponseSignatures>```](SignatureRequestResponseSignatures.md) |  _t__SignatureRequestResponseSignatures::DESCRIPTION  |  |
| `bulk_send_job_id` | ```String``` |  _t__BulkSendJobGetResponseSignatureRequests::BULK_SEND_JOB_ID  |  |

