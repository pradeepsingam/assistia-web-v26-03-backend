import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
   name: "default",
   title: "Assistia Studio",
   projectId: "m3497g80",
   dataset: "production",
   basePath: "/",
   plugins: [deskTool()],
   schema: {
      types: schemaTypes,
   },
});
