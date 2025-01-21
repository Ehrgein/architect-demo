import Image from "next/image";
import AboutUs from "./components/ui/AboutUs";
import Services from "./components/ui/Services";
import Projects from "./components/ui/Projects";
import EnterModal from "./components/transitions/EnterModal";
import VideoHero from "./components/ui/VideoHero";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <>
      <EnterModal />
      <VideoHero />
      <AboutUs />
      <Services />
      <section className="pt-40 pb-40">
        <div className="w-full h-[900px] relative">
          <Image
            src="/proyects.jpg"
            className="w-full h-full object-cover"
            fill
            alt="hi"
          />
        </div>
      </section>
      <Projects />
      <div className="px-12">
        <Footer />
      </div>
    </>
  );
}
