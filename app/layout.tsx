import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'DEV09 | Software Development Company | Web, Mobile, Desktop Apps',
  description:
    'DEV09 is an award-winning full-stack software development company offering web, mobile, desktop, and custom enterprise solutions. We help startups and enterprises build scalable products with AI, cloud, and modern UX.',
  icons: {
    icon: { url: '/Favicon.ico' },
  },
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'DEV09 | Full-Stack Development, AI-Enabled Software, Innovative Digital Products',
    description:
      'From UI/UX design to backend systems and mobile apps, DEV09 delivers reliable, high-performance software solutions for fast-growing businesses.',
    type: 'website',
    url: 'https://yourdomain.com',
    siteName: 'DEV09',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DEV09 software development company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@YourTwitterHandle',
    title: 'DEV09 | Software Development Services',
    description:
      'Custom web, mobile, and desktop apps from idea to launch with DevOps, CI/CD, and dedicated engineering teams.',
  },
  keywords: [
    'software development',
    'web development',
    'mobile app development',
    'desktop application',
    'enterprise software',
    'react',
    'next.js',
    'node.js',
    'cloud mvc',
    'AI software',
  ],
  authors: [{ name: 'DEV09 Team', url: 'https://yourdomain.com/about' }],
  robots: 'index, follow',
}

export const viewport: Viewport = {
  themeColor: '#d00000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
