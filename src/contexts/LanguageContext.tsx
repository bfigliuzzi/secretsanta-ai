/**
 * Contexte global pour la langue
 */

import { createContext } from "preact";
import type { ComponentChildren } from "preact";
import { useContext, useState } from "preact/hooks";
import type { Language } from "../types.ts";
import { setLanguage as setI18nLanguage } from "../utils/i18n.ts";
import {
  saveLanguage,
  getLanguage as getStoredLanguage,
} from "../utils/storage.ts";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ComponentChildren;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = getStoredLanguage();
    setI18nLanguage(stored as Language);
    return stored as Language;
  });

  const setLanguage = (lang: Language) => {
    setI18nLanguage(lang);
    setLanguageState(lang);
    saveLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
