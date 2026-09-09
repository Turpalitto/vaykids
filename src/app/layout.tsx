import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Нохчийн мотт",
  description: "Нохчийн мотт — берашна лерина ловзаран приложени",
  icons: { icon: "/img/seda-deer.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FFF8EC",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ce">
      <body className="antialiased">{children}</body>
    </html>
  );
}
