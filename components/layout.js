import React from 'react';
import { Forehead } from './forehead/forehead';
import { Footer } from './footer/footer';

export const Layout = ({children}) => {
  return (
    <div>
        <Forehead />
        <main>{children}</main>
        <Footer />
    </div>
  )
}
