import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TrpcProvider } from "@/utils/trpc-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Sage",
  description: "Let the weather sage brighten up your day",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
}
