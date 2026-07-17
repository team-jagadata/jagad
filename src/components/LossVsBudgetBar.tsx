"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatRupiahTriliun, formatTriliun } from "@/lib/format";

/* ── Data: Skala Kerugian vs Anggaran Daerah ──────────────────────────────
   Nilai dalam satuan Triliun Rupiah. Ubah di sini bila ada pemutakhiran. */
type Batang = {
  name: string;
  value: number;
  source: string;
  color: string;
};

const DATA: Batang[] = [
  {
    name: "Kerugian Negara",
    value: 9.1,
    source: "IASC, Nov 2025",
    color: "#f43f5e", // merah muda — menonjolkan urgensi
  },
  {
    name: "APBD 2026 Prov. Kaltara",
    value: 2.3,
    source: "Pemprov Kaltara",
    color: "#f59e0b", // kuning
  },
];

const TOTAL = DATA.reduce((sum, d) => sum + d.value, 0);
const persenDari = (value: number) => Math.round((value / TOTAL) * 100);

/* Sumbu-X dalam Triliun; batas di atas nilai terbesar supaya proporsi
   terbaca jelas dan label nilai di ujung bar tidak terpotong. */
const X_MAX = 12;
const X_TICKS = [0, 2, 4, 6, 8, 10, 12];

/* Tick kategori di kiri bar: nama + sumber (sumber lebih kecil/muted). */
function CategoryTick({
  x,
  y,
  payload,
}: {
  x?: number;
  y?: number;
  payload?: { value: string };
}) {
  const item = DATA.find((d) => d.name === payload?.value);
  return (
    <g transform={`translate(${x ?? 0},${y ?? 0})`}>
      <text
        x={-10}
        y={-3}
        textAnchor="end"
        className="fill-ink-900"
        style={{ fontSize: 12, fontWeight: 600 }}
      >
        {payload?.value}
      </text>
      <text
        x={-10}
        y={13}
        textAnchor="end"
        className="fill-ink-400"
        style={{ fontSize: 10 }}
      >
        Sumber: {item?.source}
      </text>
    </g>
  );
}

/* Tooltip: nama, nilai (Rp Triliun) + persentase, dan sumber. */
function BarTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload: Batang }>;
}) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="rounded-lg border border-navy-50 bg-white px-3 py-2 shadow-md">
      <p className="text-sm font-semibold text-ink-900">{d.name}</p>
      <p className="font-mono text-sm text-navy-900">
        {formatRupiahTriliun(d.value)}{" "}
        <span className="text-ink-400">({persenDari(d.value)}%)</span>
      </p>
      <p className="text-[11px] text-ink-400">Sumber: {d.source}</p>
    </div>
  );
}

export default function LossVsBudgetBar() {
  return (
    <div>
      <div className="h-[188px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={DATA}
            layout="vertical"
            margin={{ top: 4, right: 44, bottom: 4, left: 0 }}
            barCategoryGap="30%"
          >
            <CartesianGrid
              horizontal={false}
              vertical
              strokeDasharray="3 3"
              stroke="#eef2f9"
            />
            <XAxis
              type="number"
              domain={[0, X_MAX]}
              ticks={X_TICKS}
              tickLine={false}
              axisLine={{ stroke: "#eef2f9" }}
              tick={{ fill: "#98a2b3", fontSize: 11 }}
              tickFormatter={(v) => String(v)}
            />
            <YAxis
              type="category"
              dataKey="name"
              width={150}
              axisLine={false}
              tickLine={false}
              tick={<CategoryTick />}
            />
            <Tooltip
              cursor={{ fill: "rgba(12,53,106,0.04)" }}
              content={<BarTooltip />}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={28}>
              {DATA.map((d) => (
                <Cell key={d.name} fill={d.color} />
              ))}
              <LabelList
                dataKey="value"
                position="right"
                offset={10}
                formatter={(value) => formatTriliun(Number(value))}
                fill="#0c356a"
                style={{ fontSize: 13, fontWeight: 700 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Judul sumbu — gaya referensi */}
      <p className="mt-1 text-right font-mono text-[11px] text-ink-400">
        Rp Triliun &rarr;
      </p>

      {/* Legend kustom */}
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {DATA.map((d) => (
          <li key={d.name} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: d.color }}
              aria-hidden
            />
            <span className="text-xs font-medium text-ink-600">{d.name}</span>
          </li>
        ))}
      </ul>

      {/* Ringkasan angka — gaya referensi */}
      <div className="mt-6 grid grid-cols-2 divide-x divide-navy-900/10 border-t border-navy-900/10 pt-5">
        {DATA.map((d) => (
          <div key={d.name} className="px-4 first:pl-0">
            <p className="font-mono text-[11px] uppercase tracking-wide text-ink-400">
              {d.name}
            </p>
            <p className="mt-1 font-mono text-lg font-semibold text-navy-900">
              {formatTriliun(d.value)}{" "}
              <span className="text-sm font-medium text-ink-400">
                ({persenDari(d.value)}%)
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
