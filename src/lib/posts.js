import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export function getAllPosts(postsDirectory) {
  postsDirectory = path.join(process.cwd(), postsDirectory);
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        ...data,
        content,
        readingTime: stats.text,
      };
    })

    .filter((post) => {
      if (process.env.NODE_ENV === "production") {
        return post.draft !== true;
      }
      return true;
    });

  return allPostsData.sort((a, b) => {
    const parseDate = (dateStr) => {
      if (!dateStr) return new Date(0);

      if (dateStr.toLowerCase() === "present") return new Date();
      return new Date(dateStr);
    };

    const dateA = parseDate(a.endDate || a.publishDate);
    const dateB = parseDate(b.endDate || b.publishDate);

    return dateB - dateA;
  });
}

export function getPostBySlug(slug, postsDirectory) {
  try {
    postsDirectory = path.join(process.cwd(), postsDirectory);
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    if (process.env.NODE_ENV === "production" && data.draft === true) {
      return null;
    }

    return { slug, ...data, content, readingTime: stats.text };
  } catch (e) {
    return null;
  }
}
