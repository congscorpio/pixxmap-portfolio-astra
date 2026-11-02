'use client';
import {m,AnimatePresence,useReducedMotion} from 'motion/react';
import {useSearchParams,useRouter,usePathname} from 'next/navigation';
import {categories,filterProjects,parseCategories,type Category,type Project} from '@/data/projects';
import {ProjectCard} from './project-card';
export function WorkGrid({projects}:{projects:Project[]}) {
  const params=useSearchParams();const router=useRouter();const pathname=usePathname();const reduced=useReducedMotion();
  const selected=parseCategories(params.get('category'));const filtered=filterProjects(projects,selected);
  function change(next:Category[]){const search=new URLSearchParams(params.toString()); if(next.length) search.set('category',next.join(','));else search.delete('category');router.replace(`${pathname}${search.size?'?'+search.toString():''}`,{scroll:false});}
  function toggle(category:Category){change(selected.includes(category)?selected.filter(c=>c!==category):[...selected,category]);}
  return <>
    <div className="filters" role="group" aria-label="Filter projects by category"><button aria-pressed={!selected.length} onClick={()=>change([])}>All work <span>{projects.length.toString().padStart(2,'0')}</span></button>{categories.map(category=><button key={category} aria-pressed={selected.includes(category)} onClick={()=>toggle(category)}>{category}</button>)}</div>
    <div className="results-bar"><p role="status" aria-live="polite">{filtered.length} {filtered.length===1?'project':'projects'}{selected.length?' · Matching any selected category':' · All disciplines'}</p><span>INDEX / 01—{projects.length}</span></div>
    <h2 className="sr-only">Projects</h2>
    <m.div layout={reduced?false:true} className="project-grid work-grid"><AnimatePresence initial={false} mode="popLayout">{filtered.map(p=><m.div key={p.slug} layout={reduced?false:true} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduced?0:0.3}}><ProjectCard project={p} index={projects.indexOf(p)}/></m.div>)}</AnimatePresence></m.div>
    {!filtered.length&&<div className="empty-state"><span className="eyebrow">An open space, for now.</span><h2>More work to come.</h2><p>No published projects are mapped to this selection yet. POSM artwork and credits can be added when confirmed.</p><button className="pill" onClick={()=>change([])}>View all projects <span aria-hidden="true">↗</span></button></div>}
  </>;
}
