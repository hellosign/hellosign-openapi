# # FaxResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `fax_id`<sup>*_required_</sup> | ```string``` |  Fax ID  |  |
| `title`<sup>*_required_</sup> | ```string``` |  Fax Title  |  |
| `original_title`<sup>*_required_</sup> | ```string``` |  Fax Original Title  |  |
| `metadata`<sup>*_required_</sup> | ```array<string,mixed>``` |  Fax Metadata  |  |
| `created_at`<sup>*_required_</sup> | ```int``` |  Fax Created At Timestamp  |  |
| `sender`<sup>*_required_</sup> | ```string``` |  Fax Sender Email  |  |
| `files_url`<sup>*_required_</sup> | ```string``` |  Fax Files URL  |  |
| `transmissions`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\FaxResponseTransmission[]```](FaxResponseTransmission.md) |  Fax Transmissions List  |  |
| `subject` | ```string``` |  Fax Subject  |  |
| `message` | ```string``` |  Fax Message  |  |
| `final_copy_uri` | ```string``` |  The path where the completed document can be downloaded  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
