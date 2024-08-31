import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google';
import '../styles.css';

import { Comfortaa } from "next/font/google";
const font = Comfortaa({ subsets: ['latin'], weight: "400", style: "normal" })

export default function App({ Component, pageProps }) {
    return (
        <main className={font.className}>
            <Head>
                <title>Cinemanite - cine y producción audiovisual</title>
                <meta name='description' content='Página web de Cinemanite'/>
                <link rel='icon' href='./cinemanite.jpg'/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
            <GoogleAnalytics gaId="G-77Y8331ZMW" />
        </main>


    )
}