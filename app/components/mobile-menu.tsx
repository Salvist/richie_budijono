"use client";

import Link from "next/link";
import { useState } from "react";

const links = [["Work", "/projects"], ["Services", "/work-with-me"], ["About", "/about"], ["Contact", "/contact"]];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <div className={`mobile-menu ${open ? "is-open" : ""}`}>
    <button type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}><span>{open ? "Close" : "Menu"}</span><i/><i/></button>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a project ↗</Link></nav>}
  </div>;
}
