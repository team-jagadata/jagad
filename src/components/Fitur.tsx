import type { ReactNode } from "react";
import Link from "next/link";
import { fitur, iconGradient } from "./fiturData";
import Reveal from "./Reveal";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const GRAY = "#e2e8f0";

/* Mockup besar per fitur (dipakai di kartu section, gaya seperti Cal.com).
   Aksen memakai warna terkunci fitur (c) + netral. */
const mockups: Record<string, (c: string) => ReactNode> = {
  "Cek cepat": (c) => (
    <div className="rounded-xl border border-navy-50 bg-navy-50/30 p-3">
      <div className="flex items-center gap-2 rounded-lg border border-navy-50 bg-white py-1.5 pl-3 pr-1.5">
        <span className="truncate font-mono text-[11px] text-ink-600">
          bit.ly/hadiah-bri
        </span>
        <span
          className="ml-auto rounded-md px-3 py-1.5 text-[11px] font-semibold text-white"
          style={{ backgroundImage: iconGradient(c) }}
        >
          Cek
        </span>
      </div>
      <div className="mt-2.5 flex items-center justify-between rounded-lg border border-navy-50 bg-white p-2.5">
        <span className="text-xs font-medium text-ink-900">
          Hasil pengecekan
        </span>
        <span
          className="rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
          style={{ backgroundColor: c }}
        >
          Risiko tinggi
        </span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-navy-50">
        <div
          className="h-full rounded-full"
          style={{ width: "82%", backgroundColor: c }}
        />
      </div>
    </div>
  ),

  "Peringatan dini": (c) => (
    <div className="space-y-2">
      <div className="flex items-start gap-2.5 rounded-xl border border-navy-50 bg-white p-3 shadow-sm">
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white"
          style={{ backgroundImage: iconGradient(c) }}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" {...stroke} aria-hidden>
            <path d="M12 3.5 3 19h18L12 3.5Z" />
            <path d="M12 10v4" />
            <path d="M12 17h.01" />
          </svg>
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-ink-900">SMS mencurigakan</p>
          <p className="truncate text-[11px] text-ink-500">
            &quot;Selamat, klaim hadiah Anda di s.id/...&quot;
          </p>
        </div>
        <span
          className="ml-auto shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold text-white"
          style={{ backgroundColor: c }}
        >
          Baru
        </span>
      </div>
      <div className="mx-3 flex items-center gap-2.5 rounded-xl border border-navy-50 bg-white/60 p-2.5">
        <span
          className="h-2 w-2 shrink-0 rounded-full"
          style={{ backgroundColor: c }}
        />
        <p className="truncate text-[11px] text-ink-500">
          Nomor tak dikenal menelepon 3x
        </p>
      </div>
    </div>
  ),

  "Jantung produk": (c) => (
    <div className="rounded-xl border border-navy-50 bg-white p-3">
      <div className="mb-3 flex items-center gap-1.5">
        {["Cerita", "Bukti", "Verifikasi", "Kirim"].map((s, idx) => (
          <div key={s} className="flex flex-1 items-center gap-1.5">
            <span
              className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] font-bold text-white"
              style={{ backgroundColor: idx <= 1 ? c : GRAY }}
            >
              {idx + 1}
            </span>
            {idx < 3 && (
              <span
                className="h-0.5 flex-1 rounded"
                style={{ backgroundColor: idx < 1 ? c : "#eef2f9" }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          ["Rekening pelaku", "•••• 4471"],
          ["Jumlah kerugian", "Rp 4.250.000"],
          ["Tanggal", "14 Jul 2026"],
        ].map(([k, v]) => (
          <div
            key={k}
            className="flex items-center justify-between rounded-lg border border-navy-50 bg-navy-50/40 px-2.5 py-1.5"
          >
            <span className="text-[10px] text-ink-500">{k}</span>
            <span className="font-mono text-[11px] text-ink-900">{v}</span>
          </div>
        ))}
      </div>
      <div
        className="mt-2.5 rounded-lg py-2 text-center text-[11px] font-semibold text-white"
        style={{ backgroundImage: iconGradient(c) }}
      >
        Tinjau &amp; kirim
      </div>
    </div>
  ),

  "Mesin skor": (c) => {
    const circ = 2 * Math.PI * 26;
    return (
      <div className="flex items-center gap-4 rounded-xl border border-navy-50 bg-white p-4">
        <div className="relative shrink-0">
          <svg viewBox="0 0 72 72" className="h-16 w-16" aria-hidden>
            <circle
              cx="36"
              cy="36"
              r="26"
              fill="none"
              strokeWidth="7"
              style={{ stroke: "var(--color-navy-50)" }}
            />
            <circle
              cx="36"
              cy="36"
              r="26"
              fill="none"
              strokeWidth="7"
              strokeLinecap="round"
              stroke={c}
              strokeDasharray={circ}
              strokeDashoffset={circ * 0.18}
              transform="rotate(-90 36 36)"
            />
          </svg>
          <span
            className="absolute inset-0 flex items-center justify-center font-mono text-sm font-semibold"
            style={{ color: c }}
          >
            82
          </span>
        </div>
        <div className="min-w-0 space-y-1.5">
          {["Risk scoring", "Fuzzy logic", "Database modus"].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: c }}
              />
              <span className="text-[11px] text-ink-600">{s}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },

  Adil: (c) => {
    const steps = [
      { t: "Banding diajukan", state: "done" },
      { t: "Ditinjau tim JAGAD", state: "active" },
      { t: "Keputusan", state: "pending" },
    ];
    return (
      <div className="rounded-xl border border-navy-50 bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-ink-900">
            Status banding
          </span>
          <span
            className="rounded-full px-2 py-0.5 text-[9px] font-semibold text-white"
            style={{ backgroundColor: c }}
          >
            Ditinjau
          </span>
        </div>
        <ol className="space-y-2.5">
          {steps.map((s) => (
            <li key={s.t} className="flex items-center gap-2.5">
              <span
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: s.state === "pending" ? GRAY : c }}
              >
                {s.state === "done" && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-2.5 w-2.5 text-white"
                    {...stroke}
                    aria-hidden
                  >
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                )}
              </span>
              <span
                className={`text-[11px] ${
                  s.state === "pending"
                    ? "text-ink-400"
                    : "font-medium text-ink-900"
                }`}
              >
                {s.t}
              </span>
            </li>
          ))}
        </ol>
      </div>
    );
  },

  Komunitas: (c) => (
    <div className="rounded-xl border border-navy-50 bg-white p-3">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-ink-400">
        Kabar modus terbaru
      </p>
      <ul className="space-y-2">
        {[
          ["QRIS palsu di media sosial", "Tinggi"],
          ["Investasi bodong mikro", "Sedang"],
          ["Penipuan transfer bank", "Tinggi"],
        ].map(([t, lvl]) => (
          <li key={t} className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: c }}
            />
            <span className="truncate text-[11px] text-ink-600">{t}</span>
            <span
              className="ml-auto shrink-0 text-[9px] font-semibold"
              style={{ color: c }}
            >
              {lvl}
            </span>
          </li>
        ))}
      </ul>
    </div>
  ),
};

export default function Fitur() {
  return (
    <section id="fitur" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-blue-500">
          Fitur
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Dua cara masuk, satu mesin risiko
        </h2>
        <p className="mt-4 text-lg text-ink-600">
          Cek cepat saat curiga, atau lengkapi laporan saat sudah terlanjur.
          Keduanya bermuara pada mesin skor risiko yang sama.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {fitur.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 90} className="h-full">
            <Link
              href={`/fitur/${item.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-50 bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-navy-900/5"
            >
              <span className="inline-flex w-fit rounded-md bg-navy-50 px-2 py-1 font-mono text-xs font-medium text-ink-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-600">{item.description}</p>
              <div className="pt-6">{mockups[item.tag]?.(item.color)}</div>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-blue-500">
                Selengkapnya
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path
                    d="m9 6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
