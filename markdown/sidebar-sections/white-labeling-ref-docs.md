White labeling is a term for branding a product that you have purchased. Our white labeling allows you to personalize the logo, color scheme, and legal text of the signer page, making our product blend seamlessly into yours.

Before you can do anything with white labeling, you will need to [create an app](https://app.hellosign.com/oauth/createAppForm). White labeling is available as a paid add-on for Premium API plans, which you must have in order to use white labeling in production mode. Otherwise, you can only use it in test mode. All updates made to white labeling options by users who purchase the white labeling add-on for the Premium plan are immediately active in production. We recommend creating a test app for previewing white labeling changes.

The white labeling options are passed in the create API app ([/api_app](https://app.hellosign.com/api/reference#create_api_app)) and update API app ([/api_app/[:client_id]](https://app.hellosign.com/api/reference#update_api_app)) endpoints.

## Custom colors
All customizable color elements require valid six-character hexadecimal codes for values. All elements are optional, and any element that you choose not to customize will be set to its default value. If you choose not to customize the value for an element that has a hover state, its hover state will inherit from its active state.  
  
**Note**: The primary button color is shared with other elements: 
- the word, "Loading," on the loading page 
- the required fields counter circle
- the selected tab in the signature modal
- the border of the secondary button
- the border of the selected signature image
- the color block on the confirmation page.  

The table below lists all customizable color elements.
<style>
    .swatch {
        display: inline-block;
        vertical-align: middle;
        width: 22px;
        height: 22px;
        border: 1px  solid  #e6e6e6;
        margin-right: 15px;
    }
</style>

| Element | Default Color |
|--|--|
| `page_background_color` | <span style="background-color:#F7F8F9;"  class="swatch"></span> #F7F8F9 |
| `header_background_color` | <span style="background-color:#1A1A1A;"  class="swatch"></span> #1A1A1A |
| `text_color1` | <span style="background-color:#808080;" class="swatch"></span> #808080 |
| `text_color2` | <span style="background-color:#FFFFFF;" class="swatch"></span> #FFFFFF |
| `link_color` | <span style="background-color:#00B3E6;" class="swatch"></span> #00B3E6 |
| `primary_button_color` | <span style="background-color:#808080;" class="swatch"></span> #808080 |
| `primary_button_text_color` | <span style="background-color:#FFFFFF;" class="swatch"></span> #FFFFFF |
| `primary_button_color_hover` | <span style="background-color:#00B3E6;" class="swatch"></span> #00B3E6 |
| `secondary_button_color` | <span style="background-color:#FFFFFF;" class="swatch"></span> #FFFFFF |
| `secondary_button_text_color` | <span style="background-color:#00B3E6;" class="swatch"></span> #00B3E6 |
| `secondary_button_color_hover` | <span style="background-color:#FFFFFF;" class="swatch"></span> #FFFFFF |
| `secondary_button_text_color_hover` | <span style="background-color:#00B3E6;" class="swatch"></span> #00B3E6 |

Here is a layout of customizable elements:
![example of a white labeled signing flow with parameters mapped to the element they control the styling for](https://cdn.hellosign.com/1.121.0/images/api/docs/white_labeling_layout.png)

Some customizable color elements must meet a minimum contrast ratio of 2.1 with adjacent elements, for usability reasons. The contrast element  `header_background_color_light`  is not customizable. It has a value of `#F7F8F9`.

Take a look at this contrast ratio [UI](http://leaverou.github.io/contrast-ratio/#%23FF8080-on-%23fff) and [formula](https://github.com/gdkraus/wcag2-color-contrast/blob/master/wcag2-color-contrast.php) to learn more about contrast.
| Element | Contrast Elements |
|--|--|
| `text_color1` | `header_background_color_light` |
| `text_color2` | `header_background_color` |
| `primary_button_color` | `header_background_color`, `header_background_color_light` |
| `primary_button_text_color` | `primary_button_color` |
| `primary_button_text_color_hover` | `primary_button_color_hover` |
| `secondary_button_text_color` | `secondary_button_color` |
| `secondary_button_text_color_hover` | `secondary_button_color_hover` |

<style>
    .bacon {
        color: red;
    }
</style>
## Legal version
The  `legal_version`  element is related to our terms of service. Its default value is  `terms1`.
| Value | Description |
|--|--|
| `terms1` | I agree to be legally bound by this document and the HelloSign Terms of Service. Click on 'I Agree' to sign this document. |
| `terms2` | By clicking "I Agree" you are legally signing this document and agreeing to the eSignature Terms of Service. |

## Error types
Validation errors are JSON-encoded and returned as a value on  `error_msg`  (for more info on errors, see the  [errors and warnings guide](https://app.hellosign.com/api/reference#WarningsAndErrors)). An error includes the error type and the invalid element name or names. Here is a list and details of possible error types that can be returned: 
| Error | Description |
|--|--|
| `invalid_element_name` | Invalid element name. |
| `invalid_legal_version` | Invalid value passed for `legal_version`. |
| `invalid_hex_code` | Invalid hex code. |
| `invalid_contrast_ratio` | Contrast ratio is less than minimum 2.1. |

## Example
Here is an example of a white labeled embedded signer page.

Scranton Paper’s Partner Portal is the company’s internal tool for managing Partnerships. Pamela is logged in and is signing a mutual NDA with a new partner, JN Projects. HelloSign’s signing functionality is white labeled and embedded within the portal.

| Image | Details |
|--|--|
| ![The initial signing page in this example has been white labeled and has different colors.](https://cdn.hellosign.com/1.121.0/images/api/docs/EM_WL_01.png#width=550px;) | The signer page is embedded within Scranton Paper’s Partner Portal |
| ![Shows the white labeling once a user clicks to sign the signature box.](https://cdn.hellosign.com/1.121.0/images/api/docs/EM_WL_02.png#width=550px;) | Click to sign signature box |
| ![Shows the white labeling in the signature modal as they choose from available signature options](https://cdn.hellosign.com/1.121.0/images/api/docs/EM_WL_03.png#width=550px;) | Choose multiple signature options |
| ![Shows the signature added to the white labeled document](https://cdn.hellosign.com/1.121.0/images/api/docs/EM_WL_04.png#width=550px;) | The signature is displayed within document |
| ![Shows the terms acceptance page with white labeled legal copy](https://cdn.hellosign.com/1.121.0/images/api/docs/EM_WL_05.png#width=550px;) | Click the 'I agree' button to confirm signed document |
| ![Shows the white labeled page once signing is complete](https://cdn.hellosign.com/1.121.0/images/api/docs/EM_WL_06.png#width=550px;) | The document is signed and completed |

**Note**: White Labeling is also available for non-embedded signature flows

