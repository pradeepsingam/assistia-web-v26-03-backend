import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
   name: "post",
   title: "Blog Posts",
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
      }),
      defineField({
         name: "excerpt",
         title: "Excerpt",
         type: "text",
         rows: 3,
      }),
      defineField({
         name: "publishedAt",
         title: "Published at",
         type: "datetime",
         initialValue: () => new Date().toISOString(),
      }),
      defineField({
         name: "author",
         title: "Author",
         type: "string",
         initialValue: "Assistia",
      }),
      defineField({
         name: "category",
         title: "Category",
         type: "string",
      }),
      defineField({
         name: "tags",
         title: "Tags",
         type: "array",
         of: [
            defineArrayMember({
               type: "string",
            }),
         ],
      }),
      defineField({
         name: "body",
         title: "Body",
         type: "array",
         of: [
            defineArrayMember({
               type: "block",
               styles: [
                  { title: "Normal", value: "normal" },
                  { title: "H2", value: "h2" },
                  { title: "H3", value: "h3" },
                  { title: "Quote", value: "blockquote" },
               ],
               lists: [
                  { title: "Bullet", value: "bullet" },
                  { title: "Number", value: "number" },
               ],
            }),
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
                  defineField({
                     name: "caption",
                     title: "Caption",
                     type: "string",
                  }),
               ],
            }),
         ],
      }),
   ],
   preview: {
      select: {
         title: "title",
         subtitle: "author",
         media: "coverImage",
      },
   },
});
