'use client';
import {useState} from 'react';
import {site} from '@/data/site';
import {categories} from '@/data/projects';
import {Arrow} from './icons';
export function ContactForm(){
  const [message,setMessage]=useState('');
  function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();const data=new FormData(e.currentTarget);const name=String(data.get('name')).trim();const email=String(data.get('email')).trim();const brief=String(data.get('brief')).trim();if(!name||!brief){setMessage('Please add your name and a short brief.');return;}const subject=`Project enquiry: ${String(data.get('service'))}`;const body=`Hi PIXXMAP,\n\n${brief}\n\nFrom: ${name}\nEmail: ${email}\n`;window.location.href=`mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;setMessage('Your email app has been requested. Review and send the draft there. If it did not open, email us directly using the address alongside.');}
  return <form onSubmit={submit} className="contact-form"><div className="form-row"><label>Your name<input name="name" autoComplete="name" required maxLength={100} placeholder="How should we call you?"/></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com"/></label></div><label>What are you thinking?<select name="service" defaultValue="Let’s explore"><option>Let’s explore</option>{categories.map(c=><option key={c}>{c}</option>)}</select></label><label>A little about your project<textarea name="brief" rows={4} maxLength={2000} required placeholder="The idea, the context, the possibilities…"/></label><div className="form-submit"><button className="pill filled" type="submit">Prepare an email <Arrow diagonal/></button><p>Opens a draft in your email app.<br/>Nothing is sent from this website.</p></div><p role="status" className="form-status">{message}</p></form>;
}
