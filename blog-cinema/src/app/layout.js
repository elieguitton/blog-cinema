import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Indie Next Door',
  description: 'Explorez le monde captivant du cinéma indépendant, découvrez des critiques de films queers et LGBT. Indie Next Door vous ouvre la porte sur des histoires cinématographiques uniques et inclusives.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <div className='wrapper'> 
            <Navbar />
            {children} 
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
