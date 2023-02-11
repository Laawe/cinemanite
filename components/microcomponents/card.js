import React from 'react';
import Link from 'next/link';
import styles from './card.module.css';

export const Card = ({imageUrl, title, text, linkUrl, linkLabel}) => {
  return (
    <section className={styles['card-wrapper']}>
      <div className={styles['card-card']} style={{backgroundImage: `url(${imageUrl})`}} >
        <div className={styles['card-content']}>
          <h2 className={styles['card-title']}>{title}</h2>
          <p className={styles['card-text']}>{text}</p>
          <Link className={styles['card-link']} href={linkUrl}>{linkLabel}</Link>
        </div>
      </div>
    </section>
  )
}
