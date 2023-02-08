import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';
import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import youtube from "../../public/youtube.svg";
import mail from "../../public/mail.svg";

import { Arvo } from '@next/font/google'

const arvo = Arvo({ subsets: ['latin'], weight: "400", style: "normal" })


export const Footer = () => {
  return (
    <footer className={ ` ${styles['footer']} ${arvo.className}`}>
      <section className={styles['footer-rightsreserved']}>{`${new Date().getFullYear()} Lawe. Derechos Reservados.`}</section>
      <section className={styles['footer-rrss']}>
        <Link className={styles['footer-link']} href={'https://www.facebook.com/cinemanite'}>
          <Image src={facebook} className={styles['footer-link-img']} />
        </Link>
        <Link className={styles['footer-link']} href={'https://instagram.com/cinemanite'}>
          <Image src={instagram} className={styles['footer-link-img']} />
        </Link>
        <Link className={styles['footer-link']} href={'https://www.youtube.com/channel/UCCg1tSRvt_TX3ebHpPYfwkA'}>
          <Image src={youtube} className={styles['footer-link-img']} />
        </Link>
        <Link className={styles['footer-link']} href={'mailto:cinemanite@gmail.com'}>
          <Image src={mail} className={styles['footer-link-img']} />
        </Link>
      </section>
    </footer>
  )
}
