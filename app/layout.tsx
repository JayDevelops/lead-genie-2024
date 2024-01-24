import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";  // used for user authentication
import {ThemeProvider} from "@/components/theme-provider";
import React from "react";
import LandingNavBar from "@/app/(landing)/components_landing/LandingNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
          <html lang="en" className={inter.className}>
          <body>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
          >
              <LandingNavBar />
              {children}
          </ThemeProvider>
          </body>
          </html>
      </ClerkProvider>
  );
}
