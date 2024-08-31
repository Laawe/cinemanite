import React from 'react';
import styles from "./Details.module.css";
import { Arvo } from "next/font/google";

const arvo = Arvo({ subsets: ['latin'], weight: "400", style: "normal" })

export const Details = () => {
  return (
    <section className={`${styles['home-details']} ${arvo.className}`}>
        <div className={styles['home-details-card']}>
            <video autoPlay muted loop className={styles['home-details-video']} playsInline>
                <source src='/webpage1.mp4' type='video/mp4'/>
            </video>
        </div>
    </section>
  )
}
