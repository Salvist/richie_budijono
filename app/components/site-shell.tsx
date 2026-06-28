import Link from "next/link";
import { site } from "../lib/data";
import { MobileMenu } from "./mobile-menu";

const links = [["Work", "/projects"], ["Services", "/work-with-me"], ["About", "/about"], ["Contact", "/contact"]];

export function Navbar() {
  return <header className="site-header"><div className="nav-shell container">
    <Link className="wordmark" href="/" aria-label="Richie Budijono, home"><span>RB</span><b>Richie Budijono</b></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link className="nav-cta" href="/contact">Start a project <span>↗</span></Link></nav>
    <MobileMenu />
  </div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div><Link className="footer-mark" href="/">Richie<br/>Budijono.</Link><p>Software consultant building useful mobile and web products.</p></div>
    <div><p className="footer-label">Navigate</p>{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
    <div><p className="footer-label">Connect</p><a href={`mailto:${site.email}`}>Email Richie ↗</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
    <div className="footer-bottom"><span>{site.location}</span><span>© {new Date().getFullYear()} Richie Budijono</span></div>
  </div></footer>;
}
