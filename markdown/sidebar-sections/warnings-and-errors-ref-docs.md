If an error or warning occurs, we'll return either an error or warning object in the JSON response.

## Example error

A response may only contain one error at most. Check out the list of [error names](#section/Error-names) to learn more about the possible values of `error_name` and their meaning. Here is an example of the JSON structure of the response (or error POSTed to your callback url):
```json
{
    "error": {
        "error_msg": "Unauthorized user.",
        "error_name": "unauthorized"
    }
}
```
## Example warning

A response may contain one or more warnings. Check out the list of [warning names](#section/Warning-names) to learn more about the possible values of `warning_name` and their meaning. Here is an example of the JSON structure of the response:
```json
{
    "warnings": [
        {
            "warning_msg": "This SignatureRequest will be placed on hold until the user confirms their email address.",
            "warning_name": "unconfirmed"
        }
    ]
}
```

## Error names
List and details of possible errors that can be returned.
| Error | Description | HTTP Code |
|--|--|--|
| `bad_request` | The request could not be understood by the server due to malformed syntax. The client should not repeat the request without modifications. | `400` |
| `unauthorized` | The credentials you have supplied are invalid. | `401` |
| `payment_required` | Your account must be credited before the requested action is possible. | `402`
| `forbidden` | The requested action cannot be performed in the current context. Most of the time this happens when trying to access resources you don't have access to. | `403`
| `not_found` | The server has not found anything matching the Request-URI. | `404`
| `conflict` | Your request was well-formed but it cannot be completed to a conflict of some kind. | `409`
| `team_invite_failed` | The team invite request has failed. Most of the time this means the person you've invited already belongs to a team. | `403`
| `invalid_recipient` | The email address you provided for the recipient is not valid. | `400`
| `signature_request_cancel_failed` | Could not cancel the Signature Request. Either you are not the requester or the Signature Request is fully executed. | `400`
| `signature_request_remove_failed` | Could not remove your access to the Signature Request. Either you are not a party to the request, or it is not yet fully executed. | `400`
| `maintenance` | The request could not be completed because we are currently performing site maintenance. | `503`
| `deleted` | The request was cancelled or deleted. | `410`
| `unknown` | An unknown error has occurred, please try again. | Varied,<br> usually `500`
| `method_not_supported` | The HTTP method used is not supported for the API endpoint being called. | `405`
| `signature_request_invalid` | An error was detected with the signature request parameters during processing. | N/A
| `template_error` | An error occurred while creating your template. | N/A
| `invalid_reminder` | A signature request reminder attempt was invalid. This is usually due to the reminder being made against an embedded request | N/A
| `exceeded_rate` | Your account's API request rate limit has been exceeded. | `403`
| `invalid_file` | A file was invalid. This is usually due to an unsupported file format or a file that exceeds maximum file sizes. | N/A

## Warning names
List and details of possible warnings that can be returned.
| Warning | Description |
|--|--|
| `unconfirmed` | The email address of the account making the Signature Request has not been confirmed. The Signature Request will be placed on hold until it is confirmed. |
| `custom_field_value_too_long` | The value provided for a custom field is too long. The custom field will extend beyond the limits of its container and may not display the way you intended. |
| `custom_field_values_too_long` | A summary of all values for custom fields that are too long |
| `parameter_ignored` | One of the request parameters was ignored because it wasn't being used correctly |
| `non_pdf_text_tags` | Text Tags were enabled for a file that is not a PDF, which may result in imprecise positioning. |
| `form_fields_overlap` | Two or more of the form fields specified are overlapping, which may prevent signers from completing the document. |
| `form_fields_placement` | Form fields must be placed within the document. |
| `deprecated_parameter` | A parameter was provided which we no longer support. The value will be ignored. |
| `parameter_conflict` | Two parameters have been provided which are in conflict. One parameter will be ignored. |
| `parameter_missing` | An essential parameter was missing from the request and has been set to a default value. |
| `partial_success` | The operation succeeded, but at least one non-essential part of the request failed. |
| `test_mode_only` | A parameter was provided which will affect your app in test mode but will not affect it in production. Upgrade your account to use in production. |
| `empty_value` | A non-essential parameter was provided but it does not have a value. The parameter will be ignored. |
| `add_member` | A warning was generated while attempting to add a user to your team. |
| `parameter_invalid` | A parameter was provided with an invalid value. The parameter will be modified or ignored. |
| `oauth_grants_revoked` | OAuth user access grants have been revoked from this app due to a scope change. |
| `cc_disabled` | The option to email a copy to the other signers and anyone CC'd is disabled for given account. |
| `reassign_unsupported` | A template with signer reassignment was used on an endpoint that does not support it (e.g. bulk send with template). The template will still be used, but without signer reassignment enabled. |
| `duplicate_template_ids` | Templates can only be used once in a signature request. A duplicated template ids was passed in the request. |



