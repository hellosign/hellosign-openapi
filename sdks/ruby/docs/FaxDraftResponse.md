# Dropbox::Sign::FaxDraftResponse

Contains the embedded Fax draft ID, iframe URL, and expiration timestamp.

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `fax_id`<sup>*_required_</sup> | ```String``` |  ID of the Fax draft.  |  |
| `url`<sup>*_required_</sup> | ```String``` |  URL to open in an approved iframe for preparing and sending the Fax.  |  |
| `expires_at`<sup>*_required_</sup> | ```Integer``` |  Unix timestamp indicating when the embedded Fax draft URL expires.  |  |
