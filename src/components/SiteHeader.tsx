"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cvSections } from "@/data/sections";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#top" onClick={() => setOpen(false)}>
          MRA<span>.</span>
        </a>
        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {cvSections.map((section) => (
            <a key={section.id} href={`#${section.id}`} onClick={() => setOpen(false)}>
              {section.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
