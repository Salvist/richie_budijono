import Link from "next/link";
import type { Project } from "../lib/data";

export function Arrow() { return <span aria-hidden="true">↗</span>; }

export function Button({ href, children, secondary = false, external = false }: { href: string; children: React.ReactNode; secondary?: boolean; external?: boolean }) {
  return <Link className={`button ${secondary ? "button-secondary" : "button-primary"}`} href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>{children}<Arrow /></Link>;
}

export function SectionHeader({ eyebrow, title, intro, link }: { eyebrow: string; title: string; intro?: string; link?: { href: string; label: string } }) {
  return <div className="section-header">
    <p className="eyebrow">{eyebrow}</p>
    <div className="section-heading-row"><h2>{title}</h2>{link && <Link className="text-link" href={link.href}>{link.label} <Arrow /></Link>}</div>
    {intro && <p className="section-intro">{intro}</p>}
  </div>;
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro: string }) {
  return <section className="page-hero container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro">{intro}</p></section>;
}

export function ProjectMedia({ project }: { project: Project }) {
  return <div className={`project-media tone-${project.tone}`} aria-hidden="true">
    <div className="media-grid" />
    {project.slug === "church-notes" && <div className="phone"><div className="phone-top"/><span className="tiny-label">SERMON NOTES</span><strong>Grace in the<br/>ordinary.</strong><div className="verse">ROMANS 12:12<br/><b>Be joyful in hope.</b></div></div>}
    {project.slug === "snap-ai" && <><div className="orb orb-one"/><div className="orb orb-two"/><div className="prompt-panel"><span>Imagine</span><b>A quiet blue world,<br/>softly lit...</b><i>Generate →</i></div></>}
    {project.slug === "expense-archive" && <div className="expense-ui"><span>THIS MONTH</span><strong>$1,284.20</strong><div className="chart"><i/><i/><i/><i/><i/><i/></div><div className="transaction">Groceries <b>− $84.12</b></div><div className="transaction">Transport <b>− $26.50</b></div></div>}
    {project.slug === "doer" && <div className="board"><div><b>TO DO</b><i/><i/></div><div><b>IN PROGRESS</b><i/><i className="short"/></div><div><b>DONE</b><i/></div></div>}
    {project.slug === "snap-ai-web" && <div className="browser"><div className="browser-bar"><i/><i/><i/></div><span>SNAP AI</span><strong>Your account,<br/>in your control.</strong><div className="fake-button">Manage account</div></div>}
  </div>;
}

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return <article className={`project-card ${compact ? "project-card-compact" : ""}`}>
    <Link className="media-link" href={`/projects/${project.slug}`} aria-label={`View ${project.name} case study`}><ProjectMedia project={project}/></Link>
    <div className="project-copy">
      <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
      <h3><Link href={`/projects/${project.slug}`}>{project.name}</Link></h3>
      <p>{project.tagline}</p>
      <div className="tag-list">{project.stack.slice(0, compact ? 3 : 4).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      <Link className="text-link" href={`/projects/${project.slug}`}>View case study <Arrow /></Link>
    </div>
  </article>;
}

export function CTASection() {
  return <section className="cta-wrap container"><div className="cta-card"><p className="eyebrow">Have something in mind?</p><h2>Let’s make the next version real.</h2><p>Tell me what you’re building, who it’s for, and where you could use an experienced engineering partner.</p><Button href="/contact">Start a project</Button></div></section>;
}
