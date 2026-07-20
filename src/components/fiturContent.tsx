/* Konten panjang per fitur untuk halaman detail /fitur/<slug>.
   Metadata ringkas (judul, tag, warna, ikon, preview) tetap tinggal di
   fiturData.tsx — file ini hanya menambah naskah untuk halaman penuh.

   Naskah digrounding ke konteks produk JAGAD (JAGAD_Project_Context_Summary):
   angka riil dari IASC/OJK + survei tim, dan framing teknis yang jujur
   (tanpa overclaim "otomatis" untuk hal yang butuh konfirmasi manual).

   Skema section sengaja kecil supaya tipografi konsisten: renderer
   (FeatureArticle) yang memberi gaya, konten cukup deklaratif. Blok `stats`
   khusus untuk data — nilainya dirender memakai IBM Plex Mono sesuai
   design system JAGAD (angka, ID kasus, timestamp = mono). */

export type Section =
  | { kind: "prose"; heading?: string; body: string[] }
  | {
      kind: "stats";
      heading?: string;
      intro?: string;
      items: { value: string; label: string; note?: string }[];
    }
  | {
      kind: "list";
      heading?: string;
      intro?: string;
      items: { title: string; text: string }[];
    }
  | {
      kind: "steps";
      heading?: string;
      intro?: string;
      steps: { title: string; text: string }[];
    }
  | { kind: "callout"; body: string };

export type FeatureContent = {
  slug: string;
  /* Kalimat pembuka di bawah judul hero halaman. */
  lede: string;
  /* Ringkasan untuk <meta description> halaman. */
  metaDescription: string;
  sections: Section[];
  /* Atribusi sumber data, dirender kecil (mono) di kaki artikel. */
  sources?: string;
};

