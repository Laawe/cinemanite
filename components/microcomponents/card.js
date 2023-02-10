import React from 'react';
import Link from 'next/link';
import styles from './card.module.css';

export const Card = () => {
  return (
    <section className={styles['card-wrapper']}>
      <div className={styles['card-card']}>
        <div className={styles['card-content']}>
          <h2 className={styles['card-title']}>Video memoria de eventos</h2>
          <p className={styles['card-text']}>Trabajamos en la expansión de tu idea a través de un proyecto/memoria audiovisual</p>
          <Link href={'https://www.youtube.com/@cinemanite/videos'}>Mira nuestro trabajo previo.</Link>
        </div>
      </div>
    </section>
  )
}
