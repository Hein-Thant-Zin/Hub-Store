import { Outfit } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/nav-bar'
import Footer from '@/components/footer'

const font = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Hub Store',
  description: 'Clothing Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
       <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
