/**
 * Utilitaires d'encodage/décodage pour les codes Secret Santa
 * Simple encodage base64 des données JSON
 */

import type { EncryptedData } from "../types.ts";

/**
 * Encode les données en base64 URL-safe
 * Supporte les caractères UTF-8 (emojis, accents, etc.)
 */
function encodeBase64Url(str: string): string {
  // Encode UTF-8 string to base64
  const utf8Bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < utf8Bytes.length; i++) {
    binary += String.fromCharCode(utf8Bytes[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

/**
 * Décode une chaîne base64 URL-safe
 * Supporte les caractères UTF-8 (emojis, accents, etc.)
 */
function decodeBase64Url(base64: string): string {
  const padding = "=".repeat((4 - (base64.length % 4)) % 4);
  const base64Standard = base64.replace(/-/g, "+").replace(/_/g, "/") + padding;
  const binary = atob(base64Standard);

  // Decode base64 to UTF-8 string
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

/**
 * Encode les données en base64
 */
export function encodeData(data: EncryptedData): string {
  try {
    const jsonData = JSON.stringify(data);
    return encodeBase64Url(jsonData);
  } catch (error) {
    console.error("Encoding error:", error);
    throw new Error("Failed to encode data");
  }
}

/**
 * Décode un code et retourne les données
 */
export function decodeData(code: string): EncryptedData {
  try {
    const jsonData = decodeBase64Url(code);
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Decoding error:", error);
    throw new Error("Invalid or corrupted code");
  }
}

/**
 * Génère un ID unique
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
