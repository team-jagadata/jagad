"use client";

import { useInView } from "@/hooks/useInView";

const SAVED_PCT = 4.7;

export default function RecoveryBar() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-navy-50 bg-white p-6 shadow-sm sm:p-8"
    >
      <h3 className="text-lg font-bold text-navy-900">
        Berapa yang berhasil kembali?
      </h3>
      <p className="mt-1 text-sm text-ink-600">
        Dari total kerugian nasional, hanya sebagian kecil dana yang berhasil
        diselamatkan.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-ink-900">
              Total kerugian
            </span>
            <span className="font-mono text-sm font-semibold text-navy-900">
              Rp 9,1 T · 100%
            </span>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-navy-50">
            <div
              className="h-full rounded-full bg-navy-900"
              style={{
                width: inView ? "100%" : "0%",
                transition: "width 1.2s ease-out",
              }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium text-ink-900">
              Dana diselamatkan
            </span>
            <span className="font-mono text-sm font-semibold text-blue-500">
              Rp 432 M · 4,7%
            </span>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-navy-50">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-300"
              style={{
                width: inView ? `${SAVED_PCT}%` : "0%",
                transition: "width 1.2s ease-out 0.2s",
              }}
            />
          </div>
        </div>
      </div>

      <p className="mt-5 text-xs text-ink-400">
        Sumber: IASC (recovery ~4,7% dari total kerugian).
      </p>
    </div>
  );
}
