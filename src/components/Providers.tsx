"use client";

import { ThemeProvider } from "next-themes";
import { AnimatedCursor } from "./AnimatedCursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
      <AnimatedCursor />
    </ThemeProvider>
  );
}
