import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Jewelry Store',
  description: 'MVP storefront powered by Next.js + NestJS',
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
