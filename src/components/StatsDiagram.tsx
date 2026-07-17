import { Fragment } from "react";

/* Diagram naratif untuk 3 angka dari sumber yang sama (IASC):
   volume laporan -> nilai kerugian -> celah golden hour yang JAGAD tutup.
   Warna memakai token primary (var --color-*) supaya ikut berubah bila
   warna primary diganti. */

const brandGradient =
  "linear-gradient(140deg, var(--color-blue-500) 0%, var(--color-navy-900) 100%)";

const iconStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
      style={{ backgroundImage: brandGradient }}
    >
      <span className="h-6 w-6">{children}</span>
    </div>
  );
}

/* Donut ~1% — proporsi asli (1% terisi, 99% track). */
function GaugeBadge() {
  const r = 23;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - 0.01);
  return (
    <svg viewBox="0 0 52 52" className="h-12 w-12 shrink-0" aria-hidden>
      <defs>
        <linearGradient id="gaugeArc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--color-blue-500)" }} />
          <stop offset="100%" style={{ stopColor: "var(--color-navy-900)" }} />
        </linearGradient>
      </defs>
      <circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        strokeWidth="6"
        style={{ stroke: "var(--color-navy-50)" }}
      />
      <circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        stroke="url(#gaugeArc)"
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform="rotate(-90 26 26)"
      />
    </svg>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-1.5 py-1 md:flex-col md:py-0">
      <span className="font-mono text-[10px] uppercase tracking-widest text-blue-500">
        {label}
      </span>
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 rotate-90 text-ink-400 md:rotate-0"
        aria-hidden
        {...iconStroke}
      >
        <path d="m9 6 6 6-6 6" />
      </svg>
    </div>
  );
}

type Node = {
  visual: React.ReactNode;
  value: string;
  label: string;
  sub: string;
  source: string;
};

const nodes: Node[] = [
  {
    visual: (
      <IconBadge>
        <svg viewBox="0 0 24 24" {...iconStroke} aria-hidden>
          <path d="M4 5h16v9H4z" />
          <path d="M4 14h5l1.5 2h3L15 14h5" />
          <path d="M8 8h8M8 11h5" />
        </svg>
      </IconBadge>
    ),
    value: "411.055",
    label: "Laporan penipuan masuk",
    sub: "≈ 1.000 per hari",
    source: "IASC",
  },
  {
    visual: (
      <IconBadge>
        <svg viewBox="0 0 24 24" {...iconStroke} aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M6 9v6M18 9v6" />
        </svg>
      </IconBadge>
    ),
    value: "Rp 9,1 T",
    label: "Total kerugian nasional",
    sub: "≈ Rp 22 jt per laporan",
    source: "IASC, Nov 2024-Des 2025",
  },
  {
    visual: <GaugeBadge />,
    value: "~1%",
    label: "Korban melapor di golden hour",
    sub: "1 jam pertama",
    source: "Tech in Asia / IASC",
  },
];

export default function StatsDiagram() {
  return (
    <div className="mt-16 border-t border-navy-900/10 pt-10">
      <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
        {nodes.map((node, i) => (
          <Fragment key={node.value}>
            <div
              className="rise-in flex flex-1 items-center gap-4 rounded-2xl border border-navy-50 bg-white p-5"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {node.visual}
              <div className="min-w-0">
                <p className="font-mono text-2xl font-medium leading-none text-navy-900">
                  {node.value}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-ink-900">
                  {node.label}
                </p>
                <p className="text-xs text-ink-600">{node.sub}</p>
                <p className="mt-0.5 text-[11px] text-ink-400">{node.source}</p>
              </div>
            </div>
            {i < nodes.length - 1 && (
              <Connector label={i === 0 ? "senilai" : "namun hanya"} />
            )}
          </Fragment>
        ))}
      </div>

      <p className="mt-6 max-w-3xl text-sm text-ink-600">
        Sedikitnya laporan tepat waktu bikin peluang pembekuan rekening pelaku
        hilang. JAGAD memangkas waktu lapor supaya lebih banyak korban masuk di
        golden hour.
      </p>
    </div>
  );
}
