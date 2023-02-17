import { Layout } from '../components/layout';
import styles from '../styles/manifiesto.module.css';

export const Manifiesto = () => {
    return (
        <Layout>
            <section className={styles['manifiesto-wrapper']}>
                <h3 className={styles['manifiesto-title']}>Cinemanite es una productora audiovisual.</h3>
                <p className={styles['manifiesto-first-p']}>A simple vista sólo es eso, pero en el fondo son muchos proyectos en potencia.</p>
                <p className={styles['manifiesto-second-p']}>
                    Buscamos ser un medio para la creación audiovisual y cine, entendiendo todo tipo de formatos y géneros, sobre todo, una productora para todos aquellos que no tienen experiencia pero sí amor por el cine, no tienen una gran cantidad de recursos pero sí ganas de contar una historia.
                    Aquellos jóvenes o no tanto que quieran hacer cine, con nosotros pueden contar.
                </p>
            </section>
        </Layout>
    )
}

export default Manifiesto
