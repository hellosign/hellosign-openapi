

# BulkSendJobResponse

Contains information about the BulkSendJob such as when it was created and how many signature requests are queued.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `bulkSendJobId`<sup>*_required_</sup> | ```String``` |  The id of the BulkSendJob.  |  |
| `total`<sup>*_required_</sup> | ```Integer``` |  The total amount of Signature Requests queued for sending.  |  |
| `isCreator`<sup>*_required_</sup> | ```Boolean``` |  True if you are the owner of this BulkSendJob, false if it&#39;s been shared with you by a team member.  |  |
| `createdAt`<sup>*_required_</sup> | ```Integer``` |  Time that the BulkSendJob was created.  |  |



