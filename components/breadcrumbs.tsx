import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; url: string }[] }) {
  return (
    <nav className="page-breadcrumbs" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="flex items-center">
              <Home className="w-4 h-4 mr-1" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center">
              <ChevronRight className="w-4 h-4 sep mx-2" />
              {index === items.length - 1 ? (
                <span className="current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.url}>{item.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
