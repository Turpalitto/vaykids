"use client";

import { useEffect } from "react";
import { syncNow, useStore, useHydrate } from "@/lib/store";

/** Global client bootstrap: persisted preferences and the offline shell. */
export function AppBoot() {
  const settings = useStore((state) => state.settings);
  useHydrate();

  useEffect(() => {
    document.documentElement.dataset.text = settings.textSize;
    document.documentElement.dataset.contrast = settings.contrast ? "1" : "0";
  }, [settings.contrast, settings.textSize]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    void navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
      // Offline mode is an enhancement; it must never block the app.
    });
  }, []);

  useEffect(() => {
    const retrySync = () => {
      if (document.visibilityState === "visible") syncNow();
    };
    window.addEventListener("online", retrySync);
    document.addEventListener("visibilitychange", retrySync);
    return () => {
      window.removeEventListener("online", retrySync);
      document.removeEventListener("visibilitychange", retrySync);
    };
  }, []);

  return null;
}
