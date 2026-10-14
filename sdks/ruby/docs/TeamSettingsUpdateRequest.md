# Dropbox::Sign::TeamSettingsUpdateRequest



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `set` | ```Hash<String, Object>``` |  Values to store, keyed by setting name. A name in `set` cannot also appear in `unset`.  |  |
| `unset` | ```Array<String>``` |  Setting names to clear so their values are inherited. A listed name cannot also be set or locked in the same request.  |  |
| `lock` | [```Hash<String, TeamSettingLock>```](TeamSettingLock.md) |  Lock modes keyed by setting name. Only team settings support locks. A name in `lock` cannot also appear in `unset`.  |  |

