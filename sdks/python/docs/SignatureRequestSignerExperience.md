# SignatureRequestSignerExperience

Configuration options for modifying the settings of the signer application. Supports changing the form view behavior.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `form_view`<sup>*_required_</sup> | ```str``` |  Changes the form view setting experienced by the signer. Supported versions are:  - `disabled` - Form view is disabled, and the signer cannot change it  - `enabled` - Form view is disabled initially, the signer can turn it on using a toggle  - `enabled_by_default` - Form view is enabled initially. The signer car turn it off using a toggle  - `forced` - Form view is enabled initially. The signer cannot change it, the toggle is hidden.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


