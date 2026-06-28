import Link from "next/link";
import { CTASection, ProjectCard, SectionHeader, Button, Arrow } from "./components/ui";
import { process, projects, services } from "./lib/data";

export default function Home() {
  const featured = projects.filter((project) => project.featured);
  return <>
    <section className="home-hero container">
      <div className="hero-status"><span className="status-dot"/> Software consultant · New York / Remote</div>
      <h1>I design and build <em>dependable</em> web &amp; mobile products.</h1>
      <div className="hero-bottom"><p>I help teams turn a promising idea or stubborn software problem into a clear, useful product—from product thinking through launch.</p><div className="button-row"><Button href="/contact">Start a project</Button><Button href="/projects" secondary>View selected work</Button></div></div>
      <div className="capability-line"><span>Mobile</span><i/><span>Web</span><i/><span>Firebase</span><i/><span>AI</span></div>
    </section>

    <section className="trust-strip"><div className="container trust-grid"><p>Built across the stack</p><strong>Product thinking</strong><strong>Mobile + web delivery</strong><strong>Cloud + AI integration</strong><strong>Clear collaboration</strong></div></section>

    <section className="section container"><SectionHeader eyebrow="01 — What I build" title="Useful software, thoughtfully made." intro="I work where product decisions and engineering meet—shaping the right thing, then building it with care." />
      <div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
    </section>

    <section className="section section-tint"><div className="container"><SectionHeader eyebrow="02 — Selected work" title="Products with a point of view." intro="A selection of self-directed products spanning mobile, web, cloud infrastructure, and applied AI." link={{ href: "/projects", label: "See all work" }} />
      <div className="featured-list">{featured.map((project) => <ProjectCard project={project} key={project.slug}/>)}</div></div>
    </section>

    <section className="section container why-section"><SectionHeader eyebrow="03 — Why work with me" title="An engineer who stays close to the product." />
      <div className="strength-grid">{[
        ["Product-minded", "I look past the ticket to understand the user, the constraint, and the simplest useful outcome."],
        ["Cross-platform", "Mobile, web, backend, and integration work can move as one coherent product—not separate islands."],
        ["Communicative", "You get clear tradeoffs, visible progress, and decisions explained in language that travels."],
        ["Practical", "Architecture should fit the product’s stage and make the next release easier, not merely look impressive."],
      ].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="section process-section"><div className="container"><SectionHeader eyebrow="04 — The process" title="From open question to shipped product." intro="A straightforward rhythm that keeps the work focused, collaborative, and moving." />
      <ol className="process-list">{process.map(([title, copy], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol></div></section>

    <section className="about-preview container"><div className="portrait-mark" aria-hidden="true"><span>RB</span><i>Product<br/>builder</i></div><div><p className="eyebrow">A little about me</p><h2>Curious by nature.<br/>Practical by training.</h2><p>I’m Richie, a New York–based software engineer who likes turning fuzzy ideas into products people can actually use. I care about the details, but never lose sight of the job the product needs to do.</p><Link className="text-link" href="/about">More about how I work <Arrow /></Link></div></section>
    <CTASection />
  </>;
}
