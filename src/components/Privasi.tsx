import Reveal from "./Reveal";

const jaminan = [
  {
    title: "Diproses di perangkat",
    description:
      "Foto KTP, isi chat, dan rekaman suara diproses langsung di HP kamu, tidak dikirim atau disimpan dalam bentuk mentah.",
  },
  {
    title: "Hanya data terstruktur yang keluar",
    description:
      "Yang dikirim ke server cuma field teranonimisasi seperti nomor rekening pelaku dan pola modus. Bukan foto atau rekaman aslimu.",
  },
  {
    title: "Kamu yang pegang kendali",
    description:
      "Consent eksplisit wajib sebelum data diteruskan ke pihak ketiga, sesuai UU PDP Pasal 20. Tidak ada yang jalan diam-diam.",
  },
];

export default function Privasi() {
  return (
    <section id="tentang" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Data kamu aman, selalu
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-600">
              Dari riset kami sendiri ke 56 korban penipuan, 38 di antaranya
              khawatir soal aplikasi yang membaca pesan dan panggilan mereka.
              Kekhawatiran itu wajar, jadi kami rancang JAGAD dari sisi itu
              dulu.
            </p>
            <p className="mt-6 font-mono text-sm text-ink-400">
              Survei primer tim NiceShield, 56 responden
            </p>
          </Reveal>

          <div className="space-y-4">
            {jaminan.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="rounded-2xl border border-navy-900/10 bg-white p-6">
                  <h3 className="font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
