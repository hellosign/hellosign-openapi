

# AccountSettingsUpdateRequest



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `set` | ```Map<String, Object>``` |  Values to store, keyed by setting name. A name in `set` cannot also appear in `unset`.  |  |
| `unset` | ```List<String>``` |  Any setting that can be set can also be unset. Unset clears the stored value so it is inherited. A listed name cannot also be set or locked in the same request.  |  |



