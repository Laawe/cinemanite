import { Details } from '../components/details/Details';
import { Education } from '../components/education/Education';
import { Layout } from '../components/Layout';
import styles from './homepage.module.css';
import manifiestoStyles from './manifiesto.module.css';

const HomePage = () => {
    return (
        <Layout>
            <section className={styles['homepage-header']} role="Home section header">
                <section className={styles['homepage-header-text']}>
                    <div className={styles['homepage-wrap-subtitle']}>
                        <span className={styles['homepage-subtitle']}>
                            <em className={styles['homepage-sub-subtitle']}>Cinemanite</em>
                        </span>
                    </div>
                </section>
                <section className={manifiestoStyles['manifiesto-wrapper']}>
                </section>
            </section>
            <Details />
            <Education />
        </Layout>
    )
}

export default HomePage
