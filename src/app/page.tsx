import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TigaLangkah from "@/components/TigaLangkah";
import Fitur from "@/components/Fitur";
import Privasi from "@/components/Privasi";
import UntukBank from "@/components/UntukBank";
import CtaPenutup from "@/components/CtaPenutup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TigaLangkah />
        <Fitur />
        <Privasi />
        <UntukBank />
        <CtaPenutup />
      </main>
      <Footer />
    </>
  );
}
