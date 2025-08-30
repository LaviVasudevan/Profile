import React from 'react';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech', label: 'Tech Stack' },
  { href: '#profiles', label: 'Profiles' },
  { href: '#cocurriculars', label: 'Co-Curriculars' },
  { href: '#extracurriculars', label: 'Extra-Curriculars' },
  { href: '#stickers', label: 'Sticker Zone' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md py-3 px-6 flex justify-center space-x-6 z-30">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="hover:text-purple-600 font-semibold"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
