import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { AppBoot } from "@/components/app-boot";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Нохчийн мотт",
    template: "%s · Нохчийн мотт",
  },
  description: "Нохчийн мотт — берашна лерина ловзаран приложени",
  applicationName: "Нохчийн мотт",
  generator: "Next.js",
  keywords: ["чеченский язык", "дети", "обучение", "Нохчийн мотт"],
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon-192.png", apple: "/icon-192.png" },
  appleWebApp: {
    capable: true,
    title: "Нохчийн мотт",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FFF8EC",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ce" suppressHydrationWarning>
      <body className="antialiased">
        <AppBoot />
        {children}
      </body>
    </html>
  );
}
