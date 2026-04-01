import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const talk = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/talk" }),
  schema: z.object({
    title: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    event: z.object({
      name: z.string(),
      link: z.string(),
    }),
    links: z.array(
      z.object({
        title: z.string(),
        href: z.string(),
      })
    ),
  }),
});

export const collections = { talk };
