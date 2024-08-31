import { BackToTop } from '../src/components/backToTop/BackToTop';
import { Details } from '../src/components/details/Details';
import { Education } from '../src/components/education/Education';
import { Layout } from '../src/components/Layout';
import styles from './homepage.module.css';
import manifiestoStyles from './manifiesto.module.css';

const HomePage = () => {
    return (
        <Layout>
            <section className={styles['homepage-header']}>
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
            <BackToTop />
        </Layout>
    )
}

export default HomePage
