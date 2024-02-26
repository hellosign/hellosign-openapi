# # SubCertificationTypes

Optional certification types to be applied to your Signature Request after completion.

After all parties have signed and completed identity verification (if `is_eid` is `true`), your document&#39;s hash will be sent to the specified certificate authority for archiving and integrity verification.

At this time only a single certification type can be selected per Signature Request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `nom151` | ```boolean``` |  NOM 151, or Normativa 151, is a certificate which verifies the integrity of an electronically signed document in compliance with Mexican regulations.  |  [default to false] |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
