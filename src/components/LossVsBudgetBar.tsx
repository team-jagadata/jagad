"use client";

import {
  Bar,
  BarChart,
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
    name: "APBD 2026 Prov. Kalsel",
    value: 2.3,
    source: "Pemprov Kalsel",
    color: "#f59e0b", // kuning
  },
];

/* Sumbu-X sedikit di atas nilai terbesar supaya proporsi terbaca dramatis
   dan label nilai di ujung bar tidak terpotong. */
const X_MAX = 11;

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

/* Tooltip: nama, nilai (Rp Triliun), dan sumber. */
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
        {formatRupiahTriliun(d.value)}
      </p>
      <p className="text-[11px] text-ink-400">Sumber: {d.source}</p>
    </div>
  );
}

export default function LossVsBudgetBar() {
  return (
    <div className="h-[180px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={DATA}
          layout="vertical"
          margin={{ top: 4, right: 52, bottom: 4, left: 0 }}
          barCategoryGap="28%"
        >
          <XAxis type="number" domain={[0, X_MAX]} hide />
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
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={30}>
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
  );
}
