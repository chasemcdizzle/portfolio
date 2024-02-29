import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicholas Chase's Portfolio",
  description: "Powered by Next.js App Router",
  icons: {
    icon: "/chase-c-2.png",
  },
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "Nicholas Chase's Portfolio",
    description: "Nicholas Chase's Portfolio Website",
    siteName: "NickScottChase.com",
    // images: [{
    //   url: "https://example.com/og.png",
    // }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicholas Chase's Portfolio",
    // site: "@site",
    creator: "@ChaseMcDizzle",
    // "images": "https://example.com/og.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <></>
      </Head>
      <body
        className={cn(
          `${inter.className} overflow-y-scroll overflow-x-hidden`,
          null && `body-background`
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
