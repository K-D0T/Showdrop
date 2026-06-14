import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Showdrop — Upcoming Sneaker Drops",
  description:
    "Track upcoming sneaker drops from Jordan, Nike, adidas, and New Balance. Release dates, prices, images, and product links — all in one place.",
  openGraph: {
    title: "Showdrop — Upcoming Sneaker Drops",
    description:
      "Track upcoming sneaker drops from the biggest brands. Release dates, prices, images, and product links.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
