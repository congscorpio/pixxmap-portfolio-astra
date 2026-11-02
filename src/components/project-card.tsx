import Link from 'next/link';
import type {Project} from '@/data/projects';
import {ProjectMedia} from './project-media';
import {Arrow} from './icons';
export function ProjectCard({project,index=0}:{project:Project;index?:number}) {
  return <article className="project-card"><Link href={`/work/${project.slug}`} aria-label={`View ${project.title}`}>
    <div className="card-art"><ProjectMedia project={project}/><span className="card-view" aria-hidden="true">View project <Arrow diagonal/></span></div>
    <div className="card-info"><span className="project-index">{String(index+1).padStart(2,'0')}</span><div><h3>{project.title}</h3><p>{project.categories.join(' / ')}</p></div><Arrow diagonal/></div>
  </Link></article>;
}
