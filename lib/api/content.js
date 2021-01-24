import fs from "fs";
import { join, parse, relative } from "path";
import matter from "gray-matter";
import globby from "globby";

// The commented out lines were pulled in from:
// https://github.com/vercel/next.js/blob/canary/examples/blog-starter/lib/api.js

// export function getPostSlugs() {
//   return fs.readdirSync(postsDirectory);
// }

// export function getPostBySlug(slug, fields = []) {
//   const realSlug = slug.replace(/\.md$/, "");
//   const fullPath = join(postsDirectory, `${realSlug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const { data, content } = matter(fileContents);

//   const items = {};

//   // Ensure only the minimal needed data is exposed
//   fields.forEach((field) => {
//     if (field === "slug") {
//       items[field] = realSlug;
//     }
//     if (field === "content") {
//       items[field] = content;
//     }

//     if (data[field]) {
//       items[field] = data[field];
//     }
//   });

//   return items;
// }

// export function getAllPosts(fields = []) {
//   const slugs = getPostSlugs();
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug, fields))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
//   return posts;
// }

const weeknotesDirectory = join(process.cwd(), "content", "weeknotes");
const listMarkdownFilesRecursively = (dir) => globby(`${dir}/**/*.md`);

export async function getAllWeeknotes() {
  const results = await listMarkdownFilesRecursively(weeknotesDirectory);

  return results.map((fullpath) => {
    const { dir: year, name: slug } = parse(
      relative(weeknotesDirectory, fullpath)
    );

    return getWeeknote(year, slug);
  });
}

export async function getWeeknotesByYear() {
  const weeknotes = await getAllWeeknotes();

  const weeknotesByYear = {};

  weeknotes.forEach((weeknoteData) => {
    const { year } = weeknoteData;
    weeknotesByYear[year] = [...(weeknotesByYear[year] || []), weeknoteData];
  });

  return weeknotesByYear;
}

export function getWeeknote(year, slug) {
  const fullpath = join(weeknotesDirectory, year, `${slug}.md`);

  // parse out some front-matter
  const fileContents = fs.readFileSync(fullpath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
    year,
    slug,
  };
}
