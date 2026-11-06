

# TeamSettingsUpdateRequest



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `set` | ```Map<String, Object>``` |  Values to store, keyed by setting name. A name in `set` cannot also appear in `unset`.  |  |
| `lock` | ```Map<String, TeamSettingLock>``` |  Lock a setting to prevent subteams or accounts from overriding it. A team admin can set a lock on their own team. An organization admin can set a lock on the organization or on a subteam. `organization_admins` prevents subteams and accounts from overriding the value. `team_admins` lets admins of that team and its subteams set their own value. `members` lets each account set its own value. A name in `lock` cannot also appear in `unset`.  |  |
| `unset` | ```List<String>``` |  Any setting that can be set can also be unset. Unset clears the stored value and its lock so both are inherited. A listed name cannot also be set or locked in the same request.  |  |



