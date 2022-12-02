import React from 'react';
import { Forehead } from './forehead/forehead';
import { Footer } from './footer/footer';
import styles from './layout.module.css';

export const Layout = ({children}) => {
  return (
    <div className={styles['layout-wrapper']}>
        <Forehead />
        <main className={styles['layout-main']}>{children}</main>
        <Footer />
    </div>
  )
}
