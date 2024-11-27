# Dropbox::Sign::FaxResponse



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_id`<sup>*_required_</sup> | ```String``` |  Fax ID  |  |
| `title`<sup>*_required_</sup> | ```String``` |  Fax Title  |  |
| `original_title`<sup>*_required_</sup> | ```String``` |  Fax Original Title  |  |
| `metadata`<sup>*_required_</sup> | ```Hash<String, Object>``` |  Fax Metadata  |  |
| `created_at`<sup>*_required_</sup> | ```Integer``` |  Fax Created At Timestamp  |  |
| `sender`<sup>*_required_</sup> | ```String``` |  Fax Sender Email  |  |
| `files_url`<sup>*_required_</sup> | ```String``` |  Fax Files URL  |  |
| `transmissions`<sup>*_required_</sup> | [```Array<FaxResponseTransmission>```](FaxResponseTransmission.md) |  Fax Transmissions List  |  |
| `subject` | ```String``` |  Fax Subject  |  |
| `message` | ```String``` |  Fax Message  |  |
| `final_copy_uri` | ```String``` |  The path where the completed document can be downloaded  |  |

