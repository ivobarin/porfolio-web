import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
    "react",
    'reactrouter',
    "astro", 
    "javascript",
    "html5",
    "css",
    "node.js",
    "python",
    "vite", 
    "typescript",
    "git",
    "bootstrap",
    "mysql",
    "mongodb",
    "tailwindcss",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
