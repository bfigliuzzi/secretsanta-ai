/**
 * Tests for Secret Santa algorithm
 */

import { describe, it, expect } from "vitest";
import {
  generateSecretSantaPairs,
  validateParticipants,
} from "../utils/secretSanta";
import type { Participant, SessionConfig } from "../types";

describe("validateParticipants", () => {
  it("should return no errors for valid participants", () => {
    const participants: Participant[] = [
      { id: "1", name: "Alice" },
      { id: "2", name: "Bob" },
    ];

    const errors = validateParticipants(participants);
    expect(errors).toHaveLength(0);
  });

  it("should return error if less than 2 participants", () => {
    const participants: Participant[] = [{ id: "1", name: "Alice" }];

    const errors = validateParticipants(participants);
    expect(errors).toContain("At least 2 participants are required");
  });

  it("should return error for empty names", () => {
    const participants: Participant[] = [
      { id: "1", name: "" },
      { id: "2", name: "Bob" },
    ];

    const errors = validateParticipants(participants);
    expect(errors).toContain("All participants must have a name");
  });

  it("should return error for duplicate names", () => {
    const participants: Participant[] = [
      { id: "1", name: "Alice" },
      { id: "2", name: "alice" }, // Case insensitive
    ];

    const errors = validateParticipants(participants);
    expect(errors.some((e) => e.includes("Duplicate name"))).toBe(true);
  });
});

describe("generateSecretSantaPairs", () => {
  it("should throw error with less than 2 participants", () => {
    const participants: Participant[] = [{ id: "1", name: "Alice" }];
    const config: SessionConfig = {};

    expect(() => generateSecretSantaPairs(participants, config)).toThrow(
      "At least 2 participants are required"
    );
  });

  it("should generate pairs for valid participants", () => {
    const participants: Participant[] = [
      { id: "1", name: "Alice" },
      { id: "2", name: "Bob" },
      { id: "3", name: "Charlie" },
    ];
    const config: SessionConfig = {
      budget: "30€",
      theme: "Handmade",
    };

    const session = generateSecretSantaPairs(participants, config);

    expect(session).toBeDefined();
    expect(session.participants).toHaveLength(3);
    expect(session.pairs).toHaveLength(3);
    expect(session.config.budget).toBe("30€");
    expect(session.config.theme).toBe("Handmade");
  });

  it("should create unique pairs (no self-gifting)", () => {
    const participants: Participant[] = [
      { id: "1", name: "Alice" },
      { id: "2", name: "Bob" },
    ];
    const config: SessionConfig = {};

    const session = generateSecretSantaPairs(participants, config);

    // Each person must give to someone else
    session.pairs.forEach((pair) => {
      expect(pair.giverId).not.toBe(pair.receiverId);
    });
  });

  it("should generate codes for each pair", () => {
    const participants: Participant[] = [
      { id: "1", name: "Alice" },
      { id: "2", name: "Bob" },
    ];
    const config: SessionConfig = {};

    const session = generateSecretSantaPairs(participants, config);

    // Chaque paire doit avoir un code
    session.pairs.forEach((pair) => {
      expect(pair.code).toBeDefined();
      expect(pair.code.length).toBeGreaterThan(0);
    });
  });

  it("should create a valid session structure", () => {
    const participants: Participant[] = [
      { id: "1", name: "Alice" },
      { id: "2", name: "Bob" },
    ];
    const config: SessionConfig = {};

    const session = generateSecretSantaPairs(participants, config);

    expect(session.id).toBeDefined();
    expect(session.createdAt).toBeDefined();
    expect(new Date(session.createdAt)).toBeInstanceOf(Date);
  });
});
