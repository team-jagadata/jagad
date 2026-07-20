"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { formatAngka, formatPersen } from "@/lib/format";

/* ── Data: Kesenjangan Pelaporan Penipuan Online ──────────────────────────
   Ubah angka/sumber di sini bila ada pemutakhiran data. */
type Segmen = {
  name: string;
  value: number;
  source: string;
  color: string;
  /** segmen utama yang diberi penekanan visual */
  utama?: boolean;
};

const DATA: Segmen[] = [
  {
    name: "Penipuan Tidak Dilaporkan",
    value: 1_546_349,
    source: "Safer Internet Lab",
    color: "#dc2626", // merah — segmen terbesar (poin utama)
    utama: true,
  },
  {
    name: "Laporan Penipuan Masuk",
    value: 411_055,
    source: "IASC",
    color: "#0174be", // biru (primary)
  },
  {
    name: "Golden Hour",
    value: 19_574,
    source: "Tech in Asia / IASC",
    color: "#f59e0b", // kuning
  },
];

const TOTAL = DATA.reduce((sum, d) => sum + d.value, 0);
const persenDari = (value: number) => (value / TOTAL) * 100;

/* Tooltip: nama segmen, jumlah absolut, dan persentase terhadap total. */
function DonutTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: Segmen }>;
}) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="rounded-lg border border-navy-50 bg-white px-3 py-2 shadow-md">
      <p className="text-sm font-semibold text-ink-900">{d.name}</p>
      <p className="font-mono text-sm text-navy-900">
        {formatAngka(d.value)} <span className="text-ink-400">kasus</span>
      </p>
      <p className="text-xs font-medium text-blue-500">
        {formatPersen(persenDari(d.value))} dari total
      </p>
    </div>
  );
}

export default function ReportingGapDonut() {
  const utama = DATA.find((d) => d.utama) ?? DATA[0];

  return (
    <div>
      <div className="relative mx-auto h-56 w-full max-w-[248px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Pie
              data={DATA}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="64%"
              outerRadius="100%"
              startAngle={90}
              endAngle={-270}
              paddingAngle={2}
              cornerRadius={4}
            >
              {DATA.map((d) => (
                <Cell
                  key={d.name}
                  fill={d.color}
                  stroke={d.utama ? d.color : "#ffffff"}
                  strokeWidth={d.utama ? 3 : 2}
                />
              ))}
            </Pie>
            <Tooltip content={<DonutTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        {/* Label tengah — penekanan pada segmen utama */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          <span
            className="font-mono text-3xl font-extrabold leading-none"
            style={{ color: utama.color }}
          >
            {formatPersen(persenDari(utama.value))}
          </span>
          <span className="mt-1.5 max-w-[7.5rem] text-[11px] font-semibold leading-tight text-ink-600">
            tidak dilaporkan
          </span>
        </div>
      </div>

      {/* Legend kustom: nama, angka, dan sumber (sumber lebih kecil/muted) */}
      <ul className="mt-6 space-y-3">
        {DATA.map((d) => (
          <li key={d.name} className="flex items-start gap-3">
            <span
              className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: d.color }}
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <span
                  className={
                    d.utama
                      ? "text-sm font-bold text-ink-900"
                      : "text-sm font-medium text-ink-900"
                  }
                >
                  {d.name}
                </span>
                <span className="font-mono text-sm font-semibold text-navy-900">
                  {formatAngka(d.value)}
                </span>
              </div>
              <p className="text-[11px] text-ink-400">Sumber: {d.source}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
