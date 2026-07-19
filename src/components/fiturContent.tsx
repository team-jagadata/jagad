/* Konten panjang per fitur untuk halaman detail /fitur/<slug>.
   Metadata ringkas (judul, tag, warna, ikon, preview) tetap tinggal di
   fiturData.tsx — file ini hanya menambah naskah untuk halaman penuh.

   Skema section sengaja kecil supaya tipografi konsisten: renderer
   (FeatureArticle) yang memberi gaya, konten cukup deklaratif. */

export type Section =
  | { kind: "prose"; heading?: string; body: string[] }
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
        heading: "Kenapa cek dulu itu penting",
        body: [
          "Sebagian besar penipuan online berhasil karena satu hal: korban tidak sempat memverifikasi. Tautan hadiah, nomor rekening penjual, atau penelepon yang mengaku dari bank terlihat meyakinkan justru ketika kita sedang buru-buru.",
          "Cek cepat dirancang untuk momen ragu itu. Tanpa perlu memasang apa pun yang rumit, kamu bisa menaruh satu petunjuk dan langsung tahu seberapa besar risikonya.",
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
            text: "Nomor rekening bank yang pernah dilaporkan terkait penipuan.",
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
            text: "JAGAD mencocokkan dengan database modus dan menghitung skor risiko.",
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
          "Peringatan dini bekerja di latar untuk mengenali sinyal-sinyal itu lebih awal, sehingga kamu waspada sejak pesan pertama masuk — bukan setelah kejadian.",
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
            text: "Nomor penelepon yang berulang, tak dikenal, atau pernah dilaporkan.",
          },
        ],
      },
      {
        kind: "prose",
        heading: "Peringatan, bukan pemblokiran sepihak",
        body: [
          "Tujuannya membantu kamu memutuskan, bukan mengambil alih keputusan. Setiap peringatan menjelaskan alasannya secara singkat, sehingga kamu tetap pegang kendali penuh.",
        ],
      },
    ],
  },
  {
    slug: "asisten-pelaporan",
    lede: "Dari percakapan dan bukti yang kamu unggah, JAGAD menyusun formulir laporan sesuai format IASC — lengkap dengan kronologi. Kamu tinggal meninjau, menandatangani, dan meneruskannya.",
    metaDescription:
      "Asisten pelaporan AI JAGAD: menyusun form laporan format IASC lengkap dengan kronologi dari bukti yang kamu unggah, siap kamu tinjau dan kirim.",
    sections: [
      {
        kind: "prose",
        heading: "Melapor seharusnya tidak melelahkan",
        body: [
          "Ketika sudah terlanjur menjadi korban, hambatan terbesar berikutnya adalah proses melapor: format yang asing, kronologi yang harus rapi, dan bukti yang tersebar di banyak tempat.",
          "Asisten pelaporan adalah jantung produk JAGAD. Ia mengubah cerita dan bukti mentahmu menjadi laporan yang siap diproses pihak terkait, tanpa kamu harus paham istilah teknisnya.",
        ],
      },
      {
        kind: "steps",
        heading: "Dari cerita ke laporan siap kirim",
        steps: [
          {
            title: "Ceritakan kejadiannya",
            text: "Jawab pertanyaan sederhana; JAGAD merangkai kronologinya untukmu.",
          },
          {
            title: "Unggah bukti",
            text: "Tangkapan layar, mutasi, atau pesan diproses menjadi lampiran terstruktur.",
          },
          {
            title: "Tinjau & tanda tangani",
            text: "Periksa form terisi otomatis, beri persetujuan (affidavit) bila sudah sesuai.",
          },
          {
            title: "Teruskan",
            text: "Laporan diteruskan ke pihak terkait dalam format yang mereka pahami.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Yang kamu dapatkan",
        items: [
          {
            title: "Form terisi otomatis",
            text: "Sesuai format IASC, siap diproses tanpa bolak-balik revisi.",
          },
          {
            title: "Affidavit / persetujuan",
            text: "Kamu tetap yang memberi persetujuan akhir sebelum apa pun dikirim.",
          },
          {
            title: "Teruskan ke pihak terkait",
            text: "Sekali susun, langsung sampai ke tujuan yang tepat.",
          },
        ],
      },
      {
        kind: "callout",
        body: "Bukti sensitif diproses seperlunya dan tidak pernah dikirim tanpa persetujuanmu.",
      },
    ],
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
          "Cek cepat dan asisten pelaporan tampak seperti dua fitur berbeda, tetapi keduanya bermuara pada mesin yang sama. Mesin skor inilah yang mengubah kumpulan sinyal menjadi satu angka yang mudah dibaca.",
          "Karena semua jalur memakai logika penilaian yang sama, hasilnya konsisten: petunjuk yang sama akan menghasilkan penilaian yang sama, kapan pun dan lewat jalur mana pun.",
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
        kind: "prose",
        heading: "Bisa dipertanggungjawabkan",
        body: [
          "Skor bukan kotak hitam. Setiap penilaian dapat ditelusuri kembali ke sinyal yang mendasarinya, sehingga keputusan bisa dijelaskan — dan bila perlu, dikoreksi lewat jalur banding.",
        ],
      },
    ],
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
          "Tidak ada mesin yang sempurna. Sebuah nomor bisa dipakai bergantian, sebuah rekening bisa berpindah tangan, dan orang yang tidak bersalah bisa ikut tertandai.",
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
          "Modus penipuan berkembang cepat, dan sering kali korban pertama adalah yang belum pernah mendengar polanya. Informasi yang mengalir lebih cepat dari modus itu sendiri adalah pertahanan terbaik.",
          "Beranda dan komunitas menyatukan gambaran besar dengan pengalaman nyata pengguna, supaya setiap orang bisa belajar dari yang lain tanpa harus lebih dulu jadi korban.",
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
  },
];

export const getFeatureContent = (slug: string) =>
  fiturContent.find((c) => c.slug === slug);
