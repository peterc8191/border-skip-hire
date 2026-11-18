import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Sizes from "./components/Sizes.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Areas from "./components/Areas.jsx";
import About from "./components/About.jsx";
import Waste from "./components/Waste.jsx";
import Quote from "./components/Quote.jsx";
import Footer from "./components/Footer.jsx";
import CallBar from "./components/CallBar.jsx";
import useReveal from "./hooks/useReveal.js";

export default function App() {
  useReveal(".section-head, .size-card, .step, .area-col, .about-grid > *, .waste-col, .quote-grid > *");

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sizes />
        <HowItWorks />
        <Areas />
        <About />
        <Waste />
        <Quote />
      </main>
      <Footer />
      <CallBar />
    </>
  );
}
