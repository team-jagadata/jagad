import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-navy-50 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="max-w-xs">
            <span className="text-lg font-extrabold tracking-tight text-navy-900">
              JAGAD
            </span>
            <p className="mt-3 text-sm text-ink-600">
              Asisten pelaporan penipuan bertenaga AI. Dibuat oleh tim
              NiceShield
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-sm font-semibold text-navy-900">Produk</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-600">
                <li>
                  <Link href="#cara-kerja" className="hover:text-navy-900">
                    Cara kerja
                  </Link>
                </li>
                <li>
                  <Link href="#untuk-bank" className="hover:text-navy-900">
                    Untuk bank
                  </Link>
                </li>
                <li>
                  <Link href="#tentang" className="hover:text-navy-900">
                    Privasi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-50 pt-6">
          <p className="text-xs text-ink-400">
            JAGAD membantu menyusun draft laporan; keputusan dan pengiriman
            tetap di tangan pengguna. JAGAD bukan pengganti laporan resmi ke
            pihak berwenang.
          </p>
          <p className="mt-3 font-mono text-xs text-ink-400">
            © {new Date().getFullYear()} NiceShield / JAGAD
          </p>
        </div>
      </div>
    </footer>
  );
}
