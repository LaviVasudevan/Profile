import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Full Stack Developer & Designer',
  keywords: 'portfolio, developer, full stack, react, next.js',
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">
              © 2025 Your Name. Built with Next.js & deployed on Vercel.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}