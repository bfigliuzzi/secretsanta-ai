/**
 * Tests pour l'internationalisation (i18n)
 */

import { describe, it, expect, beforeEach } from "vitest";
import { t, translations, setLanguage, getLanguage } from "../utils/i18n";

describe("i18n - Translation Function", () => {
  beforeEach(() => {
    setLanguage("fr");
  });

  it("should return French translation by default", () => {
    expect(t("appTitle")).toBe("Secret Santa Go");
  });

  it("should return English translation after switching language", () => {
    setLanguage("en");
    expect(t("appTitle")).toBe("Secret Santa Go");
  });

  it("should get current language", () => {
    expect(getLanguage()).toBe("fr");
    setLanguage("en");
    expect(getLanguage()).toBe("en");
  });

  it("should return key if translation missing", () => {
    expect(t("non_existent_key" as any)).toBe("non_existent_key");
  });
});

describe("i18n - Coverage", () => {
  it("should have same keys for FR and EN", () => {
    const frKeys = Object.keys(translations.fr).sort();
    const enKeys = Object.keys(translations.en).sort();

    expect(frKeys).toEqual(enKeys);
  });

  it("should have no empty translations", () => {
    Object.values(translations.fr).forEach((value) => {
      expect(value).not.toBe("");
    });

    Object.values(translations.en).forEach((value) => {
      expect(value).not.toBe("");
    });
  });
});

describe("i18n - Specific Keys", () => {
  beforeEach(() => {
    setLanguage("fr");
  });

  it("should translate generate button in French", () => {
    expect(t("generateButton")).toBe("Générer les codes");
  });

  it("should translate generate button in English", () => {
    setLanguage("en");
    expect(t("generateButton")).toBe("Generate codes");
  });

  it("should translate error messages in French", () => {
    expect(t("tooFewParticipants")).toContain(
      "Au moins 2 participants sont requis"
    );
  });

  it("should translate error messages in English", () => {
    setLanguage("en");
    expect(t("tooFewParticipants")).toContain(
      "At least 2 participants are required"
    );
  });

  it("should translate reveal page content in French", () => {
    expect(t("revealTitle")).toBe("Révélez votre Secret Santa");
  });

  it("should translate reveal page content in English", () => {
    setLanguage("en");
    expect(t("revealTitle")).toBe("Reveal your Secret Santa");
  });
});
