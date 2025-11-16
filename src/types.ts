/**
 * Types et interfaces pour l'application Secret Santa
 */

export interface Participant {
  id: string;
  name: string;
  email?: string;
  preferences?: string;
}

export interface Exclusion {
  participantId: string;
  excludedIds: string[];
}

export interface SessionConfig {
  budget?: string;
  theme?: string;
  eventDate?: string;
  message?: string;
  exclusions?: Exclusion[];
}

export interface SecretSantaPair {
  giverId: string;
  giverName: string;
  receiverId: string;
  receiverName: string;
  code: string;
}

export interface Session {
  id: string;
  createdAt: string;
  participants: Participant[];
  pairs: SecretSantaPair[];
  config: SessionConfig;
}

export interface EncryptedData {
  giverName: string;
  receiverName: string;
  budget?: string;
  theme?: string;
  eventDate?: string;
  message?: string;
  sessionId: string;
}

export type Language = "fr" | "en";
