import Image from "next/image";
import React from "react";
import ProjectAbout from "@/app/components/ui/ProjectAbout";
import ParallaxImage from "@/app/components/ui/ParallaxImage";
import StickyDescription from "@/app/components/ui/StickyDescription";
import NextProject from "@/app/components/Layout/NextProject";
import { projects } from "@/app/constants/projectdata";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Gets all projects
const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt asc) {...}`;

// Gets slugs utilized in generateStaticParams so we pre-build all the projects.
const SLUG_QUERY = `*[_type == "project"] { "slug": slug.current }`;

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
  const sanitySlugs = await client.fetch<SanityDocument[]>(SLUG_QUERY);

  const slugs = sanitySlugs.map((project) => ({ slug: project.slug }));

  return slugs;
}

async function ProjectDescription({
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
  // const options = { next: { revalidate: 30 } };

  // const projects = await client.fetch<SanityDocument[]>(
  //   PROJECTS_QUERY,
  //   {},
  //   options
  // );

  // const foundproject = projects.find((project) => console.log("hi", project));

  // console.log(foundproject);

  // console.log(projects);

  return (
    <div className="pt-28 md:pt-40 pb-6 md:pb-6 lg:pb-8 desktop:pb-12 lg:pt-40 xl:pt-48 desktop:pt-40">
      <h1 className="mobilesm:text-[4rem] mobilexl:text-[5rem] leading-tight md:text-[6.8rem] pb-4 md:pb-4 lg:pb-5 xl:pb-8 desktop:pb-8 text-[#242424] font-medium">
        {title}
      </h1>
      <div className="mobilesm:text-[13px] mobilemd:text-[14px] mobilexl:text-[15px] md:text-[15px] uppercase flex justify-between text-[#363636]">
        <p className="hidden md:block">
          {type} - {subtype}
        </p>
        <p className="md:hidden block">{type}</p>
        <p className="uppercase text-[#363636]">{location}</p>
      </div>
    </div>
  );
}

async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const options = { next: { revalidate: 30 } };

  const sanityProject = await client.fetch<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    options
  );

  const projectsSanity = await fetch("/api/sanity/projects");

  console.log(projectsSanity, "hi these are my projects");

  const currentProject = sanityProject.find(
    (project) => project.slug.current === slug
  );

  if (!currentProject) {
    return;
  }

  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
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
    projectImages,
    cover_image,
    alt,
  } = currentProject;

  const currentProjectIndex = sanityProject.findIndex(
    (project) => project.slug.current === slug
  );

  const nextProject = (currentProjectIndex + 1) % sanityProject.length;
  const nextSlug = sanityProject[nextProject].slug.current;
  const nextTitle = sanityProject[nextProject].title;
  const nextImage = urlFor(sanityProject[nextProject].cover_image).url();

  // const nextSlug = projects[id % projects.length].slug;
  // const nextTitle = projects[id % projects.length].title;
  // const nextImage = projects[id % projects.length].src;

  return (
    <>
      <div>
        <div className="px-4 md:px-6 lg:px-8">
          <ProjectDescription
            title={title}
            type={type}
            subtype={subtype}
            location={location}
          />
          <div className="w-full h-[750px] relative">
            <Image
              src={urlFor(cover_image).url()}
              priority
              alt={alt}
              sizes="(max-width: 768px) 95vw, (max-width: 1920px) 100vw"
              className="w-full h-full object-cover"
              fill
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
              sizes={"(max-width: 1920px) 100vw"}
              src={urlFor(projectImages[0]).url()}
              width={"w-full"}
              height={"h-[900px]"}
            />
          </div>
          <section className="w-full grid grid-cols-2 gap-8 pt-36">
            <ParallaxImage
              src={urlFor(projectImages[1]).url()}
              height="h-[850px]"
              width="w-full"
              sizes="(max-width: 2440px) 50vw"
            />
            <ParallaxImage
              sizes="(max-width: 2440px) 50vw"
              src={urlFor(projectImages[2]).url()}
              height="h-[850px]"
              width="w-full"
            />
          </section>
          <StickyDescription
            src={urlFor(projectImages[3]).url()}
            project_details={project_details}
          />
          <div className="w-full grid grid-cols-2 gap-8 pt-36">
            <ParallaxImage
              sizes="(max-width: 2440px) 50vw"
              src={urlFor(projectImages[4]).url()}
              height="h-[600px] md:h-[1000px]"
              width="w-full"
            />
            <ParallaxImage
              sizes="(max-width: 2440px) 50vw"
              src={urlFor(projectImages[5]).url()}
              height="h-[600px] md:h-[1000px]"
              width="w-full"
            />
          </div>
          <div className="pt-36">
            <ParallaxImage
              sizes="(max-width: 2440px) 100vw"
              src={urlFor(projectImages[6]).url()}
              height="h-[750px] md:h-[950px]"
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
