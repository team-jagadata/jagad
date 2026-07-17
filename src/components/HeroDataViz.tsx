import Reveal from "./Reveal";
import ReportingGapDonut from "./ReportingGapDonut";
import LossVsBudgetBar from "./LossVsBudgetBar";

/* Dua grafik konteks untuk hero: skala penipuan yang tidak dilaporkan dan
   besarnya kerugian dibanding anggaran daerah. */
export default function HeroDataViz() {
  return (
    <Reveal className="mt-16 border-t border-navy-900/10 pt-12">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-blue-500">
          Kenapa ini penting
        </span>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
          Skala penipuan online yang tak terlihat
        </h2>
        <p className="mt-3 text-ink-600">
          Sebagian besar penipuan tidak pernah dilaporkan, sementara total
          kerugiannya jauh melampaui anggaran sebuah provinsi. Inilah
          kesenjangan yang JAGAD bantu tutup.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-navy-50 bg-white p-6 shadow-sm">
          <h3 className="text-base font-bold text-navy-900">
            Kesenjangan Pelaporan Penipuan Online
          </h3>
          <p className="mt-1 text-sm text-ink-600">
            Dari hampir 2 juta kasus, hanya sebagian kecil yang benar-benar
            dilaporkan.
          </p>
          <div className="mt-4">
            <ReportingGapDonut />
          </div>
        </div>

        <div className="rounded-2xl border border-navy-50 bg-white p-6 shadow-sm">
          <h3 className="text-base font-bold text-navy-900">
            Skala Kerugian vs Anggaran Daerah
          </h3>
          <p className="mt-1 text-sm text-ink-600">
            Kerugian penipuan nasional hampir 4&times; APBD Provinsi Kalimantan
            Utara.
          </p>
          <div className="mt-6">
            <LossVsBudgetBar />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
