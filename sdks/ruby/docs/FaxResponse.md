# Dropbox::Sign::FaxResponse



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_id`<sup>*_required_</sup> | ```String``` |  Fax ID  |  |
| `title`<sup>*_required_</sup> | ```String``` |  Fax Title  |  |
| `original_title`<sup>*_required_</sup> | ```String``` |  Fax Original Title  |  |
| `subject`<sup>*_required_</sup> | ```String``` |  Fax Subject  |  |
| `message`<sup>*_required_</sup> | ```String``` |  Fax Message  |  |
| `metadata`<sup>*_required_</sup> | ```Hash<String, Object>``` |  Fax Metadata  |  |
| `created_at`<sup>*_required_</sup> | ```Integer``` |  Fax Created At Timestamp  |  |
| `sender`<sup>*_required_</sup> | ```String``` |  Fax Sender Email  |  |
| `transmissions`<sup>*_required_</sup> | [```Array<FaxResponseTransmission>```](FaxResponseTransmission.md) |  Fax Transmissions List  |  |
| `files_url`<sup>*_required_</sup> | ```String``` |  Fax Files URL  |  |

