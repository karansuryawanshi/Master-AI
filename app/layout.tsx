import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ModelProvider from '@/components/model-provider'
import { ToasterProvider } from '@/components/toaster-provider'
import { ChrispProvider } from '@/components/crisp-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Master',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <ChrispProvider></ChrispProvider>
      <body className={inter.className}>
        <ModelProvider/>
        <ToasterProvider></ToasterProvider>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}


