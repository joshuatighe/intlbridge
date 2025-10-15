import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { RedirectToast } from "@/components/redirect-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "intlbridge",
  description:
    "An informational and functional website for international students seeking higher education in the US 📚🇺🇸",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main
            className="
            min-h-screen flex-1
            overflow-y-auto overflow-x-hidden
            py-24 px-8
            bg-secondary/20
            flex flex-col
          "
          >
            {children}
          </main>
          <Toaster expand />
          <RedirectToast />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
