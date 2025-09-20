// src/components/Navbar.tsx
import { useState } from "react";
import NavLink from "./NavLink";
import Hamburger from "./Menu";
// import "../styles/globals.css";
import "../../styles/components/navbar.css";

type NavbarProps = {
  activeId: string;
};

const Navbar = ({ activeId }: NavbarProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);

  const links = [
    { href: "#about", id: "about", label: "About" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#cv", id: "cv", label: "CV" },
    { href: "#contact", id: "contact", label: "Contact" },
  ] as const;

  return (
    <nav className={`navbar ${open ? "open" : ""}`}>
      <a href="#top" className="logo" aria-label="Home">
        Maoulid Abdi Soubaneh
      </a>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {links.map((l) => (
          <li key={l.id}>
            <NavLink
              href={l.href}
              label={l.label}
              active={activeId === l.id}
              onClick={close}
            />
          </li>
        ))}
      </ul>

      <Hamburger open={open} onToggle={() => setOpen((v) => !v)} />
    </nav>
  );
};

export default Navbar;
