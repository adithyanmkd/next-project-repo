"use client";

import React from "react";
import Link from "next/link";
import { FaBug } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issue",
      href: "/issues",
    },
  ];

  return (
    <div>
      <nav className="flex space-x-6 px-10 h-14 items-center border border-b">
        <Link href={"/"}>
          <FaBug />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className={clsx("hover:text-zinc-800 transition-colors", {
                  "text-zinc-900 font-medium transition-colors":
                    link.href === currentPath,
                  "text-zinc-500": link.href !== currentPath,
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
