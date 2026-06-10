import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";
import FloatingChatbot from "@/components/chatbot/FloatingChatbot";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "AspireAI — Learn Coding & AI", template: "%s — AspireAI" },
  description: "Step-by-step tutorials, hands-on practice, and an AI tutor available 24/7. Perfect for beginners.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "AspireAI — Learn Coding & AI",
    description: "Step-by-step tutorials, hands-on practice, and an AI tutor available 24/7.",
    type: "website",
    siteName: "AspireAI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>
          {children}
          <FloatingChatbot />
          <Toaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
              duration: 4000,
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
