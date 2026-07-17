import StatCounter from "./StatCounter";
import GoldenHourDonut from "./GoldenHourDonut";
import RecoveryBar from "./RecoveryBar";
import FraudCategoryChart from "./FraudCategoryChart";
import TrendChart from "./TrendChart";
import Reveal from "./Reveal";

/* Tren harian ilustratif di sekitar rata-rata ~1.000 laporan/hari (IASC).
   Nilai harian bersifat ilustrasi; anchor yang faktual: total 411.055
   & rata-rata ~1.000/hari. */
const dailyReports = [
  { date: "Jun 20", value: 1020 },
  { date: "Jun 21", value: 960 },
  { date: "Jun 22", value: 890 },
  { date: "Jun 23", value: 910 },
  { date: "Jun 24", value: 1180 },
  { date: "Jun 25", value: 1240 },
  { date: "Jun 26", value: 980 },
  { date: "Jun 27", value: 870 },
  { date: "Jun 28", value: 940 },
  { date: "Jun 29", value: 1010 },
  { date: "Jun 30", value: 1290 },
  { date: "Jul 1", value: 1120 },
  { date: "Jul 2", value: 980 },
  { date: "Jul 3", value: 1240 },
  { date: "Jul 4", value: 1210 },
  { date: "Jul 5", value: 1330 },
  { date: "Jul 6", value: 1180 },
  { date: "Jul 7", value: 900 },
  { date: "Jul 8", value: 860 },
  { date: "Jul 9", value: 950 },
  { date: "Jul 10", value: 1030 },
  { date: "Jul 11", value: 1090 },
  { date: "Jul 12", value: 1260 },
  { date: "Jul 13", value: 1150 },
  { date: "Jul 14", value: 970 },
  { date: "Jul 15", value: 1010 },
  { date: "Jul 16", value: 1100 },
  { date: "Jul 17", value: 1240 },
];

export default function DataSection() {
  return (
    <section className="bg-navy-50/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-500">
            Data penipuan nasional
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Angka yang bikin kami membangun JAGAD
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Skala kerugian penipuan online di Indonesia, dan kenapa kecepatan
            melapor menentukan segalanya.
          </p>
        </Reveal>

        <div className="mt-14">
          <TrendChart
            data={dailyReports}
            title="Laporan penipuan masuk per hari"
            subtitle="Tren harian (ilustrasi) di sekitar rata-rata ≈ 1.000 laporan/hari · sumber IASC"
            seriesLabel="Laporan"
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StatCounter
            value={411055}
            label="Laporan penipuan masuk"
            sublabel="≈ 1.000 per hari · sumber IASC, Nov 2024-Des 2025"
          />
          <StatCounter
            value={9.1}
            prefix="Rp "
            suffix=" T"
            decimals={1}
            label="Total kerugian nasional"
            sublabel="≈ Rp 22 jt per laporan"
          />
          <GoldenHourDonut />
        </div>

        <div className="mt-6 grid gap-6">
          <RecoveryBar />
          <FraudCategoryChart />
        </div>
      </div>
    </section>
  );
}