export const fiturContent: FeatureContent[] = [
  {
    slug: "cek-cepat",
    lede: "Tempel satu tautan, nomor rekening, nomor telepon, atau akun e-wallet. JAGAD mengembalikan skor risiko dalam hitungan detik — sebelum kamu terlanjur percaya, apalagi transfer.",
    metaDescription:
      "Cek cepat JAGAD: periksa tautan, rekening, nomor telepon, dan e-wallet untuk skor risiko sebelum kamu transfer.",
    sections: [
      {
        kind: "prose",
        heading: "Jeda beberapa detik yang menyelamatkan",
        body: [
          "Sebagian besar penipuan online berhasil bukan karena datanya bocor, melainkan karena korban tidak sempat berpikir. Pelaku menekan dengan urgensi dan otoritas palsu, lalu uang berpindah sebelum keraguan sempat muncul.",
          "Dari survei tim kami terhadap 56 korban, hampir separuhnya kehilangan uang dalam kurang dari 30 menit sejak kontak pertama. Cek cepat dirancang untuk mengisi jeda itu: satu petunjuk, satu skor risiko, cukup untuk menahan diri sebelum transfer.",
        ],
      },
      {
        kind: "stats",
        intro: "Kenapa kecepatan memutuskan itu penting:",
        items: [
          {
            value: "46%",
            label: "korban kehilangan uang dalam < 30 menit sejak kontak pertama",
            note: "Survei tim · 56 responden",
          },
          {
            value: "84%",
            label: "korban tidak mendapatkan dananya kembali sepeser pun",
            note: "Survei tim · 56 responden",
          },
          {
            value: "≈ 1.000",
            label: "laporan penipuan masuk setiap hari secara nasional",
            note: "IASC",
          },
        ],
      },
      {
        kind: "list",
        heading: "Yang bisa kamu periksa",
        intro:
          "Empat jenis identitas digital yang paling sering dipakai pelaku:",
        items: [
          {
            title: "Tautan",
            text: "URL pemendek, halaman phishing, atau situs tiruan toko dan bank.",
          },
          {
            title: "Rekening",
            text: "Nomor rekening yang pernah dilaporkan terkait penipuan.",
          },
          {
            title: "Nomor telepon",
            text: "Nomor penelepon dan pengirim SMS yang berpola spam atau penipuan.",
          },
          {
            title: "E-wallet",
            text: "Akun dompet digital yang dipakai menampung dana korban.",
          },
        ],
      },
      {
        kind: "steps",
        heading: "Cara kerjanya",
        steps: [
          {
            title: "Tempel petunjuk",
            text: "Masukkan tautan, rekening, nomor, atau akun e-wallet yang mencurigakan.",
          },
          {
            title: "Mesin menilai",
            text: "Tautan dicek ke layanan reputasi keamanan; nomor dan rekening dicocokkan dengan database modus, lalu dihitung skor risikonya.",
          },
          {
            title: "Ambil keputusan",
            text: "Kamu lihat skor dan alasannya, lalu memutuskan lanjut atau berhenti.",
          },
        ],
      },
      {
        kind: "callout",
        body: "Cek cepat bukan vonis final — ia memberi kamu jeda untuk berpikir sebelum uang berpindah.",
      },
    ],
    sources: "Sumber: IASC (Nov 2024–Des 2025); survei korban penipuan tim NiceShield (56 responden).",
  },
  {
    slug: "peringatan-dini",
    lede: "JAGAD membaca pola pada notifikasi SMS dan nomor penelepon, lalu memunculkan peringatan sebelum kamu sempat mengambil keputusan yang salah.",
    metaDescription:
      "Peringatan dini JAGAD: deteksi pola spam dan penipuan dari SMS serta panggilan, dengan peringatan sebelum keputusan diambil.",
    sections: [
      {
        kind: "prose",
        heading: "Bahaya sering datang tanpa dicari",
        body: [
          "Berbeda dari cek cepat yang kamu picu sendiri, banyak penipuan justru datang lebih dulu: SMS “hadiah”, panggilan mengaku petugas, atau tautan yang muncul di tengah aktivitas lain.",
          "Peringatan dini mengenali sinyal-sinyal itu lebih awal, sehingga kamu waspada sejak pesan pertama masuk — bukan setelah kejadian.",
        ],
      },
      {
        kind: "list",
        heading: "Sinyal yang dipantau",
        items: [
          {
            title: "Spam early warning",
            text: "Pola pesan massal dan tautan mencurigakan pada notifikasi SMS.",
          },
          {
            title: "Fraud early warning",
            text: "Modus penipuan yang dikenali dari isi dan konteks pesan.",
          },
          {
            title: "Peringatan panggilan",
            text: "Nomor penelepon yang tampil sebelum diangkat, lewat mekanisme resmi yang sama seperti aplikasi penyaring panggilan.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Dibangun dengan cara yang legal dan menghormati privasi",
        body: [
          "Peringatan dibentuk dari reputasi dan metadata nomor serta pola pesan — bukan dari menyadap isi percakapanmu. Kami sengaja tidak merekam panggilan langsung karena, selain tidak diizinkan platform, itu bukan cara yang kami mau perlakukan pada penggunanya.",
          "Dalam survei kami, 38 dari 56 responden justru khawatir pada aplikasi yang membaca pesan dan panggilan mereka. Karena itu privasi kami jadikan fitur, bukan sekadar catatan kaki: pemrosesan sensitif berjalan di perangkatmu dan ditandai jelas.",
        ],
      },
      {
        kind: "callout",
        body: "Tujuannya membantu kamu memutuskan, bukan mengambil alih keputusan. Setiap peringatan menjelaskan alasannya secara singkat.",
      },
    ],
    sources: "Sumber: survei korban penipuan tim NiceShield (56 responden).",
  },
  {
    slug: "asisten-pelaporan",
    lede: "Dari percakapan dan bukti yang kamu unggah, JAGAD menyusun formulir laporan sesuai format IASC — lengkap dengan kronologi. Kamu tinggal meninjau, menandatangani, dan meneruskannya.",
    metaDescription:
      "Asisten pelaporan AI JAGAD: menyusun form laporan format IASC lengkap dengan kronologi dari bukti yang kamu unggah, siap kamu tinjau dan kirim.",
    sections: [
      {
        kind: "prose",
        heading: "Kecepatan melapor menentukan segalanya",
        body: [
          "Setelah menjadi korban, satu jam pertama menentukan: pada rentang itulah bank paling mungkin membekukan rekening pelaku sebelum dana berpindah lagi. Sayangnya form pelaporan resmi panjang dan manual, sehingga sangat sedikit korban yang melapor tepat waktu.",
          "Asisten pelaporan adalah jantung produk JAGAD. Ia mengubah cerita dan bukti mentahmu menjadi laporan yang siap diproses pihak terkait, tanpa kamu harus paham istilah teknisnya — supaya melapor tidak lagi kalah cepat dari pelaku.",
        ],
      },
      {
        kind: "stats",
        intro: "Kenapa golden hour ini genting:",
        items: [
          {
            value: "≈ 1%",
            label: "korban yang melapor dalam 1 jam pertama (golden hour)",
            note: "IASC / Tech in Asia",
          },
          {
            value: "127.047",
            label: "rekening pelaku yang dibekukan IASC dalam 2 tahun",
            note: "IASC",
          },
          {
            value: "Rp 432 M",
            label: "dana yang berhasil diselamatkan lewat pembekuan cepat",
            note: "IASC",
          },
        ],
      },
      {
        kind: "steps",
        heading: "Dari cerita ke laporan siap kirim",
        steps: [
          {
            title: "Ceritakan kejadiannya",
            text: "Jawab pertanyaan sederhana; JAGAD merangkai kronologinya dari fakta yang kamu berikan.",
          },
          {
            title: "Unggah bukti",
            text: "Tangkapan layar, mutasi, atau rekaman dibaca (OCR) untuk mengekstrak field penting secara otomatis.",
          },
          {
            title: "Tinjau & tanda tangani",
            text: "Periksa form terisi, perbaiki bila perlu, lalu beri persetujuan sebelum apa pun dikirim.",
          },
          {
            title: "Teruskan",
            text: "Laporan diteruskan ke pihak terkait, atau diunduh siap-isi bila kanal langsung belum tersedia.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Logika, bukan tebak-tebakan",
        body: [
          "Field seperti nomor rekening, nominal kerugian, tanggal, dan nama bank diekstrak lewat aturan deterministik (pencocokan pola dan kamus nama bank), bukan ditebak model generatif. Kronologi disusun dari template terstruktur berbasis fakta itu — bukan cerita bebas.",
          "Karena hasilnya masuk dokumen resmi, JAGAD tidak pernah mengirim tanpa persetujuanmu. Kamu selalu meninjau dan menyetujui lebih dulu.",
        ],
      },
      {
        kind: "callout",
        body: "Bukti sensitif diproses di perangkat. Hanya field terstruktur yang perlu, dan hanya dengan persetujuan eksplisitmu (sesuai UU PDP Pasal 20), yang diteruskan.",
      },
    ],
    sources: "Sumber: IASC (Nov 2024–Des 2025); UU Pelindungan Data Pribadi Pasal 20.",
  },
  {
    slug: "skor-risiko",
    lede: "Satu otak menilai semua sinyal — risk scoring, fuzzy logic, dan pencocokan database modus — sehingga hasilnya bisa dipertanggungjawabkan, bukan tebak-tebakan.",
    metaDescription:
      "Mesin skor risiko JAGAD: menilai sinyal dengan risk scoring, fuzzy logic, dan database modus agar setiap hasil bisa dipertanggungjawabkan.",
    sections: [
      {
        kind: "prose",
        heading: "Satu mesin di balik setiap keputusan",
        body: [
          "Cek cepat, peringatan dini, dan asisten pelaporan tampak seperti fitur berbeda, tetapi semuanya bermuara pada mesin yang sama. Mesin skor inilah yang mengubah kumpulan sinyal menjadi satu angka yang mudah dibaca.",
          "Karena semua jalur memakai logika penilaian yang sama, hasilnya konsisten: petunjuk yang sama menghasilkan penilaian yang sama, kapan pun dan lewat jalur mana pun.",
        ],
      },
      {
        kind: "list",
        heading: "Tiga lapis penilaian",
        items: [
          {
            title: "Risk scoring",
            text: "Membobot banyak sinyal menjadi satu skor risiko yang ringkas.",
          },
          {
            title: "Fuzzy logic",
            text: "Menangani kasus abu-abu yang tidak hitam-putih dengan lebih adil.",
          },
          {
            title: "Database modus",
            text: "Mencocokkan petunjuk dengan pola penipuan yang sudah dikenal.",
          },
        ],
      },
      {
        kind: "stats",
        heading: "Skala yang mesin ini hadapi",
        intro:
          "Penilaian yang terukur penting karena angkanya besar dan nyata:",
        items: [
          {
            value: "Rp 9,1 T",
            label: "total kerugian penipuan online nasional",
            note: "IASC · Nov 2024–Des 2025",
          },
          {
            value: "411.055",
            label: "laporan penipuan yang masuk pada periode itu",
            note: "IASC",
          },
          {
            value: "≈ Rp 22 jt",
            label: "rata-rata kerugian di balik setiap laporan",
            note: "Turunan IASC",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Bisa dipertanggungjawabkan",
        body: [
          "Skor bukan kotak hitam. Setiap penilaian dapat ditelusuri kembali ke sinyal yang mendasarinya, sehingga keputusan bisa dijelaskan kepada pengguna maupun regulator — dan bila keliru, dikoreksi lewat jalur banding.",
        ],
      },
    ],
    sources: "Sumber: IASC (Nov 2024–Des 2025).",
  },
  {
    slug: "jalur-banding",
    lede: "Sistem bisa keliru menandai orang. Siapa pun yang merasa salah tandai dapat mengajukan banding, dan tim JAGAD meninjaunya langsung sebelum keputusan final.",
    metaDescription:
      "Jalur banding JAGAD: ajukan keberatan bila salah ditandai, ditinjau langsung oleh tim JAGAD sebelum keputusan diterima atau ditolak.",
    sections: [
      {
        kind: "prose",
        heading: "Adil berarti bisa dikoreksi",
        body: [
          "Tidak ada mesin yang sempurna. Sebuah nomor bisa dipakai bergantian, sebuah rekening bisa berpindah tangan, dan orang yang tidak bersalah bisa ikut tertandai oleh database yang dikumpulkan bersama.",
          "Karena itu keadilan kami bangun sejak awal, bukan ditambal belakangan. Jalur banding memastikan setiap penilaian negatif punya pintu untuk ditinjau ulang oleh manusia.",
        ],
      },
      {
        kind: "steps",
        heading: "Alur banding",
        steps: [
          {
            title: "Ajukan banding",
            text: "Sampaikan keberatan beserta konteks atau bukti pendukung.",
          },
          {
            title: "Ditinjau tim JAGAD",
            text: "Peninjau manusia memeriksa kasus, bukan sekadar mesin.",
          },
          {
            title: "Diterima / ditolak",
            text: "Keputusan disampaikan transparan dengan alasan yang jelas.",
          },
        ],
      },
      {
        kind: "callout",
        body: "Peninjauan dilakukan orang, bukan hanya algoritma — supaya kekeliruan bisa benar-benar diperbaiki.",
      },
    ],
  },
  {
    slug: "komunitas",
    lede: "Dashboard ringkas, kabar modus penipuan terbaru, dan komunitas tempat sesama pengguna saling mengingatkan sebelum modus baru menyebar lebih jauh.",
    metaDescription:
      "Beranda & komunitas JAGAD: dashboard ringkas, kabar modus penipuan terbaru, dan komunitas yang saling mengingatkan.",
    sections: [
      {
        kind: "prose",
        heading: "Kewaspadaan tumbuh bersama",
        body: [
          "Modus penipuan berkembang cepat, dan korban pertama sering kali adalah yang belum pernah mendengar polanya. Informasi yang mengalir lebih cepat dari modus itu sendiri adalah pertahanan terbaik.",
          "Ini penting karena mayoritas masyarakat masih rentan secara literasi keuangan. Beranda dan komunitas menyatukan gambaran besar dengan pengalaman nyata pengguna, supaya setiap orang bisa belajar dari yang lain tanpa harus lebih dulu jadi korban.",
        ],
      },
      {
        kind: "stats",
        intro: "Kerentanan yang ingin kami tutup bersama:",
        items: [
          {
            value: "65,4%",
            label: "masyarakat masih rendah literasi keuangannya",
            note: "OJK",
          },
          {
            value: "Rp 1,31 T",
            label: "kerugian dari modus penyamaran otoritas",
            note: "IASC",
          },
          {
            value: "31.299",
            label: "kasus penyamaran otoritas yang tercatat",
            note: "IASC",
          },
        ],
      },
      {
        kind: "list",
        heading: "Isi beranda",
        items: [
          {
            title: "Dashboard",
            text: "Ringkasan aktivitas dan status laporanmu dalam satu tampilan.",
          },
          {
            title: "Kabar modus",
            text: "Pembaruan modus penipuan terbaru yang sedang marak beredar.",
          },
          {
            title: "Komunitas",
            text: "Ruang berbagi pengalaman dan saling mengingatkan antarpengguna.",
          },
        ],
      },
    ],
    sources: "Sumber: OJK; IASC (Nov 2024–Des 2025).",
  },
];

export const getFeatureContent = (slug: string) =>
  fiturContent.find((c) => c.slug === slug);
