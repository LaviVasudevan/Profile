'use client';

import { motion } from 'framer-motion';
import techstack from '../data/techstack';

export default function Techstack() {
  return (
    <div className="flex justify-center flex-wrap gap-6 px-6 text-lg font-medium text-purple-700">
      {techstack.map(({ name }, i) => (
        <motion.span
          key={i}
          className="bg-white py-2 px-6 rounded-full shadow-md cursor-default select-none"
          whileHover={{ scale: 1.1, backgroundColor: '#C084FC' }}
        >
          {name}
        </motion.span>
      ))}
    </div>
  );
}
