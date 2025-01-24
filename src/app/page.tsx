import Image from "next/image";
import AboutUs from "./components/ui/AboutUs";
import Services from "./components/ui/Services";
import Projects from "./components/ui/Projects";
import EnterModal from "./components/transitions/EnterModal";
import VideoHero from "./components/ui/VideoHero";
import Footer from "./components/Layout/Footer";
import NavProject from "./components/Layout/NavProject";

export default function Home() {
  return (
    <>
      {/* <EnterModal /> */}
      {/* <VideoHero /> */}
      <NavProject />
      <div className="mt-48 px-8">
        <h2 className="text-black text-7xl w-[80%] leading-snug">
          Shaping spaces with creativity, precision, and bringing architectural
          visions to life.
        </h2>
      </div>
      <div className="w-full pt-20 px-8">
        <div className="w-full h-[900px] relative">
          <Image
            src="/aboutimage.jpg"
            fill
            className="w-full h-full object-cover"
            alt="hi"
          />
        </div>
      </div>

      {/* <AboutUs /> */}
      <section className="pt-40 pb-28 px-8 relative grid grid-cols-2 w-full gap-1">
        <div className="">
          <h3 className="text-3xl font-medium leading-normal w-[35ch] pl-10">
            We design with intention, blending simplicity and depth.
          </h3>
        </div>
        <div className="flex flex-col w-full mx-auto space-y-10">
          <p className="text-lg leading-loose text-[#353535] w-[85%]">
            Since its inception, our studio has seamlessly balanced its work
            between traditional architectural projects, including private
            residences, multi-family housing, and renovations, and commercial
            developments such as industrial warehouses, retail spaces, and
            corporate offices.
          </p>
          <p className="text-lg leading-loose text-[#353535] w-[85%]">
            Y Studio is renowned for its hands-on approach and personalized
            attention to every project. By fostering constant collaboration and
            open communication with our clients, we ensure their visions are at
            the heart of the design process.
          </p>
          <p className="text-lg leading-loose text-[#353535] w-[85%]">
            By integrating these experiences, we craft innovative solutions
            tailored to the specific needs of each project, creating spaces that
            are functional, aesthetically striking, and deeply aligned with our
            clients’ aspirations.
          </p>
        </div>
      </section>
      <section className="py-36 px-8">
        <div className="pt-20">
          <h3 className="text-5xl font-medium">OUR SERVICES</h3>
          <div className="grid grid-cols-3 gap-6 pt-12">
            <article className="space-y-5">
              <div className="relative w-full h-[750px]">
                <Image
                  src="/shopmal.jpg"
                  alt="hi"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
              <h4 className="text-3xl text-[#353535] pt-3">Commercial</h4>
              <p className="pr-3 pt-1 leading-7">
                Bring your commercial spaces to life with designs that are
                tailored to your business goals. Whether it’s retail, office, or
                hospitality, our services offer comprehensive architectural
                solutions, from initial planning to detailed visualizations.
              </p>
            </article>
            <article className="space-y-5">
              <div className="relative w-full h-[750px]">
                <Image
                  src="/newmodernhouse.jpg"
                  alt="hi"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
              <h4 className="text-3xl text-[#353535] pt-3">
                Private Residences
              </h4>
              <p className="pr-3 pt-1 leading-7">
                Design your dream home with our specialized residential
                architecture services. We work with you to create spaces that
                reflect your style and needs, from cozy private residences to
                expansive luxury homes. We bring your vision to life.
              </p>
            </article>
            <article className="space-y-5">
              <div className="relative w-full h-[750px]">
                <Image
                  src="/render.png"
                  alt="hi"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
              <h4 className="text-3xl text-[#353535] pt-3">Rendering</h4>
              <p className="pr-3 pt-1 leading-7">
                We create lifelike renderings of your projects, bringing every
                detail to life with Unreal Engine 5. Our visualizations let you
                experience your design—whether it’s a retail space, office, or
                residence—before it’s built.
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* <Services /> */}
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
    </>
  );
}
