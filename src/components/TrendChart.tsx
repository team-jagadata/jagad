"use client";

import { useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

type Point = { date: string; value: number };

type Props = {
  data: Point[];
  title: string;
  subtitle?: string;
  seriesLabel?: string;
};

const PW = 1000;
const PH = 340;
const PAD_X = 14;

const idID = (n: number) => n.toLocaleString("id-ID");

function niceBounds(min: number, max: number) {
  const step = 200;
  return {
    min: Math.floor(min / step) * step,
    max: Math.ceil(max / step) * step,
    step,
  };
}

export default function TrendChart({
  data,
  title,
  subtitle,
  seriesLabel = "Laporan",
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const svgRef = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<number | null>(null);

  const n = data.length;
  const values = data.map((d) => d.value);
  const { min, max, step } = niceBounds(Math.min(...values), Math.max(...values));

  const ticks: number[] = [];
  for (let t = min; t <= max; t += step) ticks.push(t);

  const x = (i: number) => PAD_X + (i / (n - 1)) * (PW - 2 * PAD_X);
  const y = (v: number) => (1 - (v - min) / (max - min)) * PH;

  const lineD = data
    .map((d, i) => `${i ? "L" : "M"} ${x(i).toFixed(1)} ${y(d.value).toFixed(1)}`)
    .join(" ");
  const areaD = `${lineD} L ${x(n - 1).toFixed(1)} ${PH} L ${x(0).toFixed(1)} ${PH} Z`;

  const labelIdx = [0, 1, 2, 3, 4, 5].map((k) =>
    Math.round((k * (n - 1)) / 5),
  );

  const onMove = (clientX: number) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    const inner = (ratio * PW - PAD_X) / (PW - 2 * PAD_X);
    const idx = Math.max(0, Math.min(n - 1, Math.round(inner * (n - 1))));
    setHover(idx);
  };

  const active = hover != null ? data[hover] : null;
  const leftPct = hover != null ? (x(hover) / PW) * 100 : 0;
  const topPct = active ? (y(active.value) / PH) * 100 : 0;

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-navy-50 bg-white p-5 shadow-sm sm:p-7"
    >
      <h3 className="text-lg font-bold text-navy-900">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-ink-600">{subtitle}</p>}

      <div className="mt-6 flex">
        {/* Sumbu Y */}
        <div className="relative w-9 shrink-0 sm:w-11">
          {ticks
            .slice()
            .reverse()
            .map((t) => (
              <span
                key={t}
                className="absolute right-2 -translate-y-1/2 font-mono text-[11px] text-ink-400"
                style={{ top: `${(y(t) / PH) * 100}%` }}
              >
                {idID(t)}
              </span>
            ))}
        </div>

        {/* Plot */}
        <div className="relative flex-1">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${PW} ${PH}`}
            className="block h-auto w-full overflow-visible"
            onPointerMove={(e) => onMove(e.clientX)}
            onPointerLeave={() => setHover(null)}
          >
            <defs>
              <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-blue-500)" stopOpacity="0.28" />
                <stop offset="100%" stopColor="var(--color-blue-500)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Gridlines */}
            {ticks.map((t) => (
              <line
                key={t}
                x1="0"
                x2={PW}
                y1={y(t)}
                y2={y(t)}
                className="stroke-navy-50"
                strokeWidth="1"
                strokeDasharray="5 6"
                vectorEffect="non-scaling-stroke"
              />
            ))}

            {/* Area */}
            <path
              d={areaD}
              fill="url(#trendFill)"
              style={{
                opacity: inView ? 1 : 0,
                transition: "opacity 0.9s ease-out",
              }}
            />

            {/* Line */}
            <path
              d={lineD}
              fill="none"
              className="stroke-blue-500"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={inView ? 0 : 1}
              style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)" }}
            />

            {/* Crosshair + titik */}
            {active && (
              <>
                <line
                  x1={x(hover!)}
                  x2={x(hover!)}
                  y1="0"
                  y2={PH}
                  className="stroke-blue-300"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  cx={x(hover!)}
                  cy={y(active.value)}
                  r="5"
                  className="fill-blue-500"
                  stroke="white"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                />
              </>
            )}
          </svg>

          {/* Tooltip */}
          {active && (
            <div
              className="pointer-events-none absolute z-10 rounded-xl border border-navy-50 bg-white p-3 shadow-lg"
              style={{
                left: `${Math.min(Math.max(leftPct, 14), 86)}%`,
                top: `${topPct}%`,
                transform: "translate(-50%, -130%)",
              }}
            >
              <p className="whitespace-nowrap text-xs font-semibold text-navy-900">
                {active.date}, 2026
              </p>
              <div className="mt-1.5 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm bg-blue-500" />
                <span className="text-xs text-ink-600">{seriesLabel}</span>
                <span className="ml-4 font-mono text-xs font-semibold text-navy-900">
                  {idID(active.value)}
                </span>
              </div>
            </div>
          )}

          {/* Sumbu X */}
          <div className="relative mt-2 h-4">
            {labelIdx.map((i) => (
              <span
                key={i}
                className="absolute font-mono text-[11px] text-ink-400"
                style={{
                  left: `${(x(i) / PW) * 100}%`,
                  transform:
                    i === 0
                      ? "translateX(0)"
                      : i === n - 1
                        ? "translateX(-100%)"
                        : "translateX(-50%)",
                }}
              >
                {data[i].date}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
