import { IconCloud } from "@/components/magicui/icon-cloud";
import { color } from "motion/react";

const slugs = [
    "react",
    'reactrouter',
    "astro", 
    "javascript",
    "html5",
    "css",
    "node.js",
    "python",
    "vitejs", 
    "typescript",
    "git",
    "bootstrap",
    "mysql",
    "mongodb",
    "tailwindcss",
    "angular",
    "supabase",
    "expo",
    "express"
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`,
  );

  return (
    <div className="relative flex items-center justify-center overflow-hidden ">
      <IconCloud images={images} />
    </div>
  );
}
