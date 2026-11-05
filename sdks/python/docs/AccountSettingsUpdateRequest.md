# AccountSettingsUpdateRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `set` | ```Dict[str, object]``` |  Values to store, keyed by setting name. A name in `set` cannot also appear in `unset`.  |  |
| `unset` | ```List[str]``` |  Any setting that can be set can also be unset. Unset clears the stored value so it is inherited. A listed name cannot also be set or locked in the same request.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


