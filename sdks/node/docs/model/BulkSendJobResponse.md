# # BulkSendJobResponse

Contains information about the BulkSendJob such as when it was created and how many signature requests are queued.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `bulkSendJobId`<sup>*_required_</sup> | ```string``` |  The id of the BulkSendJob.  |  |
| `total`<sup>*_required_</sup> | ```number``` |  The total amount of Signature Requests queued for sending.  |  |
| `isCreator`<sup>*_required_</sup> | ```boolean``` |  True if you are the owner of this BulkSendJob, false if it&#39;s been shared with you by a team member.  |  |
| `createdAt`<sup>*_required_</sup> | ```number``` |  Time that the BulkSendJob was created.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
