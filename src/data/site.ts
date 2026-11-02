export const site = {
  name: 'PIXXMAP', email: 'pixxmapdesign@gmail.com', phone: '+84 327 665 295',
  phoneHref: 'tel:+84327665295', location: 'Ho Chi Minh City, Vietnam',
  description: 'PIXXMAP is a multidisciplinary creative studio based in Ho Chi Minh City, working across branding, campaigns, event visuals, motion, and retail design.',
  origin: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  indexable: process.env.NEXT_PUBLIC_INDEXABLE === 'true',
};
export const approach = [
  {title:'Discover & define',body:'Study the brand, audience, and context. Find the right creative direction before designing.'},
  {title:'Design & build',body:'Turn ideas into visual systems, campaign assets, motion, and brand touchpoints.'},
  {title:'Deliver & optimize',body:'Prepare the final outputs, support adaptations, and carry the learning into what comes next.'},
];
export const experience = [
  {title:'PIXXMAP collective',date:'2022 — present',body:'Branding, campaigns, motion, and digital experiences.'},
  {title:'Brand identity',date:'2024 — present',body:'Visual systems, from creative direction to execution.'},
  {title:'Digital campaigns',date:'2022 — present',body:'Creative assets across social and digital platforms.'},
  {title:'Event & experience',date:'2022 — present',body:'Visual experiences for events and retail environments.'},
];
