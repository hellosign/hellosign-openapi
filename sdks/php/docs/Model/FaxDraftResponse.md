# # FaxDraftResponse

Contains the Fax draft ID, prep-and-send URL, and expiration timestamp.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `fax_id`<sup>*_required_</sup> | ```string``` |  ID of the Fax draft.  |  |
| `url`<sup>*_required_</sup> | ```string``` |  URL for preparing and sending the Fax. Embedded draft URLs must be opened in an approved iframe; normal draft URLs open in Dropbox Fax.  |  |
| `expires_at`<sup>*_required_</sup> | ```int``` |  Unix timestamp indicating when the Fax draft URL expires.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
