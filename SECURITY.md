# Security and Privacy

Secret Santa Go is designed with security and privacy as top priorities.

## Zero-Server Architecture

**All data stays on your device:**

- ❌ No backend server
- ❌ No remote database
- ❌ No external APIs
- ✅ Everything runs in your browser

## Code Encoding

### Base64 URL-safe

We use simple and efficient **base64 URL-safe encoding**.

**Method:** Base64 with UTF-8 support

- Universal web standard
- Compatible with all browsers
- Supports emojis and accented characters
- URL-safe (no +, / or =)

### How it works

1. **Generation:**

   ```
   Data (names, budget, etc.)
   → JSON
   → UTF-8 encoding
   → Base64 URL-safe
   → Unique code
   ```

2. **Reveal:**
   ```
   Code
   → Base64 decode
   → UTF-8 decode
   → JSON
   → Readable data
   ```

### Code contents

An encoded code contains:

- Giver name
- Receiver name
- Budget (optional)
- Theme (optional)
- Date (optional)
- Message (optional)
- Session ID

**Important:** Anyone with the code can decode it.

## Local Storage

Sessions are saved in browser Local Storage:

- ✅ Accessible only on your device
- ✅ Persistent across visits
- ⚠️ Clearable by user

Clear data:

```javascript
// In browser console
localStorage.clear();
```

## Privacy

### No Tracking

- ❌ No Google Analytics
- ❌ No third-party cookies
- ❌ No fingerprinting
- ❌ No personal data collection

### No Data Transmission

- ❌ No network requests (except static assets)
- ❌ No data sent to server
- ❌ No telemetry

### Service Worker

The Service Worker only:

- ✅ Caches assets (HTML, CSS, JS)
- ✅ Enables offline mode
- ✅ Improves performance

It **makes no network requests** to send data.

## Security Limitations

### Physical Access

If someone has access to your device:

- ⚠️ Can view Local Storage (past sessions)
- ⚠️ Can copy codes
- ✅ **Mitigation:** Use screen lock

### Code Sharing

If you share codes via insecure channel (SMS, email, WhatsApp):

- ⚠️ Code can be intercepted
- ⚠️ Person can reveal Secret Santa prematurely
- ✅ **Mitigation:** Share via secure channel (Signal, direct messages)

### Source Code Access

JavaScript code is visible (like any website):

- ✅ Source code is open source and auditable
- ✅ Codes are simply base64 encoded
- ⚠️ Anyone with access can decode
- ✅ **Mitigation:** Only share codes with right people

### No Authentication

There's no login/password:

- ⚠️ Anyone with code can reveal it
- ✅ By design: code IS the authentication
- ✅ **Mitigation:** Only share codes with right people

## Security Audit

### Open Source

Code is completely open source and auditable:

- Check `src/utils/crypto.ts` for base64 encoding
- Check `src/utils/storage.ts` for storage
- No obfuscated or minified code (in dev)

### Dependencies

We use minimal and verified dependencies:

- `preact`: Actively maintained framework
- `vite`: Trusted build tool
- `tailwindcss`: Pure CSS, no JS
- `vite-plugin-pwa`: Official Vite plugin
- `workbox`: Google Service Worker

All are regularly updated.

### Vulnerabilities

Check vulnerabilities:

```bash
npm audit
```

## Responsible Disclosure

Found a security issue? Please:

1. **DO NOT** open a public issue
2. Email: security@secretsanta-go.app (if applicable, or use GitHub Security)
3. Include detailed description and reproduction steps

We will:

- Respond within 48h
- Fix within 7 days (if critical)
- Credit you (if desired)

## Summary

Secret Santa Go is secure by design:

- ✅ Zero-server: Your data stays with you
- ✅ Base64 encoding: Codes readable only via app
- ✅ No tracking: Zero telemetry
- ✅ Open source: Auditable code
- ✅ Minimal dependencies: Reduced attack surface

**For standard Secret Santa use, this is more than sufficient.**

For extreme security requirements (real sensitive data, hostile environment), this is probably not the right solution. Use a solution with strong authentication and end-to-end encryption instead.

---

**Last updated:** November 16, 2025
