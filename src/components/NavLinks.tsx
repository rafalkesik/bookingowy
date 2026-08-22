'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({ isAdmin }: {isAdmin: boolean}) {
  const navLinksList = [
    {name: "Strona Główna", link: "/"},
  ];
  const adminNavLinksList = [
    {name: "Mój kalendarz", link: "/my-calendar"},
    {name: "Panel admina", link: "/admin/users"},
  ]
  isAdmin ? navLinksList.push(...adminNavLinksList) : ""

  return (
    <div id="nav-links" className="navLinks">
      { navLinksList.map((navElement, index) => (
        <div key={"navLink_" + index} className="navLink">
          <Link
            href={navElement.link}
            className={(usePathname() === navElement.link) ? "text-black border-b" : ""}>
            {navElement.name}
          </Link>
          {/* { index+1 < navLinksList.length ? <div>|</div> : "" } */}
        </div>
      )) }
    </div>
  );
} 