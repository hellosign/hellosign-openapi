

# SettingResponse



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `value`<sup>*_required_</sup> | ```Object``` |  Current value of the setting. Null when the setting has no value.  |  |
| `isInherited`<sup>*_required_</sup> | ```Boolean``` |    |  |
| `source`<sup>*_required_</sup> | [```SourceEnum```](#SourceEnum) |    |  |
| `type`<sup>*_required_</sup> | [```TypeEnum```](#TypeEnum) |    |  |
| `writable`<sup>*_required_</sup> | ```Boolean``` |    |  |
| `lock`<sup>*_required_</sup> | [```SettingLockResponse```](SettingLockResponse.md) |    |  |



## Enum: SourceEnum

| Name | Value |
---- | -----
| ACCOUNT | &quot;account&quot; |
| TEAM | &quot;team&quot; |
| PARENT_TEAM | &quot;parent_team&quot; |
| DEFAULT | &quot;default&quot; |



## Enum: TypeEnum

| Name | Value |
---- | -----
| BOOLEAN | &quot;boolean&quot; |
| INTEGER | &quot;integer&quot; |
| STRING | &quot;string&quot; |
| ARRAY | &quot;array&quot; |



