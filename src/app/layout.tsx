import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'Interactive portfolio built with Next.js, Tailwind CSS, and Framer Motion',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-200 to-blue-100 text-gray-800">
        {children}
      </body>
    </html>
  );
}
