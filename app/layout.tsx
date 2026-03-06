import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cityborr i Umeå AB - Betonghåltagning, sågning & rivning',
  description: 'Din specialist på betonghåltagning, sågning, rivning & sanering i Umeå. Professionella demoleringstjänster för stora byggföretag.',
  keywords: 'betonghåltagning, betongrivning, rivning, sanering, Umeå, Cityborr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}
