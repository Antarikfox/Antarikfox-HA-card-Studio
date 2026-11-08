# Publication checklist

Planned repository: `Antarikfox/Antarikfox-HA-card-Studio` (public, personal account).
Description: Visual Home Assistant card builder with glass effects, live textures, state photos and multilingual Studio.
Topics: home-assistant, hacs, lovelace, custom-card, dashboard, card-builder, antarikfox.
Category: **plugin** (Dashboard). This is not a backend integration; hassfest and brands do not apply.

1. Create the repository with issues enabled; push these files to `main`.
2. Set the description and topics above.
3. Wait for **all** Validate jobs to pass, without ignored HACS checks.
4. Create a full release `v3.8.0` after validation; attach all three `dist` files.
5. Add `Antarikfox/Antarikfox-HA-card-Studio` alphabetically to the JSON array in `plugin`
   on a new branch of the personal fork of `hacs/default`, based on upstream `master`.
6. Use the current upstream PR template, include exact successful workflow run and
   release URLs, enable maintainer edits, and submit. Do not request reviewers.

Do not mark checks complete before they actually pass. Submission is not acceptance.
The optional theme remains a manually copied companion; no separate theme catalog
request is included in this package.

Local validation completed: card and embedded Studio JavaScript syntax, relative
resource path and package structure. Browser runtime and real Home Assistant tests
still need to be performed; a local Chromium launch was blocked by the environment.
