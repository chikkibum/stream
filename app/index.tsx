import { CTA } from "@/_components/cta/CTA";
import { Customers } from "@/_components/customers/Customers";
import Carousel from "@/_components/features/carousel/Carousel";
import { CodeDemo } from "@/_components/features/code/CodeDemo";
import { FeatureGrid } from "@/_components/features/grid/FeatureGrid";
import { Stats } from "@/_components/features/stats/Stats";
import { Footer } from "@/_components/footer/Footer";
import { Hero } from "@/_components/hero/Hero";
import { Logos } from "@/_components/logos/Logos";
import { Pricing } from "@/_components/pricing/Pricing";
import { Barlow } from "next/font/google";

const barlowFont = Barlow({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={barlowFont.className}>
      <Hero />
      <Logos />
      <FeatureGrid />
      <CodeDemo />
      <Carousel />
      <Customers />
      <Stats />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
