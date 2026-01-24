import type { Metadata } from 'next'
import { Geist, Geist_Mono, Sora, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from "@/components/ui/sonner"
import { Providers } from './providers'

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
})

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Developer Portfolio | Full-Stack & AI',
  description: 'Full-Stack Developer and AI Engineer portfolio showcasing projects and expertise, showcase articles on how AI, backend systems work.',
  metadataBase: new URL('https://sayedalishah.com'), // Helps with absolute URLs

  openGraph: {
    title: 'Sayed Ali Shah - Full-Stack & AI Developer',
    description: 'Personal portfolio showcasing full-stack, AI projects, experience and skills.',
    url: 'https://sayedalishah.com',
    siteName: 'Portfolio',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sayed Ali Shah Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image', 
    title: 'Portfolio',
    description: 'Full-Stack & AI Developer • Projects • Experience • Portfolio',
    images: ['/twitter-image.jpg'], 
  },

  icons: {
    icon:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M27,2H5c-1.654,0-3,1.346-3,3V27c0,1.654,1.346,3,3,3H27c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Zm1,25c0,.551-.448,1-1,1H5c-.552,0-1-.449-1-1V5c0-.551,.448-1,1-1H27c.552,0,1,.449,1,1V27ZM12.707,15.293c.391,.391,.391,1.023,0,1.414l-4,4c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l3.293-3.293-3.293-3.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l4,4Zm12.293,4.707c0,.552-.447,1-1,1H15c-.553,0-1-.448-1-1s.447-1,1-1h9c.553,0,1,.448,1,1Z"/></svg>',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`max-w-4xl font-body antialiased z-50 bg-background text-foreground justify-self-center-safe`}>
        <Providers>
          <Toaster/>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 relative">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>

        <Analytics />
      </body>
    </html>
  )
}
