import type {MetadataRoute} from 'next';
import {site} from '@/data/site';
import {projects} from '@/data/projects';
export default function sitemap():MetadataRoute.Sitemap{if(!site.indexable)return [];return ['','/work','/about','/contact',...projects.map(p=>`/work/${p.slug}`)].map(path=>({url:site.origin+path}));}
