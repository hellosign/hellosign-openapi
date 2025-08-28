

# SignatureRequestSignerExperience

Configuration options for modifying the settings of the signer application. Supports changing the form view behavior.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `formView`<sup>*_required_</sup> | [```FormViewEnum```](#FormViewEnum) |  Changes the form view setting experienced by the signer. Supported versions are:  - `disabled` - Form view is disabled, and the signer cannot change it  - `enabled` - Form view is disabled initially, the signer can turn it on using a toggle  - `enabled_by_default` - Form view is enabled initially. The signer car turn it off using a toggle  - `forced` - Form view is enabled initially. The signer cannot change it, the toggle is hidden.  |  |



## Enum: FormViewEnum

| Name | Value |
---- | -----
| DISABLED | &quot;disabled&quot; |
| ENABLED | &quot;enabled&quot; |
| ENABLED_BY_DEFAULT | &quot;enabled_by_default&quot; |
| FORCED | &quot;forced&quot; |



