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
  title: 'DEV09 - Code The Future, Command The World.',
  description: 'DEV09 is a cutting-edge software development company delivering innovative solutions for businesses worldwide.',
  icons: {
    icon:{ url: '/Favicon.ico' }
  },
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
