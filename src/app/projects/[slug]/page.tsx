import Image from "next/image";
import React from "react";
import ProjectAbout from "../../components/ui/ProjectAbout";
import ParallaxImage from "../../components/ui/ParallaxImage";
import StickyDescription from "../../components/ui/StickyDescription";
import port1 from "../../../../public/port1.jpg";
import NextProject from "../../components/Layout/NextProject";
import NavProject from "@/app/components/Layout/NavProject";
import { projects } from "@/app/constants/projectdata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return;
  }

  return {
    title: `Y STUDIO - ${project.title}`,
    description: `${project.description}`,
  };
}

export async function generateStaticParams() {
  const slugs = projects.map((project) => ({ slug: project.slug }));

  return slugs;
}

function ProjectDescription({
  title,
  type,
  subtype,
  location,
}: {
  title: string;
  type: string;
  subtype: string;
  location: string;
}) {
  return (
    <div className="pt-40 pb-12">
      <h1 className="text-[110px] pb-8 text-[#242424] font-medium">{title}</h1>
      <div className="text-[15px] uppercase flex justify-between text-[#363636]">
        <p>
          {type} - {subtype}
        </p>
        <p className="uppercase text-[#363636]">{location}</p>
      </div>
    </div>
  );
}

async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    throw new Error(`Project not found for slug: ${slug}`);
  }

  const {
    title,
    type,
    subtype,
    year,
    location,
    about_header,
    about_paragraph,
    project_details,
    src,
    id,
    images,
  } = project;

  // const nextSlug = projects[id % projects.length].slug;

  const nextSlug = projects[id % projects.length].slug;
  const nextTitle = projects[id % projects.length].title;
  const nextImage = projects[id % projects.length].src;

  return (
    <>
      <div>
        <NavProject />
        <div className="px-12">
          <ProjectDescription
            title={title}
            type={type}
            subtype={subtype}
            location={location}
          />
          <div className="w-fulll h-[750px] relative">
            <Image
              src={src}
              sizes="(max-width: 1920px) 90vw"
              className="w-full h-full object-cover"
              fill
              alt="hi"
            />
          </div>
          <ProjectAbout
            about_header={about_header}
            about_paragraph={about_paragraph}
            location={location}
            type={type}
            year={year}
          />
          <div className="pt-36">
            <ParallaxImage
              sizes="(max-width: 1920px) 90vw"
              src={images[0]}
              width={"w-full"}
              height={"h-[900px]"}
            />
          </div>
          <section className="w-full grid grid-cols-2 gap-8 pt-36">
            <ParallaxImage
              sizes="(max-width: 1920px) 50vw"
              src={images[1]}
              height="h-[850px]"
              width="w-full"
            />
            <ParallaxImage
              sizes="(max-width: 1920px) 50vw"
              src={images[2]}
              height="h-[850px]"
              width="w-full"
            />
          </section>
          <StickyDescription
            src={images[3]}
            project_details={project_details}
          />
          <div className="w-full grid grid-cols-2 gap-8 pt-36">
            <ParallaxImage
              sizes="(max-width: 1920px) 50vw"
              src={images[4]}
              height="h-[1000px]"
              width="w-full"
            />
            <ParallaxImage
              sizes="(max-width: 1920px) 50vw"
              src={images[5]}
              height="h-[1000px]"
              width="w-full"
            />
          </div>
          <div className="pt-36">
            <ParallaxImage
              sizes="(max-width: 1920px) 90vw"
              src={images[6]}
              height="h-[950px]"
              width="w-full"
            />
          </div>
          <NextProject
            nextSlug={nextSlug}
            nextTitle={nextTitle}
            nextSrc={nextImage}
          />
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
