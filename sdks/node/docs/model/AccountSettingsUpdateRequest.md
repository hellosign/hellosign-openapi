# # AccountSettingsUpdateRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `set` | ```{ [key: string]: any; }``` |  Values to store, keyed by setting name. A name in `set` cannot also appear in `unset`.  |  |
| `unset` | ```Array<string>``` |  Any setting that can be set can also be unset. Unset clears the stored value so it is inherited. A listed name cannot also be set or locked in the same request.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
