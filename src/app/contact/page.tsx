import type {Metadata} from 'next';
import {site} from '@/data/site';
import {ContactForm} from '@/components/contact-form';
import {Arrow} from '@/components/icons';
export const metadata:Metadata={title:'Contact',description:'Start a conversation with PIXXMAP in Ho Chi Minh City.',alternates:{canonical:'/contact'}};
export default function Contact(){return <div className="wrap contact-page"><div className="page-topline eyebrow"><span>A good place to start</span><span>Ho Chi Minh City, Vietnam</span></div><h1 className="page-title">What’s<br/>on your mind<span className="title-period">?</span></h1><div className="contact-layout"><div className="contact-details"><p>A new identity, a campaign,<br/>or an idea that doesn’t fit a box.<br/><span className="muted">Let’s talk about it.</span></p><dl><div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}<Arrow diagonal/></a></dd></div><div><dt>Phone</dt><dd><a href={site.phoneHref}>{site.phone}<Arrow diagonal/></a></dd></div><div><dt>Based in</dt><dd>{site.location}</dd></div></dl></div><ContactForm/></div></div>;}
