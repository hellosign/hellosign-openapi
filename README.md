# hellosign-openapi &middot; [![License for GitHub](https://img.shields.io/badge/license-Apache%202-blue)](LICENSE) [![OpenAPI badge](https://img.shields.io/badge/openapi-v3.0.3-orange)](https://spec.openapis.org/oas/v3.0.1) [![PRs and Issues](https://img.shields.io/badge/prs%20&%20issues-Welcome-brightgreen)](#contributing)

This repository contains all source material used for Dropbox Sign's [API Reference Documentation](https://developers.hellosign.com/api/reference/overview/) and official SDKs. The docs and SDKs are both powered by the [OpenAPI spec](openapi.yaml), which also keeps them in sync with our API development.

This repo is actively maintained by Dropbox Sign's API Engineering team, but you can help us improve these resources for everyone by [contributing](#contributing).

## Overview

Dropbox Sign's [API Reference Documentation](https://developers.hellosign.com/api/reference/overview/) is built using [openapi.yaml](openapi.yaml) and the SDKs are built using [openapi-sdk.yaml](openapi-sdk.yaml). Both of those files are **generated** as part of a build process. 
These are the main parts of this repo you'll need to know about:
- [openapi-raw.yaml](openapi-raw.yaml) -- The functional implementation of the Dropbox Sign API as an OpenAPI spec. This file reflects all public-facing work from Dropbox Sign's API Engineering team and is kept up-to-date.
- [/translations/en.yaml](translations/en.yaml) -- Contains all copy used for the API reference documentation. That includes descriptions for endpoints, parameters, schemas, and more. 
- [/examples/json](examples/json) -- Contains example request and response payloads for the Dropbox Sign API.
- [/examples](examples) -- Contains SDK-specific example requests for each endpoint.

**Note:** Our API reference documentation supports having multiple examples for requests, responses, and SDK implementations for every endpoint. But we need your help to get there! Contributions that help us grow our example coverage are highly valuable at this stage.

## Contributing

We accept contributions and feedback that help us provide a better a developer experience for users of the Dropbox Sign API. Our OpenAPI-based tooling relies on multiple build processes, and this repo contains multiple directories that may seem confusing at first but allow us to more easily manage a single source of truth ([openapi-raw.yaml](openapi-raw.yaml)) and several tightly-coupled SDKs.

A complete contribution workflow would look like the following:

### Clone this repo

Clone repo and create branch with unique name (i.e. `sig-request-java-sample`).

### Changes to the OpenAPI specification

The vast majority of users will not need to make any changes to our OpenAPI specification. If you notice any issues with the spec itself, feel free to open a GitHub issue to allow us to address the problem.

