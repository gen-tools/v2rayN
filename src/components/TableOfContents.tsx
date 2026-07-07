import { Menu } from "lucide-react";

interface TableOfContentsProps {
  sections: { title: string; id: string }[];
  activeSectionId: string;
  onSectionClick: (id: string) => void;
}

export default function TableOfContents({ sections, activeSectionId, onSectionClick }: TableOfContentsProps) {
  if (!sections || sections.length === 0) return null;

  return (
    <div id="toc-block" className="flex flex-col gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
      <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
        <Menu className="w-3.5 h-3.5" />
        On This Page
      </h4>
      <ul className="space-y-2">
        {sections.map((sec) => (
          <li key={sec.id}>
            <button
              id={`btn-toc-${sec.id}`}
              onClick={() => onSectionClick(sec.id)}
              className={`text-left text-xs md:text-sm block transition-all cursor-pointer font-medium hover:translate-x-0.5 ${
                activeSectionId === sec.id
                  ? "text-blue-600 dark:text-blue-400 font-semibold border-l-2 border-blue-600 dark:border-blue-400 pl-2 -ml-2"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 pl-2 -ml-2"
              }`}
            >
              {sec.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
