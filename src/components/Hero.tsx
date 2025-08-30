'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
    >
      <h1 className="text-6xl font-extrabold mb-3">Hi, I’m Your Name 👋</h1>
      <p className="text-2xl max-w-xl">
        Welcome to my interactive, sticker-lovin’ portfolio website!
      </p>
    </motion.section>
  );
}
