import { Details } from '../components/details/details';
import { Layout } from '../components/layout';
import styles from '../styles/homepage.module.css';
import manifiestoStyles from '../styles/manifiesto.module.css';

const HomePage = () => {
    return (
        <Layout>
            <section className={styles['homepage-header']} role="Home section header">
                <section className={styles['homepage-header-text']}>
                    {/* <h1 className={styles['homepage-title']}>Cine, audiovisual</h1> */}
                    <div className={styles['homepage-wrap-subtitle']}>
                        <span className={styles['homepage-subtitle']}>
                            En <em className={styles['homepage-sub-subtitle']}>Cinemanite</em>
                        </span>
                    </div>
                </section>
                <section className={manifiestoStyles['manifiesto-wrapper']}>
                    <p className={manifiestoStyles['manifiesto-second-p']}>
                        Hemos sido afortunados de experimentar la práctica de la producción audiovisual, ahora queremos compartir ese conocimiento para que tú puedas realizar tu propia producción.
                    </p>
                </section>
            </section>
            <Details />
        </Layout>
    )
}

export default HomePage
