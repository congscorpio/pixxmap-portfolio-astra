import type {Metadata} from 'next';
import {AboutSection,Approach,Services,Experience} from '@/components/sections';
export const metadata:Metadata={title:'About',alternates:{canonical:'/about'}};
export default function About(){return <><div className="wrap about-page-head"><div className="page-topline eyebrow">A collective point of view</div><h1 className="page-title">Many minds.<br/><span className="muted">PIXXMAP.</span></h1></div><AboutSection standalone/><Approach/><Services/><Experience/></>;}
