import type { ReactNode } from "react";

export type Fitur = {
  /* Slug URL untuk halaman detail fitur: /fitur/<slug>. */
  slug: string;
  tag: string;
  title: string;
  description: string;
  points: string[];
  /* Satu warna dasar per fitur — hex hardcoded, sengaja lepas dari token
     warna primary. Perubahan warna primary TIDAK boleh mengubah warna ini. */
  color: string;
  icon: ReactNode;
  preview: ReactNode;
};

/* Gradient ikon: satu warna saja (terang -> gelap dari hue yang sama). */
export const iconGradient = (c: string) =>
  `linear-gradient(140deg, ${c} 0%, color-mix(in srgb, ${c}, #000 30%) 100%)`;

/* Tint latar kartu saat hover: wash lembut dari warna yang sama. */
export const hoverTint = (c: string) =>
  `linear-gradient(180deg, color-mix(in srgb, ${c}, #fff 94%) 0%, color-mix(in srgb, ${c}, #fff 82%) 100%)`;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const fitur: Fitur[] = [
  {
    slug: "cek-cepat",
    tag: "Cek cepat",
    title: "Periksa sebelum percaya",
    description:
      "Tempel tautan, nomor rekening, nomor telepon, atau akun e-wallet, JAGAD mengembalikan skor risiko sebelum kamu terlanjur transfer.",
    points: ["Tautan", "Rekening", "Nomor telepon", "E-wallet"],
    color: "#26CCC2",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke} aria-hidden>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </svg>
    ),
    preview: (
      <div className="rounded-lg border border-navy-50 bg-navy-50/40 p-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate font-mono text-[10px] text-ink-600">
            bit.ly/hadiah-bri
          </span>
          <span className="shrink-0 rounded-full bg-blue-500/10 px-2 py-0.5 text-[9px] font-semibold text-blue-500">
            Risiko tinggi
          </span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-navy-50">
          <div className="h-full w-4/5 rounded-full bg-blue-500" />
        </div>
      </div>
    ),
  },
  {
    slug: "peringatan-dini",
    tag: "Peringatan dini",
    title: "Sinyal bahaya lebih awal",
    description:
      "Deteksi pola spam dan penipuan dari notifikasi SMS dan nomor penelepon, lalu tampilkan peringatan sebelum keputusan diambil.",
    points: ["Spam early warning", "Fraud early warning", "Peringatan panggilan"],
    color: "#FF9D4D",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke} aria-hidden>
        <path d="M12 3.5 3 19h18L12 3.5Z" />
        <path d="M12 10v4" />
        <path d="M12 17h.01" />
      </svg>
    ),
    preview: (
      <div className="flex items-start gap-2 rounded-lg border border-navy-50 bg-white p-2.5">
        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
        <div className="min-w-0">
          <p className="text-[10px] font-semibold text-ink-900">
            SMS mencurigakan
          </p>
          <p className="truncate text-[9px] text-ink-400">
            &quot;Selamat, klaim hadiah Anda di...&quot;
          </p>
        </div>
      </div>
    ),
  },
  {
    slug: "asisten-pelaporan",
    tag: "Jantung produk",
    title: "Asisten pelaporan AI",
    description:
      "Dari percakapan dan bukti yang kamu unggah, JAGAD menyusun form terisi sesuai format IASC lengkap dengan kronologi, kamu tanda tangani, lalu diteruskan ke pihak terkait.",
    points: ["Form terisi otomatis", "Affidavit / persetujuan", "Teruskan ke pihak terkait"],
    color: "#7C00FE",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke} aria-hidden>
        <path d="M6 3h9l4 4v14H6V3Z" />
        <path d="M14 3v5h5" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
    preview: (
      <div className="space-y-1 rounded-lg border border-navy-50 bg-navy-50/40 p-2.5">
        <div className="flex justify-between text-[9px]">
          <span className="text-ink-500">Rekening pelaku</span>
          <span className="font-mono text-ink-800">•••• 4471</span>
        </div>
        <div className="flex justify-between text-[9px]">
          <span className="text-ink-500">Jumlah kerugian</span>
          <span className="font-mono text-ink-800">Rp 4.250.000</span>
        </div>
      </div>
    ),
  },
  {
    slug: "skor-risiko",
    tag: "Mesin skor",
    title: "Skor risiko terukur",
    description:
      "Satu otak menilai semua sinyal: risk scoring, fuzzy logic, dan pencocokan database, jadi hasilnya bisa dipertanggungjawabkan, bukan tebak-tebakan.",
    points: ["Risk scoring", "Fuzzy logic", "Database modus"],
    color: "#6F00FF",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke} aria-hidden>
        <path d="M4 20V10M10 20V4M16 20v-6M22 20H2" />
      </svg>
    ),
    preview: (
      <div className="flex items-end gap-1 rounded-lg border border-navy-50 bg-white p-2.5">
        {[38, 62, 48, 82, 58].map((h, i) => (
          <span
            key={i}
            className="w-2 rounded-sm bg-blue-500/70"
            style={{ height: `${h * 0.36}px` }}
          />
        ))}
        <span className="ml-auto self-center font-mono text-sm font-medium text-blue-500">
          82
        </span>
      </div>
    ),
  },
  {
    slug: "jalur-banding",
    tag: "Adil",
    title: "Jalur banding",
    description:
      "Sistem bisa keliru menandai orang. Yang merasa salah tandai dapat mengajukan banding, ditinjau langsung oleh tim JAGAD sebelum diputuskan.",
    points: ["Ajukan banding", "Ditinjau tim JAGAD", "Diterima / ditolak"],
    color: "#FF2DD1",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke} aria-hidden>
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="M5 7 2.5 13a3 3 0 0 0 5 0L5 7ZM19 7l-2.5 6a3 3 0 0 0 5 0L19 7Z" />
      </svg>
    ),
    preview: (
      <div className="rounded-lg border border-navy-50 bg-white p-2.5">
        <p className="text-[10px] font-semibold text-ink-900">
          Banding ditinjau
        </p>
        <div className="mt-2 flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          <span className="h-0.5 flex-1 bg-blue-500/40" />
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          <span className="h-0.5 flex-1 bg-navy-50" />
          <span className="h-2 w-2 rounded-full bg-blue-300" />
        </div>
      </div>
    ),
  },
  {
    slug: "komunitas",
    tag: "Komunitas",
    title: "Beranda & komunitas",
    description:
      "Dashboard ringkas, kabar modus penipuan terbaru, dan komunitas tempat sesama pengguna saling mengingatkan.",
    points: ["Dashboard", "Kabar modus", "Komunitas"],
    color: "#00E0BA",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke} aria-hidden>
        <path d="M4 11 12 4l8 7" />
        <path d="M6 10v10h12V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
    preview: (
      <div className="space-y-1.5 rounded-lg border border-navy-50 bg-white p-2.5">
        <p className="flex items-center gap-1.5 text-[9px] text-ink-600">
          <span className="h-1 w-1 rounded-full bg-blue-500" /> Modus QRIS palsu
        </p>
        <p className="flex items-center gap-1.5 text-[9px] text-ink-600">
          <span className="h-1 w-1 rounded-full bg-blue-500" /> Investasi bodong
        </p>
      </div>
    ),
  },
];
