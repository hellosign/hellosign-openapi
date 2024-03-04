

# ReportResponse

Contains information about the report request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `success` | ```String``` |  A message indicating the requested operation&#39;s success  |  |
| `startDate` | ```String``` |  The (inclusive) start date for the report data in MM/DD/YYYY format.  |  |
| `endDate` | ```String``` |  The (inclusive) end date for the report data in MM/DD/YYYY format.  |  |
| `reportType` | [```List&lt;ReportTypeEnum&gt;```](#List&lt;ReportTypeEnum&gt;) |  The type(s) of the report you are requesting. Allowed values are &quot;user_activity&quot; and &quot;document_status&quot;. User activity reports contain list of all users and their activity during the specified date range. Document status report contain a list of signature requests created in the specified time range (and their status).  |  |



## Enum: List&lt;ReportTypeEnum&gt;

Name | Value
---- | -----
| USER_ACTIVITY | &quot;user_activity&quot; |
| DOCUMENT_STATUS | &quot;document_status&quot; |



