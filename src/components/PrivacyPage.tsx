/**
 * Page Politique de confidentialité (RGPD)
 */

import { useLanguage } from "../contexts/LanguageContext.tsx";
import { t } from "../utils/i18n.ts";

export default function PrivacyPage(_props: { path?: string }) {
  const { language } = useLanguage();

  return (
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">
          {t("privacyTitle")}
        </h1>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("privacyIntro")}
          </h2>
          <p class="text-gray-700 mb-4">{t("privacyIntroText")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("privacyNoCollection")}
          </h2>
          <p class="text-gray-700 mb-4">
            <strong>{t("privacyNoCollectionStrong")}</strong>
          </p>
          <p class="text-gray-700 mb-4">{t("privacyNoCollectionText")}</p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>{t("privacyNoServer")}</li>
            <li>{t("privacyNoDatabase")}</li>
            <li>{t("privacyNoTransmission")}</li>
            <li>{t("privacyNoThirdParty")}</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("privacyLocalStorage")}
          </h2>
          <p class="text-gray-700 mb-4">{t("privacyLocalStorageText")}</p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>{t("privacyLocalStorageParticipants")}</li>
            <li>{t("privacyLocalStorageSessions")}</li>
            <li>{t("privacyLocalStoragePrefs")}</li>
            <li>{t("privacyLocalStorageLang")}</li>
          </ul>
          <p class="text-gray-700 mb-4">{t("privacyLocalStoragePrivate")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("privacyEncryption")}
          </h2>
          <p class="text-gray-700 mb-4">{t("privacyEncryptionText")}</p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>{t("privacyEncryptionAES")}</strong>
            </li>
            <li>
              <strong>{t("privacyEncryptionAPI")}</strong>
            </li>
            <li>
              <strong>{t("privacyEncryptionPBKDF")}</strong>
            </li>
          </ul>
          <p class="text-gray-700 mb-4">{t("privacyEncryptionGuarantee")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("privacyTracking")}
          </h2>
          <p class="text-gray-700 mb-4">
            {t("privacyTrackingNone")}{" "}
            <strong>{language === "fr" ? "AUCUN" : "NO"}</strong> :
          </p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>{t("privacyTrackingCookie")}</li>
            <li>{t("privacyTrackingAnalytics")}</li>
            <li>{t("privacyTrackingAds")}</li>
            <li>{t("privacyTrackingPixel")}</li>
            <li>{t("privacyTrackingFingerprint")}</li>
            <li>{t("privacyTrackingThird")}</li>
          </ul>
          <p class="text-gray-700">{t("privacyTrackingPrivate")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("privacyServiceWorker")}
          </h2>
          <p class="text-gray-700 mb-4">{t("privacyServiceWorkerText")}</p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>{t("privacyServiceWorkerCache")}</li>
            <li>{t("privacyServiceWorkerOffline")}</li>
            <li>{t("privacyServiceWorkerNoSend")}</li>
            <li>{t("privacyServiceWorkerNoExternal")}</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("privacyRights")}
          </h2>
          <p class="text-gray-700 mb-4">{t("privacyRightsText")}</p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>{t("privacyRightAccess")}</strong>
            </li>
            <li>
              <strong>{t("privacyRightRectification")}</strong>
            </li>
            <li>
              <strong>{t("privacyRightErasure")}</strong>
            </li>
            <li>
              <strong>{t("privacyRightPortability")}</strong>
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("privacyDeletion")}
          </h2>
          <p class="text-gray-700 mb-4">{t("privacyDeletionText")}</p>
          <ol class="list-decimal list-inside text-gray-700 mb-4 space-y-2">
            <li>{t("privacyDeletionStep1")}</li>
            <li>{t("privacyDeletionStep2")}</li>
            <li>{t("privacyDeletionStep3")}</li>
            <li>{t("privacyDeletionStep4")}</li>
            <li>{t("privacyDeletionStep5")}</li>
          </ol>
          <p class="text-gray-700">{t("privacyDeletionIncognito")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("privacyOpenSource")}
          </h2>
          <p class="text-gray-700 mb-4">{t("privacyOpenSourceText")}</p>
          <p class="text-gray-700">{t("privacyOpenSourceAudit")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("privacyContact")}
          </h2>
          <p class="text-gray-700">{t("privacyContactText")}</p>
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
