import React from 'react';
import { Footer } from './footer/Footer';
import styles from './Layout.module.css';

export const Layout = ({children}) => {
  return (
    <div className={styles['layout-wrapper']}>
        {/* <Forehead /> */}
        <main className={styles['layout-main']}>{children}</main>
        <Footer />
    </div>
  )
}
