import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FAQ } from "@/components/sections/faq";
import { FutureSuccess } from "@/components/sections/future-success";
import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { WhyChoose } from "@/components/sections/why-choose";
import { TrustCredibility } from "@/components/sections/trust-credibility";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { Industries } from "@/components/sections/industries";
import { About } from "@/components/sections/about";
import { BlogPreview } from "@/components/sections/blog-preview";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustCredibility />
        <Services />
        <PortfolioPreview />
        <Industries />
        <About />
        <WhyChoose />
        <Process />
        <Philosophy />
        <FutureSuccess />
        <BlogPreview />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
