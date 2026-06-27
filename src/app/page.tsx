import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FAQ } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { FutureSuccess } from "@/components/sections/future-success";
import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { WhyChoose } from "@/components/sections/why-choose";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Process />
        <Philosophy />
        <FutureSuccess />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
