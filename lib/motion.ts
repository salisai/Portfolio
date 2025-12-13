// lib/motion.ts
import type { Variants } from "framer-motion";


//Base reveal from bottom
export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5 ,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

//slightly slower text reveal
export const revealSoft : Variants = ({
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});


export const cardReveal: Variants = {
  hidden: { opacity: 0, y:28, scale: 0.98 },
  show: {
    opacity: 1,
    y : 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


//parent stagger
export const stagger:Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};
