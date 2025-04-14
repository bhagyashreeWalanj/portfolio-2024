"use client";
import * as React from "react"; // issue resolved with nextThemeProvider

import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextThemeProvider {...props} attribute="class" defaultTheme="dark">
      {children}
    </NextThemeProvider>
  );
}
