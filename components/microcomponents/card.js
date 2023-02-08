import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './card.module.css';
import service1 from '../../public/service1.jpg';

export const Card = () => {
  return (
    <section className={styles['card-wrapper']}>
        <Image src={service1} alt='offer service image' className={styles['card-image']}></Image>
        <div className={styles['card-label-wrapper']}>
          <h5>Video memoria de eventos</h5>
          <p>Apoyamos en la expansión de tu idea a través de un proyecto audiovisual</p>
          <button>
              <Link href={'https://www.youtube.com/@cinemanite/videos'}>Mira nuestro trabajo previo.</Link>
          </button>
        </div>
    </section>
  )
}
