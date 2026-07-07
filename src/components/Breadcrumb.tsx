import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  items: {
    label: string;
    onClick?: () => void;
  }[];
  onGoHome: () => void;
}

export default function Breadcrumb({ items, onGoHome }: BreadcrumbProps) {
  return (
    <nav id="nav-breadcrumb" className="flex items-center space-x-2 text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-6 font-medium">
      <button
        id="btn-breadcrumb-home"
        onClick={onGoHome}
        className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors cursor-pointer"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          {item.onClick ? (
            <button
              id={`btn-breadcrumb-${index}`}
              onClick={item.onClick}
              className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors cursor-pointer capitalize font-semibold"
            >
              {item.label}
            </button>
          ) : (
            <span className="text-neutral-800 dark:text-neutral-300 font-semibold truncate capitalize max-w-[150px] md:max-w-xs">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
