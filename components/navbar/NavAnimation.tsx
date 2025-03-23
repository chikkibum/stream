'use client';

import React, { useState } from 'react';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';

export const NavAnimation = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: '-100%',
      }}
      animate={{
        opacity: 1,
        y: '0%',
      }}
      transition={{
        duration: 1.25,
        ease: 'easeInOut',
      }}
      className={`fixed left-0 right-0 top-0 z-50 bg-zinc-950/0 py-3 transition-colors ${scrolled && 'bg-zinc-950/80 backdrop-blur'}`}
    >
      {children}
    </motion.nav>
  );
};
