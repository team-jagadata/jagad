import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DataSection from "@/components/DataSection";
import UntukBank from "@/components/UntukBank";

export const metadata: Metadata = {
  title: "Data penipuan nasional — JAGAD",
  description:
    "Statistik penipuan online di Indonesia: tren laporan harian, kerugian per kategori, tingkat recovery, dan celah golden hour. Sumber: IASC.",
};

export default function DataPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <DataSection />
        <UntukBank />
      </main>
      <Footer />
    </>
  );
}
