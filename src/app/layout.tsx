import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "@/components/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theo Learning Journal",
  description:
    "Tägliche deutschsprachige Lernartikel mit disziplinübergreifenden Ideen, sauber kuratiert und als statischer Next.js Blog veröffentlicht.",
  metadataBase: new URL("https://thetheobot.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
