import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import cinemanite from '../../public/cinemanite.jpg';
import styles from './forehead.module.css'

export const Forehead = () => {
  return (
    <section className={styles['forehead-wrapper']}>
      <Link href="/" className={styles['forehead-home-link']}>
        <Image className={styles['forehead-home-link-image']} src={cinemanite} alt="home icon cinemanite" />
      </Link>
      <Link className={styles['forehead-manifiesto-link']} href="/manifiesto"><em className={styles['forehead-manifiesto-link--em']}>manifiesto</em></Link>
    </section>
  )
}
