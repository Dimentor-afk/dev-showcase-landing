import Hero from "@/components/hero";
import Features from "@/components/features";
import Showcase from "@/components/showcase";
import Testimonials from "@/components/testimonials";
import Callouts from "@/components/callouts";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Showcase />
      <Testimonials />
      <Callouts />
      <Footer />
      <BackToTop />
    </main>
  );
}
