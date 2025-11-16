# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-11-16

### Changed

- Replaced AES-GCM encryption with base64 URL-safe encoding
- Simplified crypto module (now synchronous)
- Improved performance by removing async crypto operations

### Breaking Changes

- Codes from v1.0.0 incompatible with v1.1.0
- `encryptData`/`decryptData` renamed to `encodeData`/`decodeData`
- `generateSecretSantaPairs` is now synchronous

## [1.0.0] - 2025-10-26

### Added

- Secret Santa pair generator
- Base64 encoding for codes
- Exclusion support
- Customization (budget, theme, date, message)
- French and English i18n
- PWA with offline support
- Animated UI with festive design
