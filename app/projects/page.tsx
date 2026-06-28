import type { Metadata } from "next";
import { CTASection, PageHero, ProjectCard } from "../components/ui";
import { projects } from "../lib/data";

export const metadata: Metadata = { title: "Selected Work", description: "Mobile, web, Firebase, and AI products designed and built by Richie Budijono." };
export default function ProjectsPage(){return <><PageHero eyebrow="Selected work" title={<>Products built around <em>real problems.</em></>} intro="Self-directed work across mobile, web, and cloud—each one an exercise in making capable technology feel useful and clear."/><section className="projects-page container"><div className="project-grid">{projects.map(project=><ProjectCard key={project.slug} project={project} compact/>)}</div></section><CTASection/></>}
