import type {Metadata,Viewport} from 'next';
import localFont from 'next/font/local';
import {MotionProvider} from '@/components/motion-provider';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {site} from '@/data/site';
import './globals.css';
const display=localFont({src:'../../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2',variable:'--font-display',display:'swap'});
const body=localFont({src:'../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',variable:'--font-body',display:'swap'});
export const metadata:Metadata={
  metadataBase:new URL(site.origin),title:{default:'PIXXMAP — Independent minds. Distinctive design.',template:'%s — PIXXMAP'},description:site.description,
  robots:{index:site.indexable,follow:site.indexable},
  openGraph:{type:'website',siteName:'PIXXMAP',title:'PIXXMAP — Creative portfolio',description:site.description,locale:'en_US'},
  twitter:{card:'summary_large_image'},
};
export const viewport:Viewport={themeColor:'#090909'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`}><body><a className="skip-link" href="#main">Skip to content</a><MotionProvider><Header/><main id="main" tabIndex={-1}>{children}</main><Footer/></MotionProvider></body></html>;}
