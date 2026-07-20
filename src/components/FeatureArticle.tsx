import Link from "next/link";
import type { Fitur } from "./fiturData";
import { iconGradient } from "./fiturData";
import type { FeatureContent, Section } from "./fiturContent";
import Reveal from "./Reveal";

/* Renderer tipografi untuk halaman detail fitur.
   Semua gaya teks tinggal di sini supaya keenam halaman terasa satu sistem.
   `meta` memberi warna + ikon terkunci per fitur; `content` memberi naskah. */

function SectionBlock({ section, color }: { section: Section; color: string }) {
  const heading = "heading" in section ? section.heading : undefined;

  return (
    <section className="mt-10 first:mt-0 sm:mt-12">
      {heading && (
        <h2 className="text-xl font-bold tracking-tight text-navy-900 sm:text-2xl">
          {heading}
        </h2>
      )}

      {section.kind === "prose" && (
        <div className="mt-4 space-y-4">
          {section.body.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-ink-600">
              {p}
            </p>
          ))}
        </div>
      )}

      {section.kind === "stats" && (
        <>
          {section.intro && (
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              {section.intro}
            </p>
          )}
          <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {section.items.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-navy-50 bg-white p-5"
              >
                {/* Angka = IBM Plex Mono, sesuai design system JAGAD (data pakai mono). */}
                <dd
                  className="font-mono text-2xl font-medium tracking-tight tabular-nums break-words sm:text-3xl"
                  style={{ color }}
                >
                  {stat.value}
                </dd>
                <dt className="mt-2 text-sm leading-relaxed text-ink-600">
                  {stat.label}
                </dt>
                {stat.note && (
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-400">
                    {stat.note}
                  </p>
                )}
              </div>
            ))}
          </dl>
        </>
      )}

      {section.kind === "list" && (
        <>
          {section.intro && (
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              {section.intro}
            </p>
          )}
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {section.items.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-navy-50 bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-navy-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {section.kind === "steps" && (
        <>
          {section.intro && (
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              {section.intro}
            </p>
          )}
          <ol className="mt-6 space-y-5">
            {section.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundImage: iconGradient(color) }}
                >
                  {i + 1}
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="font-semibold text-navy-900">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </>
      )}

      {section.kind === "callout" && (
        <div
          className="rounded-2xl border-l-4 bg-navy-50/50 p-5"
          style={{ borderColor: color }}
        >
          <p className="text-base font-medium leading-relaxed text-navy-900">
            {section.body}
          </p>
        </div>
      )}
    </section>
  );
}

export default function FeatureArticle({
  meta,
  content,
}: {
  meta: Fitur;
  content: FeatureContent;
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-20">
      <Reveal>
        <Link
          href="/#fitur"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 transition-colors hover:text-navy-900"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          >
            <path
              d="m15 6-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Semua fitur
        </Link>

        <header className="mt-8">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
            style={{ backgroundImage: iconGradient(meta.color) }}
          >
            <span className="h-7 w-7">{meta.icon}</span>
          </div>
          <span
            className="mt-6 block font-mono text-xs uppercase tracking-widest"
            style={{ color: meta.color }}
          >
            {meta.tag}
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-balance text-navy-900 sm:text-4xl md:text-5xl">
            {meta.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-600 sm:mt-5 sm:text-lg">
            {content.lede}
          </p>
        </header>
      </Reveal>

      <Reveal delay={80} className="mt-12 sm:mt-14">
        {content.sections.map((section, i) => (
          <SectionBlock key={i} section={section} color={meta.color} />
        ))}

        {content.sources && (
          <p className="mt-12 border-t border-navy-50 pt-6 font-mono text-xs leading-relaxed text-ink-400">
            {content.sources}
          </p>
        )}
      </Reveal>

      <Reveal delay={120} className="mt-14 border-t border-navy-50 pt-10 sm:mt-16">
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-bold text-navy-900">
            Siap mencoba JAGAD?
          </p>
          <Link
            href="/#lapor"
            className="w-full rounded-full bg-navy-900 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-navy-700 sm:w-auto sm:py-2.5"
          >
            Lapor sekarang
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
