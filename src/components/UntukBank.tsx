import Link from "next/link";

const statCards = [
  {
    value: "46%",
    label: "korban kehilangan uang dalam kurang dari 30 menit sejak kontak pertama",
  },
  {
    value: "84%",
    label: "korban tidak mendapatkan kembali dananya sepeser pun",
  },
];

const sinyal = [
  { modus: "Impersonation: mengaku polisi", tone: "Risiko tinggi" },
  { modus: "QRIS palsu di media sosial", tone: "Risiko tinggi" },
  { modus: "Investasi bodong skala mikro", tone: "Diproses" },
];

export default function UntukBank() {
  return (
    <section id="untuk-bank" className="bg-navy-900">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-blue-300">
              Untuk bank &amp; fintech
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Fraud intelligence, dari lapangan
            </h2>
            <p className="mt-4 max-w-md text-lg text-blue-100">
              Setiap laporan yang disusun lewat JAGAD menghasilkan sinyal
              terstruktur dan teranonimisasi, langsung dari korban, sebelum
              dana sempat berpindah lebih jauh.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {statCards.map((card) => (
                <div
                  key={card.value}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-mono text-3xl font-medium text-white">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm text-blue-100">{card.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 font-mono text-xs text-white/40">
              Survei primer tim NiceShield, 56 responden
            </p>

            <Link
              href="#"
              className="mt-8 inline-block rounded-xl bg-white px-6 py-3.5 font-semibold text-navy-900 transition-opacity hover:opacity-90"
            >
              Ajak diskusi kemitraan
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-white">Sinyal penipuan terbaru</h3>
            <p className="mt-1 text-sm text-blue-100">
              Contoh tampilan: pola modus teranonimisasi dari laporan pengguna.
            </p>

            <ul className="mt-5 space-y-3">
              {sinyal.map((item) => (
                <li
                  key={item.modus}
                  className="flex items-center justify-between gap-4 rounded-xl bg-white/5 px-4 py-3"
                >
                  <span className="text-sm text-white">{item.modus}</span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[11px] ${
                      item.tone === "Risiko tinggi"
                        ? "bg-white/20 text-white"
                        : "bg-white/10 text-blue-100"
                    }`}
                  >
                    {item.tone}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
