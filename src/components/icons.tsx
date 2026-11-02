export function Arrow({diagonal=false,className=''}:{diagonal?:boolean;className?:string}) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal?'M5 19 19 5M5 5h14v14':'M4 12h16m-7-7 7 7-7 7'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
export function Spark({className=''}:{className?:string}) {
  return <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="M50 0C54 33 67 46 100 50 67 54 54 67 50 100 46 67 33 54 0 50 33 46 46 33 50 0Z"/></svg>;
}
