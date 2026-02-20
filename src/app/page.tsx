import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Founders from "@/components/Founders";
import ProfileTypes from "@/components/ProfileTypes";
import FrequencyForm from "@/components/FrequencyForm";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <PageTransition />
      <CustomCursor />
      <SmoothScroll>
        <Navbar />
        <main>
          <div className="sticky top-0 z-1">
            <Hero />
          </div>
          <div className="sticky top-0 z-2">
            <Founders />
          </div>
          <div className="sticky top-0 z-3">
            <ProfileTypes />
          </div>
          <div className="relative z-4">
            <FrequencyForm />
            <HowItWorks />
            <Pricing />
          </div>
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
