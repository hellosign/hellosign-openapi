# ReportResponse

Contains information about the report request.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `success` | ```str``` |  A message indicating the requested operation&#39;s success  |  |
| `start_date` | ```str``` |  The (inclusive) start date for the report data in MM/DD/YYYY format.  |  |
| `end_date` | ```str``` |  The (inclusive) end date for the report data in MM/DD/YYYY format.  |  |
| `report_type` | ```List[str]``` |  The type(s) of the report you are requesting. Allowed values are &quot;user_activity&quot; and &quot;document_status&quot;. User activity reports contain list of all users and their activity during the specified date range. Document status report contain a list of signature requests created in the specified time range (and their status).  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


