import Link from "next/link";
import PhoneChat from "./PhoneChat";
import Reveal from "./Reveal";
import HeroDataViz from "./HeroDataViz";
import PrototypePreview from "./PrototypePreview";

export default function Hero() {
  return (
    <section id="lapor" className="border-b border-navy-50 bg-navy-50/40">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Kiri: narasi */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-sm font-medium text-blue-500">
              Asisten pelaporan penipuan bertenaga AI
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl">
              Kena tipu online?
              <br />
              Tenang, kami bantu.
            </h1>

            <p className="mt-6 max-w-md text-lg text-ink-600">
              Kumpulkan bukti yang kamu punya: screenshot chat, SMS, bukti
              transfer. JAGAD membacanya, menyusun draft laporan sesuai format
              IASC, lalu kamu tinjau sebelum dikirim.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                aria-label="Download aplikasi Android"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 text-center font-semibold text-white transition-colors hover:bg-navy-700"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M17.6 9.48l1.84-3.18a.38.38 0 0 0-.14-.52.38.38 0 0 0-.52.14l-1.87 3.23A11.43 11.43 0 0 0 12 8.02c-1.77 0-3.44.4-4.9 1.13L5.23 5.92a.38.38 0 0 0-.52-.14.38.38 0 0 0-.14.52L6.4 9.48A10.8 10.8 0 0 0 1 18h22a10.8 10.8 0 0 0-5.4-8.52zM7 15.25a1.13 1.13 0 1 1 0-2.25 1.13 1.13 0 0 1 0 2.25zm10 0a1.13 1.13 0 1 1 0-2.25 1.13 1.13 0 0 1 0 2.25z" />
                </svg>
                Download
              </button>
              <Link
                href="#cara-kerja"
                className="rounded-xl border border-navy-900/15 bg-white px-6 py-3.5 text-center font-semibold text-navy-900 transition-colors hover:bg-navy-50"
              >
                Lihat cara kerjanya
              </Link>
            </div>

            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-500">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Bukti sensitif diproses di perangkat
            </p>
          </Reveal>

          {/* Kanan: mockup HP chat asisten */}
          <Reveal delay={150}>
            <PhoneChat />
          </Reveal>
        </div>

        <PrototypePreview />

        <HeroDataViz />
      </div>
    </section>
  );
}
