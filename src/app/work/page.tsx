import {Suspense} from 'react';
import type {Metadata} from 'next';
import {WorkGrid} from '@/components/work-grid';
import {projects} from '@/data/projects';
import {Reveal} from '@/components/reveal';
import {ProjectCard} from '@/components/project-card';
export const metadata:Metadata={title:'Work',description:'Explore the PIXXMAP project archive across branding, campaigns, events, retail, and motion.',alternates:{canonical:'/work'}};
export default function Work(){return <div className="wrap work-page"><div className="page-topline eyebrow"><span>The project archive</span><span>2022 — present</span></div><Reveal><h1 className="page-title">Work<span className="title-period">.</span><sup>({projects.length.toString().padStart(2,'0')})</sup></h1></Reveal><div className="page-description"><p>Different worlds.<br/>A distinct point of view.</p><p className="muted">Explore by discipline, or follow your curiosity.<br/>Select one or more categories.</p></div><p className="asset-note"><span aria-hidden="true">◌</span> Artwork placeholders are used throughout this review build.</p><Suspense fallback={<><h2 className="sr-only">Projects</h2><div className="project-grid">{projects.map((project,index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div></>}><WorkGrid projects={projects}/></Suspense></div>;}
