const langkah = [
  {
    number: "01",
    title: "Ceritakan kejadiannya",
    description:
      "Ngobrol biasa dengan asisten JAGAD. Tidak ada istilah teknis, tidak ada form panjang yang bikin menyerah di tengah jalan.",
  },
  {
    number: "02",
    title: "Kami susun laporannya",
    description:
      "Unggah bukti yang kamu punya: screenshot chat, SMS, bukti transfer. JAGAD membaca dan mengisikan field laporan sesuai format IASC.",
  },
  {
    number: "03",
    title: "Kirim & pantau",
    description:
      "Tinjau dan lengkapi draftnya, lalu kirim dengan satu ketukan. Pantau perkembangan laporan sampai ditindaklanjuti.",
  },
];

export default function TigaLangkah() {
  return (
    <section id="cara-kerja" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Tiga langkah, selesai
        </h2>
        <p className="mt-4 text-lg text-ink-600">
          Golden hour cuma 1 jam. Form resmi yang panjang bikin korban telat
          melapor. JAGAD memangkas itu jadi percakapan singkat.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {langkah.map((item) => (
          <div
            key={item.number}
            className="rounded-2xl border border-navy-50 bg-white p-8"
          >
            <span className="inline-flex rounded-md bg-navy-50 px-2 py-1 font-mono text-xs font-medium text-blue-500">
              {item.number}
            </span>
            <h3 className="mt-5 text-xl font-bold text-navy-900">
              {item.title}
            </h3>
            <p className="mt-3 text-ink-600">{item.description}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-400">
        Laporan tidak pernah terkirim otomatis. Kamu selalu meninjau dan
        menyetujuinya lebih dulu.
      </p>
    </section>
  );
}
