## Upload path corrected for HACS review

Photo uploads now use only Home Assistant's authenticated `/api/image/upload` endpoint. File editor internal API calls, Supervisor ingress-session creation and direct cookie writes have been removed. No uploaded photo is written to the public `www` directory by the card.

A failed upload offers a local download and keeps the existing image URL. It no longer creates a predicted `/local/` URL or suggests placing personal photos there. Upload instructions have been corrected in Russian, English, Chinese and Japanese. Still images are prepared as PNG/JPEG for API compatibility; GIF is kept unchanged.

Existing public-folder photos are not migrated or deleted automatically. Re-upload them through the editor, verify the new URLs, and remove only the old personal photo files if appropriate.

## Studio and instrument additions

- 10 layouts, 30 native instrument blocks, 20 looks and 20 animated textures.
- Layered device graphics, clickable zones, materials and an X-ray view.
- Single tap, double tap and hold actions without conflicting single/double commands.
- Whole-instrument scaling and a clear surface with a fine edge.
- One language selector in Studio, an embedded glass-fox favicon and consistent full-screen URLs.
- Version checking when returning to Studio and a cache-refresh button.

## Installation

Update the JavaScript resource to `?v=4.0.1` and reload the browser. Install the updated Studio HTML beside the JavaScript file and open `antarikfox-studio.html?v=4.0.1`. Keep only one registered resource for this custom element. The theme remains optional.

## Validation

Local validation covered 28 groups across instrument/catalogue/gesture tests and upload tests, including PNG/JPEG/GIF/WebP conversion, alpha preservation, error responses, offline previews and endpoint restrictions. The new textures completed a 2,400-frame canvas stress run without errors. JavaScript and package checks passed. Live Home Assistant/device behavior still requires installation testing; no full browser or user HA integration run is claimed.
