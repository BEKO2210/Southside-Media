import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Services } from "@/components/services";
import { Showcase } from "@/components/showcase";
import { Process } from "@/components/process";
import { Pricing } from "@/components/pricing";
import { WhyFixed } from "@/components/why-fixed";
import { Care } from "@/components/care";
import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Showcase />
        <Process />
        <Pricing />
        <WhyFixed />
        <Care />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
