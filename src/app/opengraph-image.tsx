import {ImageResponse} from 'next/og';
export const alt='PIXXMAP — Independent minds. Distinctive design.';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#090909',color:'#f2f1e9',width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:'70px',justifyContent:'space-between'}}><div style={{fontSize:23,display:'flex',justifyContent:'space-between'}}><span>HO CHI MINH CITY, VIETNAM</span><span style={{color:'#f4da58'}}>CREATIVE PORTFOLIO</span></div><div style={{fontSize:190,fontWeight:900,letterSpacing:-12}}>PIXXMAP</div><div style={{fontSize:30}}>Independent minds. Distinctive design.</div></div>,size);}
