'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center px-6"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <a
        href="mailto:your.email@example.com"
        className="inline-block px-8 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
      >
        Send an Email
      </a>
    </motion.div>
  );
}
