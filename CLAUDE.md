# hellosign-openapi

Central repo for the Dropbox Sign (HelloSign) OpenAPI spec and SDK generation.

## What this repo does

- Holds the generated `openapi-raw.yaml` (from the `sign` PHP repo), translates it into `openapi.yaml` and `openapi-sdk.yaml`
- Generates all public SDKs from the spec into `sdks/<lang>/`
- Copies finalized SDK code into per-language public repos via `repos/<lang>/`

## Key scripts

| Script | Purpose |
|--------|---------|
| `./build` | Translate spec, produce `openapi.yaml` + `openapi-sdk.yaml`, copy examples into sandboxes |
| `./generate-sdks -t <sdk\|all>` | Regenerate SDK code under `sdks/` |
| `./copy-sdks -t <sdk> -v <version>` | Copy built SDK into `repos/<sdk>/` (clones public repo if needed) |

## SDKs

Languages: `dotnet`, `java-v1`, `java-v2`, `node`, `php`, `python`, `ruby`

Each SDK has:
- `sdks/<sdk>/VERSION` — current version string
- `sdks/<sdk>/openapi-config.yaml` — generator config (version field name varies by language: `npmVersion`, `packageVersion`, `artifactVersion`, `gemVersion`)

Both files must agree on the version number. SDKs version independently following SemVer.

## Branches

- `main` — development branch. Merging here does not release anything.
- `oas-release` — release branch. SDK releases are cut from here via cherry-pick or merge PR.

## Expected directory layout

```
~/Projects/
├── sign/                          (dropbox-internal/sign — PHP monorepo, private)
├── openapi/
│   └── hellosign-openapi/         (this repo, public)
│       └── repos/
│           ├── dotnet/
│           ├── java-v1/           (branch v1 of dropbox-sign-java)
│           ├── java-v2/           (default main branch)
│           ├── node/
│           ├── php/
│           ├── python/
│           └── ruby/
└── sdk-tester/                    (hellosign/sdk-tester — public)
```

## Related repos

| Repo | Purpose |
|------|---------|
| `dropbox-internal/sign` | PHP API source; `./scripts/bin/openapi-generate` produces `openapi-raw.yaml` |
| `hellosign/dropbox-sign-dotnet` | NuGet: `Dropbox.Sign` |
| `hellosign/dropbox-sign-java` | Maven: `com.dropbox.sign:dropbox-sign` (branch `main` = v2, branch `v1` = legacy) |
| `hellosign/dropbox-sign-node` | npm: `@dropbox/sign` |
| `hellosign/dropbox-sign-php` | Packagist: `dropbox/sign` |
| `hellosign/dropbox-sign-python` | PyPI: `dropbox-sign` |
| `hellosign/dropbox-sign-ruby` | RubyGems: `dropbox-sign` |
| `hellosign/sdk-tester` | Integration test harness against QA/staging |
| Fern docs repo | Builds developers.hellosign.com |

## Translations

`translations/en.yaml` maps translation keys to English strings (or markdown file paths). If `./build` reports "Untranslated strings", add missing keys here, grouped near related strings.

## Public repo rules

All repos this project touches are public. Never commit:
- Customer emails, account IDs, internal hostnames, Slack URLs, Jira tickets
- Tracing IDs, feature-flag names, screenshots of internal tools
- Use `test_user@example.com`, `test_account_id`, `api.hellosign.com` as placeholders

## CI expectations

PRs on this repo must have no uncommitted diffs after running `./build && ./generate-sdks -t all`. CI enforces this.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| `./build` lists "Untranslated" strings | Add to `translations/en.yaml`, rerun `./build` |
| CI says "uncommitted changes" | Rerun `./build && ./generate-sdks -t all` locally, commit the diff |
| `./copy-sdks` fails "no such directory" | Clone missing SDK repo into `repos/` |
| sdk-tester Docker build hangs on Maven | See sdk-tester README troubleshooting section |
| Node SDK dependencies stale | Dependabot/Renovate not yet enabled; bump manually in release PR |

## Obsolete repos (do not use)

Anything named `HelloFax/*`, `hellosign/hellosign-<lang>-sdk`, `dropbox-internal/sign-sdk-tester`, or `HelloFax/sdk-tester` is archived.

The older runbook references `./generate-sdk` (singular) — that's a typo; the real script is `./generate-sdks`.

## Release flow

Use the `/release` slash command for an interactive guided release.

## Team contacts

- **Sign API team** — owns the spec, monorepo, and release cut. Slack: `#ask-sign`
- **API Support** — co-owns SDK quality, reviews Fern PRs. Slack: `#ask-sign-support`
