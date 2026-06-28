import type { MetadataRoute } from "next";
import { projects } from "./lib/data";
export default function sitemap():MetadataRoute.Sitemap{const base="https://richiebudijono.com";return ["","/projects","/work-with-me","/about","/contact",...projects.map(p=>`/projects/${p.slug}`)].map((path,index)=>({url:`${base}${path}`,changeFrequency:"monthly",priority:index===0?1:path.startsWith("/projects/")?.7:.8}))}
