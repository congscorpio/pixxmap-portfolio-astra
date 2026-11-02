import Image from 'next/image';
import type {Project} from '@/data/projects';
import {Spark} from './icons';
export function ProjectMedia({project,priority=false,detail=false}:{project:Project;priority?:boolean;detail?:boolean}) {
  if(project.cover) return <div className={`project-image ${detail?'detail-image':''}`}><Image src={project.cover.src} alt={project.cover.alt} fill sizes={detail?'100vw':'(max-width: 700px) 100vw, 50vw'} priority={priority}/></div>;
  return <div className={`placeholder-art tone-${project.accent} motif-${project.motif} ${detail?'detail-image':''}`}>
    <div className="placeholder-top"><span>PIXXMAP / Project archive</span><span>{project.year || 'YEAR TBC'}</span></div>
    <div className="placeholder-graphic" aria-hidden="true">{project.motif==='orbit'?<><i/><i/><i/></>:project.motif==='grid'?<><i/><i/><i/><i/></>:project.motif==='stripe'?<><i/><i/><i/></>:<Spark/>}</div>
    <span className="placeholder-name" aria-hidden="true">{project.shortTitle}</span>
    <span className="placeholder-label">Artwork placeholder · Original assets pending</span>
  </div>;
}
