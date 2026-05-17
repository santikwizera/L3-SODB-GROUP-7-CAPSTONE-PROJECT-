# Changelog

## 2026-05-17 — i18n cleanup

- Removed inline `onchange` handler from the language selector in `Hospitals.html`.
- Rely on `lang.js`'s `addLanguageListeners()` to attach change listeners to `.lang-selector` elements.
- No functional change to translations; this improves separation of concerns and avoids duplicate handlers.
- Removed inline `onchange` handlers from `home.html` and `about.html` as well.
