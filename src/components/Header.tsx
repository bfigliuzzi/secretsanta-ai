/**
 * Header component with navigation and language selector
 */

import type { Language } from "../types.ts";
import { t } from "../utils/i18n.ts";
import { useLanguage } from "../contexts/LanguageContext.tsx";

export default function Header() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header class="bg-gradient-to-r from-red-600 to-green-600 text-white shadow-lg">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <a
            href="/"
            class="flex items-center gap-3 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 rounded-lg"
            aria-label={t("backToHome")}
          >
            <span class="text-4xl" aria-hidden="true">
              🎅
            </span>
            <div>
              <h1 class="text-2xl font-bold">{t("appTitle")}</h1>
              <p class="text-sm opacity-90">{t("appSubtitle")}</p>
            </div>
          </a>

          <div class="flex items-center gap-2">
            <button
              onClick={() => handleLanguageChange("fr")}
              class={`px-3 py-1 rounded-lg font-semibold transition-all ${
                language === "fr"
                  ? "bg-white text-red-600"
                  : "bg-red-700 hover:bg-red-800"
              }`}
              aria-label="Français"
            >
              FR
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              class={`px-3 py-1 rounded-lg font-semibold transition-all ${
                language === "en"
                  ? "bg-white text-green-600"
                  : "bg-green-700 hover:bg-green-800"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
