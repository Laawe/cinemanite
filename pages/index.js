import { Layout } from '../components/layout';
import styles from '../styles/homepage.module.css';

const HomePage = () => {
    return (
        <Layout>
            <section className={styles['homepage-header']} role="Home section header">
                {/* <div className={styles['homepage-wrap-gif']} role="Gif wrapper">
                    <Image
                        className={styles['homepage-gif']}
                        src={cinemanite}
                        alt="cinemanite logo gif" />
                </div> */}
                <div className={styles['homepage-header-text']}>
                    <h1 className={styles['homepage-title']}>¡Acción!</h1>
                    <div className={styles['homepage-wrap-subtitle']}>
                        <span className={styles['homepage-subtitle']}>
                            Cine, audiovisual. Colaboramos en el diseño y creación de tu proyecto. Bienvenido a <em className={styles['homepage-sub-subtitle']}>Cinemanite</em>
                        </span>
                    </div>
                    <button className={styles['homepage-header-btn']}>Conoce más</button>
                </div>
            </section>
        </Layout>
    )
}

export default HomePage
