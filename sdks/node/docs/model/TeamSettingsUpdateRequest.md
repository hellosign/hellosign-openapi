# # TeamSettingsUpdateRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `set` | ```{ [key: string]: any; }``` |  Values to store, keyed by setting name. A name in `set` cannot also appear in `unset`.  |  |
| `unset` | ```Set<string>``` |  Setting names to clear so their values are inherited. A listed name cannot also be set or locked in the same request.  |  |
| `lock` | [```{ [key: string]: TeamSettingLock; }```](TeamSettingLock.md) |  Lock modes keyed by setting name. Only team settings support locks. A name in `lock` cannot also appear in `unset`.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
