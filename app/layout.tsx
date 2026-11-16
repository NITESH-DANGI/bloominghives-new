import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blooming Hives — Creative & Digital Agency",
  description:
    "Blooming Hives helps brands grow through strategy, creative, digital experiences and performance marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
