import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nickscottchase.com"),
  title: "Nicholas Chase's Portfolio",
  description: "Powered by Next.js App Router",
  icons: {
    icon: "/chase-c-2.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.nickscottchase.com",
    title: "Nicholas Chase's Portfolio",
    description: "Powered by Next.js App Router",
    siteName: "NickScottChase.com",
    images: [
      {
        url: "https://www.nickscottchase.com/opengraph-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicholas Chase's Portfolio",
    // site: "@site",
    creator: "@ChaseMcDizzle",
    images: "https://www.nickscottchase.com/opengraph-image.jpg",
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
        <meta property="og:title" content="Nicholas Chase's Portfolio" />
        <meta
          name="image"
          property="og:image"
          content="https://www.nickscottchase.com/opengraph-image.jpg"
        />
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
