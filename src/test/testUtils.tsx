/**
 * Test utilities with LanguageProvider wrapper
 */

import { render } from "@testing-library/preact";
import type { RenderOptions } from "@testing-library/preact";
import type { ComponentChildren } from "preact";
import { LanguageProvider } from "../contexts/LanguageContext.tsx";

// Custom render function that wraps with LanguageProvider
export function renderWithLanguageProvider(
  ui: ComponentChildren,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui as any, {
    wrapper: ({ children }: { children: ComponentChildren }) => (
      <LanguageProvider>{children}</LanguageProvider>
    ),
    ...options,
  });
}
