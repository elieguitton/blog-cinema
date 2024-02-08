import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="Tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="Youtube" width={24} height={24} />

      </div>
      <div className={styles.logo}>Indie Next Door</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Accueil</Link>
        <Link href="/">Critiques</Link>
        <Link href="/">Articles</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
