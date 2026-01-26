import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rachit Pednekar",
  description:
    "Software Engineer specializing in scalable backend systems, cloud-native applications, and AI-powered products. Master's in Software Engineering from Concordia University.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "AI",
    "LLM",
    "Montreal",
    "Canada",
  ],
  authors: [{ name: "Rachit Pednekar" }],
  creator: "Rachit Pednekar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rachitpednekar.dev",
    title: "Rachit Pednekar ",
    description:
      "Software Engineer specializing in scalable backend systems, cloud-native applications, and AI-powered products.",
    siteName: "Rachit Pednekar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachit Pednekar | Software Engineer",
    description:
      "Software Engineer specializing in scalable backend systems, cloud-native applications, and AI-powered products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
