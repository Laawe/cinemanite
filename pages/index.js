import { Layout } from "../components/layout";
import styles from '../styles/homepage.module.css';

const HomePage = () => {
    return (
        <Layout>
            <section className={styles['homepage-header']}>
                <h1
                    className={styles['homepage-title']}>Acción!</h1>
                    <p>Hagamos cine</p>
            </section>
        </Layout>
    )
}

export default HomePage
