'use client';

import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

export default function StickerZone() {
  // For simplicity, just static SVG stickers here; replace with actual 3D or draggable components later
  return (
    <div className="max-w-5xl mx-auto flex justify-around flex-wrap gap-8 px-6">
      <img src="/assets/sticker1.svg" alt="Sticker 1" className="w-32 h-32" />
      <img src="/assets/sticker2.svg" alt="Sticker 2" className="w-24 h-24" />
      <img src="/assets/sticker3.svg" alt="Sticker 3" className="w-28 h-28" />
    </div>
  );
}
