/**
 * Internationalization (i18n) system
 */

import type { Language } from "../types.ts";

export const translations = {
  fr: {
    // Navigation
    home: "Accueil",
    generate: "Générer",
    reveal: "Révéler",
    sessions: "Sessions",

    // Page d'accueil
    appTitle: "Secret Santa Go",
    appSubtitle: "Échange de cadeaux de Noël",
    welcomeTitle: "Organisez votre Secret Santa !",
    welcomeText:
      "Le Secret Santa est une tradition festive où chaque participant tire au sort le nom d'une personne à qui offrir un cadeau, de manière anonyme. Notre générateur vous aide à créer les paires de manière aléatoire et sécurisée.",
    haveCode: "J'ai un code à révéler",

    // Formulaire
    participants: "Participants",
    participantsPlaceholder: "Entrez les noms des participants (un par ligne)",
    participantsHelp: "Minimum 2 participants",
    budget: "Budget (optionnel)",
    budgetPlaceholder: "Ex: 30€",
    theme: "Thème (optionnel)",
    themePlaceholder: "Ex: Cadeaux faits main, Gourmandises...",
    eventDate: "Date de l'événement (optionnel)",
    message: "Message personnalisé (optionnel)",
    messagePlaceholder: "Ex: Joyeuses fêtes ! Rendez-vous le 24 décembre...",
    exclusions: "Exclusions (optionnel)",
    exclusionsHelp:
      "Empêcher certaines personnes de s'offrir des cadeaux entre elles",
    generateButton: "Générer les codes",
    resetButton: "Réinitialiser",

    // Results
    resultsTitle: "Codes générés !",
    resultsSubtitle:
      "Distribuez ces codes à chaque participant. Ils pourront révéler leur assignation en utilisant leur code.",
    copyCode: "Copier le code",
    copyLink: "Copier le lien",
    codeCopied: "Code copié !",
    linkCopied: "Lien copié !",
    shareCode: "Partager le code pour",
    downloadAll: "Télécharger tous les codes",
    newDraw: "Nouveau tirage",
    revealPairs: "Révéler les paires",
    hidePairs: "Masquer les paires",
    pairsTitle: "Paires générées",
    pairsWarning:
      "Ces informations sont confidentielles ! Vous pouvez éditer les paires et régénérer les codes.",
    regenerateCodes: "Régénérer les codes",
    resetPairs: "Réinitialiser",
    editFeatureComingSoon:
      "Fonctionnalité en cours de développement. Pour l'instant, vous pouvez voir les paires mais pas encore régénérer les codes après édition.",
    codesHiddenWhileEditing:
      "Les codes sont masqués pendant l'édition. Fermez le panneau pour les voir à nouveau.",

    // Reveal page
    revealTitle: "Révélez votre Secret Santa",
    enterCode: "Entrez votre code",
    codePlaceholder: "Collez votre code ici",
    revealButton: "Révéler",
    revealingTitle: "🎄 Vous devez offrir un cadeau à...",
    giftFor: "Vous offrez un cadeau à",
    budgetLabel: "Budget",
    themeLabel: "Thème",
    dateLabel: "Date",
    messageLabel: "Message",
    anotherReveal: "Révéler un autre code",

    // Erreurs
    error: "Erreur",
    invalidCode: "Code invalide ou corrompu",
    tooFewParticipants: "Au moins 2 participants sont requis",
    duplicateNames: "Certains noms sont en double",
    emptyNames: "Tous les participants doivent avoir un nom",
    generationError: "Erreur lors de la génération des paires",
    tooManyExclusions: "Trop d'exclusions pour créer des paires valides",

    // Divers
    loading: "Chargement...",
    close: "Fermer",
    confirm: "Confirmer",
    cancel: "Annuler",
    save: "Enregistrer",
    delete: "Supprimer",
    edit: "Modifier",

    // Footer
    footerLegal: "Mentions légales",
    footerPrivacy: "Confidentialité",
    footerTerms: "CGU",
    footerFAQ: "FAQ",
    footerGithub: "Code source",
    backToHome: "Retour à l'accueil",

    // FAQ Page
    faqTitle: "Questions Fréquentes",
    faqSubtitle: "Tout ce que vous devez savoir sur Secret Santa Go",

    faqUsageTitle: "Utilisation",
    faqUsageHowTitle: "Comment fonctionne Secret Santa Go ?",
    faqUsageHow1: "Entrez les noms des participants",
    faqUsageHow2: "L'application génère des paires aléatoires",
    faqUsageHow3: "Vous recevez des codes uniques pour chaque participant",
    faqUsageHow4: "Partagez les codes (SMS, email, etc.)",
    faqUsageHow5:
      "Chaque participant révèle son code pour découvrir son receveur",
    faqUsageMinMaxTitle: "Nombre minimum/maximum de participants ?",
    faqUsageMinMaxMin: "Minimum : 2 participants",
    faqUsageMinMaxMax:
      "Maximum : Illimité (recommandé ~100 pour la performance)",
    faqUsageExpireTitle: "Les codes expirent-ils ?",
    faqUsageExpireText: "Non, les codes n'expirent jamais.",
    faqUsageRegenerateTitle: "Puis-je régénérer les paires ?",
    faqUsageRegenerateText:
      'Oui ! Cliquez sur "Nouveau tirage" pour créer une nouvelle session.',
    faqUsageRegenerateWarning:
      "Attention : Les anciens codes deviennent invalides.",

    faqSecurityTitle: "Sécurité",
    faqSecurityDataTitle: "Mes données sont-elles sécurisées ?",
    faqSecurityDataText:
      "Oui ! Tout fonctionne localement dans votre navigateur :",
    faqSecurityDataPoint1: "Aucun serveur",
    faqSecurityDataPoint2: "Aucune transmission de données",
    faqSecurityDataPoint3: "Encodage Base64 URL-safe",
    faqSecuritySeeTitle: "Quelqu'un peut-il voir qui offre à qui ?",
    faqSecuritySeeText:
      "Non, sauf s'ils ont accès à votre appareil ou si vous leur montrez les résultats.",
    faqSecurityOrganizerTitle: "L'organisateur peut-il tout voir ?",
    faqSecurityOrganizerText:
      "Oui, l'organisateur qui génère les codes voit toutes les paires.",
    faqSecurityOrganizerTip:
      "Conseil : Demandez à une personne de confiance de générer si l'organisateur participe.",
    faqSecurityOfflineTitle: "Puis-je utiliser l'application hors ligne ?",
    faqSecurityOfflineText:
      "Oui ! Après la première visite, l'application fonctionne complètement hors ligne grâce à la technologie PWA.",

    faqProblemsTitle: "Problèmes",
    faqProblemsCodeTitle: "Le code ne se révèle pas",
    faqProblemsCodeText: "Vérifiez que :",
    faqProblemsCodePoint1: "Le code est complet",
    faqProblemsCodePoint2: "Le code n'a pas été modifié",
    faqProblemsCodePoint3: "Vous utilisez la même instance qui l'a généré",
    faqProblemsLoadTitle: "L'application ne se charge pas",
    faqProblemsLoadPoint1: "Videz le cache du navigateur",
    faqProblemsLoadPoint2: "Vérifiez la connexion Internet (première visite)",
    faqProblemsLoadPoint3: "Essayez en navigation privée",
    faqProblemsInstallTitle: "Impossible d'installer l'application",
    faqProblemsInstallText: "Vérifiez que :",
    faqProblemsInstallPoint1: "Vous êtes en HTTPS",
    faqProblemsInstallPoint2: "Votre navigateur supporte les PWA",
    faqProblemsInstallPoint3: "Vous n'êtes pas en mode privé",

    // Legal Notice Page
    legalTitle: "Mentions Légales",
    legalEditor: "1. Éditeur",
    legalEditorContent: "Secret Santa Go",
    legalEditorApp: "Application web open source",
    legalEditorSource: "Code source disponible sur :",
    legalHosting: "2. Hébergement",
    legalHostingContent:
      "Cette application est une Progressive Web App (PWA) hébergée sur Netlify (https://www.netlify.com).",
    legalIP: "3. Propriété intellectuelle",
    legalIPLicense:
      "L'application Secret Santa Go est distribuée sous licence MIT.",
    legalIPFree:
      "Vous êtes libre d'utiliser, copier, modifier, fusionner, publier, distribuer, sous-licencier et/ou vendre des copies du logiciel, sous réserve de respecter les termes de la licence MIT.",
    legalIPSource:
      "Le code source complet est disponible sur GitHub et peut être consulté librement.",
    legalData: "4. Données personnelles",
    legalDataNone:
      "Aucune donnée personnelle n'est collectée par cette application.",
    legalDataLocal:
      "Toutes les données (noms des participants, codes générés, etc.) sont stockées localement dans votre navigateur via le Local Storage et ne sont jamais transmises à un serveur distant.",
    legalDataMore: "Pour plus d'informations, consultez notre",
    legalDataPrivacy: "Politique de confidentialité",
    legalCookies: "5. Cookies",
    legalCookiesNone:
      "Cette application n'utilise aucun cookie à des fins de tracking ou publicité.",
    legalCookiesLocal:
      "Seul le Local Storage du navigateur est utilisé pour sauvegarder vos préférences et sessions localement.",
    legalLiability: "6. Responsabilité",
    legalLiabilityDisclaimer:
      "L'application est fournie \"en l'état\", sans garantie d'aucune sorte, expresse ou implicite.",
    legalLiabilityNoResponsibility:
      "L'éditeur ne saurait être tenu responsable de tout dommage direct ou indirect résultant de l'utilisation de cette application.",
    legalLiabilityUser:
      "Les utilisateurs sont seuls responsables de l'utilisation qu'ils font de l'application et des codes générés.",
    legalContact: "7. Contact",
    legalContactText:
      "Pour toute question concernant ces mentions légales, vous pouvez ouvrir une issue sur le dépôt GitHub du projet.",
    legalUpdated: "Dernière mise à jour :",

    // Privacy Page
    privacyTitle: "Politique de Confidentialité",
    privacyIntro: "1. Introduction",
    privacyIntroText:
      "Secret Santa Go est une application web conçue dans le respect de votre vie privée. Cette politique de confidentialité explique comment nous traitons (ou plutôt, ne traitons pas) vos données personnelles.",
    privacyNoCollection: "2. Aucune collecte de données",
    privacyNoCollectionStrong:
      "Secret Santa Go ne collecte, ne stocke et ne transmet AUCUNE donnée personnelle sur un serveur.",
    privacyNoCollectionText:
      'L\'application fonctionne entièrement dans votre navigateur (architecture "zero-server"). Cela signifie que :',
    privacyNoServer: "Aucun serveur backend",
    privacyNoDatabase: "Aucune base de données distante",
    privacyNoTransmission: "Aucune transmission de données sur Internet",
    privacyNoThirdParty: "Aucune connexion à des services tiers",
    privacyLocalStorage: "3. Stockage local (Local Storage)",
    privacyLocalStorageText:
      "Les seules données stockées le sont localement dans votre navigateur via le Local Storage :",
    privacyLocalStorageParticipants:
      "Liste des participants que vous avez entrés",
    privacyLocalStorageSessions:
      "Sessions Secret Santa générées (paires et codes)",
    privacyLocalStoragePrefs: "Vos préférences (budget, thème, message)",
    privacyLocalStorageLang: "Votre choix de langue (FR/EN)",
    privacyLocalStoragePrivate:
      "Ces données restent sur votre appareil et ne sont accessibles que par vous. Elles ne sont jamais synchronisées ni partagées.",
    privacyEncryption: "4. Encodage des codes",
    privacyEncryptionText:
      "Les codes Secret Santa générés contiennent des informations encodées (nom du donneur, nom du receveur, budget, etc.) en utilisant un encodage Base64 URL-safe. Important : il s'agit d'un encodage, pas d'un chiffrement cryptographique.",
    privacyEncryptionAES:
      "Base64 URL-safe : Encodage standard permettant de transmettre des données dans des URLs",
    privacyEncryptionAPI:
      "TextEncoder/TextDecoder : APIs natives du navigateur pour gérer l'UTF-8",
    privacyEncryptionPBKDF:
      "Pas de clé secrète : Les codes peuvent être décodés par quiconque les possède",
    privacyEncryptionGuarantee:
      "Cet encodage permet de masquer le contenu des codes dans les URLs et de gérer correctement les caractères spéciaux (accents, emojis). Toutefois, il ne constitue pas une protection cryptographique forte. Ne partagez vos codes qu'avec les participants concernés.",
    privacyTracking: "5. Cookies et tracking",
    privacyTrackingNone: "Secret Santa Go n'utilise AUCUN :",
    privacyTrackingCookie: "Cookie de tracking",
    privacyTrackingAnalytics: "Google Analytics ou autre outil d'analytics",
    privacyTrackingAds: "Cookie publicitaire",
    privacyTrackingPixel: "Pixel de tracking",
    privacyTrackingFingerprint: "Fingerprinting",
    privacyTrackingThird: "Service tiers de collecte de données",
    privacyTrackingPrivate:
      "Votre navigation est totalement privée et anonyme.",
    privacyServiceWorker: "6. Service Worker",
    privacyServiceWorkerText:
      "L'application utilise un Service Worker pour fonctionner hors ligne (PWA). Ce Service Worker :",
    privacyServiceWorkerCache:
      "Met en cache les fichiers de l'application (HTML, CSS, JS)",
    privacyServiceWorkerOffline: "Permet le fonctionnement hors ligne",
    privacyServiceWorkerNoSend: "N'envoie aucune donnée à un serveur",
    privacyServiceWorkerNoExternal:
      "Ne communique pas avec des services externes",
    privacyRights: "7. Vos droits (RGPD)",
    privacyRightsText:
      "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits sur vos données. Cependant, étant donné que Secret Santa Go ne collecte aucune donnée personnelle, ces droits s'appliquent aux données stockées localement sur votre appareil :",
    privacyRightAccess:
      "Droit d'accès : Vous pouvez consulter vos données via les outils développeur de votre navigateur (Local Storage)",
    privacyRightRectification:
      "Droit de rectification : Modifiez vos données directement dans l'application",
    privacyRightErasure:
      "Droit à l'effacement : Supprimez vos données en vidant le Local Storage ou le cache de votre navigateur",
    privacyRightPortability:
      "Droit à la portabilité : Exportez vos sessions via la fonction de téléchargement",
    privacyDeletion: "8. Suppression des données",
    privacyDeletionText: "Pour supprimer toutes vos données locales :",
    privacyDeletionStep1: "Ouvrez les paramètres de votre navigateur",
    privacyDeletionStep2:
      'Allez dans "Confidentialité" ou "Données de navigation"',
    privacyDeletionStep3: 'Sélectionnez "Supprimer les données de navigation"',
    privacyDeletionStep4: 'Cochez "Données de sites" ou "Local Storage"',
    privacyDeletionStep5: "Validez la suppression",
    privacyDeletionIncognito:
      "Vous pouvez également utiliser le mode navigation privée pour ne laisser aucune trace.",
    privacyOpenSource: "9. Open Source",
    privacyOpenSourceText:
      "Secret Santa Go est un projet open source. Le code source complet est disponible sur GitHub (https://github.com/bfigliuzzi/secretsanta-ai) et peut être audité par quiconque souhaite vérifier nos pratiques en matière de confidentialité.",
    privacyOpenSourceAudit:
      "Vous pouvez consulter le code, vérifier qu'aucune donnée n'est transmise, et même héberger votre propre instance de l'application.",
    privacyContact: "10. Contact",
    privacyContactText:
      "Pour toute question concernant cette politique de confidentialité, vous pouvez ouvrir une issue sur le dépôt GitHub du projet.",

    // Page CGU
    termsTitle: "Conditions Générales d'Utilisation",
    termsAcceptance: "1. Acceptation des conditions",
    termsAcceptanceText:
      "En utilisant Secret Santa Go, vous acceptez les présentes Conditions Générales d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.",
    termsDescription: "2. Description du service",
    termsDescriptionText:
      "Secret Santa Go est une application web gratuite permettant d'organiser des échanges de cadeaux de type \"Secret Santa\". L'application :",
    termsDescriptionGenerate:
      "Génère des paires de participants de manière aléatoire",
    termsDescriptionCodes: "Crée des codes encodés pour chaque participant",
    termsDescriptionReveal: "Permet la révélation sécurisée des assignations",
    termsDescriptionClient:
      "Fonctionne entièrement côté client (aucun serveur)",
    termsUsage: "3. Utilisation de l'application",
    termsUsageAllowed: "3.1 Utilisation autorisée",
    termsUsageAllowedText:
      "Vous êtes autorisé à utiliser Secret Santa Go pour organiser des échanges de cadeaux personnels, familiaux ou professionnels.",
    termsUsageForbidden: "3.2 Utilisations interdites",
    termsUsageForbiddenIllegal: "Utiliser l'application à des fins illégales",
    termsUsageForbiddenBypass: "Tenter de contourner les mesures de sécurité",
    termsUsageForbiddenReverse:
      "Reverse engineering du code (sauf dans le cadre de l'open source)",
    termsUsageForbiddenHarm: "Utiliser l'application pour nuire à autrui",
    termsUsageForbiddenOverload:
      "Surcharger l'infrastructure (si hébergée publiquement)",
    termsResponsibility: "4. Responsabilité de l'utilisateur",
    termsResponsibilityText:
      "En tant qu'utilisateur, vous êtes responsable de :",
    termsResponsibilityTruth: "La véracité des informations que vous saisissez",
    termsResponsibilityConfidentiality: "La confidentialité des codes générés",
    termsResponsibilityDistribution:
      "La distribution appropriée des codes aux participants",
    termsResponsibilityOrganization:
      "L'organisation et la tenue de l'événement Secret Santa",
    termsResponsibilityProtection:
      "La protection de votre appareil et de vos données locales",
    termsWarranty: "5. Garanties et limitations",
    termsWarrantyNone: "5.1 Absence de garantie",
    termsWarrantyNoneText:
      "L'application est fournie \"en l'état\", sans garantie d'aucune sorte, expresse ou implicite, y compris mais sans s'y limiter, les garanties de qualité marchande, d'adéquation à un usage particulier et d'absence de contrefaçon.",
    termsLiability: "5.2 Limitation de responsabilité",
    termsLiabilityText:
      "Dans la limite autorisée par la loi, les créateurs et contributeurs de Secret Santa Go ne sauraient être tenus responsables de :",
    termsLiabilityDataLoss: "Pertes de données",
    termsLiabilityDamages: "Dommages directs ou indirects",
    termsLiabilityInterruption: "Interruptions de service",
    termsLiabilityDraws: "Problèmes liés aux tirages au sort",
    termsLiabilityDisputes: "Litiges entre participants",
    termsIP: "6. Propriété intellectuelle",
    termsIPText:
      "Secret Santa Go est distribué sous licence MIT. Vous êtes libre de :",
    termsIPUse: "Utiliser l'application gratuitement",
    termsIPCopy: "Copier et modifier le code source",
    termsIPDistribute: "Distribuer et commercialiser des versions modifiées",
    termsIPIntegrate: "Intégrer le code dans d'autres projets",
    termsIPConditions: "Sous réserve de :",
    termsIPCopyright: "Inclure la notice de copyright originale",
    termsIPLicense: "Inclure la licence MIT",
    termsData: "7. Données personnelles",
    termsDataText:
      "Aucune donnée personnelle n'est collectée par cette application. Toutes les données sont stockées localement sur votre appareil.",
    termsDataMore: "Pour plus d'informations, consultez notre",
    termsDataPrivacy: "Politique de confidentialité",
    termsModifications: "8. Modifications des CGU",
    termsModificationsText:
      "Nous nous réservons le droit de modifier ces CGU à tout moment. Les modifications prendront effet dès leur publication. Votre utilisation continue de l'application après publication des modifications vaut acceptation des nouvelles CGU.",
    termsTermination: "9. Résiliation",
    termsTerminationText:
      "Vous pouvez cesser d'utiliser l'application à tout moment sans formalité. Il vous suffit de fermer votre navigateur et, si souhaité, de supprimer vos données locales.",
    termsLaw: "10. Droit applicable",
    termsLawText:
      "Les présentes CGU sont régies par le droit français. Tout litige relatif à leur interprétation ou leur exécution relève de la compétence des tribunaux français.",
    termsContact: "11. Contact",
    termsContactText:
      "Pour toute question concernant ces CGU, vous pouvez ouvrir une issue sur le dépôt GitHub du projet.",
  },
  en: {
    // Navigation
    home: "Home",
    generate: "Generate",
    reveal: "Reveal",
    sessions: "Sessions",

    // Home page
    appTitle: "Secret Santa Go",
    appSubtitle: "Christmas Gift Exchange",
    welcomeTitle: "Organize your Secret Santa!",
    welcomeText:
      "Secret Santa is a festive tradition where each participant draws a name to give a gift to someone anonymously. Our generator helps you create pairs randomly and securely.",
    haveCode: "I have a code to reveal",

    // Form
    participants: "Participants",
    participantsPlaceholder: "Enter participant names (one per line)",
    participantsHelp: "Minimum 2 participants",
    budget: "Budget (optional)",
    budgetPlaceholder: "E.g., $30",
    theme: "Theme (optional)",
    themePlaceholder: "E.g., Handmade gifts, Treats...",
    eventDate: "Event date (optional)",
    message: "Custom message (optional)",
    messagePlaceholder: "E.g., Happy holidays! See you on December 24th...",
    exclusions: "Exclusions (optional)",
    exclusionsHelp: "Prevent certain people from gifting each other",
    generateButton: "Generate codes",
    resetButton: "Reset",

    // Results
    resultsTitle: "Codes generated!",
    resultsSubtitle:
      "Distribute these codes to each participant. They can reveal their assignment using their code.",
    copyCode: "Copy code",
    copyLink: "Copy link",
    codeCopied: "Code copied!",
    linkCopied: "Link copied!",
    shareCode: "Share code for",
    downloadAll: "Download all codes",
    newDraw: "New draw",
    revealPairs: "Reveal pairs",
    hidePairs: "Hide pairs",
    pairsTitle: "Generated pairs",
    pairsWarning:
      "This information is confidential! You can edit pairs and regenerate codes.",
    regenerateCodes: "Regenerate codes",
    resetPairs: "Reset",
    editFeatureComingSoon:
      "Feature under development. For now, you can view pairs but not yet regenerate codes after editing.",
    codesHiddenWhileEditing:
      "Codes are hidden while editing. Close the panel to see them again.",

    // Reveal page
    revealTitle: "Reveal your Secret Santa",
    enterCode: "Enter your code",
    codePlaceholder: "Paste your code here",
    revealButton: "Reveal",
    revealingTitle: "🎄 You need to give a gift to...",
    giftFor: "You are giving a gift to",
    budgetLabel: "Budget",
    themeLabel: "Theme",
    dateLabel: "Date",
    messageLabel: "Message",
    anotherReveal: "Reveal another code",

    // Errors
    error: "Error",
    invalidCode: "Invalid or corrupted code",
    tooFewParticipants: "At least 2 participants are required",
    duplicateNames: "Some names are duplicated",
    emptyNames: "All participants must have a name",
    generationError: "Error generating pairs",
    tooManyExclusions: "Too many exclusions to create valid pairs",

    // Miscellaneous
    loading: "Loading...",
    close: "Close",
    confirm: "Confirm",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",

    // Footer
    footerLegal: "Legal Notice",
    footerPrivacy: "Privacy",
    footerTerms: "Terms",
    footerFAQ: "FAQ",
    footerGithub: "Source code",
    backToHome: "Back to Home",

    // FAQ Page
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about Secret Santa Go",

    faqUsageTitle: "Usage",
    faqUsageHowTitle: "How does Secret Santa Go work?",
    faqUsageHow1: "Enter participant names",
    faqUsageHow2: "App generates random pairs",
    faqUsageHow3: "You receive unique codes for each participant",
    faqUsageHow4: "Share codes (SMS, email, etc.)",
    faqUsageHow5:
      "Each participant reveals their code to discover their giftee",
    faqUsageMinMaxTitle: "Minimum/Maximum participants?",
    faqUsageMinMaxMin: "Minimum: 2 participants",
    faqUsageMinMaxMax: "Maximum: Unlimited (recommended ~100 for performance)",
    faqUsageExpireTitle: "Do codes expire?",
    faqUsageExpireText: "No, codes never expire.",
    faqUsageRegenerateTitle: "Can I regenerate pairs?",
    faqUsageRegenerateText: 'Yes! Click "New Draw" to create a new session.',
    faqUsageRegenerateWarning: "Warning: Old codes become invalid.",

    faqSecurityTitle: "Security",
    faqSecurityDataTitle: "Are my data secure?",
    faqSecurityDataText: "Yes! Everything works locally in your browser:",
    faqSecurityDataPoint1: "No server",
    faqSecurityDataPoint2: "No data transmission",
    faqSecurityDataPoint3: "Base64 URL-safe encoding",
    faqSecuritySeeTitle: "Can someone see who gifts whom?",
    faqSecuritySeeText:
      "No, unless they have access to your device or you show them the results.",
    faqSecurityOrganizerTitle: "Can organizer see everything?",
    faqSecurityOrganizerText:
      "Yes, the organizer who generates codes sees all pairs.",
    faqSecurityOrganizerTip:
      "Tip: Ask a trusted person to generate if organizer participates.",
    faqSecurityOfflineTitle: "Can I use the app offline?",
    faqSecurityOfflineText:
      "Yes! After first visit, the app works completely offline thanks to PWA technology.",

    faqProblemsTitle: "Problems",
    faqProblemsCodeTitle: "Code doesn't reveal",
    faqProblemsCodeText: "Check that:",
    faqProblemsCodePoint1: "Code is complete",
    faqProblemsCodePoint2: "Code hasn't been modified",
    faqProblemsCodePoint3: "You're using the same instance that generated it",
    faqProblemsLoadTitle: "App doesn't load",
    faqProblemsLoadPoint1: "Clear browser cache",
    faqProblemsLoadPoint2: "Check Internet connection (first visit)",
    faqProblemsLoadPoint3: "Try private browsing mode",
    faqProblemsInstallTitle: "Can't install app",
    faqProblemsInstallText: "Verify:",
    faqProblemsInstallPoint1: "You're on HTTPS",
    faqProblemsInstallPoint2: "Your browser supports PWA",
    faqProblemsInstallPoint3: "You're not in private mode",

    // Legal Page
    legalTitle: "Legal Notice",
    legalEditor: "1. Publisher",
    legalEditorContent: "Secret Santa Go",
    legalEditorApp: "Open source web application",
    legalEditorSource: "Source code available on:",
    legalHosting: "2. Hosting",
    legalHostingContent:
      "This application is a Progressive Web App (PWA) hosted on Netlify (https://www.netlify.com).",
    legalIP: "3. Intellectual Property",
    legalIPLicense:
      "The Secret Santa Go application is distributed under the MIT license.",
    legalIPFree:
      "You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, provided you comply with the terms of the MIT license.",
    legalIPSource:
      "The complete source code is available on GitHub and can be freely consulted.",
    legalData: "4. Personal Data",
    legalDataNone: "No personal data is collected by this application.",
    legalDataLocal:
      "All data (participant names, generated codes, etc.) is stored locally in your browser via Local Storage and is never transmitted to a remote server.",
    legalDataMore: "For more information, see our",
    legalDataPrivacy: "Privacy Policy",
    legalCookies: "5. Cookies",
    legalCookiesNone:
      "This application does not use any cookies for tracking or advertising purposes.",
    legalCookiesLocal:
      "Only the browser's Local Storage is used to save your preferences and sessions locally.",
    legalLiability: "6. Liability",
    legalLiabilityDisclaimer:
      'The application is provided "as is", without warranty of any kind, express or implied.',
    legalLiabilityNoResponsibility:
      "The publisher cannot be held responsible for any direct or indirect damage resulting from the use of this application.",
    legalLiabilityUser:
      "Users are solely responsible for their use of the application and the generated codes.",
    legalContact: "7. Contact",
    legalContactText:
      "For any questions regarding this legal notice, you can open an issue on the project's GitHub repository.",
    legalUpdated: "Last updated:",

    // Privacy Page
    privacyTitle: "Privacy Policy",
    privacyIntro: "1. Introduction",
    privacyIntroText:
      "Secret Santa Go is a web application designed with respect for your privacy. This privacy policy explains how we handle (or rather, don't handle) your personal data.",
    privacyNoCollection: "2. No Data Collection",
    privacyNoCollectionStrong:
      "Secret Santa Go does NOT collect, store, or transmit ANY personal data to a server.",
    privacyNoCollectionText:
      'The application works entirely in your browser ("zero-server" architecture). This means:',
    privacyNoServer: "No backend server",
    privacyNoDatabase: "No remote database",
    privacyNoTransmission: "No data transmission over the Internet",
    privacyNoThirdParty: "No connection to third-party services",
    privacyLocalStorage: "3. Local Storage",
    privacyLocalStorageText:
      "The only data stored is locally in your browser via Local Storage:",
    privacyLocalStorageParticipants: "List of participants you entered",
    privacyLocalStorageSessions:
      "Generated Secret Santa sessions (pairs and codes)",
    privacyLocalStoragePrefs: "Your preferences (budget, theme, message)",
    privacyLocalStorageLang: "Your language choice (FR/EN)",
    privacyLocalStoragePrivate:
      "This data remains on your device and is only accessible by you. It is never synchronized or shared.",
    privacyEncryption: "4. Code Encoding",
    privacyEncryptionText:
      "Generated Secret Santa codes contain encoded information (giver name, receiver name, budget, etc.) using URL-safe Base64 encoding. Important: this is encoding, not cryptographic encryption.",
    privacyEncryptionAES:
      "URL-safe Base64: Standard encoding for transmitting data in URLs",
    privacyEncryptionAPI:
      "TextEncoder/TextDecoder: Native browser APIs for UTF-8 handling",
    privacyEncryptionPBKDF:
      "No secret key: Codes can be decoded by anyone who possesses them",
    privacyEncryptionGuarantee:
      "This encoding allows masking code content in URLs and properly handling special characters (accents, emojis). However, it does not provide strong cryptographic protection. Only share your codes with intended participants.",
    privacyTracking: "5. Cookies and Tracking",
    privacyTrackingNone: "Secret Santa Go uses NO:",
    privacyTrackingCookie: "Tracking cookies",
    privacyTrackingAnalytics: "Google Analytics or other analytics tools",
    privacyTrackingAds: "Advertising cookies",
    privacyTrackingPixel: "Tracking pixels",
    privacyTrackingFingerprint: "Fingerprinting",
    privacyTrackingThird: "Third-party data collection services",
    privacyTrackingPrivate:
      "Your browsing is completely private and anonymous.",
    privacyServiceWorker: "6. Service Worker",
    privacyServiceWorkerText:
      "The application uses a Service Worker to work offline (PWA). This Service Worker:",
    privacyServiceWorkerCache: "Caches application files (HTML, CSS, JS)",
    privacyServiceWorkerOffline: "Enables offline functionality",
    privacyServiceWorkerNoSend: "Sends no data to a server",
    privacyServiceWorkerNoExternal:
      "Does not communicate with external services",
    privacyRights: "7. Your Rights (GDPR)",
    privacyRightsText:
      "In accordance with the General Data Protection Regulation (GDPR), you have rights over your data. However, since Secret Santa Go does not collect any personal data, these rights apply to data stored locally on your device:",
    privacyRightAccess:
      "Right of access: You can view your data via your browser's developer tools (Local Storage)",
    privacyRightRectification:
      "Right of rectification: Modify your data directly in the application",
    privacyRightErasure:
      "Right to erasure: Delete your data by clearing Local Storage or your browser cache",
    privacyRightPortability:
      "Right to portability: Export your sessions via the download function",
    privacyDeletion: "8. Data Deletion",
    privacyDeletionText: "To delete all your local data:",
    privacyDeletionStep1: "Open your browser settings",
    privacyDeletionStep2: 'Go to "Privacy" or "Browsing Data"',
    privacyDeletionStep3: 'Select "Clear browsing data"',
    privacyDeletionStep4: 'Check "Site data" or "Local Storage"',
    privacyDeletionStep5: "Confirm deletion",
    privacyDeletionIncognito:
      "You can also use private browsing mode to leave no trace.",
    privacyOpenSource: "9. Open Source",
    privacyOpenSourceText:
      "Secret Santa Go is an open source project. The complete source code is available on GitHub (https://github.com/bfigliuzzi/secretsanta-ai) and can be audited by anyone wishing to verify our privacy practices.",
    privacyOpenSourceAudit:
      "You can review the code, verify that no data is transmitted, and even host your own instance of the application.",
    privacyContact: "10. Contact",
    privacyContactText:
      "For any questions regarding this privacy policy, you can open an issue on the project's GitHub repository.",

    // Terms Page
    termsTitle: "Terms of Service",
    termsAcceptance: "1. Acceptance of Terms",
    termsAcceptanceText:
      "By using Secret Santa Go, you accept these Terms of Service. If you do not accept these terms, please do not use the application.",
    termsDescription: "2. Service Description",
    termsDescriptionText:
      'Secret Santa Go is a free web application for organizing "Secret Santa" gift exchanges. The application:',
    termsDescriptionGenerate: "Generates participant pairs randomly",
    termsDescriptionCodes: "Creates encoded codes for each participant",
    termsDescriptionReveal: "Allows secure revelation of assignments",
    termsDescriptionClient: "Works entirely client-side (no server)",
    termsUsage: "3. Application Usage",
    termsUsageAllowed: "3.1 Permitted Use",
    termsUsageAllowedText:
      "You are authorized to use Secret Santa Go to organize personal, family, or professional gift exchanges.",
    termsUsageForbidden: "3.2 Prohibited Uses",
    termsUsageForbiddenIllegal: "Using the application for illegal purposes",
    termsUsageForbiddenBypass: "Attempting to bypass security measures",
    termsUsageForbiddenReverse:
      "Reverse engineering the code (except in the context of open source)",
    termsUsageForbiddenHarm: "Using the application to harm others",
    termsUsageForbiddenOverload:
      "Overloading the infrastructure (if publicly hosted)",
    termsResponsibility: "4. User Responsibility",
    termsResponsibilityText: "As a user, you are responsible for:",
    termsResponsibilityTruth: "The accuracy of the information you enter",
    termsResponsibilityConfidentiality:
      "The confidentiality of generated codes",
    termsResponsibilityDistribution:
      "Proper distribution of codes to participants",
    termsResponsibilityOrganization:
      "Organization and execution of the Secret Santa event",
    termsResponsibilityProtection: "Protection of your device and local data",
    termsWarranty: "5. Warranties and Limitations",
    termsWarrantyNone: "5.1 No Warranty",
    termsWarrantyNoneText:
      'The application is provided "as is", without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    termsLiability: "5.2 Limitation of Liability",
    termsLiabilityText:
      "To the extent permitted by law, the creators and contributors of Secret Santa Go shall not be liable for:",
    termsLiabilityDataLoss: "Data loss",
    termsLiabilityDamages: "Direct or indirect damages",
    termsLiabilityInterruption: "Service interruptions",
    termsLiabilityDraws: "Issues related to draws",
    termsLiabilityDisputes: "Disputes between participants",
    termsIP: "6. Intellectual Property",
    termsIPText:
      "Secret Santa Go is distributed under the MIT license. You are free to:",
    termsIPUse: "Use the application for free",
    termsIPCopy: "Copy and modify the source code",
    termsIPDistribute: "Distribute and commercialize modified versions",
    termsIPIntegrate: "Integrate the code into other projects",
    termsIPConditions: "Provided that:",
    termsIPCopyright: "You include the original copyright notice",
    termsIPLicense: "You include the MIT license",
    termsData: "7. Personal Data",
    termsDataText:
      "No personal data is collected by this application. All data is stored locally on your device.",
    termsDataMore: "For more information, see our",
    termsDataPrivacy: "Privacy Policy",
    termsModifications: "8. Modifications to Terms",
    termsModificationsText:
      "We reserve the right to modify these Terms at any time. Modifications will take effect upon publication. Your continued use of the application after publication of modifications constitutes acceptance of the new Terms.",
    termsTermination: "9. Termination",
    termsTerminationText:
      "You may stop using the application at any time without formality. Simply close your browser and, if desired, delete your local data.",
    termsLaw: "10. Applicable Law",
    termsLawText:
      "These Terms are governed by French law. Any dispute relating to their interpretation or execution falls under the jurisdiction of French courts.",
    termsContact: "11. Contact",
    termsContactText:
      "For any questions regarding these Terms, you can open an issue on the project's GitHub repository.",
  },
};

export type TranslationKey = keyof typeof translations.fr;

let currentLanguage: Language = "fr";

export function setLanguage(lang: Language): void {
  currentLanguage = lang;
}

export function getLanguage(): Language {
  return currentLanguage;
}

export function t(key: TranslationKey): string {
  return translations[currentLanguage][key] || key;
}
