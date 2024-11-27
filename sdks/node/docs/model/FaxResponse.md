# # FaxResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `faxId`<sup>*_required_</sup> | ```string``` |  Fax ID  |  |
| `title`<sup>*_required_</sup> | ```string``` |  Fax Title  |  |
| `originalTitle`<sup>*_required_</sup> | ```string``` |  Fax Original Title  |  |
| `metadata`<sup>*_required_</sup> | ```{ [key: string]: any; }``` |  Fax Metadata  |  |
| `createdAt`<sup>*_required_</sup> | ```number``` |  Fax Created At Timestamp  |  |
| `sender`<sup>*_required_</sup> | ```string``` |  Fax Sender Email  |  |
| `filesUrl`<sup>*_required_</sup> | ```string``` |  Fax Files URL  |  |
| `transmissions`<sup>*_required_</sup> | [```Array<FaxResponseTransmission>```](FaxResponseTransmission.md) |  Fax Transmissions List  |  |
| `subject` | ```string``` |  Fax Subject  |  |
| `message` | ```string``` |  Fax Message  |  |
| `finalCopyUri` | ```string``` |  The path where the completed document can be downloaded  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
