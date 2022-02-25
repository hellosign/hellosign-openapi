## Field types
These are the options you can specify for the `type` field.

| Type | Description |
|--|--|
| `text` | A text input field |
| `checkbox` | A yes/no checkbox |
| `date_signed` | A date when a document was signed |
| `dropdown` | An input field for dropdowns |
| `initials` | An input field for initials |
| `radio` | An input field for radios |
| `signature` | A signature input field |
| `text-merge` | A text field that has default text set by the api |
| `checkbox-merge` | A checkbox field that has default value set by the api |

## Form fields per document
Different field types may have different options available to them within the  `form_fields_per_document`  parameter.

| Field type | Description |
|--|--|
| `text` | **placeholder: String** (optional)<br>&nbsp;&nbsp;Placeholder value for text field.<br>&nbsp;&nbsp;`"placeholder": "First Name"`<br><br> **auto_fill_type: String** (optional)<br>&nbsp;&nbsp;Auto fill type for populating fields automatically.<br>&nbsp;&nbsp;`"auto_fill_type": "email"`<br>&nbsp;&nbsp;Checkout the list of [auto fill types](https://app.hellosign.com/api/reference#AutoFillTypes) to learn more about the possible values.<br><br>**masked: Integer**(optional)<br>&nbsp;&nbsp;Masks entered data. For more information see [Masking sensitive information.](https://stackedit.io/app)<br>&nbsp;&nbsp;`1` for masking the data in a text field, otherwise `0`.<br>&nbsp;&nbsp;`"masked": 0`|
| `dropdown` | **options: String[]** (required)<br>&nbsp;&nbsp;Array of string values representing dropdown values.<br>&nbsp;&nbsp;`"options":  ["Option 1","Option 2"]`<br><br> **content: String** (optional)<br>&nbsp;&nbsp;Selected value in `options`  array. Value must exist in array.<br>&nbsp;&nbsp;`"content": "Option 2"` |
| `hyperlink` | **content: String** (required)<br>&nbsp;&nbsp;Link Text.<br>&nbsp;&nbsp;`"content":  "Click me!"`<br><br> **content_url: String** (required)<br>&nbsp;&nbsp;Link URL.<br>&nbsp;&nbsp;`"content_url":  "http://example.com"` |
| `checkbox` | **group: String** (optional)<br>&nbsp;&nbsp;String referencing group defined in `form_field_groups` parameter.<br>&nbsp;&nbsp;`"group": "group_1"`<br><br> **checked: Integer** (required)<br>&nbsp;&nbsp;`1` for checking the checkbox field by default, otherwise `0`<br>&nbsp;&nbsp;`"checked":  1` |
| `radio` | **group: String** (required)<br>&nbsp;&nbsp;String referencing group defined in `form_field_groups` parameter.<br>&nbsp;&nbsp;`"group": "group_1"`<br><br> **checked: Integer** (required)<br>&nbsp;&nbsp;`1` for checking the radio field by default, otherwise `0`<br>&nbsp;&nbsp;`"checked":  1` |

## Checkbox field grouping
Checkbox field groups accept an optional validation rule, which must be met before the user can submit the signed document. These are the options you can specify for validation rule.

| Rule | Description |
|--|--|
| `require_0-1` | Requires at most one checkbox within the group to be checked (radio button functionality) |
| `require_1` | Requires only one checkbox within the group to be checked |
| `require_1-ormore` | Requires at least one checkbox within the group to be checked |

## Radio field grouping
Radio field groups must define a validation rule, which must be met before the user can submit the signed document. These are the options you can specify for validation rule.

| Rule | Description |
|--|--|
| `require_0-1` | Makes group optional (signer does not have to select any radio option) |
| `require_1` | Makes group required (signer has to select one radio option) |



## Conditional logic
Conditional logic allows adding an "if this, then that" flow to signature requests.

| Field type | Description |
|--|--|
| `id`<br>**String** | Unique across all defined rules.<br>&nbsp;&nbsp;`"id": "rule_id_1"` |
| `trigger_operator`<br>**String** | Currently only **AND** is supported.<br>&nbsp;&nbsp;`"id": "rule_id_1"` |
| `triggers`<br>**Array** | An array of trigger definitions, the "if this" part of "**if this**, then that". Currently only a single trigger per rule is allowed.<br><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>`id`<br>**String**<br>(required)</td><td>Must reference the `api_id` of an existing field defined within `form_fields_per_document`.<br><br>Trigger and action fields and groups must belong to the same signer.<br>`"id": "uniqueIdHere_1"`</td></tr><tr><td>`operator`<br>**String**<br>(required)</td><td>Different field types allow different `operator` values:<table><thead><tr><th>Field</th><th>Operator</th></tr></thead><tbody><tr><td>`text`</td><td>`is`: exact match<br>`not`: not exact match<br>`match`: regular express, without "/". <br>&nbsp;&nbsp;&nbsp;&nbsp;OK: `[a-zA-Z0-9]`<br>&nbsp;&nbsp;&nbsp;&nbsp;Not OK: `/[a-zA-Z0-9]/`<br><br>Example: `"operator": "is"`</td></tr><tr><td>`dropdown`</td><td>`is`: exact match, single value<br>`not`: not exact match, single value<br>`any`: exact match, array of values<br>`none`: not exact match, array of values<br><br>Example: `"operator": "any"`</td></tr><tr><td>`checkbox`</td><td>`is`: exact match, single value<br>`not`: not exact match, single value<br><br>Example: `"operator": "is"`</td></tr><tr><td>`radio`</td><td>`is`: exact match, single value<br>`not`: not exact match, single value<br><br>Example: `"operator": "is"`</td></tr></tbody></table></td></tr><tr><td>`value`<br>**String or String[]**<br>(required)</td><td>The value to match against the `operator`.<br><br>When `operator` is one of the following, `value` must be **String** (single string):<br>&nbsp;&nbsp;`is`<br>&nbsp;&nbsp;`not`<br>&nbsp;&nbsp;`match`<br>&nbsp;&nbsp;Example: `"value": "foobar"`<br><br>When `operator` is one of the following, `value` must be **String[]** (array of strings):<br>&nbsp;&nbsp;`any`<br>&nbsp;&nbsp;`none`<br>&nbsp;&nbsp;Example: `"value": ["foo", "bar"]`<br><br>**checkbox**: When `type` of trigger is `checkbox`, `value` must be `0` or `1`:<br>&nbsp;&nbsp;Example:`"value": 0`<br><br>**checkbox**: When `type` of trigger is `radio`, `value` must be `1`:<br>&nbsp;&nbsp;Example:`"value": 1`</td></tr></tbody></table> |
| `actions`<br>**Array** | An array of action definitions, the "then that" part of "if this, **then that**". Any number of actions may be attached to a single rule.<br><br><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>`field_id`<br>**String**<br>(required)</td><td>Must reference the `api_id` of an existing field defined within `form_fields_per_document`<br><br>Cannot use with `group_id`. Trigger and action fields must belong to the same signer.<br>Example: `"field_id": "uniqueIdHere_1"`</td></tr><tr><td>`group_id`<br>**String**<br>(required)</td><td>Must reference the ID of an existing group defined within `form_field_groups`<br><br>Cannot use with `field_id`. Trigger and action fields and groups must belong to the same signer.<br>Example: `"group_id": "group_id_1"`</td></tr><tr><td>`hidden`<br>**Integer**<br>(required)</td><td>`1` to hide the target field when rule is satisfied, otherwise `0`.<br>Example: `"hidden": 1`</td></tr><tr><td>`type`<br>**String**<br>(required)</td><td>Use `change-field-visibility` if `field_id` is used.<br>Use `change-group-visibility` if `group_id` is used.<br>Example:`"type": "change-field-visibility"`</td></tr></tbody></table> |

**Notes about conditional logic**:
1. Conditional logic can only be set up for  **one**  trigger field, not a combination of fields. For example, you can't specify IF dropdown = option1  **AND**  textbox = "cat", then show these selected fields.

3. Conditional logic, both triggered and selected fields, must be limited to a specific signer. You can't set up a trigger field that, when complete by one signer, triggers fields for another signer.
4. A field can act as a trigger field for multiple conditions. However, a field can only act as a selected field once.
5. See our  [Adding conditional logic to documents](https://faq.hellosign.com/hc/en-us/articles/360038487692-Adding-conditional-logic-to-documents)  page for more information on how conditional logic works within the Editor.

## Data validation types
Text fields accept an optional validation type, which must be met before the user can submit the signed document. This value can be specified in form fields, text tags, or on the web. These are the options you can specify for validation type.

| Type | Description |
|--|--|
| `numbers_only` | Numbers only (negative and decimal values included) |
| `letters_only` | Letters only (non-English letters included) |
| `phone_number` | 10- or 11-digit number |
| `bank_routing_number` | 9-digit number |
| `bank_account_number` | Minimum 6-digit number |
| `email_address` | Email address |
| `zip_code` | 5- or 9-digit number |
| `social_security_number` | 9-digit number |
| `employer_identification_number` | 9-digit number |
| `custom_regex` | Custom regular expression (See note below) |

**Notes about data validation types**:
When using `custom_regex` you are required to pass a second parameter, `validation_custom_regex`, and you can optionally provide `validation_custom_regex_format_label` for the error message the user will see in case of an invalid value. Here's an example:
```json
"validation_type": "custom_regex",
"validation_custom_regex": "A[0-9]{3}",
"validation_custom_regex_format_label": "A000",
  ```

## Auto Fill types
Text fields accept an optional auto fill type. This value can be specified in form fields, text tags, or on the web. Below are the options you can specify for auto fill type.

| Type | Description |
|--|--|
| `firstName` | Text Tag example:<br><br>[text\|req\|signer1\|Label\|UniqueId\|letters_only\|firstName]<br><br>`form_fields_per_document` example:<br><br> `  [ [ { "api_id": "field1", "placeholder": "First Name", "auto_fill_type": "firstName", "name": "firstname", "type": "text", "x": 160, "y": 80, "page": 1, "width": 206, "height": 32, "required": true, "signer": 0 } ] ]` |
| `lastName` | Text Tag example:<br><br>[text\|req\|signer1\|Label\|UniqueId\|letters_only\|lastName]<br><br>`form_fields_per_document` example:<br><br> `  [ [ { "api_id": "field1", "placeholder": "Last Name", "auto_fill_type": "lastName", "name": "lastname", "type": "text", "x": 160, "y": 80, "page": 1, "width": 206, "height": 32, "required": true, "signer": 0 } ] ]`  |
| `name` | Text Tag example:<br><br>[text\|req\|signer1\|Label\|UniqueId\|letters_only\|name]<br><br>`form_fields_per_document` example:<br><br> `  [ [ { "api_id": "field1", "placeholder": "Full Name", "auto_fill_type": "name", "name": "fullname", "type": "text", "x": 160, "y": 80, "page": 1, "width": 206, "height": 32, "required": true, "signer": 0 } ] ]` |
| `email` | Text Tag example:<br><br>[text\|req\|signer1\|Label\|UniqueId\|email_address\|email]<br><br>`form_fields_per_document` example:<br><br> `  [ [ { "api_id": "field1", "placeholder": "email", "auto_fill_type": "email", "name": "email", "type": "text", "x": 160, "y": 80, "page": 1, "width": 206, "height": 32, "required": true, "signer": 0 } ] ]` |
| `company` | Text Tag example:<br><br>[text\|req\|signer1\|Label\|UniqueId\|letters_only\|company]<br><br>`form_fields_per_document` example:<br><br> `  [ [ { "api_id": "field1", "placeholder": "company", "auto_fill_type": "company", "name": "company", "type": "text", "x": 160, "y": 80, "page": 1, "width": 206, "height": 32, "required": true, "signer": 0 } ] ]` |
| `title` | Text Tag example:<br><br>[text\|req\|signer1\|Label\|UniqueId\|letters_only\|title]<br><br>`form_fields_per_document` example:<br><br> `  [ [ { "api_id": "field1", "placeholder": "title", "auto_fill_type": "title", "name": "title", "type": "text", "x": 160, "y": 80, "page": 1, "width": 206, "height": 32, "required": true, "signer": 0 } ] ]` |

**Notes about auto fill types**:
Label, id, or validation can be skipped with the following example:
[text|req|signer1||||firstName]

## Date formats
| Format | Example |
|--|--|
| MM / DD / YYYY | 02 / 24 / 2022 |
| MM - DD - YYYY | 02 - 24 - 2022 |
| DD / MM / YYYY | 24 / 02 / 2022 |
| DD - MM - YYYY | 24 - 02 - 2022 |
| YYYY / MM / DD | 2022 / 02 / 24 |
| YYYY - MM - DD | 2022 - 02 - 24 |
