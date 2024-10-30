# FaxResponse



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `fax_id`<sup>*_required_</sup> | ```str``` |  Fax ID  |  |
| `title`<sup>*_required_</sup> | ```str``` |  Fax Title  |  |
| `original_title`<sup>*_required_</sup> | ```str``` |  Fax Original Title  |  |
| `metadata`<sup>*_required_</sup> | ```Dict[str, object]``` |  Fax Metadata  |  |
| `created_at`<sup>*_required_</sup> | ```int``` |  Fax Created At Timestamp  |  |
| `sender`<sup>*_required_</sup> | ```str``` |  Fax Sender Email  |  |
| `files_url`<sup>*_required_</sup> | ```str``` |  Fax Files URL  |  |
| `transmissions`<sup>*_required_</sup> | [```List[FaxResponseTransmission]```](FaxResponseTransmission.md) |  Fax Transmissions List  |  |
| `subject` | ```str``` |  Fax Subject  |  |
| `message` | ```str``` |  Fax Message  |  |
| `final_copy_uri` | ```str``` |  The path where the completed document can be downloaded  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

