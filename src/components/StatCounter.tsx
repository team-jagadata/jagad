"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  decimals?: number;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  sublabel,
  decimals = 0,
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = reduce ? 0 : 2000;

    let raf = 0;
    let start = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const t = duration === 0 ? 1 : Math.min((ts - start) / duration, 1);
      setN(value * easeOutCubic(t));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const formatted = n.toLocaleString("id-ID", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-navy-50 bg-white p-6 shadow-sm"
    >
      <p className="font-mono text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
        <span className="text-blue-500">{prefix}</span>
        {formatted}
        <span className="text-blue-500">{suffix}</span>
      </p>
      <p className="mt-3 text-sm font-semibold text-ink-900">{label}</p>
      {sublabel && <p className="mt-1 text-xs text-ink-400">{sublabel}</p>}
    </div>
  );
}
