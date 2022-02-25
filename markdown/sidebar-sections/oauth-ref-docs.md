OAuth allows you to perform actions on behalf of other users after they grant you the authorization to do so. For example, you could send signature requests on behalf of your users.

We recommend using our [OAuth Walkthrough](https://app.hellosign.com/api/oauthWalkthrough) for more detailed instructions.

OAuth apps can either be set up to charge you, the **app owner**, or the **user you are acting on behalf of**. This choice is determined by which scopes you select for your app.

### OAuth scopes where app owner is charged
| Name | Value | Description |
|--|--|--|
| Basic Account Info (limited) | `basic_account_info` | Access basic account information, such as email address and name. |
| Send Signature Requests (limited) | `request_signature` | Send signature requests, access statuses and document files. |

### OAuth scopes where users are charged
| Name | Value | Description |
|--|--|--|
| Account Access | `account_access` | Access to basic account information, such as email address and name. |
| Signature Request Access | `signature_request_access` | Access to send, view, and update signature requests and to download document files. Signature requests must be made with oAuth token in order to access.  |
| Template Access | `template_access` | Access to view, create, and modify templates. |
| Team Access | `team_access` | Access to view and modify team settings and team members. |
| API App Access | `api_app_access` | Access to view, create, and modify embedded API apps. |