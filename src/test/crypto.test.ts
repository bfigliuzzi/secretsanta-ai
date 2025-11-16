/**
 * Tests for encoding/decoding functions
 */

import { describe, it, expect } from "vitest";
import { encodeData, decodeData, generateId } from "../utils/crypto";
import type { EncryptedData } from "../types";

describe("Crypto - Encoding/Decoding", () => {
  it("should encode and decode data object", () => {
    const originalData: EncryptedData = {
      giverName: "Alice",
      receiverName: "Bob",
      sessionId: "session-123",
      budget: "30€",
      theme: "Handmade",
      eventDate: "2025-12-24",
      message: "Joyeuses fêtes !",
    };

    const encoded = encodeData(originalData);
    expect(typeof encoded).toBe("string");
    expect(encoded.length).toBeGreaterThan(0);

    const decoded = decodeData(encoded);
    expect(decoded.giverName).toBe("Alice");
    expect(decoded.receiverName).toBe("Bob");
    expect(decoded.budget).toBe("30€");
  });

  it("should produce same encoded value for same data", () => {
    const data: EncryptedData = {
      giverName: "Alice",
      receiverName: "Bob",
      sessionId: "session-123",
    };

    const encoded1 = encodeData(data);
    const encoded2 = encodeData(data);

    // Base64 encoding is deterministic
    expect(encoded1).toBe(encoded2);

    const decoded1 = decodeData(encoded1);
    const decoded2 = decodeData(encoded2);

    expect(decoded1.giverName).toBe("Alice");
    expect(decoded2.giverName).toBe("Alice");
  });

  it("should handle optional fields", () => {
    const minimalData: EncryptedData = {
      giverName: "Alice",
      receiverName: "Bob",
      sessionId: "session-123",
    };

    const encoded = encodeData(minimalData);
    const decoded = decodeData(encoded);

    expect(decoded.giverName).toBe("Alice");
    expect(decoded.receiverName).toBe("Bob");
    expect(decoded.budget).toBeUndefined();
  });

  it("should handle special characters and emojis", () => {
    const data: EncryptedData = {
      giverName: "Alice 🎅",
      receiverName: "Bob 🎄",
      sessionId: "session-123",
      message: "Joyeuses fêtes avec accents: éàçôù!",
    };

    const encoded = encodeData(data);
    const decoded = decodeData(encoded);

    expect(decoded.giverName).toBe("Alice 🎅");
    expect(decoded.receiverName).toBe("Bob 🎄");
    expect(decoded.message).toBe("Joyeuses fêtes avec accents: éàçôù!");
  });

  it("should produce URL-safe base64", () => {
    const data: EncryptedData = {
      giverName: "Alice",
      receiverName: "Bob",
      sessionId: "session-123",
    };

    const encoded = encodeData(data);

    // Should not contain +, / or =
    expect(encoded).not.toContain("+");
    expect(encoded).not.toContain("/");
    expect(encoded).not.toContain("=");
  });
});

describe("Crypto - ID Generation", () => {
  it("should generate unique IDs", () => {
    const id1 = generateId();
    const id2 = generateId();
    const id3 = generateId();

    expect(id1).not.toBe(id2);
    expect(id2).not.toBe(id3);
    expect(id1).not.toBe(id3);
  });

  it("should generate IDs of consistent format", () => {
    const id = generateId();

    expect(id.length).toBeGreaterThan(10);
    expect(id).toContain("-");
  });

  it("should generate many unique IDs", () => {
    const ids = new Set<string>();
    const count = 100;

    for (let i = 0; i < count; i++) {
      ids.add(generateId());
    }

    // All IDs should be unique
    expect(ids.size).toBe(count);
  });
});

describe("Crypto - Error Handling", () => {
  it("should throw error for corrupted encoded data", () => {
    const corruptedData = "this-is-not-valid-encoded-data!!!";

    expect(() => decodeData(corruptedData)).toThrow();
  });

  it("should throw error for malformed base64", () => {
    const malformedData = "invalid!!!base64";

    expect(() => decodeData(malformedData)).toThrow();
  });
});
