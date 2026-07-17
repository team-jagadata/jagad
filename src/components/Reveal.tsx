"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

/* Fade + naik halus saat elemen masuk viewport. Reduced-motion ditangani
   di globals.css lewat selektor [data-reveal]. */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(18px)",
        transition: `opacity 600ms ease-out ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
