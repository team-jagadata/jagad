"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

/* Menampilkan prototipe aplikasi JAGAD (context-summary/JagaData Prototype.html,
   disalin ke /public) di dalam hero. Prototipe punya lebar desain tetap, jadi
   kita ukur tinggi kontennya (same-origin) lalu skalakan agar pas di segala
   layar — turun-skala di mobile, ukuran natural di desktop. */

const DESIGN_WIDTH = 462; // lebar frame demo (phone 414 + padding panggung)
const FALLBACK_HEIGHT = 980;

export default function PrototypePreview() {
  const outerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [scale, setScale] = useState(1);
  const [naturalHeight, setNaturalHeight] = useState(FALLBACK_HEIGHT);

  const recalc = useCallback(() => {
    const outer = outerRef.current;
    if (!outer) return;
    const w = outer.clientWidth;
    setScale(Math.min(1, w / DESIGN_WIDTH));
  }, []);

  // Ukur tinggi konten prototipe setelah iframe termuat (same-origin).
  const onLoad = useCallback(() => {
    const doc = frameRef.current?.contentDocument;
    if (doc?.documentElement) {
      const h = doc.documentElement.scrollHeight;
      if (h > 0) setNaturalHeight(h);
    }
    recalc();
  }, [recalc]);

  useEffect(() => {
    recalc();
    const outer = outerRef.current;
    if (!outer) return;
    const ro = new ResizeObserver(recalc);
    ro.observe(outer);
    return () => ro.disconnect();
  }, [recalc]);

  return (
    <section
      id="prototipe"
      className="mt-16 border-t border-navy-900/10 pt-12"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-blue-500">
          Prototipe interaktif
        </span>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
          Coba langsung alurnya
        </h2>
        <p className="mt-3 text-ink-600">
          Dari cek cepat sampai laporan siap kirim — jelajahi aplikasi JAGAD
          apa adanya. Ketuk tab di atas ponsel untuk berpindah layar.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-10">
        <div className="relative">
          {/* Cahaya dekoratif di belakang ponsel */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-72 max-w-md rounded-full bg-blue-300/25 blur-3xl"
          />

          <div ref={outerRef} className="relative mx-auto w-full max-w-3xl">
            <div
              className="float-soft mx-auto overflow-hidden rounded-3xl border border-navy-50 bg-navy-50/40 shadow-2xl shadow-navy-900/10"
              style={{
                width: DESIGN_WIDTH * scale,
                height: naturalHeight * scale,
              }}
            >
              <iframe
                ref={frameRef}
                src="/jagadata-prototype.html"
                title="Prototipe aplikasi JAGAD"
                loading="lazy"
                onLoad={onLoad}
                className="border-0"
                style={{
                  width: DESIGN_WIDTH,
                  height: naturalHeight,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
