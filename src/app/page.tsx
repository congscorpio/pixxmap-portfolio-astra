import type {Metadata} from 'next';
import {Hero} from '@/components/hero';
import {Approach,SelectedWork,AboutSection,Services,Experience} from '@/components/sections';
export const metadata:Metadata={alternates:{canonical:'/'}};
export default function Home(){return <><Hero/><Approach/><SelectedWork/><AboutSection/><Services/><Experience/></>;}
