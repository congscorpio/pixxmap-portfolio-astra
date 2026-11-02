'use client';
import { LazyMotion, MotionConfig } from 'motion/react';
const features = () => import('motion/react').then(m => m.domMax);
export function MotionProvider({children}:{children:React.ReactNode}) {
  return <MotionConfig reducedMotion="user" transition={{duration:0.45,ease:[0.22,1,0.36,1]}}><LazyMotion features={features} strict>{children}</LazyMotion></MotionConfig>;
}
