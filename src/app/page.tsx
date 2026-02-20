import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Founders from "@/components/Founders";
import ProfileTypes from "@/components/ProfileTypes";
import FrequencyForm from "@/components/FrequencyForm";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Founders />
        <ProfileTypes />
        <FrequencyForm />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
