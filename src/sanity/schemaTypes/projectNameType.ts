import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const projectNameType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "type",
      type: "string",
      title: "Type",
    }),
    defineField({
      name: "subtype",
      type: "string",
      title: "Subtype",
    }),
    defineField({
      name: "year",
      type: "number",
      title: "Year",
    }),
    defineField({
      name: "location",
      type: "string",
      title: "Location",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title" },
    }),
    defineField({
      name: "about_header",
      type: "string",
      title: "About Header",
    }),
    defineField({
      name: "about_paragraph",
      type: "string",
      title: "About paragraph",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),
    defineField({
      name: "project_details",
      type: "array",
      title: "Project Details",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "cover_image",
      type: "image",
      title: "Cover Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Cover Alt",
    }),
    defineField({
      name: "projectImages",
      type: "array",
      title: "Project Images",
      of: [{ type: "image" }],
    }),
  ],
});
