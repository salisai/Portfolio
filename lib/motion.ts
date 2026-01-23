import type { Variants } from "framer-motion";

// Custom "Sleek" Easing
const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any;

export const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const reveal: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition
  },
};

export const revealSoft: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ...transition, duration: 1 }
  },
};

// Focused on a subtle scale-in for cards
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition
  },
};