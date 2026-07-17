import Link from "next/link";
import Reveal from "./Reveal";

export default function CtaPenutup() {
  return (
    <section className="bg-blue-500">
      <Reveal className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Jangan hadapi sendiri
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
          Makin cepat dilaporkan, makin besar peluang rekening pelaku dibekukan.
          Mulai dari bukti yang sudah kamu punya sekarang.
        </p>
        <Link
          href="/#lapor"
          className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-500 transition-opacity hover:opacity-90"
        >
          Mulai laporan
        </Link>
      </Reveal>
    </section>
  );
}
