import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
   name: "project",
   title: "Projects",
   type: "document",
   fields: [
      defineField({
         name: "title",
         title: "Title",
         type: "string",
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: "slug",
         title: "Slug",
         type: "slug",
         options: {
            source: "title",
            maxLength: 96,
         },
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: "summary",
         title: "Summary CTA",
         description: "Short label shown on cards, for example Discover More.",
         type: "string",
         initialValue: "Discover More",
      }),
      defineField({
         name: "coverImage",
         title: "Cover image",
         type: "image",
         options: {
            hotspot: true,
         },
         fields: [
            defineField({
               name: "alt",
               title: "Alt text",
               type: "string",
            }),
         ],
         validation: (rule) => rule.required(),
      }),
      defineField({
         name: "gallery",
         title: "Showcase gallery",
         description: "Multiple images for the project details slider.",
         type: "array",
         of: [
            defineArrayMember({
               type: "image",
               options: {
                  hotspot: true,
               },
               fields: [
                  defineField({
                     name: "alt",
                     title: "Alt text",
                     type: "string",
                  }),
               ],
            }),
         ],
      }),
      defineField({
         name: "categories",
         title: "Categories",
         type: "array",
         of: [
            defineArrayMember({
               type: "string",
            }),
         ],
      }),
      defineField({
         name: "client",
         title: "Client",
         type: "string",
      }),
      defineField({
         name: "duration",
         title: "Timeline",
         type: "string",
      }),
      defineField({
         name: "year",
         title: "Year",
         type: "string",
      }),
      defineField({
         name: "budget",
         title: "Budget",
         type: "string",
      }),
      defineField({
         name: "overview",
         title: "Overview paragraphs",
         type: "array",
         of: [
            defineArrayMember({
               type: "text",
               rows: 4,
            }),
         ],
      }),
      defineField({
         name: "challengeTitle",
         title: "Challenge section title",
         type: "string",
         initialValue: "Challenges During The Project",
      }),
      defineField({
         name: "challengeBody",
         title: "Challenge section body",
         type: "text",
         rows: 4,
      }),
      defineField({
         name: "challengePoints",
         title: "Challenge bullet points",
         type: "array",
         of: [
            defineArrayMember({
               type: "string",
            }),
         ],
      }),
      defineField({
         name: "solutionTitle",
         title: "Solution section title",
         type: "string",
         initialValue: "Solutions & Outcomes",
      }),
      defineField({
         name: "solutionBody",
         title: "Solution section body",
         type: "text",
         rows: 4,
      }),
      defineField({
         name: "solutionPoints",
         title: "Solution bullet points",
         type: "array",
         of: [
            defineArrayMember({
               type: "string",
            }),
         ],
      }),
      defineField({
         name: "featured",
         title: "Featured on homepage",
         type: "boolean",
         initialValue: false,
      }),
      defineField({
         name: "sortOrder",
         title: "Sort order",
         type: "number",
         initialValue: 1,
      }),
   ],
   preview: {
      select: {
         title: "title",
         media: "coverImage",
         subtitle: "client",
      },
   },
});
