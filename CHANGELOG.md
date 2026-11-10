# Changelog

## 4.0.1

- Remove File editor internal uploads, Supervisor ingress session creation and cookie writes.
- Use only the authenticated Home Assistant Image Upload API; convert still uploads to supported PNG/JPEG and retain GIF.
- Remove public photo-folder fallbacks and upload hints in all four languages; downloads preserve the existing image URL.
- Add 10 layouts, 30 instrument blocks, 20 looks and 20 animated textures.
- Add layered device graphics, zones, materials, X-ray and double-tap actions.
- Scale the whole instrument, support clear surfaces with a fine edge, and embed the glass-fox favicon.
- Keep one language selector in Studio and align full-screen navigation and version refresh.

## 3.8.0

- First HACS-ready Antarikfox Studio distribution, based on Antarikfox Glass 3.8.0.
- Bundle Studio HTML, the custom card and optional themes in `dist/`.
- Preserve the `custom:antarikfox-glass-card` element and existing configuration format.
- Load the adjacent versioned card script directly in Studio.
- Add English installation instructions, full Russian guide, MIT license, issue templates and validation.
- Include RU, EN, Chinese and Japanese interfaces from the supplied source.
