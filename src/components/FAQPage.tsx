/**
 * FAQ page with usage, security and troubleshooting information
 */

import { t } from "../utils/i18n.ts";

interface FAQPageProps {
  path?: string;
}

export default function FAQPage(_props: FAQPageProps) {
  return (
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-red-600 mb-4 animate-fade-in">
          ❓ {t("faqTitle")}
        </h1>
        <p class="text-lg text-gray-700">{t("faqSubtitle")}</p>
      </div>

      {/* Usage Section */}
      <section class="bg-white rounded-2xl shadow-xl p-8 mb-6 border-2 border-green-500">
        <h2 class="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
          <span>📖</span> {t("faqUsageTitle")}
        </h2>

        <div class="space-y-6">
          <div>
            <h3 class="font-bold text-gray-800 mb-2">
              {t("faqUsageHowTitle")}
            </h3>
            <ol class="list-decimal list-inside space-y-1 text-gray-700 ml-2">
              <li>{t("faqUsageHow1")}</li>
              <li>{t("faqUsageHow2")}</li>
              <li>{t("faqUsageHow3")}</li>
              <li>{t("faqUsageHow4")}</li>
              <li>{t("faqUsageHow5")}</li>
            </ol>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">
              {t("faqUsageMinMaxTitle")}
            </h3>
            <ul class="list-disc list-inside space-y-1 text-gray-700 ml-2">
              <li>{t("faqUsageMinMaxMin")}</li>
              <li>{t("faqUsageMinMaxMax")}</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">
              {t("faqUsageExpireTitle")}
            </h3>
            <p class="text-gray-700">{t("faqUsageExpireText")}</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">
              {t("faqUsageRegenerateTitle")}
            </h3>
            <p class="text-gray-700">{t("faqUsageRegenerateText")}</p>
            <p class="text-orange-600 font-semibold mt-1">
              ⚠️ {t("faqUsageRegenerateWarning")}
            </p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section class="bg-white rounded-2xl shadow-xl p-8 mb-6 border-2 border-blue-500">
        <h2 class="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
          <span>🔒</span> {t("faqSecurityTitle")}
        </h2>

        <div class="space-y-6">
          <div>
            <h3 class="font-bold text-gray-800 mb-2">
              {t("faqSecurityDataTitle")}
            </h3>
            <p class="text-gray-700 mb-2">{t("faqSecurityDataText")}</p>
            <ul class="list-disc list-inside space-y-1 text-gray-700 ml-2">
              <li>{t("faqSecurityDataPoint1")}</li>
              <li>{t("faqSecurityDataPoint2")}</li>
              <li>{t("faqSecurityDataPoint3")}</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">
              {t("faqSecuritySeeTitle")}
            </h3>
            <p class="text-gray-700">{t("faqSecuritySeeText")}</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">
              {t("faqSecurityOrganizerTitle")}
            </h3>
            <p class="text-gray-700 mb-2">{t("faqSecurityOrganizerText")}</p>
            <p class="text-blue-600 font-semibold">
              💡 {t("faqSecurityOrganizerTip")}
            </p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">
              {t("faqSecurityOfflineTitle")}
            </h3>
            <p class="text-gray-700">{t("faqSecurityOfflineText")}</p>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section class="bg-white rounded-2xl shadow-xl p-8 mb-6 border-2 border-red-500">
        <h2 class="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
          <span>🔧</span> {t("faqProblemsTitle")}
        </h2>

        <div class="space-y-6">
          <div>
            <h3 class="font-bold text-gray-800 mb-2">
              {t("faqProblemsCodeTitle")}
            </h3>
            <p class="text-gray-700 mb-2">{t("faqProblemsCodeText")}</p>
            <ul class="list-disc list-inside space-y-1 text-gray-700 ml-2">
              <li>{t("faqProblemsCodePoint1")}</li>
              <li>{t("faqProblemsCodePoint2")}</li>
              <li>{t("faqProblemsCodePoint3")}</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">
              {t("faqProblemsLoadTitle")}
            </h3>
            <ul class="list-disc list-inside space-y-1 text-gray-700 ml-2">
              <li>{t("faqProblemsLoadPoint1")}</li>
              <li>{t("faqProblemsLoadPoint2")}</li>
              <li>{t("faqProblemsLoadPoint3")}</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">
              {t("faqProblemsInstallTitle")}
            </h3>
            <p class="text-gray-700 mb-2">{t("faqProblemsInstallText")}</p>
            <ul class="list-disc list-inside space-y-1 text-gray-700 ml-2">
              <li>{t("faqProblemsInstallPoint1")}</li>
              <li>{t("faqProblemsInstallPoint2")}</li>
              <li>{t("faqProblemsInstallPoint3")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Back button */}
      <div class="text-center">
        <a
          href="/"
          class="inline-block px-8 py-3 bg-gradient-to-r from-red-500 to-green-600 text-white text-lg font-bold rounded-lg hover:from-red-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all transform hover:scale-105"
        >
          🎅 {t("backToHome")}
        </a>
      </div>
    </div>
  );
}
