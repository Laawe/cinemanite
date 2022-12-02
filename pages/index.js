import { Layout } from '../components/layout';
import styles from '../styles/homepage.module.css';
import manifiestoStyles from '../styles/manifiesto.module.css';

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
                <section className={manifiestoStyles['manifiesto-wrapper']}>
                    <p className={manifiestoStyles['manifiesto-second-p']}>
                        Buscamos ser un medio para la creación audiovisual y cine, entendiendo todo tipo de formatos y géneros, sobre todo, una productora para todos aquellos que no tienen experiencia pero sí amor por el cine, no tienen una gran cantidad de recursos pero sí ganas de contar una historia.
                        Aquellos jóvenes o no tanto que quieran hacer cine, con nosotros pueden contar.
                    </p>
                </section>
            </section>
        </Layout>
    )
}

export default HomePage
