import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  icon: LucideIcon;
}

export default function SectionTitle({ title, icon: Icon }: Props) {
  return (
    <div className="flex w-fit items-center gap-2 rounded-full bg-zinc-600/75 text-white px-4 py-2 dark:bg-blue-700/70 dark:text-blue-100">
      <Icon />
      <h2 className="font-diagraphetc text-sm text-[20px] tracking-wide max-sm:text-xl">
        {title}
      </h2>
    </div>
  );
}
