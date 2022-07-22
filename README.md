# hellosign-openapi &middot; [![License for GitHub](https://img.shields.io/badge/license-Apache%202-blue)](https://github.com/hellosign/hellosign-openapi/blob/main/LICENSE) [![OpenAPI badge](https://img.shields.io/badge/openapi-v3.0.3-orange)](https://spec.openapis.org/oas/v3.0.1) [![PRs and Issues](https://img.shields.io/badge/prs%20&%20issues-Welcome-brightgreen)](#contributing)

This repository contains all source material used for HelloSign's [API Reference Documentation](https://developers.hellosign.com/api/reference/overview/) and official SDKs (work in progress, currently in beta). The docs and SDKs are both powered by the [OpenAPI spec](https://github.com/hellosign/hellosign-openapi/blob/main/openapi.yaml), which also keeps them in sync with our API development.  

This repo is actively maintained by HelloSign's API Engineering team, but you can help us improve these resources for everyone by [contributing](#contributing).

## ⚠ Important: work in progress ⚠

The state of tooling based on this repo:
- HelloSign's [API reference documentation](https://developers.hellosign.com/api/reference/overview/) - launched in production.
- HelloSign [SDKs](#sdk-coverage) - available in beta only. See the "openapi" branch of your preferred SDK.

Warnings:
- Think twice before using the OpenAPI-powered SDKs for anything critical.
- The interfaces may change without warning. Backwards compatibility is not yet guaranteed nor implied.

## Overview

HelloSign's [API Reference Documentation](https://developers.hellosign.com/api/reference/overview/) is built using [openapi.yaml](https://github.com/hellosign/hellosign-openapi/blob/main/openapi.yaml) and the SDKs are built using [openapi-sdk.yaml](https://github.com/hellosign/hellosign-openapi/blob/main/openapi-sdk.yaml). Both of those files are **generated** as part of a build process. 
These are the main parts of this repo you'll need to know about:
- [openapi-raw.yaml](https://github.com/hellosign/hellosign-openapi/blob/main/openapi-raw.yaml) -- The functional implementation of the HelloSign API as an OpenAPI spec. This file reflects all public-facing work from HelloSign's API Engineering team and is kept up-to-date.
- [en.yaml](https://github.com/hellosign/hellosign-openapi/blob/main/translations/en.yaml) -- Contains all copy used for the API reference documentation. That includes descriptions for endpoints, parameters, schemas, and more. 
- [/json](https://github.com/hellosign/hellosign-openapi/tree/main/examples/json) -- Contains example request and response payloads for the HelloSign API.
- [/examples](https://github.com/hellosign/hellosign-openapi/tree/main/examples) -- Contains SDK-specific example requests for each endpoint.

**Note:** Our API reference documentation supports having multiple examples for requests, responses, and SDK implementations for every endpoint. But we need your help to get there! Contributions that help us grow our example coverage are highly valuable at this stage.

## Contributing

We accept contributions and feedback that help us provide a better a developer experience for users of the HelloSign API. Our OpenAPI-based tooling relies on multiple build processes, so we offer the following guidelines around contributing:

### SDKs
All SDK-specific feedback or requests around functionality should be submitted as an Issue in that [SDK's](#sdk-coverage) respective repo. However, SDK-specific code examples should be submitted as a Pull Request to this repo. 

### Issues
Use GitHub issues to report problems or gaps in our documentation, request sample coverage for a specific API feature, or ask for an update to an endpoint description that you think needs attention. Any feedback that will help us create a better experience in our documentation is appreciated. 

### Pull Requests
We welcome pull requests with enhancements to copy or examples in our API reference documentation. Please follow the [development flow](#development-flow-for-contributors) for submitting PRs. The table below contains information about the types of pull requests we're able to support:

| Type of PR  | File(s) to change | Merge requirements |
| ------------- | ------------- | ------------- |
| Changes to existing code examples | <ul><li>Req/res payloads: [/examples/json](https://github.com/hellosign/hellosign-openapi/tree/main/examples/json)</li><li>SDK requests: [/examples](https://github.com/hellosign/hellosign-openapi/tree/main/examples)</li></ul> | No local build process needed before PR |
| Adding *new* code examples | <ul><li>Req/res payloads: [/examples/json](https://github.com/hellosign/hellosign-openapi/tree/main/examples/json)</li><li>SDK requests: [/examples](https://github.com/hellosign/hellosign-openapi/tree/main/examples)</li><li>OAS: [openapi-raw.yaml](https://github.com/hellosign/hellosign-openapi/blob/main/openapi-raw.yaml) </li></ul>| User must manually add reference to new examples in the `openapi-raw.yaml` file then [generate new OpenAPI spec](#development-flow-for-contributors) before submitting PR |
| Copy changes: descriptions for endpoints, parameters, schemas, or properties | [/translations/en.yaml](https://github.com/hellosign/hellosign-openapi/blob/main/translations/en.yaml) | User must [generate new OpenAPI spec](#development-flow-for-contributors) before submitting PR |

## License
This repo is published under the Apache 2.0 license. Please see [LICENSE](https://github.com/hellosign/hellosign-api/blob/main/LICENSE) for more information.

## Thank you
There's a wide world of APIs out there and we (HelloSign's API Engineering team) wanted to thank you for using ours. We've been working hard to improve our developer experience and have some big releases planned for this year (2022). We look forward to showing you that your trust is well placed. 

# Appendix 
Additional information about this repo, OpenAPI, and/or related tooling. May not be sequential.

## Migrating to OpenAPI
The API Engineering team at HelloSign adopted the [OpenAPI specification](https://oai.github.io/Documentation/introduction.html) in order to provide a better experience to HelloSign developers in a way that was scalable and sustainable. We're using it as the source of our [API Reference Documentation](https://developers.hellosign.com/api/reference/overview/) and [SDKs](#sdk-coverage), which means both tools stay in total parity with the HelloSign API. 

## Architectural Overview 
We've made multiple references to build systems throughout this repo. So let's take a step back to examine how the different pieces fit together to make this setup possible. 

**HelloSign API to Raw OpenAPI Spec**  

When a new feature is added or a change is made to the HelloSign API, a new `openapi-raw.yaml` file is created in the hellosign-openapi repo. This file contains the final _structure_ of our OpenAPI spec, but the strings are placeholders (see [translations](#translations)).  

**Strings and Samples**  

This repo (hellosign-openapi) contains _all_ copy and examples used in [HelloSign's API reference documentation](https://developers.hellosign.com/api/reference/overview/). These resources are maintained separately from the OpenAPI spec's structure and can be improved by anyone willing to [contribute](#contributing).  

**Generating the OpenAPI Spec**  

When the build script in this repo runs (`./build`), the placeholder strings in `openapi-raw.yaml` file are replaced by the values in [en.yaml](https://github.com/hellosign/hellosign-openapi/blob/main/translations/en.yaml) to generate the `openapi.yaml` and `openapi-sdk.yaml` files.  

**OpenAPI to Documentation**  

When a new `openapi.yaml` file is pushed to the main branch of this repo, HelloSign's developer documentation is automatically rebuilt. During that process, the external references inside `openapi.yaml` resolve to their corresponding [examples](https://github.com/hellosign/hellosign-openapi/tree/main/examples) in the documentation.  

**OpenAPI to SDKs**. 

Each respective SDK has it's own repository where the hellosign-openapi repo serves as a submodule. When the `./build` script runs in the SDK's repo, the `openapi-sdk.yaml` file is used to generate a new SDK. The SDKs are currently in beta, but we intend to automate the build process as test coverage grows and we're able to rebuild with minimal risk. 

## SDK Coverage  

The SDKs based on our OpenAPI spec are a work in progress and none have moved past beta quite yet. They're currently available as an "openapi" branch in each respective repo.

| Link to SDK | Status |
| --- | --- |
| [NodeJS](https://github.com/HelloFax/hellosign-nodejs-sdk) | [![beta badge](https://img.shields.io/badge/status-beta-red)](https://github.com/HelloFax/hellosign-nodejs-sdk) |
| [PHP](https://github.com/hellosign/hellosign-php-sdk/tree/openapi) | [![beta badge](https://img.shields.io/badge/status-beta-red)](https://github.com/hellosign/hellosign-php-sdk/tree/openapi) |
| C# [dotnet](https://github.com/hellosign/hellosign-dotnet-sdk/tree/openapi) | [![beta badge](https://img.shields.io/badge/status-beta-red)](https://github.com/hellosign/hellosign-dotnet-sdk/tree/openapi) |
| [Python](https://github.com/hellosign/hellosign-python-sdk/tree/openapi) | [![beta badge](https://img.shields.io/badge/status-beta-red)](https://github.com/hellosign/hellosign-python-sdk/tree/openapi) |
| [Ruby](https://github.com/HelloFax/hellosign-ruby-sdk) | [![beta badge](https://img.shields.io/badge/status-beta-red)](https://github.com/HelloFax/hellosign-ruby-sdk) |
| [Java](https://github.com/hellosign/hellosign-java-sdk/tree/openapi) | [![beta badge](https://img.shields.io/badge/status-beta-red)](https://github.com/hellosign/hellosign-java-sdk/tree/openapi) |

**Note:** You can help us accelerate the launch of an SDK by being an early adopter. Please jump right in and start using it, then open an Issue in that SDK's GitHub repo when you find something that needs to be fixed. 

## Development Flow for Contributors

1. Clone repo and create branch with unique name (i.e. `sig-request-java-sample`).
2. Make change to copy or code samples.
3. Run build script with `./build`*.
4. [Optional] Preview API reference locally by running `openapi preview-docs openapi.yaml`. This requires the [Redocly CLI](https://redocly.com/docs/cli/).
5. Push branch and create pull request. A preview build will automatically complete in ~5 minutes. 
6. Your PR will be reviewed and processed by the API team. 

*You'll need Docker running locally to run the build script.

