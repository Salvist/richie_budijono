import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Navbar } from "./components/site-shell";
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
  metadataBase: new URL("https://richiebudijono.com"),
  title: {
    default: "Richie Budijono — Software Consultant & Product Builder",
    template: "%s — Richie Budijono",
  },
  description:
    "I design and build dependable mobile apps, web products, and practical software systems for teams with an idea worth shipping.",
  openGraph: {
    title: "Richie Budijono — Software Consultant & Product Builder",
    description:
      "Mobile, web, Firebase, and AI product development from first idea to launch.",
    url: "https://richiebudijono.com",
    siteName: "Richie Budijono",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
