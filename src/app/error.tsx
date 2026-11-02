'use client';
export default function ErrorPage({reset}:{error:Error & {digest?:string};reset:()=>void}){return <div className="wrap error-page"><span className="eyebrow">Something interrupted this page</span><h1>Let’s try again.</h1><button className="pill" onClick={()=>reset()}>Reload this section ↗</button></div>;}
