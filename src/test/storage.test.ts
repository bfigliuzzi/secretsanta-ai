/**
 * Tests pour le Local Storage
 */

import { describe, it, expect, beforeEach } from "vitest";
import {
  saveSession,
  getSessions,
  getSessionById,
  deleteSession,
  saveLastConfig,
  getLastConfig,
  saveLastParticipants,
  getLastParticipants,
  saveLanguage,
  getLanguage,
  clearAllData,
} from "../utils/storage";
import type { Session, SessionConfig, Participant } from "../types";

describe("Storage - Sessions", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save and retrieve sessions", () => {
    const session: Session = {
      id: "test-1",
      createdAt: new Date().toISOString(),
      participants: [
        { id: "1", name: "Alice" },
        { id: "2", name: "Bob" },
      ],
      pairs: [],
      config: {},
    };

    saveSession(session);
    const sessions = getSessions();

    expect(sessions).toHaveLength(1);
    expect(sessions[0].id).toBe("test-1");
  });

  it("should retrieve session by ID", () => {
    const session: Session = {
      id: "test-123",
      createdAt: new Date().toISOString(),
      participants: [],
      pairs: [],
      config: {},
    };

    saveSession(session);
    const retrieved = getSessionById("test-123");

    expect(retrieved).not.toBeNull();
    expect(retrieved?.id).toBe("test-123");
  });

  it("should return null for non-existent session", () => {
    const retrieved = getSessionById("non-existent");
    expect(retrieved).toBeNull();
  });

  it("should delete session", () => {
    const session: Session = {
      id: "delete-me",
      createdAt: new Date().toISOString(),
      participants: [],
      pairs: [],
      config: {},
    };

    saveSession(session);
    expect(getSessions()).toHaveLength(1);

    deleteSession("delete-me");
    expect(getSessions()).toHaveLength(0);
  });
});

describe("Storage - Config", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save and retrieve config", () => {
    const config: SessionConfig = {
      budget: "30€",
      theme: "Handmade",
      eventDate: "2025-12-24",
      message: "Happy holidays!",
    };
    saveLastConfig(config);
    const retrieved = getLastConfig();

    expect(retrieved).not.toBeNull();
    expect(retrieved?.budget).toBe("30€");
    expect(retrieved?.theme).toBe("Handmade");
  });

  it("should return null if no config saved", () => {
    const retrieved = getLastConfig();
    expect(retrieved).toBeNull();
  });
});

describe("Storage - Participants", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save and retrieve participants", () => {
    const participants: Participant[] = [
      { id: "1", name: "Alice" },
      { id: "2", name: "Bob" },
      { id: "3", name: "Charlie" },
    ];

    saveLastParticipants(participants);
    const retrieved = getLastParticipants();

    expect(retrieved).toHaveLength(3);
    expect(retrieved[0].name).toBe("Alice");
  });

  it("should return empty array if no participants saved", () => {
    const retrieved = getLastParticipants();
    expect(retrieved).toEqual([]);
  });
});

describe("Storage - Language", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save and retrieve language", () => {
    saveLanguage("en");
    const retrieved = getLanguage();
    expect(retrieved).toBe("en");
  });

  it("should return default language if not saved", () => {
    const retrieved = getLanguage();
    expect(retrieved).toBe("fr");
  });
});

describe("Storage - Clear All", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should clear all data", () => {
    saveLanguage("en");
    saveLastConfig({ budget: "30€" });
    saveLastParticipants([{ id: "1", name: "Alice" }]);

    clearAllData();

    expect(getLanguage()).toBe("fr"); // Default
    expect(getLastConfig()).toBeNull();
    expect(getLastParticipants()).toEqual([]);
  });
});
