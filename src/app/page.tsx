import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyHivin from "@/components/WhyHivin";
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
          <Hero />
          <WhyHivin />
          <ProfileTypes />
          <FrequencyForm />
          <Founders />
          <HowItWorks />
          <Pricing />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
