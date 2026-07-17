export default function PhoneChat() {
  return (
    <div className="mx-auto w-full max-w-[310px]">
      {/* Badan HP */}
      <div className="relative rounded-[2.75rem] bg-navy-900 p-2.5 shadow-2xl shadow-navy-900/25">
        {/* Notch */}
        <div className="absolute left-1/2 top-2.5 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-navy-900" />

        {/* Layar */}
        <div className="overflow-hidden rounded-[2.25rem] bg-navy-50/40">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-white px-6 pb-1.5 pt-3 text-navy-900">
            <span className="font-mono text-[13px] font-medium">09:41</span>
            <div className="flex items-center gap-1.5">
              {/* sinyal */}
              <svg width="17" height="12" viewBox="0 0 17 12" aria-hidden>
                <rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor" />
                <rect x="4.5" y="5" width="3" height="7" rx="1" fill="currentColor" />
                <rect x="9" y="2.5" width="3" height="9.5" rx="1" fill="currentColor" />
                <rect x="13.5" y="0" width="3" height="12" rx="1" fill="currentColor" opacity="0.35" />
              </svg>
              {/* wifi */}
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
                <path d="M1 3.5A11 11 0 0 1 15 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3.5 6A7 7 0 0 1 12.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M6 8.5A3 3 0 0 1 10 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="8" cy="11" r="1" fill="currentColor" />
              </svg>
              {/* baterai */}
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none" aria-hidden>
                <rect x="0.5" y="0.5" width="20" height="11" rx="3" stroke="currentColor" opacity="0.4" />
                <rect x="2" y="2" width="15" height="8" rx="1.5" fill="currentColor" />
                <rect x="22" y="4" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.4" />
              </svg>
            </div>
          </div>

          {/* Header app */}
          <div className="flex items-center justify-between border-b border-navy-50 bg-white px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-[11px] font-bold text-white">
                JG
              </div>
              <div>
                <p className="text-sm font-bold leading-tight text-navy-900">
                  Asisten JAGAD
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Online
                </span>
              </div>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-ink-400" aria-hidden>
              <circle cx="12" cy="5" r="1.6" fill="currentColor" />
              <circle cx="12" cy="12" r="1.6" fill="currentColor" />
              <circle cx="12" cy="19" r="1.6" fill="currentColor" />
            </svg>
          </div>

          {/* Isi chat */}
          <div className="space-y-3 px-4 py-4">
            <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-[13px] leading-relaxed text-ink-900 shadow-sm">
              Halo, aku asisten JAGAD. Tenang, kita selesaikan ini bersama. Kamu
              kehilangan uang lewat cara apa?
            </p>

            <div className="flex flex-wrap gap-1.5">
              {["Transfer bank", "Belanja online", "Investasi bodong"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-blue-100 bg-white px-2.5 py-1 text-[11px] font-medium text-blue-500"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>

            <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-blue-500 px-3.5 py-2.5 text-[13px] leading-relaxed text-white">
              Transfer bank. Aku sudah ada screenshot chatnya.
            </p>

            {/* Kartu draft */}
            <div className="rounded-xl border border-navy-50 bg-white p-3 shadow-sm">
              <p className="font-mono text-[10px] uppercase tracking-wide text-ink-400">
                Draft laporan, perlu kamu tinjau
              </p>
              <dl className="mt-2 space-y-1.5 text-[12px]">
                {[
                  ["Rekening pelaku", "•••• 4471"],
                  ["Jumlah kerugian", "Rp 4.250.000"],
                  ["Tanggal kejadian", "14 Jul 2026"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3">
                    <dt className="text-ink-600">{k}</dt>
                    <dd className="font-mono text-ink-900">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 border-t border-navy-50 bg-white px-3 py-3">
            <div className="flex flex-1 items-center rounded-full bg-navy-50 px-3.5 py-2 text-[13px] text-ink-400">
              Ketik pesan...
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-ink-400" aria-hidden>
              <rect x="2.5" y="6" width="19" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12.5" r="3.2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M8 6l1.2-2h5.6L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            <button
              aria-label="Kirim"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-white"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 12l16-8-6 16-2.5-6.5L4 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
