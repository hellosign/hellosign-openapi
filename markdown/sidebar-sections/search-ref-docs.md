Searches can include queries on specific fields when hitting the [/signature_request/list](https://app.hellosign.com/api/reference#list_signature_requests) or [/template/list](https://app.hellosign.com/api/reference#list_templates) endpoints.

**Note**: There may be a minor delay after creation of a signature request or template, and querying may not be immediately available for this object.

Here is an example of a GET request to [/signature_request/list](https://app.hellosign.com/api/reference#list_signature_requests) using search queries:

```bash
curl 'https://api.hellosign.com/v3/signature_request/list?query=title:Field+Trip+Release+AND+from:me'\ 
	-u 'SIGN_IN_AND_CREATE_API_KEY_FIRST:'
```

## Search Fields
Search terms that are not passed with a specific field will be matched against: `to`, `from`, `title`, `subject`, `message`, `metadata`, and `filename`. Queries on fields can be combined using AND and OR operators (operators are case sensitive). Dates may be passed in as ranges. Exclusive ranges are indicated with curly brackets {min TO max} and inclusive ranges with square brackets [min TO max]. Leading wildcards (*) are not valid queries. The table below lists all possible fields that can be queried:

| Field Name | Description | Attached Model | Type |
|--|--|--|--|
| `to` | The email address or name of the signer (can use "me" to refer to yourself) | SignatureRequest only | String |
| `from` | The email address or name of the sender (can use "me" to refer to yourself) | SignatureRequest only | String
| `title` | The title of the signature request or template | SignatureRequest and Template | String
| `subject` | The subject of the email that is sent to the signers | SignatureRequest only | String
| `message` | The message of the email that is sent to the signers | SignatureRequest and Template | String
| `metadata` | The metadata attached to the signature request or template | SignatureRequest and Template | String
| `created` | The creation date (and optional time) of the signature request or template<br>For example: `created:[2014-01-01+TO+2014-12-31]`<br>**Note**: Square brackets search dates from the 1st of January thru the 31st of December (inclusive dates)<br>Another example: `created:{2014-01-05+TO+2014-01-10}`<br>**Note**: Curly brackets search dates from the 6th of January thru the 9th of January (exclusive dates) | SignatureRequest and Template | Date
| `complete` | true returns a list of signature requests that all signers have signed. For example: `complete:true` | SignatureRequest only | Boolean
| `declined` | true returns a list of signature requests that have been declined. For example: `declined:true` | SignatureRequest only | Boolean
| `awaiting_my_signature` | A true value indicates the request requires your signature | SignatureRequest only | Boolean
| `test_mode` | A true value indicates the signature request or template is a test and not legally binding | SignatureRequest and Template | Boolean
| `filename` | The name of the file used to create the signature request or template | SignatureRequest and Template | String
| `owner` | The metadata attached to the signature request or template | Template only | String
| `template` | A Template ID corresponding to a template used in a signature request | SignatureRequest only | String