import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection, ProjectMedia } from "../../components/ui";
import { projects } from "../../lib/data";

export function generateStaticParams(){return projects.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const project=projects.find(p=>p.slug===slug);return project?{title:project.name,description:project.tagline}:{} }
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=projects.find(p=>p.slug===slug);if(!project)notFound();return <>
  <section className="case-hero container"><Link className="case-back" href="/projects">← All projects</Link><div className="case-title-row"><div><p className="eyebrow">{project.category} · {project.year}</p><h1>{project.name}</h1></div><p>{project.tagline}</p></div></section>
  <div className="case-media container"><ProjectMedia project={project}/></div>
  <section className="case-details container"><div className="case-facts"><div><span>Status</span><b>{project.status}</b></div><div><span>Role</span><b>End-to-end builder</b></div><div><span>Platform</span><b>{project.category}</b></div><div><span>Year</span><b>{project.year}</b></div></div>
    <div className="case-content"><h2>The opportunity</h2><div><p>{project.problem}</p></div></div>
    <div className="case-content"><h2>The product</h2><div><p>{project.solution}</p><ul className="feature-list">{project.features.map(f=><li key={f}>{f}</li>)}</ul></div></div>
    <div className="case-content"><h2>My contribution</h2><div><p>{project.role}</p><div className="tag-list">{project.stack.map(s=><span className="tag" key={s}>{s}</span>)}</div></div></div>
    <div className="case-content"><h2>Outcome</h2><div><p>{project.result}</p></div></div>
  </section><CTASection/></>}
