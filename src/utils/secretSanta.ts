/**
 * Secret Santa pair generation algorithm
 */

import type {
  Participant,
  Exclusion,
  SecretSantaPair,
  Session,
  SessionConfig,
  EncryptedData,
} from "../types.ts";
import { encodeData, generateId } from "./crypto.ts";

/**
 * Shuffle an array (Fisher-Yates shuffle)
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Check if an assignment is valid according to exclusions
 */
function isValidAssignment(
  giverId: string,
  receiverId: string,
  exclusions?: Exclusion[]
): boolean {
  if (giverId === receiverId) return false;

  if (!exclusions) return true;

  const giverExclusions = exclusions.find((e) => e.participantId === giverId);
  if (giverExclusions && giverExclusions.excludedIds.includes(receiverId)) {
    return false;
  }

  return true;
}

/**
 * Attempt to create a valid assignment for all participants
 */
function tryCreateAssignments(
  participants: Participant[],
  exclusions?: Exclusion[]
): Map<string, string> | null {
  const givers = [...participants];
  const receivers = shuffleArray([...participants]);
  const assignments = new Map<string, string>();
  const usedReceivers = new Set<string>();

  for (const giver of givers) {
    let assigned = false;

    for (const receiver of receivers) {
      if (
        !usedReceivers.has(receiver.id) &&
        isValidAssignment(giver.id, receiver.id, exclusions)
      ) {
        assignments.set(giver.id, receiver.id);
        usedReceivers.add(receiver.id);
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      return null; // Failed, retry
    }
  }

  return assignments;
}

/**
 * Generate Secret Santa pairs with retry on failure
 */
export function generateSecretSantaPairs(
  participants: Participant[],
  config: SessionConfig
): Session {
  if (participants.length < 2) {
    throw new Error("At least 2 participants are required");
  }

  // Check that exclusions don't make assignment impossible
  if (config.exclusions) {
    for (const participant of participants) {
      const exclusion = config.exclusions.find(
        (e) => e.participantId === participant.id
      );
      if (
        exclusion &&
        exclusion.excludedIds.length >= participants.length - 1
      ) {
        throw new Error(
          `Participant ${participant.name} has too many exclusions`
        );
      }
    }
  }

  // Attempt to create assignments (max 1000 attempts)
  let assignments: Map<string, string> | null = null;
  let attempts = 0;
  const maxAttempts = 1000;

  while (!assignments && attempts < maxAttempts) {
    assignments = tryCreateAssignments(participants, config.exclusions);
    attempts++;
  }

  if (!assignments) {
    throw new Error("Unable to create valid assignments with given exclusions");
  }

  // Create pairs with encoded codes
  const sessionId = generateId();
  const pairs: SecretSantaPair[] = [];

  for (const [giverId, receiverId] of assignments.entries()) {
    const giver = participants.find((p) => p.id === giverId)!;
    const receiver = participants.find((p) => p.id === receiverId)!;

    const encryptedData: EncryptedData = {
      giverName: giver.name,
      receiverName: receiver.name,
      budget: config.budget,
      theme: config.theme,
      eventDate: config.eventDate,
      message: config.message,
      sessionId,
    };

    const code = encodeData(encryptedData);

    pairs.push({
      giverId: giver.id,
      giverName: giver.name,
      receiverId: receiver.id,
      receiverName: receiver.name,
      code,
    });
  }

  const session: Session = {
    id: sessionId,
    createdAt: new Date().toISOString(),
    participants,
    pairs,
    config,
  };

  return session;
}

/**
 * Validate the list of participants
 */
export function validateParticipants(participants: Participant[]): string[] {
  const errors: string[] = [];

  if (participants.length < 2) {
    errors.push("At least 2 participants are required");
  }

  const names = new Set<string>();
  for (const participant of participants) {
    if (!participant.name.trim()) {
      errors.push("All participants must have a name");
      break;
    }
    if (names.has(participant.name.toLowerCase())) {
      errors.push(`Duplicate name: ${participant.name}`);
    }
    names.add(participant.name.toLowerCase());
  }

  return errors;
}
