import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from "@/components/ui/sonner"
import './globals.css'

export const metadata: Metadata = {
  title: 'Vastex',
  description: 'Vastex',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  )
}
