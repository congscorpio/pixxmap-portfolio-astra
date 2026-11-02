import type {Metadata} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {projects,getProject,nextProject} from '@/data/projects';
import {ProjectMedia} from '@/components/project-media';
import {Reveal} from '@/components/reveal';
import {Arrow} from '@/components/icons';
import {ProjectCard} from '@/components/project-card';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=getProject(slug);if(!p)return {title:'Project not found'};return {title:p.title,description:p.description,alternates:{canonical:`/work/${p.slug}`},openGraph:{title:p.title,description:p.description,...(p.cover?{images:[{url:p.cover.src,width:p.cover.width,height:p.cover.height,alt:p.cover.alt}]}:{})}};}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const project=getProject(slug);if(!project)notFound();const next=nextProject(slug);
  return <article className="case-page"><header className="wrap case-header"><div className="case-top"><Link href="/work" className="text-link"><span aria-hidden="true">←</span> All work</Link><span className="eyebrow">{String(projects.indexOf(project)+1).padStart(2,'0')} / {projects.length}</span></div><div className="case-categories eyebrow">{project.categories.join(' / ')}</div><Reveal><h1>{project.title}</h1></Reveal><p className="case-intro">{project.description}</p><p className="asset-note"><span aria-hidden="true">◌</span> {project.status==='artwork-pending'?'Review version · Original artwork and final credits pending.':'Published project'}</p></header>
    <div className="wrap case-cover"><ProjectMedia project={project} priority detail/></div>
    <div className="wrap"><dl className="case-facts"><div><dt>Client</dt><dd>{project.client??'To be confirmed'}</dd></div><div><dt>Year</dt><dd>{project.year??'To be confirmed'}</dd></div><div><dt>Role</dt><dd>{project.role??'Credits pending'}</dd></div><div><dt>Discipline</dt><dd>{project.categories.join(' / ')}</dd></div></dl>
    {project.categoryNote&&<p className="content-note">{project.categoryNote}</p>}
    {project.story.length?project.story.map((s,i)=><section className="story-section" key={s.label}><span className="eyebrow">{s.label}</span><Reveal><h2>{s.title}</h2><p>{s.body}</p></Reveal>{project.status==='artwork-pending'&&i===1&&!project.gallery.length&&<div className="story-art"><div className="gallery-placeholder"><span className="eyebrow">Gallery / 01</span><span>Space for the<br/>visual system.</span><p>Original artwork pending</p></div></div>}</section>):<section className="story-section"><span className="eyebrow">01 / Project story</span><div><h2>The story behind<br/>the work.</h2><p>Awaiting the approved brief, creative direction, and project credits. This template is ready for the real story; no client outcomes or responsibilities have been assumed.</p></div></section>}
    {project.gallery.length>0&&<section className="case-gallery" aria-label="Project gallery">{project.gallery.map((media,i)=><Reveal key={media.src}><figure><Image src={media.src} width={media.width} height={media.height} sizes="(max-width: 700px) 100vw, 90vw" alt={media.alt}/>{media.caption&&<figcaption>{String(i+1).padStart(2,'0')} / {media.caption}</figcaption>}</figure></Reveal>)}</section>}
    {project.video&&<section className="case-video" aria-label={project.video.title}><video controls playsInline preload="none" poster={project.video.poster} aria-label={project.video.title}><source src={project.video.src}/>{project.video.captions&&<track kind="captions" src={project.video.captions} srcLang="en" label="English" default/>}Your browser does not support video.</video><a href={project.video.src}>Open {project.video.title}</a></section>}
    <section className="story-section deliverables"><span className="eyebrow">04 / Deliverables</span><div><h2>What took shape.</h2>{project.deliverables.length?<ul>{project.deliverables.map(d=><li key={d}>{d}<span aria-hidden="true">↗</span></li>)}</ul>:<p>Deliverables will be listed once the scope and credits are confirmed.</p>}</div></section>
    <section className="next-project"><div className="section-heading"><div><span className="eyebrow">Keep exploring</span><h2>Next perspective.</h2></div><Arrow diagonal/></div><ProjectCard project={next} index={projects.indexOf(next)}/></section>
    </div></article>;
}
