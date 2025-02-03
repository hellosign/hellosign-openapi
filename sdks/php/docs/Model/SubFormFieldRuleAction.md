# # SubFormFieldRuleAction



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `hidden`<sup>*_required_</sup> | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN &#x60;true&#x60; to hide the target field when rule is satisfied, otherwise &#x60;false&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `type`<sup>*_required_</sup> | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN  REPLACE_ME_WITH_DESCRIPTION_END |  |
| `field_id` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN **field_id** or **group_id** is required, but not both.

Must reference the &#x60;api_id&#x60; of an existing field defined within &#x60;form_fields_per_document&#x60;.

Cannot use with &#x60;group_id&#x60;. Trigger and action fields must belong to the same signer. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `group_id` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN **group_id** or **field_id** is required, but not both.

Must reference the ID of an existing group defined within &#x60;form_field_groups&#x60;.

Cannot use with &#x60;field_id&#x60;. Trigger and action fields and groups must belong to the same signer. REPLACE_ME_WITH_DESCRIPTION_END |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
