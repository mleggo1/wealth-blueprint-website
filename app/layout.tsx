import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Wealth Blueprint | Build Wealth. Live Free.",
  description: "Get a simple, clear roadmap for your financial future. Strategic investing, real-world experience, and lifestyle by design.",
  openGraph: {
    title: "Wealth Blueprint | Build Wealth. Live Free.",
    description: "Get a simple, clear roadmap for your financial future.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  
  const content = (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );

  // Only wrap with ClerkProvider if keys are present
  if (publishableKey && publishableKey !== "pk_test_placeholder") {
    return <ClerkProvider>{content}</ClerkProvider>;
  }

  return content;
}

