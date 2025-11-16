/**
 * Tests for Results component
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/preact";
import Results from "../components/Results.tsx";
import type { Session } from "../types.ts";

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(() => Promise.resolve()),
  },
});

const mockSession: Session = {
  id: "test-session-1",
  createdAt: "2025-12-20T10:00:00Z",
  participants: [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
    { id: "3", name: "Charlie" },
  ],
  pairs: [
    {
      giverId: "1",
      giverName: "Alice",
      receiverId: "2",
      receiverName: "Bob",
      code: "CODE_ALICE_123",
    },
    {
      giverId: "2",
      giverName: "Bob",
      receiverId: "3",
      receiverName: "Charlie",
      code: "CODE_BOB_456",
    },
    {
      giverId: "3",
      giverName: "Charlie",
      receiverId: "1",
      receiverName: "Alice",
      code: "CODE_CHARLIE_789",
    },
  ],
  config: {
    budget: "30€",
    theme: "Noël",
    eventDate: "2025-12-24",
    message: "Joyeuses fêtes !",
  },
};

describe("Results Component", () => {
  it("should render session results with all pairs", () => {
    const onNewDraw = vi.fn();
    render(<Results session={mockSession} onNewDraw={onNewDraw} />);

    // Check that all participants are displayed
    expect(screen.getByText(/Alice/)).toBeDefined();
    expect(screen.getByText(/Bob/)).toBeDefined();
    expect(screen.getByText(/Charlie/)).toBeDefined();
  });

  it("should display codes for all participants", () => {
    const onNewDraw = vi.fn();
    render(<Results session={mockSession} onNewDraw={onNewDraw} />);

    // All codes must be visible
    const codeInputs = screen.getAllByLabelText(/Code for/i);
    expect(codeInputs).toHaveLength(3);

    // Check that codes are present
    expect((codeInputs[0] as HTMLInputElement).value).toBe("CODE_ALICE_123");
    expect((codeInputs[1] as HTMLInputElement).value).toBe("CODE_BOB_456");
    expect((codeInputs[2] as HTMLInputElement).value).toBe("CODE_CHARLIE_789");
  });

  it("should call onNewDraw when new draw button is clicked", () => {
    const onNewDraw = vi.fn();
    render(<Results session={mockSession} onNewDraw={onNewDraw} />);

    const newDrawButton = screen.getByRole("button", {
      name: /Nouveau tirage|New draw/i,
    });
    fireEvent.click(newDrawButton);

    expect(onNewDraw).toHaveBeenCalledTimes(1);
  });

  it("should copy code to clipboard when copy button is clicked", async () => {
    const onNewDraw = vi.fn();
    render(<Results session={mockSession} onNewDraw={onNewDraw} />);

    // Find the first "Copy code" button
    const copyButtons = screen.getAllByRole("button", {
      name: /Copier le code|Copy code/i,
    });
    fireEvent.click(copyButtons[0]);

    // Check that clipboard.writeText was called with the correct code
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      "CODE_ALICE_123"
    );
  });

  it("should display all three action buttons", () => {
    const onNewDraw = vi.fn();
    render(<Results session={mockSession} onNewDraw={onNewDraw} />);

    // Check the 2 main buttons (download and new draw)
    expect(
      screen.getByRole("button", {
        name: /Télécharger tous les codes|Download all codes/i,
      })
    ).toBeDefined();
    expect(
      screen.getByRole("button", { name: /Nouveau tirage|New draw/i })
    ).toBeDefined();
  });
});
