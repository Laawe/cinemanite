import Head from 'next/head'
import '../styles.css';

import { Comfortaa } from '@next/font/google';
const font = Comfortaa({ subsets: ['latin'], weight: "400", style: "normal" })

export default function App({ Component, pageProps }) {
    return (
        <main className={font.className}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <Component {...pageProps} />
        </main>


    )
}