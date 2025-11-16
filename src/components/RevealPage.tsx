/**
 * Secret Santa reveal page
 */

import { useState, useEffect } from "preact/hooks";
import type { EncryptedData } from "../types.ts";
import { decodeData } from "../utils/crypto.ts";
import { t } from "../utils/i18n.ts";

interface RevealPageProps {
  path?: string;
}

export default function RevealPage(_props: RevealPageProps) {
  const [code, setCode] = useState("");
  const [revealed, setRevealed] = useState<EncryptedData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  // Check if a code is in the URL on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlCode = params.get("code");
    if (urlCode) {
      setCode(urlCode);
      handleReveal(urlCode);
    }
  }, []);

  const handleReveal = (codeToReveal?: string) => {
    const targetCode = codeToReveal || code;
    if (!targetCode.trim()) return;

    setError("");
    setLoading(true);

    try {
      const data = decodeData(targetCode.trim());

      // Reveal animation
      setIsRevealing(true);
      setTimeout(() => {
        setRevealed(data);
        setIsRevealing(false);
      }, 2000);
    } catch (err: any) {
      setError(err.message || t("invalidCode"));
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCode("");
    setRevealed(null);
    setError("");
    setLoading(false);
    setIsRevealing(false);
    // Clean up the URL
    window.history.replaceState({}, "", window.location.pathname);
  };

  if (isRevealing) {
    return (
      <div class="max-w-2xl mx-auto text-center">
        <div class="bg-white rounded-2xl shadow-2xl p-12 border-4 border-red-500">
          <h1 class="text-3xl font-bold text-red-600 mb-6 animate-pulse">
            {t("revealingTitle")}
          </h1>
          <div class="text-6xl animate-bounce mb-6">🎁</div>
          <div class="flex justify-center gap-2">
            <div class="w-3 h-3 bg-red-500 rounded-full animate-bounce bounce-delay-0"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full animate-bounce bounce-delay-150"></div>
            <div class="w-3 h-3 bg-red-500 rounded-full animate-bounce bounce-delay-300"></div>
          </div>
        </div>
      </div>
    );
  }

  if (revealed) {
    return (
      <div class="max-w-2xl mx-auto">
        <div class="bg-gradient-to-br from-red-50 to-green-50 rounded-2xl shadow-2xl p-8 border-4 border-green-500 animate-fade-in">
          <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-green-600 mb-4">
              🎅 {t("giftFor")}
            </h1>
            <div class="text-6xl font-extrabold text-red-600 mb-6 animate-scale-in">
              {revealed.receiverName}
            </div>
          </div>

          <div class="space-y-4 bg-white rounded-xl p-6 shadow-lg">
            {revealed.budget && (
              <div class="flex items-start">
                <span class="text-2xl mr-3">💰</span>
                <div>
                  <strong class="text-gray-800">{t("budgetLabel")}:</strong>
                  <p class="text-gray-700">{revealed.budget}</p>
                </div>
              </div>
            )}

            {revealed.theme && (
              <div class="flex items-start">
                <span class="text-2xl mr-3">🎨</span>
                <div>
                  <strong class="text-gray-800">{t("themeLabel")}:</strong>
                  <p class="text-gray-700">{revealed.theme}</p>
                </div>
              </div>
            )}

            {revealed.eventDate && (
              <div class="flex items-start">
                <span class="text-2xl mr-3">📅</span>
                <div>
                  <strong class="text-gray-800">{t("dateLabel")}:</strong>
                  <p class="text-gray-700">
                    {new Date(revealed.eventDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}

            {revealed.message && (
              <div class="flex items-start">
                <span class="text-2xl mr-3">💌</span>
                <div>
                  <strong class="text-gray-800">{t("messageLabel")}:</strong>
                  <p class="text-gray-700 whitespace-pre-wrap">
                    {revealed.message}
                  </p>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleReset}
            class="w-full mt-6 py-3 px-6 bg-gradient-to-r from-red-500 to-green-600 text-white text-lg font-bold rounded-lg hover:from-red-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all transform hover:scale-105"
            aria-label={t("anotherReveal")}
          >
            🔄 {t("anotherReveal")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-red-600 mb-4 animate-fade-in">
          🎁 {t("revealTitle")}
        </h1>
      </div>

      <div class="bg-white rounded-2xl shadow-2xl p-8 border-4 border-red-500">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleReveal();
          }}
        >
          <div class="mb-6">
            <label class="block text-lg font-semibold text-gray-800 mb-2">
              {t("enterCode")}
            </label>
            <textarea
              class="w-full px-4 py-3 border-2 border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent min-h-[120px] font-mono text-sm"
              placeholder={t("codePlaceholder")}
              value={code}
              onInput={(e) => setCode((e.target as HTMLTextAreaElement).value)}
              required
              aria-label={t("enterCode")}
            />
          </div>

          {error && (
            <div
              class="mb-6 p-4 bg-red-100 border-2 border-red-500 rounded-lg text-red-800"
              role="alert"
            >
              <strong>{t("error")}:</strong> {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !code.trim()}
            class="w-full py-4 px-6 bg-gradient-to-r from-red-500 to-green-600 text-white text-xl font-bold rounded-lg hover:from-red-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-red-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
            aria-label={t("revealButton")}
          >
            {loading ? `${t("loading")}...` : `🎄 ${t("revealButton")}`}
          </button>
        </form>
      </div>
    </div>
  );
}
