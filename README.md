# hellosign/hellosign-openapi

This repo contains the official HelloSign OpenAPI specification.

## ⚠ This repo is not yet ready for production use ⚠

We are working hard on getting this repo ready, but it is not there, yet!

You should think twice before using this spec on anything critical.

The interfaces may change without warning. Backwards compatibility is not yet
guaranteed nor implied!

# Requirements

Docker (or Docker-compatible CLI) is used to generate the final OAS file.

If you wish to view the documentation in your browser you will also need `redoc-cli`. 

# Making changes and build process

Only `openapi-raw.yaml` should be manually edited.

The `build` script automates  the process of building the final OAS file. The
steps taken include:

## Translations

`openapi-raw.yaml` includes translation placeholders that look like:

```yaml
info:
  title: '_t__OpenApi::TITLE'
```

All translation placeholders are prepended with `_t__`. Translations are stored
in the `translations` directory. The translation keys in these files are not
prepended with `_t__`, ie:

```yaml
"OpenApi::TITLE": HelloSign API
"OpenApi::DESCRIPTION": HelloSign v3 API
```

Translations work in a fallback method when building. If you choose a language
file that does not include a translation for any specific string, it will
fallback to the default [English version](translations/en.yaml). If no
translation exists in the fallback  language then it will be reported after
the build process.

## components/examples

Examples listed under `#/components/examples` will reference files in the
[examples/json](examples/json) directory. For instance,

```yaml
components:
  examples:
    AccountCreateRequestDefaultExample:
      summary: 'Default Example'
      value:
        $ref: examples/json/AccountCreateRequestDefaultExample.json

```

## SDK examples

SDK examples are files located in the [examples](examples) directory. These are
different to the OpenAPI examples listed under `#/components/examples` as these
are copy & paste examples for each of our supported SDKs.

We use Redoc's [x-codeSamples](https://redocly.com/docs/api-reference-docs/specification-extensions/x-code-samples/)
custom extension to define examples under each path:

```yaml
paths:
  /account/create:
    post:
      tags:
        - Account
      summary: '_t__AccountCreate::SUMMARY'
      description: '_t__AccountCreate::DESCRIPTION'
      operationId: accountCreate
      # [...]
      x-codeSamples:
        -
          lang: PHP
          label: PHP
          source:
            $ref: examples/AccountCreate.php
        -
          lang: JavaScript
          label: JavaScript
          source:
            $ref: examples/AccountCreate.js

```

These examples are used during each SDK's build process when generating their
documentation.

## SDK-compatible OAS spec

As we use several custom Redocly-specific custom extensions, we have to remove a
few that are not compatible with [openapi-generator](https://openapi-generator.tech/)
which we use to generate our SDKs.

This compatible file is written to [openapi-sdk.yaml](openapi-sdk.yaml).

## Building

Simply run `./build` to kick things off. The process should be fully automated.