For a detailed explanation of how our [openapi-raw.yaml](openapi-raw.yaml), [openapi.yaml](openapi.yaml), and [openapi-sdk.yaml](openapi-sdk.yaml) files relate to each other and how they are used in the build process, please go to the [openapi-raw.yaml Explanation](#openapi-rawyaml-explanation) section.

### Changes to Translations or Copy

To make copy changes look up the translation placeholder value using the [openapi-raw.yaml](openapi-raw.yaml) file.

Translation placeholders are prepended with `_t__` for easier identification:

```yaml
info:
  title: '_t__OpenApi::TITLE'
  description: '_t__OpenApi::DESCRIPTION'
  termsOfService: 'https://www.hellosign.com/terms'
```

The placeholder corresponds to a value in the [/translations/en.yaml](translations/en.yaml) file, without the `_t__` portion. For the `_t__OpenApi::TITLE` placeholder the matching translation would be:

```yaml
"OpenApi::TITLE": Dropbox Sign API
```

Some translation values are references to other files, like so:

```yaml
"OpenApi::TAG::ACCOUNT::DESCRIPTION": ./markdown/en/tags/account-tag-description.md
```

The matching file can be found at [markdown/en/tags/account-tag-description.md](markdown/en/tags/account-tag-description.md) and any changes should be made directly against that file's contents.

To apply changes made against the translation file(s), simply run the [build](build) script. You will see the changes reflected on the [openapi.yaml](openapi.yaml) and [openapi-sdk.yaml](openapi-sdk.yaml) files.

Translation changes will affect all SDKs so you must rebuild them. See the [Rebuilding SDKs](#rebuilding-sdks) section for more information.

### Changes to Code Samples

Code samples for all our SDKs are located in the [/examples](examples) directory.

Each endpoint has at least one example for each of our SDKs. The Node SDK has two examples (`*.js` and `*.ts`), and we also maintain cURL examples that can be used without our SDKs.

If you make changes to any of the code samples you should also rebuild the SDKs because examples are embedded in the documentation for each SDK.

If you make a change to only a single language you only need to rebuild that SDK, otherwise it is best to rebuild all SDKs. See the [Rebuilding SDKs](#rebuilding-sdks) section for more information.

### Rebuilding SDKs

Any changes to translations/copy, or code samples, will require rebuilding the SDKs. Run the [generate-sdks](generate-sdks) script to get started.

You can rebuild an individual SDK by running `./generate-sdks -t {SDK}` where `SDK` is one of `dotnet`, `java-v1`, `java-v2`, `node`, `php`, `python`, `ruby`.

To rebuild all SDKs run `./generate-sdks -t all`.

Changes will appear against the [/sdks](sdks) directory. Make sure to include these changes in your pull requests!

### Changes to Generated SDK Code

We generate our SDKs using the [OpenAPI Generator](https://openapi-generator.tech/) tool. This tool reads the contents of the [openapi-sdk.yaml](openapi-sdk.yaml) file. It also reads related examples from the [/examples](examples) directory and embeds the contents into the generated documentation.

If you notice a bug in the generated code you can open a GitHub issue against this repo, or fix it yourself and submit a pull request!

Changes must be made against the mustache files located with the templates directory for each SDK:

* [/sdks/dotnet/templates](sdks/dotnet/templates)
* [/sdks/java/templates](sdks/java/templates)
* [/sdks/node/templates](sdks/node/templates)
* [/sdks/php/templates](sdks/php/templates)
* [/sdks/python/templates](sdks/python/templates)
* [/sdks/ruby/templates](sdks/ruby/templates)

You can then run the [generate-sdks](generate-sdks) script to see your changes applied. See the [Rebuilding SDKs](#rebuilding-sdks) section for more information. This script also automatically runs each SDK's unit test suite.

## Testing SDKs Locally

If you make changes to any of the SDKs you are able to try out your changes locally by using the [/sandbox](sandbox) directory. Within this directory we have created the minimum files and configs necessary to allow you to test a local copy of each SDK. The exact method depends on the SDK language but it mostly involves generating an archive that each SDK's package manager can consume.

To begin run the [generate-sdks](generate-sdks) script to rebuild your SDKs locally. See the [Rebuilding SDKs](#rebuilding-sdks) section for more information. This will copy the necessary data into each SDK's [/sdks](sdks) directory.

Next, for the C#, Java, Node, or PHP SDKs run the correct script:

* C# - `./bin/sandbox-dotnet`
* Java - `./bin/sandbox-java`
* Node - `./bin/sandbox-node`
* PHP - `./bin/sandbox-php`

Both Python and Ruby do not need to generate an archive, they can read directly off of the local filesystem.

You can now use your favorite IDE to open the correct sandbox directory as a new project.

* C# - [/sandbox/dotnet](sandbox/dotnet)
* Java - [/sandbox/java](sandbox/java)
* Node - [/sandbox/node](sandbox/node)
* PHP - [/sandbox/php](sandbox/php)
* Python - [/sandbox/python](sandbox/python)
* Ruby - [/sandbox/ruby](sandbox/ruby)

## Issues

Use GitHub issues to report problems or gaps in our documentation, request sample coverage for a specific API feature, or ask for an update to an endpoint description that you think needs attention. Any feedback that will help us create a better experience in our documentation is appreciated. 

## Pull Requests

We welcome pull requests with enhancements to copy or examples in our API reference documentation. Please follow the [development flow](#development-flow-for-contributors) for submitting PRs. The table below contains information about the types of pull requests we're able to support:

| Type of PR  | File(s) to change | Merge requirements |
| ------------- | ------------- | ------------- |
| Changes to existing code examples | <ul><li>Req/res payloads: [/examples/json](examples/json)</li><li>SDK requests: [/examples](examples)</li></ul> | No local build process needed before PR |
| Adding *new* code examples | <ul><li>Req/res payloads: [/examples/json](examples/json)</li><li>SDK requests: [/examples](examples)</li><li>OAS: [openapi-raw.yaml](openapi-raw.yaml) </li></ul>| User must manually add reference to new examples in the `openapi-raw.yaml` file then [generate new OpenAPI spec](#development-flow-for-contributors) before submitting PR |
| Copy changes: descriptions for endpoints, parameters, schemas, or properties | [/translations/en.yaml](translations/en.yaml) | User must [generate new OpenAPI spec](#development-flow-for-contributors) before submitting PR |

## License

This repo is published under the Apache 2.0 license. Please see [LICENSE](https://github.com/hellosign/hellosign-api/blob/main/LICENSE) for more information.

## Thank you

There's a wide world of APIs out there and we (Dropbox Sign's API Engineering team) wanted to thank you for using ours. We've been working hard to improve our developer experience and have some big releases planned for this year (2022). We look forward to showing you that your trust is well placed. 

# Appendix

Additional information about this repo, OpenAPI, and/or related tooling. May not be sequential.

## Migrating to OpenAPI

The API Engineering team at Dropbox Sign adopted the [OpenAPI specification](https://oai.github.io/Documentation/introduction.html) in order to provide a better experience to Dropbox Sign developers in a way that was scalable and sustainable. We're using it as the source of our [API Reference Documentation](https://developers.hellosign.com/api/reference/overview/) and [SDKs](#sdk-coverage), which means both tools stay in total parity with the Dropbox Sign API. 

We have also created in-depth Migration Guides for all our new SDKs:

* [Node Migration Guide](https://developers.hellosign.com/docs/sdks/node/migration-guide/)
* [Python Migration Guide](https://developers.hellosign.com/docs/sdks/python/migration-guide/)
* [PHP Migration Guide](https://developers.hellosign.com/docs/sdks/php/migration-guide/)
* [C# Dotnet Migration Guide](https://developers.hellosign.com/docs/sdks/dotnet/migration-guide/)
* [Ruby Migration Guide](https://developers.hellosign.com/docs/sdks/ruby/migration-guide/)
* [Java Migration Guide](https://developers.hellosign.com/docs/sdks/java/migration-guide/)

## SDK Coverage

| Link to SDK                                                   | Status                                                                                                                      |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| [NodeJS](https://github.com/hellosign/dropbox-sign-node)      | [![status badge](https://img.shields.io/badge/status-stable-brightgreen)](https://github.com/hellosign/dropbox-sign-node)   |
| [PHP](https://github.com/hellosign/dropbox-sign-php)          | [![status badge](https://img.shields.io/badge/status-stable-brightgreen)](https://github.com/hellosign/dropbox-sign-php)    |
| [C# dotnet](https://github.com/hellosign/dropbox-sign-dotnet) | [![status badge](https://img.shields.io/badge/status-stable-brightgreen)](https://github.com/hellosign/dropbox-sign-dotnet) |
| [Python](https://github.com/hellosign/dropbox-sign-python)    | [![status badge](https://img.shields.io/badge/status-stable-brightgreen)](https://github.com/hellosign/dropbox-sign-python) |
| [Ruby](https://github.com/hellosign/dropbox-sign-ruby)        | [![status badge](https://img.shields.io/badge/status-stable-brightgreen)](https://github.com/hellosign/dropbox-sign-ruby)   |
| [Java](https://github.com/hellosign/dropbox-sign-java)        | [![status badge](https://img.shields.io/badge/status-stable-brightgreen)](https://github.com/hellosign/dropbox-sign-java)   |

**Note:** You can help us accelerate the launch of an SDK by being an early adopter. Please jump right in and start using it, then open an Issue in that SDK's GitHub repo when you find something that needs to be fixed. 

## openapi-raw.yaml Explanation

Our source of truth is the [openapi-raw.yaml](openapi-raw.yaml) file. Everything else is built from this file. However it cannot be used directly by our documentation provider nor can we build SDKs from this file. For that we have created our [build](build) script.

This script replaces translation placeholders with their human values.

It generates the [openapi.yaml](openapi.yaml) file which is used for our public documentation, and generates the [openapi-sdk.yaml](openapi-sdk.yaml) file which is very similar to [openapi.yaml](openapi.yaml) but has had directives that are incompatible with the [OpenAPI Generator](https://openapi-generator.tech/) tool removed.

Any changes to our OpenAPI specification _must_ first go through [openapi-raw.yaml](openapi-raw.yaml) to ensure necessary data trickles down to the correct tools.
