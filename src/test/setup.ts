/**
 * Vitest test configuration
 */

import { afterEach } from "vitest";
import { cleanup } from "@testing-library/preact";

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock Local Storage for tests
class LocalStorageMock {
  private store: Record<string, string> = {};

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = value.toString();
  }

  removeItem(key: string) {
    delete this.store[key];
  }

  get length() {
    return Object.keys(this.store).length;
  }

  key(index: number) {
    const keys = Object.keys(this.store);
    return keys[index] || null;
  }
}

(globalThis as any).localStorage = new LocalStorageMock();

// Mock crypto.subtle for tests
if (!(globalThis as any).crypto) {
  (globalThis as any).crypto = {} as Crypto;
}

if (!(globalThis as any).crypto.subtle) {
  // Basic mock for tests
  (globalThis as any).crypto.subtle = {
    encrypt: async () => new ArrayBuffer(32),
    decrypt: async () => new ArrayBuffer(32),
    importKey: async () => ({} as CryptoKey),
    deriveKey: async () => ({} as CryptoKey),
    deriveBits: async () => new ArrayBuffer(32),
  } as any;
}

if (!(globalThis as any).crypto.getRandomValues) {
  (globalThis as any).crypto.getRandomValues = (arr: any) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(Math.random() * 256);
    }
    return arr;
  };
}
