/**
 * Home page with generation form
 */

import { useState, useEffect } from "preact/hooks";
import type { Participant, SessionConfig } from "../types.ts";
import { generateId } from "../utils/crypto.ts";
import {
  generateSecretSantaPairs,
  validateParticipants,
} from "../utils/secretSanta.ts";
import {
  saveSession,
  saveLastConfig,
  saveLastParticipants,
  getLastConfig,
  getLastParticipants,
} from "../utils/storage.ts";
import { t } from "../utils/i18n.ts";
import { useLanguage } from "../contexts/LanguageContext.tsx";
import Results from "./Results.tsx";

interface HomePageProps {
  path?: string;
}

export default function HomePage(_props: HomePageProps) {
  // Subscribe to language changes to force re-render (updates placeholders)
  useLanguage();
  const [participantsText, setParticipantsText] = useState("");
  const [budget, setBudget] = useState("");
  const [theme, setTheme] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [session, setSession] = useState<any>(null);

  // Load last parameters on mount
  useEffect(() => {
    const lastParticipants = getLastParticipants();
    const lastConfig = getLastConfig();

    if (lastParticipants.length > 0) {
      setParticipantsText(lastParticipants.map((p) => p.name).join("\n"));
    }

    if (lastConfig) {
      setBudget(lastConfig.budget || "");
      setTheme(lastConfig.theme || "");
      setEventDate(lastConfig.eventDate || "");
      setMessage(lastConfig.message || "");
    }
  }, []);

  const handleGenerate = () => {
    setError("");
    setLoading(true);

    try {
      // Parse participants
      const names = participantsText
        .split("\n")
        .map((name) => name.trim())
        .filter((name) => name.length > 0);

      const participants: Participant[] = names.map((name) => ({
        id: generateId(),
        name,
      }));

      // Validate
      const errors = validateParticipants(participants);
      if (errors.length > 0) {
        setError(errors.join(", "));
        setLoading(false);
        return;
      }

      // Config
      const config: SessionConfig = {
        budget: budget.trim() || undefined,
        theme: theme.trim() || undefined,
        eventDate: eventDate || undefined,
        message: message.trim() || undefined,
      };

      // Generate pairs
      const newSession = generateSecretSantaPairs(participants, config);

      // Save to localStorage
      saveSession(newSession);
      saveLastParticipants(participants);
      saveLastConfig(config);

      setSession(newSession);
    } catch (err: any) {
      setError(err.message || t("generationError"));
    } finally {
      setLoading(false);
    }
  };

  const handleNewDraw = () => {
    setSession(null);
  };

  if (session) {
    return <Results session={session} onNewDraw={handleNewDraw} />;
  }

  // Check if the form has been filled
  const hasFormData =
    participantsText.trim() !== "" ||
    budget.trim() !== "" ||
    theme.trim() !== "" ||
    eventDate !== "" ||
    message.trim() !== "";

  return (
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-red-600 mb-4 animate-fade-in">
          🎅 {t("welcomeTitle")}
        </h1>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          {t("welcomeText")}
        </p>

        {/* Bouton J'ai un code */}
        <a
          href="/reveal"
          class="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all transform hover:scale-105"
        >
          🎁 {t("haveCode")}
        </a>
      </div>

      <div class="bg-white rounded-2xl shadow-2xl p-8 border-4 border-red-500">
        {/* Reset button in top right - visible only if form filled */}
        {hasFormData && (
          <div class="flex justify-end mb-4">
            <button
              type="reset"
              form="secret-santa-form"
              class="px-4 py-2 text-sm bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
              aria-label={t("resetButton")}
            >
              🔄 {t("resetButton")}
            </button>
          </div>
        )}

        <form
          id="secret-santa-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleGenerate();
          }}
          onReset={() => {
            // Le reset natif vide les champs, on doit juste vider l'erreur
            setError("");
          }}
        >
          {/* Participants */}
          <div class="mb-6">
            <label class="block text-lg font-semibold text-gray-800 mb-2">
              {t("participants")} *
            </label>
            <textarea
              class="w-full px-4 py-3 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-[200px] font-mono"
              placeholder={t("participantsPlaceholder")}
              value={participantsText}
              onInput={(e) =>
                setParticipantsText((e.target as HTMLTextAreaElement).value)
              }
              required
              aria-label={t("participants")}
            />
            <p class="text-sm text-gray-600 mt-1">{t("participantsHelp")}</p>
          </div>

          {/* Budget */}
          <div class="mb-6">
            <label class="block text-lg font-semibold text-gray-800 mb-2">
              {t("budget")}
            </label>
            <input
              type="text"
              class="w-full px-4 py-3 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder={t("budgetPlaceholder")}
              value={budget}
              onInput={(e) => setBudget((e.target as HTMLInputElement).value)}
              aria-label={t("budget")}
            />
          </div>

          {/* Theme */}
          <div class="mb-6">
            <label class="block text-lg font-semibold text-gray-800 mb-2">
              {t("theme")}
            </label>
            <input
              type="text"
              class="w-full px-4 py-3 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder={t("themePlaceholder")}
              value={theme}
              onInput={(e) => setTheme((e.target as HTMLInputElement).value)}
              aria-label={t("theme")}
            />
          </div>

          {/* Event Date */}
          <div class="mb-6">
            <label class="block text-lg font-semibold text-gray-800 mb-2">
              {t("eventDate")}
            </label>
            <input
              type="date"
              class="w-full px-4 py-3 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={eventDate}
              onInput={(e) =>
                setEventDate((e.target as HTMLInputElement).value)
              }
              aria-label={t("eventDate")}
            />
          </div>

          {/* Message */}
          <div class="mb-6">
            <label class="block text-lg font-semibold text-gray-800 mb-2">
              {t("message")}
            </label>
            <textarea
              class="w-full px-4 py-3 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-[100px]"
              placeholder={t("messagePlaceholder")}
              value={message}
              onInput={(e) =>
                setMessage((e.target as HTMLTextAreaElement).value)
              }
              aria-label={t("message")}
            />
          </div>

          {/* Error */}
          {error && (
            <div
              class="mb-6 p-4 bg-red-100 border-2 border-red-500 rounded-lg text-red-800"
              role="alert"
            >
              <strong>{t("error")}:</strong> {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            class="w-full py-4 px-6 bg-gradient-to-r from-red-500 to-green-600 text-white text-xl font-bold rounded-lg hover:from-red-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-red-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
            aria-label={t("generateButton")}
          >
            {loading ? `${t("loading")}...` : `🎁 ${t("generateButton")}`}
          </button>
        </form>
      </div>
    </div>
  );
}
