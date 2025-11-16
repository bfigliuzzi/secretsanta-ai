import Router from "preact-router";
import Header from "./components/Header.tsx";
import HomePage from "./components/HomePage.tsx";
import RevealPage from "./components/RevealPage.tsx";
import FAQPage from "./components/FAQPage.tsx";
import LegalPage from "./components/LegalPage.tsx";
import PrivacyPage from "./components/PrivacyPage.tsx";
import TermsPage from "./components/TermsPage.tsx";
import Footer from "./components/Footer.tsx";
import PWABadge from "./PWABadge.tsx";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";
import "./app.css";

export function App() {
  return (
    <LanguageProvider>
      <div class="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50 flex flex-col">
        <Header />
        <main class="container mx-auto px-4 py-8 flex-grow">
          <Router>
            <HomePage path="/" />
            <RevealPage path="/reveal" />
            <FAQPage path="/faq" />
            <LegalPage path="/legal" />
            <PrivacyPage path="/privacy" />
            <TermsPage path="/terms" />
          </Router>
        </main>
        <Footer />
        <PWABadge />

        {/* Flocons de neige */}
        <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
        </div>
      </div>
    </LanguageProvider>
  );
}
