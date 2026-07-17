"use client";

import { useInView } from "@/hooks/useInView";

const PERCENT = 1;
const R = 80;
const CIRC = 2 * Math.PI * R;

export default function GoldenHourDonut() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const offset = CIRC * (1 - PERCENT / 100);

  return (
    <div
      ref={ref}
      className="flex flex-col rounded-2xl border border-navy-50 bg-white p-6 shadow-sm"
    >
      <div className="relative mx-auto h-44 w-44 sm:h-48 sm:w-48">
        <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
          <circle
            cx="100"
            cy="100"
            r={R}
            fill="none"
            className="stroke-navy-50"
            strokeWidth="16"
          />
          <circle
            cx="100"
            cy="100"
            r={R}
            fill="none"
            className="stroke-blue-500"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={inView ? offset : CIRC}
            style={{
              transition: "stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-4xl font-extrabold text-blue-500">
            ~1%
          </span>
        </div>
      </div>

      <p className="mt-5 text-center text-sm font-semibold text-ink-900">
        Korban melapor di golden hour
      </p>
      <p className="mt-1 text-center text-xs text-ink-400">
        1 jam pertama · Tech in Asia / IASC
      </p>
      <p className="mt-4 text-center text-xs leading-relaxed text-ink-600">
        Sedikitnya laporan tepat waktu bikin peluang pembekuan rekening pelaku
        hilang.
      </p>
    </div>
  );
}
