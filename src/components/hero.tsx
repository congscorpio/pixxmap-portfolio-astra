'use client';
import Link from 'next/link';
import {m,useReducedMotion} from 'motion/react';
import {useEffect,useRef} from 'react';
import {Arrow,Spark} from './icons';
export function Hero(){
  const reduced=useReducedMotion(); const art=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(reduced!==false || !art.current) return;
    let cancelled=false; let clean:undefined|(()=>void);
    Promise.all([import('gsap'),import('gsap/ScrollTrigger')]).then(([{gsap},{ScrollTrigger}])=>{
      if(cancelled||!art.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const mm=gsap.matchMedia();
      mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)',()=>{
        const tl=gsap.timeline({scrollTrigger:{trigger:art.current,start:'top bottom',end:'bottom top',scrub:1}});
        tl.fromTo('.hero-spark',{rotate:-15,y:40},{rotate:25,y:-40,ease:'none'},0)
          .fromTo('.art-outline',{x:-30},{x:30,ease:'none'},0);
      },art);
      clean=()=>mm.revert();
    });
    return()=>{cancelled=true;clean?.();};
  },[reduced]);
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-intro wrap"><span className="eyebrow">Independent minds. Distinctive design.</span><span className="eyebrow hero-edition">Creative portfolio / 2026</span></div>
    <h1 id="hero-title" className="hero-word" aria-label="PIXXMAP">{'PIXXMAP'.split('').map((letter,i)=><m.span aria-hidden="true" key={i} initial={false} animate={reduced?{}:{y:[28,0]}} transition={{delay:i*0.045,duration:0.75,ease:[0.22,1,0.36,1]}}>{letter}</m.span>)}</h1>
    <div className="hero-meta wrap"><span>Ho Chi Minh City, Vietnam</span><span>Branding · Campaign · Event · Retail · Motion</span><Link href="#selected-work">Explore the work <span aria-hidden="true">↓</span></Link></div>
    <div className="hero-art wrap" ref={art}>
      <div className="art-board">
        <div className="art-top eyebrow"><span>PIXXMAP / A creative point of view</span><span>01 — In motion</span></div>
        <div className="art-copy"><span>Everything.</span><span className="art-outline">& everyone.</span></div>
        <div className="hero-spark"><Spark/></div><div className="yellow-spark"><Spark/></div>
        <div className="art-bottom"><span className="eyebrow">Brand motion study · Placeholder</span><Link href="/work" className="round-link" aria-label="Explore all projects"><Arrow diagonal/></Link></div>
      </div>
    </div>
  </section>;
}
