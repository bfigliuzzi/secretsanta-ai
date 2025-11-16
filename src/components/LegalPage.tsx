/**
 * Page Mentions Légales
 */

import { useLanguage } from "../contexts/LanguageContext.tsx";
import { t } from "../utils/i18n.ts";

export default function LegalPage(_props: { path?: string }) {
  const { language } = useLanguage();

  return (
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">{t("legalTitle")}</h1>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("legalEditor")}
          </h2>
          <p class="text-gray-700 mb-2">
            <strong>{t("legalEditorContent")}</strong>
          </p>
          <p class="text-gray-700 mb-2">{t("legalEditorApp")}</p>
          <p class="text-gray-700 mb-2">
            {t("legalEditorSource")}{" "}
            <a
              href="https://github.com/VOTRE-USERNAME/secretsanta-ai"
              class="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("legalHosting")}
          </h2>
          <p class="text-gray-700 mb-2">{t("legalHostingContent")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("legalIP")}
          </h2>
          <p class="text-gray-700 mb-4">{t("legalIPLicense")}</p>
          <p class="text-gray-700 mb-4">{t("legalIPFree")}</p>
          <p class="text-gray-700">{t("legalIPSource")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("legalData")}
          </h2>
          <p class="text-gray-700 mb-4">
            <strong>{t("legalDataNone")}</strong>
          </p>
          <p class="text-gray-700 mb-4">{t("legalDataLocal")}</p>
          <p class="text-gray-700">
            {t("legalDataMore")}{" "}
            <a href="/privacy" class="text-blue-600 hover:underline">
              {t("legalDataPrivacy")}
            </a>
            .
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("legalCookies")}
          </h2>
          <p class="text-gray-700 mb-4">{t("legalCookiesNone")}</p>
          <p class="text-gray-700">{t("legalCookiesLocal")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("legalLiability")}
          </h2>
          <p class="text-gray-700 mb-4">{t("legalLiabilityDisclaimer")}</p>
          <p class="text-gray-700 mb-4">
            {t("legalLiabilityNoResponsibility")}
          </p>
          <p class="text-gray-700">{t("legalLiabilityUser")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("legalContact")}
          </h2>
          <p class="text-gray-700">{t("legalContactText")}</p>
        </section>

        <div class="mt-8 pt-8 border-t border-gray-200">
          <p class="text-sm text-gray-600">
            {t("legalUpdated")} {new Date().toLocaleDateString(language)}
          </p>
        </div>
      </div>
    </div>
  );
}
