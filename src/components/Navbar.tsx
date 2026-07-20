"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fitur, iconGradient, hoverTint } from "./fiturData";

const navLinks = [
  { label: "Cara kerja", href: "/#cara-kerja" },
  { label: "Untuk bank", href: "/data#untuk-bank" },
  { label: "Tentang", href: "/#tentang" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Kunci scroll body selama menu mobile terbuka.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-50 bg-white/85 backdrop-blur-md">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/jagadata-logo.png"
            alt="JAGAD"
            width={33}
            height={28}
            priority
            className="h-7 w-auto"
          />
          <span className="text-xl font-extrabold tracking-tight text-navy-900">
            JAGAD
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {/* Trigger dropdown Fitur */}
          <div
            className="relative"
            onMouseEnter={() => {
              cancelClose();
              setOpen(true);
            }}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpen((v) => !v)}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                open
                  ? "border-blue-500/40 bg-blue-500/5 text-navy-900"
                  : "border-transparent text-ink-600 hover:text-navy-900"
              }`}
            >
              Fitur
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              >
                <path
                  d="m6 9 6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:text-navy-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden text-sm font-semibold text-navy-900 transition-opacity hover:opacity-70 sm:block"
          >
            Masuk
          </Link>
          <button
            type="button"
            aria-label="Download aplikasi Android"
            className="rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Download
          </button>

          {/* Toggle menu mobile */}
          <button
            type="button"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 transition-colors hover:bg-navy-50 md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {mobileOpen ? (
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Panel mega-menu */}
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          aria-hidden={!open}
          className={`absolute left-6 right-6 top-full z-50 mt-2 hidden origin-top rounded-2xl border border-navy-50 bg-white p-3 shadow-2xl shadow-navy-900/10 transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none md:block ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-1 scale-[0.98] opacity-0"
          }`}
        >
          <div className="grid gap-2 lg:grid-cols-3">
            {fitur.map((item, i) => (
              <Link
                key={item.title}
                href={`/fitur/${item.slug}`}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
                className={`group relative rounded-xl p-4 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                {/* Lapisan tint saat hover (fade halus) */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  style={{ backgroundImage: hoverTint(item.color) }}
                />
                <div className="relative flex items-start gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:transform-none"
                    style={{ backgroundImage: iconGradient(item.color) }}
                  >
                    <span className="h-[18px] w-[18px]">{item.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-navy-900">
                      {item.title}
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-xs text-ink-600">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="relative mt-3">{item.preview}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Backdrop menu mobile */}
        <div
          onClick={() => setMobileOpen(false)}
          aria-hidden
          className={`fixed inset-0 z-40 bg-navy-900/20 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
            mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        {/* Panel menu mobile */}
        <div
          aria-hidden={!mobileOpen}
          className={`absolute left-0 right-0 top-full z-50 max-h-[calc(100dvh-4.5rem)] origin-top overflow-y-auto border-b border-navy-50 bg-white px-4 pb-6 pt-2 shadow-xl shadow-navy-900/10 transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none md:hidden ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                tabIndex={mobileOpen ? 0 : -1}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-600 transition-colors hover:bg-navy-50 hover:text-navy-900"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="mt-4 px-3 font-mono text-xs uppercase tracking-widest text-ink-400">
            Fitur
          </p>
          <div className="mt-2 flex flex-col gap-1">
            {fitur.map((item) => (
              <Link
                key={item.title}
                href={`/fitur/${item.slug}`}
                tabIndex={mobileOpen ? 0 : -1}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-navy-50"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
                  style={{ backgroundImage: iconGradient(item.color) }}
                >
                  <span className="h-[18px] w-[18px]">{item.icon}</span>
                </span>
                <span className="min-w-0 flex-1 text-sm font-semibold text-navy-900">
                  {item.title}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="shrink-0 text-ink-400"
                >
                  <path
                    d="m9 6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>

          <Link
            href="#"
            tabIndex={mobileOpen ? 0 : -1}
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-lg px-3 py-3 text-base font-semibold text-navy-900 transition-colors hover:bg-navy-50"
          >
            Masuk
          </Link>
          <button
            type="button"
            tabIndex={mobileOpen ? 0 : -1}
            aria-label="Download aplikasi Android"
            className="mt-2 block w-full rounded-full bg-navy-900 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Download
          </button>
        </div>
      </nav>
    </header>
  );
}
