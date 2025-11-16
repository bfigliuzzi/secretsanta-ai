# 🎅 Secret Santa Go - Secret Santa Generator PWA

A modern Progressive Web App (PWA) to easily organize your Secret Santa gift exchanges. Lightweight, secure, and works offline.

> 🧪 **Vibecoding Experiment**: This project was developed as an exploration of vibecoding methodology - an experimental approach to rapid, AI-assisted development.

## ✨ Features

### 🎁 Pair Generation

- **Smart Algorithm**: Random pair generation without repetition
- **Exclusions**: Prevent certain people from gifting each other
- **Customization**: Set a budget, theme, event date, and custom message

### 🔐 Security

- **Base64 Encoding**: All codes are encoded with URL-safe base64
- **Unique Codes**: Each participant receives a unique and secure code
- **No Server**: Everything works locally, your data stays private

### 💾 Local Storage

- **Auto-save**: Settings and sessions are saved in Local Storage
- **Easy Recovery**: Retrieve your last settings for the next draw

### 🌐 Multi-language Support

- **French** and **English** included
- One-click language switching

### 📱 PWA

- **Installation**: Install the app on your device like a native application
- **Offline**: Works without Internet connection
- **Auto-updates**: The app updates automatically

### 🎨 Festive Design

- **Christmas Theme**: Red, green, and white colors
- **Animations**: Animated snowflakes and reveal effects
- **Responsive**: Works perfectly on mobile and desktop

### ♿ Accessibility

- **Keyboard Navigation**: Fully keyboard accessible
- **ARIA Labels**: Descriptive labels for screen readers
- **Good Contrast**: Meets WCAG accessibility standards

## 🚀 Usage

### Home Page

1. **Enter participant names** (one per line)
2. **Optional**: Set a budget, theme, date, and message
3. Click **"Generate codes"**
4. **Distribute codes** or share direct links to each participant

### Reveal Page

1. Participants receive their code or direct link
2. They paste the code in the provided field or click the link
3. Click **"Reveal"**
4. **Festive animation** then displays the name of the person to give a gift to

### Direct Links

Codes can be shared via direct links:

```
https://your-domain.com/reveal\?code\=YOUR_CODE_HERE
```

## 🛠️ Tech Stack

- **Framework**: Preact (lightweight React alternative)
- **Build**: Vite
- **Styling**: TailwindCSS v4
- **Language**: TypeScript
- **PWA**: vite-plugin-pwa with Workbox
- **Router**: preact-router
- **Encoding**: Base64 URL-safe encoding
- **Testing**: Vitest with jsdom and @testing-library/preact

## 📦 Installation and Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens http://localhost:5173

### Production Build

```bash
npm run build
```

Files are generated in the \`dist/\` folder

### Production Preview

```bash
npm run preview
```

### Testing

```bash
# Run tests in watch mode
npm test

# Run tests once (CI mode)
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 📁 Project Structure

```
src/
├── components/          # UI Components
│   ├── Header.tsx      # Header with language selector
│   ├── HomePage.tsx    # Home page with form
│   ├── Results.tsx     # Display generated codes
│   ├── RevealPage.tsx  # Reveal page
│   ├── Footer.tsx      # Footer with legal links
│   ├── LegalPage.tsx   # Legal notice page
│   ├── PrivacyPage.tsx # Privacy policy page
│   └── TermsPage.tsx   # Terms of service page
├── contexts/           # React Contexts
│   └── LanguageContext.tsx # Language management
├── utils/              # Utilities
│   ├── crypto.ts       # Base64 encoding/decoding
│   ├── storage.ts      # Local Storage management
│   ├── secretSanta.ts  # Pair generation algorithm
│   ├── i18n.ts         # Internationalization (FR/EN)
│   └── debug.ts        # Debug utilities
├── test/               # Test Files
│   ├── setup.ts        # Test configuration
│   ├── secretSanta.test.ts
│   ├── storage.test.ts
│   ├── i18n.test.ts
│   └── crypto.test.ts
├── types.ts            # TypeScript Types
├── app.tsx             # Root component with routing
├── app.css             # Custom CSS animations
├── index.css           # Global styles + TailwindCSS
└── main.tsx            # Entry point
```

## 🔒 Security and Privacy

- **No data sent to a server**: Everything works locally
- **Base64 encoding**: Codes are encoded with URL-safe base64
- **Unique codes**: Each code is unique and non-guessable
- **No tracking**: No analytics, no cookies

## 🎯 Generation Algorithm

The algorithm uses:

1. **Fisher-Yates shuffle** to mix participants
2. **Exclusion validation** to respect constraints
3. **Retry with timeout** (max 1000 attempts) to find a valid solution
4. **Impossibility check** to avoid infinite loops

## 🌟 Advanced Features

### Exclusions

You can prevent certain pairs:

- Married couples
- Members of the same family
- People who exchanged last year

### Customization

- **Budget**: Indicate a maximum amount
- **Theme**: Handmade gifts, treats, etc.
- **Date**: Event date reminder
- **Message**: Instructions or custom message

## 📱 PWA Installation

### On Mobile (Android/iOS)

1. Open the app in your browser
2. Tap the "Share" or "More options" menu
3. Select "Add to Home Screen"

### On Desktop (Chrome/Edge)

1. Click the install icon in the address bar
2. Confirm installation

## 🧪 About Vibecoding

This project serves as a practical demonstration of vibecoding - an experimental development methodology that explores new approaches to building software with AI assistance. The entire application was developed using vibecoding principles, showcasing:

- Rapid feature implementation
- AI-assisted code generation
- Test-driven development with AI
- Documentation-first approach
- Privacy-focused architecture

Visit the repository to explore the codebase and learn more about the vibecoding process!

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or pull request.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

MIT

## 🎄 Happy Holidays!

Enjoy your Secret Santa gift exchanges stress-free! 🎅🎁

---

Developed with ❤️ to make Christmas more magical ✨

**Note**: This is a vibecoding experiment exploring innovative AI-assisted development approaches.
