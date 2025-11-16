# Deployment Guide

## Build for Production

```bash
npm install
npm run build
```

Output in `dist/` folder.

## Deploy to Static Host

The app is a static PWA - deploy `dist/` folder to any static host:

### Netlify

```bash
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Vercel

```bash
# vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### GitHub Pages

```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

### AWS S3 + CloudFront

```bash
aws s3 sync dist/ s3://your-bucket/
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## Requirements

- HTTPS (for PWA features)
- Modern browser support
- No server-side logic needed

## Environment

No environment variables required. App is fully client-side.

## Custom Domain

Configure your DNS:

```
A record: @ → Host IP
CNAME: www → yourdomain.com
```

Ensure HTTPS is enabled for PWA functionality.
