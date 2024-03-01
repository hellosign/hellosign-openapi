

# SubFormFieldGroup



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `groupId`<sup>*_required_</sup> | ```String``` |  ID of group. Use this to reference a specific group from the `group` value in `form_fields_per_document`.  |  |
| `groupLabel`<sup>*_required_</sup> | ```String``` |  Name of the group  |  |
| `requirement`<sup>*_required_</sup> | ```String``` |  Examples: `require_0-1` `require_1` `require_1-ormore`<br><br>- Check out the list of [acceptable `requirement` checkbox type values](/api/reference/constants/#checkbox-field-grouping). - Check out the list of [acceptable `requirement` radio type fields](/api/reference/constants/#radio-field-grouping). - Radio groups require **at least** two fields per group.  |  |



