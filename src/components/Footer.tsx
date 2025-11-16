/**
 * Composant Footer avec liens légaux
 */

import { route } from "preact-router";
import { t } from "../utils/i18n.ts";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (path: string) => (e: Event) => {
    e.preventDefault();
    route(path);
    setTimeout(scrollToTop, 10);
  };

  return (
    <footer class="bg-gray-800 text-white py-8 mt-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <p class="text-sm">
              © {new Date().getFullYear()} Secret Santa Go - Open Source Project
            </p>
            <p class="text-xs text-gray-400 mt-1">
              Made with ❤️ for making Christmas magical
            </p>
          </div>

          <div class="flex flex-wrap gap-4 text-sm">
            <a
              href="/faq"
              class="hover:text-red-400 transition-colors cursor-pointer"
              onClick={handleNavigate("/faq")}
            >
              {t("footerFAQ")}
            </a>
            <a
              href="/legal"
              class="hover:text-red-400 transition-colors cursor-pointer"
              onClick={handleNavigate("/legal")}
            >
              {t("footerLegal")}
            </a>
            <a
              href="/privacy"
              class="hover:text-red-400 transition-colors cursor-pointer"
              onClick={handleNavigate("/privacy")}
            >
              {t("footerPrivacy")}
            </a>
            <a
              href="/terms"
              class="hover:text-red-400 transition-colors cursor-pointer"
              onClick={handleNavigate("/terms")}
            >
              {t("footerTerms")}
            </a>
            <a
              href="https://github.com/bfigliuzzi/secretsanta-ai"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-red-400 transition-colors"
            >
              {t("footerGithub")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
