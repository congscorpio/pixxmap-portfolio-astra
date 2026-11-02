// Normalize the preview runner's Vite-style flags for the Next.js dev server.
// Managed previews run the compiled app; ordinary `npm run dev` uses Next development.
import {spawn} from 'node:child_process';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const incoming=process.argv.slice(2);const forwarded=[];
const command=incoming.includes('--strictPort')?'start':'dev';
for(let i=0;i<incoming.length;i++){
  const arg=incoming[i];
  if(arg==='--strictPort')continue;
  if(arg==='--host'){forwarded.push('--hostname',incoming[++i]||'0.0.0.0');continue;}
  forwarded.push(arg);
}
if(!forwarded.includes('--hostname'))forwarded.push('--hostname','0.0.0.0');
const child=spawn(process.execPath,[require.resolve('next/dist/bin/next'),command,...forwarded],{stdio:'inherit'});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));
child.on('exit',code=>process.exit(code??0));
