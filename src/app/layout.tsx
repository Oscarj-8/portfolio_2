import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { HeroDock } from "@/components/magic-ui/hero-dock";

export const metadata: Metadata = {
  title: "Abdulahi Muhammed",
  description: "This is Abdulahi Muhammed's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased`}>
        <div className="relative min-h-screen w-full bg-[#020617]">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "#020617",
              backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
          `,
              backgroundSize: "40px 40px, 40px 40px, 100% 100%",
            }}
          />
          <div className="relative z-10">
            {children}
            <HeroDock />
          </div>
        </div>
      </body>
    </html>
  );
}
