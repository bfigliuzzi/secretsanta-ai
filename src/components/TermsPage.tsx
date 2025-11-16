/**
 * Page Conditions Générales d'Utilisation (CGU)
 */

import { useLanguage } from "../contexts/LanguageContext.tsx";
import { t } from "../utils/i18n.ts";

export default function TermsPage(_props: { path?: string }) {
  const { language } = useLanguage();

  return (
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">{t("termsTitle")}</h1>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("termsAcceptance")}
          </h2>
          <p class="text-gray-700 mb-4">{t("termsAcceptanceText")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("termsDescription")}
          </h2>
          <p class="text-gray-700 mb-4">{t("termsDescriptionText")}</p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>{t("termsDescriptionGenerate")}</li>
            <li>{t("termsDescriptionCodes")}</li>
            <li>{t("termsDescriptionReveal")}</li>
            <li>{t("termsDescriptionClient")}</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("termsUsage")}
          </h2>
          <h3 class="text-xl font-semibold text-gray-700 mb-3">
            {t("termsUsageAllowed")}
          </h3>
          <p class="text-gray-700 mb-4">{t("termsUsageAllowedText")}</p>

          <h3 class="text-xl font-semibold text-gray-700 mb-3">
            {t("termsUsageForbidden")}
          </h3>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>{t("termsUsageForbiddenIllegal")}</li>
            <li>{t("termsUsageForbiddenBypass")}</li>
            <li>{t("termsUsageForbiddenReverse")}</li>
            <li>{t("termsUsageForbiddenHarm")}</li>
            <li>{t("termsUsageForbiddenOverload")}</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("termsResponsibility")}
          </h2>
          <p class="text-gray-700 mb-4">{t("termsResponsibilityText")}</p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>{t("termsResponsibilityTruth")}</li>
            <li>{t("termsResponsibilityConfidentiality")}</li>
            <li>{t("termsResponsibilityDistribution")}</li>
            <li>{t("termsResponsibilityOrganization")}</li>
            <li>{t("termsResponsibilityProtection")}</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("termsWarranty")}
          </h2>
          <h3 class="text-xl font-semibold text-gray-700 mb-3">
            {t("termsWarrantyNone")}
          </h3>
          <p class="text-gray-700 mb-4">{t("termsWarrantyNoneText")}</p>

          <h3 class="text-xl font-semibold text-gray-700 mb-3">
            {t("termsLiability")}
          </h3>
          <p class="text-gray-700 mb-4">{t("termsLiabilityText")}</p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>{t("termsLiabilityDataLoss")}</li>
            <li>{t("termsLiabilityDamages")}</li>
            <li>{t("termsLiabilityInterruption")}</li>
            <li>{t("termsLiabilityDraws")}</li>
            <li>{t("termsLiabilityDisputes")}</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("termsIP")}
          </h2>
          <p class="text-gray-700 mb-4">{t("termsIPText")}</p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>{t("termsIPUse")}</li>
            <li>{t("termsIPCopy")}</li>
            <li>{t("termsIPDistribute")}</li>
            <li>{t("termsIPIntegrate")}</li>
          </ul>
          <p class="text-gray-700 mb-4">{t("termsIPConditions")}</p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>{t("termsIPCopyright")}</li>
            <li>{t("termsIPLicense")}</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("termsData")}
          </h2>
          <p class="text-gray-700 mb-4">{t("termsDataText")}</p>
          <p class="text-gray-700">
            {t("termsDataMore")}{" "}
            <a href="/privacy" class="text-blue-600 hover:underline">
              {t("termsDataPrivacy")}
            </a>
            .
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("termsModifications")}
          </h2>
          <p class="text-gray-700 mb-4">{t("termsModificationsText")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("termsTermination")}
          </h2>
          <p class="text-gray-700 mb-4">{t("termsTerminationText")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("termsLaw")}
          </h2>
          <p class="text-gray-700 mb-4">{t("termsLawText")}</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {t("termsContact")}
          </h2>
          <p class="text-gray-700">{t("termsContactText")}</p>
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
