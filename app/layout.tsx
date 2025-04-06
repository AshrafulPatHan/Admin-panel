import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/navigation/sidebar";
import Navbar from "@/components/navigation/navbar";
import { Theme } from "@radix-ui/themes"; // Import the Theme provider
import "@radix-ui/themes/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin-Panel",
  description: "Admin panel of ashraful pathan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap everything in the Theme provider */}
        <Theme>
          <div className="flex flex-row items-start gap-20">
            <Sidebar />
            <div>
              <Navbar />
              <div className="body">{children}</div>
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
