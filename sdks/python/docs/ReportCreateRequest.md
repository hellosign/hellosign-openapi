# ReportCreateRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `end_date`<sup>*_required_</sup> | ```str``` |  The (inclusive) end date for the report data in `MM/DD/YYYY` format.  |  |
| `report_type`<sup>*_required_</sup> | ```List[str]``` |  The type(s) of the report you are requesting. Allowed values are `user_activity` and `document_status`. User activity reports contain list of all users and their activity during the specified date range. Document status report contain a list of signature requests created in the specified time range (and their status).  |  |
| `start_date`<sup>*_required_</sup> | ```str``` |  The (inclusive) start date for the report data in `MM/DD/YYYY` format.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


