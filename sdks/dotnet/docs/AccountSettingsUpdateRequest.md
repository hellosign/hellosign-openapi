# Dropbox.Sign.Model.AccountSettingsUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Set** | **Dictionary&lt;string, Object&gt;** |  Values to store, keyed by setting name. A name in `set` cannot also appear in `unset`.  | [optional] **Unset** | **List&lt;string&gt;** |  Setting names to clear so their values are inherited. A listed name cannot also be set or locked in the same request.  | [optional] **Lock** | [**Dictionary&lt;string, TeamSettingLock&gt;**](TeamSettingLock.md) |  Lock modes keyed by setting name. Only team settings support locks. A name in `lock` cannot also appear in `unset`.  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

