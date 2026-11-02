'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState,useRef} from 'react';
import {Arrow,Spark} from './icons';
const links = [{href:'/work',label:'Work'},{href:'/about',label:'About'},{href:'/contact',label:'Contact'}];
export function Header(){
  const pathname=usePathname(); const [open,setOpen]=useState(false); const toggle=useRef<HTMLButtonElement>(null);
  return <header className="site-header" id="top" onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus();}}}>
    <Link href="/" className="logo" aria-label="PIXXMAP home" onClick={()=>setOpen(false)}>Pi<span className="logo-mark"><Spark/><Spark/></span>map</Link>
    <div className="header-center" aria-hidden="true"><i/><i/><i/></div>
    <nav className="desktop-nav" aria-label="Main navigation">{links.slice(0,2).map(l=><Link key={l.href} href={l.href} aria-current={pathname.startsWith(l.href)?'page':undefined}>{l.label}</Link>)}<Link href="/contact" className="pill" aria-current={pathname==='/contact'?'page':undefined}>Let’s talk <Arrow diagonal/></Link></nav>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} <span aria-hidden="true">{open?'−':'+'}</span></button>
    <nav id="mobile-nav" className="mobile-nav" hidden={!open} aria-label="Mobile navigation">{links.map((l,i)=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} aria-current={pathname.startsWith(l.href)?'page':undefined}><span className="eyebrow">0{i+1}</span>{l.label}<Arrow diagonal/></Link>)}</nav>
  </header>;
}
