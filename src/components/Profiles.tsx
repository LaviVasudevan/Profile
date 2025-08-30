'use client';

import { motion } from 'framer-motion';

const profiles = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourname' },
  { name: 'GitHub', url: 'https://github.com/yourname' },
  { name: 'Medium', url: 'https://medium.com/@yourname' },
  { name: 'LeetCode', url: 'https://leetcode.com/yourname' },
];

export default function Profiles() {
  return (
    <div className="flex justify-center flex-wrap gap-8 px-6">
      {profiles.map(({ name, url }, i) => (
        <motion.a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:text-purple-900 font-semibold text-xl underline"
          whileHover={{ scale: 1.1 }}
        >
          {name}
        </motion.a>
      ))}
    </div>
  );
}
