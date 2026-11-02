export const categories = [
  'Branding & Visual Identity', 'Campaign & Social', 'Event & Experience',
  'POSM & Retail', 'Motion & Digital',
] as const;
export type Category = (typeof categories)[number];
export type Media = { src: string; alt: string; width: number; height: number; caption?: string };
export type StorySection = { label: string; title: string; body: string };
export type Project = {
  slug: string; title: string; shortTitle: string; client: string | null;
  year: number | null; role: string | null; categories: Category[];
  description: string; cover: Media | null; gallery: Media[];
  video: { src: string; poster: string; title: string; captions?: string } | null;
  deliverables: string[]; story: StorySection[];
  accent: 'blue' | 'red' | 'green' | 'yellow' | 'silver';
  motif: 'type' | 'orbit' | 'grid' | 'stripe';
  source: string; status: 'artwork-pending' | 'ready'; featured?: boolean;
  categoryNote?: string;
};
const source = 'https://pixxmapdesign.framer.website/work/';
const pending = 'Project title retained from the existing PIXXMAP portfolio. The full brief, project credits, and original artwork are pending confirmation.';
function project(slug: string, title: string, shortTitle: string, cats: Category[], accent: Project['accent'], motif: Project['motif'], extra: Partial<Project> = {}): Project {
  return { slug, title, shortTitle, client:null, year:null, role:null, categories:cats,
    description:pending, cover:null, gallery:[], video:null, deliverables:[], story:[],
    accent, motif, source:source+slug, status:'artwork-pending', ...extra };
}
export const projects: Project[] = [
  project('toshiba-socialguideline','Toshiba Social Guideline AWO 2026','Toshiba',
    ['Branding & Visual Identity','Campaign & Social'],'red','type',{
      client:'Toshiba', year:2026, featured:true,
      categoryNote:'Proposed mapping from the published Social Guideline category.',
      description:'A flexible social visual system for Toshiba Home Appliances, designed to keep multiple product categories consistent within one visual language.',
      deliverables:['Creative direction','Social visual guideline','Layout framework','Typography guideline','Photography direction','Color & lighting guideline','Graphic element system','Product category adaptation'],
      story:[
        {label:'01 / The challenge',title:'Many products. One visual language.',body:'Toshiba’s home-appliance categories serve different audiences and communication needs. The published brief calls for a flexible visual system that maintains a consistent identity across these categories.'},
        {label:'02 / The direction',title:'Technology, naturally part of life.',body:'The visual direction balances modern technology with warmth and everyday relevance. Products sit within contemporary lifestyle contexts, with a clear hierarchy and restrained compositions.'},
        {label:'03 / The system',title:'Principles, beyond individual posts.',body:'The published solution covers layout, typography, color, lighting, perspective, product presentation, graphic elements, and CTA placement. The system is intended to support future campaign adaptations.'},
      ],
    }),
  project('kv-247-pitching','KV 247 Pitching','247', ['Campaign & Social'],'blue','orbit',{featured:true}),
  project('manulife','Manulife Ty Phu Suc Khoe','Manulife', ['Event & Experience'],'green','grid',{featured:true}),
  project('honda-racing','Vietnam Motor Racing 2025','Motor Racing', ['Event & Experience'],'red','stripe',{year:2025,featured:true}),
  project('tiger-event','Tiger Street Football','Tiger', ['Event & Experience'],'blue','stripe'),
  project('vinamilk','Vinamilk','Vinamilk', ['Campaign & Social'],'blue','type'),
  project('nuvi','Nuvi','Nuvi', ['Campaign & Social'],'yellow','orbit'),
  project('tiktoklive','Tiktok Live','Tiktok Live', ['Campaign & Social'],'silver','grid'),
  project('hoptri','Hop Tri Summit','Hợp Trí', ['Branding & Visual Identity','Campaign & Social'],'green','type', {categoryNote:'Proposed mapping from the published Social Guideline category.'}),
  project('unilever','Unilever','Unilever', ['Motion & Digital'],'silver','orbit',{categoryNote:'Proposed mapping from the published Digital Product category; scope requires confirmation.'}),
];
export function getProject(slug: string) { return projects.find(p=>p.slug===slug); }
export function filterProjects(items: Project[], selected: readonly Category[]) {
  return selected.length ? items.filter(p=>p.categories.some(c=>selected.includes(c))) : items;
}
export function parseCategories(value: string | null): Category[] {
  return [...new Set((value?.split(',') ?? []).filter((s): s is Category=>categories.includes(s as Category)))];
}
export function nextProject(slug: string): Project { return projects[(projects.findIndex(p=>p.slug===slug)+1)%projects.length]; }
