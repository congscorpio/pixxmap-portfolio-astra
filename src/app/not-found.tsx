import Link from 'next/link';
export default function NotFound(){return <div className="wrap error-page"><span className="eyebrow">404 / A different direction</span><h1>This page is<br/>off the map.</h1><Link className="pill" href="/work">Explore the work ↗</Link></div>;}
