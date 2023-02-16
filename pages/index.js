import { Layout } from '../components/layout';
import { Card } from '../components/microcomponents/card';
import styles from '../styles/homepage.module.css';

const HomePage = () => {
    return (
        <Layout>
            <section className={styles['homepage-header']} role="Home section header">

                <section className={styles['homepage-header-text']}>
                    <h1 className={styles['homepage-title']}>Cine, audiovisual</h1>
                    <div className={styles['homepage-wrap-subtitle']}>
                        <span className={styles['homepage-subtitle']}>
                            Bienvenido a <em className={styles['homepage-sub-subtitle']}>Cinemanite</em>
                        </span>
                    </div>
                </section>
                <section className={styles['homepage-header-cards']}>
                    <Card 
                        imageUrl={'/service1.jpg'}
                        title="Video memoria de eventos"
                        text="Creamos un producto audiovisual para tus redes sociales, páginas web o simplemente para guardarlo y disfrutarlo en el futuro."
                        linkUrl={'https://www.youtube.com/@cinemanite/videos'}
                        linkLabel="Ve más"
                    />
                    <Card
                        imageUrl={'/service2.jpg'}
                        title="Producción"
                        text="Colaboramos en el diseño y creación de tu proyecto. Desde la preproducción, producción y postproducción del mismo."
                        linkUrl={'https://instagram.com/cinemanite'}
                        linkLabel="Contáctanos"
                    />
                </section>
            </section>
        </Layout>
    )
}

export default HomePage
