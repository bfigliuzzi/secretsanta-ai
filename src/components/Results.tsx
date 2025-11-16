/**
 * Results display component with generated codes
 */

import { useState } from "preact/hooks";
import type { Session } from "../types.ts";
import { t } from "../utils/i18n.ts";

interface ResultsProps {
  session: Session;
  onNewDraw: () => void;
}

export default function Results({ session, onNewDraw }: ResultsProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const copyLink = async (code: string, index: number) => {
    const url = `${window.location.origin}/reveal?code=${encodeURIComponent(
      code
    )}`;
    await copyToClipboard(url, index + 1000); // Offset to differentiate from codes
  };

  const downloadAllCodes = () => {
    const content = session.pairs
      .map((pair) => {
        return `${pair.giverName}:\n${pair.code}\n\nLink: ${
          window.location.origin
        }/reveal?code=${encodeURIComponent(pair.code)}\n\n---\n\n`;
      })
      .join("");

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `secret-santa-${session.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-green-600 mb-3 animate-fade-in">
          ✨ {t("resultsTitle")}
        </h1>
        <p class="text-lg text-gray-700">{t("resultsSubtitle")}</p>
      </div>

      <div class="mb-6 flex gap-4 justify-center">
        <button
          onClick={downloadAllCodes}
          class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
          aria-label={t("downloadAll")}
        >
          📥 {t("downloadAll")}
        </button>
        <button
          onClick={onNewDraw}
          class="px-6 py-3 bg-gradient-to-r from-red-500 to-green-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all"
          aria-label={t("newDraw")}
        >
          🔄 {t("newDraw")}
        </button>
      </div>

      {/* Code list */}
      <div class="space-y-4">
        {session.pairs.map((pair, index) => (
          <div
            key={pair.code}
            class={`bg-white rounded-xl shadow-lg p-6 border-2 border-green-500 animate-slide-up delay-${index}`}
          >
            <h3 class="text-xl font-bold text-gray-800 mb-3">
              🎁 {t("shareCode")}{" "}
              <span class="text-red-600">{pair.giverName}</span>
            </h3>

            {/* Code */}
            <div class="mb-3">
              <label class="block text-sm font-semibold text-gray-700 mb-1">
                Code:
              </label>
              <div class="flex gap-2">
                <input
                  type="text"
                  value={pair.code}
                  readonly
                  class="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
                  onClick={(e) => (e.target as HTMLInputElement).select()}
                  aria-label={`Code for ${pair.giverName}`}
                />
                <button
                  onClick={() => copyToClipboard(pair.code, index)}
                  class="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all"
                  aria-label={`${t("copyCode")} ${pair.giverName}`}
                >
                  {copiedIndex === index
                    ? "✓ " + t("codeCopied")
                    : t("copyCode")}
                </button>
              </div>
            </div>

            {/* Link */}
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">
                Direct link:
              </label>
              <div class="flex gap-2">
                <input
                  type="text"
                  value={`${
                    window.location.origin
                  }/reveal?code=${encodeURIComponent(pair.code)}`}
                  readonly
                  class="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg bg-gray-50 text-sm overflow-hidden text-ellipsis"
                  onClick={(e) => (e.target as HTMLInputElement).select()}
                  aria-label={`Direct link for ${pair.giverName}`}
                />
                <button
                  onClick={() => copyLink(pair.code, index)}
                  class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                  aria-label={`${t("copyLink")} ${pair.giverName}`}
                >
                  {copiedIndex === index + 1000
                    ? "✓ " + t("linkCopied")
                    : t("copyLink")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
