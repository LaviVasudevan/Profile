'use client';

import { motion } from 'framer-motion';
import projects from '../data/projects';

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 px-6">
      {projects.map(({ title, description, url }, i) => (
        <motion.a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-xl bg-gradient-to-br from-purple-400 to-blue-400 text-white shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p>{description}</p>
        </motion.a>
      ))}
    </div>
  );
}
