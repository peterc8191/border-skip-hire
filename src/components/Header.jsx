import { useState } from "react";
import Logo from "./Logo.jsx";
import { navLinks, phones } from "../data.jsx";
import useActiveSection from "../hooks/useActiveSection.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));
  const main = phones.find((p) => p.primary);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Menu</span>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <nav id="site-nav" className={`site-nav${open ? " open" : ""}`}>
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <a href={main.href} className="btn btn-yellow header-call">
          <PhoneIcon /> {main.label}
        </a>
      </div>
    </header>
  );
}

export function PhoneIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"
      />
    </svg>
  );
}
