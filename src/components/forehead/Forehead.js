import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import cinemanite from '../../public/cinemanite.jpg';
import styles from './Forehead.module.css'

export const Forehead = () => {
  return (
    <section className={styles['forehead-wrapper']}>
      <Link href="/" className={styles['forehead-home-link']}>
        <div className={styles['forehead-home-link-circle']}>
          <Image className={styles['forehead-home-link-image']} src={cinemanite} alt="home icon cinemanite" />
        </div>
      </Link>
    </section>
  )
}
