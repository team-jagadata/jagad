"use client";

import { useInView } from "@/hooks/useInView";

const CATEGORIES = [
  { name: "Telepon Palsu & Penyamaran", loss: 1_310_000_000_000, lossLabel: "Rp 1,31 T", cases: "31.299" },
  { name: "Investasi Bodong Mikro", loss: 1_090_000_000_000, lossLabel: "Rp 1,09 T", cases: "19.850" },
  { name: "Belanja Online", loss: 988_000_000_000, lossLabel: "Rp 988 M", cases: "53.928" },
  { name: "Lowongan Kerja Palsu", loss: 656_000_000_000, lossLabel: "Rp 656 M", cases: "18.220" },
  { name: "Phishing / Cyber Fraud", loss: 507_000_000_000, lossLabel: "Rp 507 M", cases: "13.386" },
  { name: "Penipuan Media Sosial", loss: 491_000_000_000, lossLabel: "Rp 491 M", cases: "14.229" },
  { name: "Social Engineering", loss: 361_000_000_000, lossLabel: "Rp 361 M", cases: "9.436" },
  { name: "Undian & Hadiah Palsu", loss: 189_900_000_000, lossLabel: "Rp 189,9 M", cases: "15.470" },
  { name: "Malware File APK", loss: 134_000_000_000, lossLabel: "Rp 134 M", cases: "3.684" },
  { name: "Pinjol Palsu", loss: 40_600_000_000, lossLabel: "Rp 40,6 M", cases: "4.793" },
];

const MAX = CATEGORIES[0].loss;

export default function FraudCategoryChart() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-navy-50 bg-white p-6 shadow-sm sm:p-8"
    >
      <h3 className="text-lg font-bold text-navy-900">
        Kerugian per kategori penipuan
      </h3>
      <p className="mt-1 text-sm text-ink-600">
        Diurutkan dari kerugian terbesar. Sumber: IASC.
      </p>

      <ul className="mt-6 space-y-4">
        {CATEGORIES.map((c, i) => (
          <li key={c.name}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-ink-900">
                {c.name}
              </span>
              <span className="shrink-0 font-mono text-sm font-semibold text-blue-500">
                {c.lossLabel}
              </span>
            </div>
            <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-navy-50">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-300"
                style={{
                  width: inView ? `${(c.loss / MAX) * 100}%` : "0%",
                  transition: "width 1s ease-out",
                  transitionDelay: `${i * 70}ms`,
                }}
              />
            </div>
            <p className="mt-1 text-xs text-ink-400">{c.cases} kasus</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
