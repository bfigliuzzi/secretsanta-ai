/**
 * Service de gestion du Local Storage
 */

import type { Session, SessionConfig, Participant } from "../types.ts";

const STORAGE_KEYS = {
  SESSIONS: "secretsanta_sessions",
  LAST_CONFIG: "secretsanta_last_config",
  LAST_PARTICIPANTS: "secretsanta_last_participants",
  LANGUAGE: "secretsanta_language",
} as const;

/**
 * Sauvegarde une session
 */
export function saveSession(session: Session): void {
  try {
    const sessions = getSessions();
    sessions.push(session);
    localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));
  } catch (error) {
    console.error("Error saving session:", error);
  }
}

/**
 * Récupère toutes les sessions
 */
export function getSessions(): Session[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SESSIONS);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading sessions:", error);
    return [];
  }
}

/**
 * Récupère une session par ID
 */
export function getSessionById(id: string): Session | null {
  const sessions = getSessions();
  return sessions.find((s) => s.id === id) || null;
}

/**
 * Supprime une session
 */
export function deleteSession(id: string): void {
  try {
    const sessions = getSessions().filter((s) => s.id !== id);
    localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));
  } catch (error) {
    console.error("Error deleting session:", error);
  }
}

/**
 * Sauvegarde la dernière configuration utilisée
 */
export function saveLastConfig(config: SessionConfig): void {
  try {
    localStorage.setItem(STORAGE_KEYS.LAST_CONFIG, JSON.stringify(config));
  } catch (error) {
    console.error("Error saving config:", error);
  }
}

/**
 * Récupère la dernière configuration
 */
export function getLastConfig(): SessionConfig | null {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.LAST_CONFIG);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error loading config:", error);
    return null;
  }
}

/**
 * Sauvegarde la dernière liste de participants
 */
export function saveLastParticipants(participants: Participant[]): void {
  try {
    localStorage.setItem(
      STORAGE_KEYS.LAST_PARTICIPANTS,
      JSON.stringify(participants)
    );
  } catch (error) {
    console.error("Error saving participants:", error);
  }
}

/**
 * Récupère la dernière liste de participants
 */
export function getLastParticipants(): Participant[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.LAST_PARTICIPANTS);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading participants:", error);
    return [];
  }
}

/**
 * Sauvegarde la langue préférée
 */
export function saveLanguage(lang: string): void {
  try {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  } catch (error) {
    console.error("Error saving language:", error);
  }
}

/**
 * Récupère la langue préférée
 */
export function getLanguage(): string {
  try {
    return localStorage.getItem(STORAGE_KEYS.LANGUAGE) || "fr";
  } catch (error) {
    console.error("Error loading language:", error);
    return "fr";
  }
}

/**
 * Efface toutes les données
 */
export function clearAllData(): void {
  try {
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error("Error clearing data:", error);
  }
}
