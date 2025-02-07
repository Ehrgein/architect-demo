import Image from "next/image";
import Projects from "./components/ui/Projects";
import NavProject from "./components/Layout/NavProject";
import AboutUs from "./components/ui/AboutUs";
import Hero from "./components/Layout/Hero";
import Services from "./components/ui/Services";
import Contact from "./components/Layout/Contact";

export default function Home() {
  return (
    <>
      {/* <EnterModal /> */}
      {/* <VideoHero /> */}
      <Hero />
      <AboutUs />
      <Services />
      <section className="py-24 md:py-40">
        <div className="w-full h-[900px] relative">
          <Image
            src="/proyects.jpg"
            className="w-full h-full object-cover"
            fill
            alt="Modern house full width image"
          />
        </div>
      </section>
      <Projects />
      <Contact />
    </>
  );
}
