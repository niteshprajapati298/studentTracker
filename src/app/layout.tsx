import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/Provider";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StudentTrack - Activity Tracker",
  description: "A comprehensive student activity tracker for managing tasks, attendance, notes, goals, and assignments.",
  keywords: ["student", "tracker", "tasks", "attendance", "notes", "goals", "assignments"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}>
        <ReduxProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#1e293b',
                color: '#f1f5f9',
                border: '1px solid rgba(71, 85, 105, 0.5)',
                borderRadius: '12px',
              },
              success: {
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#f1f5f9',
                },
              },
              error: {
                iconTheme: {
                  primary: '#f43f5e',
                  secondary: '#f1f5f9',
                },
              },
            }}
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
