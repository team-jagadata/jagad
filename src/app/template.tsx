"use client";

import type { ReactNode } from "react";

/* Re-mount tiap navigasi -> fade-in halus antar halaman. */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-in">{children}</div>;
}
