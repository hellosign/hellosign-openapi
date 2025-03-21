

# FaxResponse



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `faxId`<sup>*_required_</sup> | ```String``` |  Fax ID  |  |
| `title`<sup>*_required_</sup> | ```String``` |  Fax Title  |  |
| `originalTitle`<sup>*_required_</sup> | ```String``` |  Fax Original Title  |  |
| `metadata`<sup>*_required_</sup> | ```Map<String, Object>``` |  Fax Metadata  |  |
| `createdAt`<sup>*_required_</sup> | ```Integer``` |  Fax Created At Timestamp  |  |
| `sender`<sup>*_required_</sup> | ```String``` |  Fax Sender Email  |  |
| `filesUrl`<sup>*_required_</sup> | ```String``` |  Fax Files URL  |  |
| `transmissions`<sup>*_required_</sup> | [```List<FaxResponseTransmission>```](FaxResponseTransmission.md) |  Fax Transmissions List  |  |
| `subject` | ```String``` |  Fax Subject  |  |
| `message` | ```String``` |  Fax Message  |  |
| `finalCopyUri` | ```String``` |  The path where the completed document can be downloaded  |  |



