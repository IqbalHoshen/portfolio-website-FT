"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "All" },
  { href: "/graphic-design", label: "Graphic Design" },
  { href: "/mobile-app", label: "Mobile App" },
  { href: "/photography", label: "photography" },
  { href: "/ui-design", label: "UI/UX Design" },
];

export default function Portfolio_Nav() {
  const pathname = usePathname();

  return (
    <nav className="bg-black rounded-sm drop-shadow-md drop-shadow-white">
      <div className=" px-2 md:px-6">
        <div className="flex gap-8 justify-center ">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-4 text-lg font-normal transition-colors border-b-4 ${
                pathname === link.href
                  ? "bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-transparent border-[#F89222]"
                  : "text-white border-transparent hover:text-[#F5BD4D]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
