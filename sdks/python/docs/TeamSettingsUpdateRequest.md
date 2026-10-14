# TeamSettingsUpdateRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `set` | ```Dict[str, object]``` |  Values to store, keyed by setting name. A name in `set` cannot also appear in `unset`.  |  |
| `unset` | ```List[str]``` |  Setting names to clear so their values are inherited. A listed name cannot also be set or locked in the same request.  |  |
| `lock` | [```Dict[str, TeamSettingLock]```](TeamSettingLock.md) |  Lock modes keyed by setting name. Only team settings support locks. A name in `lock` cannot also appear in `unset`.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


