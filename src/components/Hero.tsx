import Link from "next/link";
import PhoneChat from "./PhoneChat";
import StatsDiagram from "./StatsDiagram";

export default function Hero() {
  return (
    <section id="lapor" className="border-b border-navy-50 bg-navy-50/40">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Kiri: narasi */}
          <div>
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
              <Link
                href="#"
                className="rounded-xl bg-navy-900 px-6 py-3.5 text-center font-semibold text-white transition-colors hover:bg-navy-700"
              >
                Mulai laporan
              </Link>
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
          </div>

          {/* Kanan: mockup HP chat asisten */}
          <PhoneChat />
        </div>

        {/* Diagram naratif dari 3 angka statistik */}
        <StatsDiagram />
      </div>
    </section>
  );
}
