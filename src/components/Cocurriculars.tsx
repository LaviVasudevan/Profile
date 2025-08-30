'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const cocurriculars = [
  {
    title: 'Debate Club',
    description: 'Participated in inter-college debates and won awards.',
    image: '/assets/debate.jpg',
  },
  {
    title: 'Coding Competition',
    description: 'Finalist in various hackathons and coding contests.',
    image: '/assets/hackathon.jpg',
  },
];

export default function Cocurriculars() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-12 px-6">
      {cocurriculars.map(({ title, description, image }, i) => (
        <motion.div
          key={i}
          className="w-64 h-80 perspective cursor-pointer"
          onClick={() => setFlippedIndex(flippedIndex === i ? null : i)}
        >
          <motion.div
            animate={{ rotateY: flippedIndex === i ? 180 : 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full rounded-xl shadow-lg"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Front */}
            <div
              className="absolute w-full h-full bg-white rounded-xl backface-hidden flex flex-col items-center justify-center p-4"
              style={{
                backfaceVisibility: 'hidden',
              }}
            >
              <img src={image} alt={title} className="rounded-md mb-4 w-full h-40 object-cover" />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>

            {/* Back */}
            <div
              className="absolute w-full h-full bg-purple-600 rounded-xl text-white p-6 flex items-center justify-center text-center px-4"
              style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
              }}
            >
              <p>{description}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
