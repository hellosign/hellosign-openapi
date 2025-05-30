# ApiAppCreateRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `domains`<sup>*_required_</sup> | ```List[str]``` |  The domain names the ApiApp will be associated with.  |  |
| `name`<sup>*_required_</sup> | ```str``` |  The name you want to assign to the ApiApp.  |  |
| `callback_url` | ```str``` |  The URL at which the ApiApp should receive event callbacks.  |  |
| `custom_logo_file` | ```io.IOBase``` |  An image file to use as a custom logo in embedded contexts. (Only applies to some API plans)  |  |
| `oauth` | [```SubOAuth```](SubOAuth.md) |    |  |
| `options` | [```SubOptions```](SubOptions.md) |    |  |
| `white_labeling_options` | [```SubWhiteLabelingOptions```](SubWhiteLabelingOptions.md) |    |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


