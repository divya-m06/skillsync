import Navbar     from "./components/layout/Navbar";
import Hero        from "./components/sections/Hero";
import HowItWorks  from "./components/sections/HowItWorks";
import Features    from "./components/sections/Features";
import CTABanner   from "./components/sections/CTABanner";
import Footer      from "./components/sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 88 }}>
        <Hero />
        <HowItWorks />
        <Features />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
