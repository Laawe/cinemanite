import React, { useRef } from 'react';
import Link from 'next/link';
import styles from './Education.module.css';
import { EducationLayout } from './educationLayout/EducationLayout';
import Preproduction from './content/preproduction/Preproduction';
import Production from './content/production/Production';
import Postproduction from './content/postproduction/Postproduction';

export const Education = () => {
    const educationTitleRef = useRef();
    return (
        <section className={styles['education-wrapper']}>
            <div className={styles['education-title-wrapper']}>
                <h2 ref={educationTitleRef} className={styles['education-process']}>El proceso audiovisual</h2>
                <p className={styles['education-paragraph']}>
                    A manera de ejercicio para recordar lo que se vivió al realizar la producción de <Link rel="noopener noreferrer" target="_blank" className={styles["education-paragraph-link"]} href={"https://youtu.be/TKBAg116UaQ?si=N0WaJcIHOH3n5M9T"}>Las Cuatro</Link> se escriben las siguientes secciones que te proveerán de los formatos utilizados durante las distintas etapas de nuestro proyecto, así como algunos tips.
                     De igual forma podrás descargar de manera gratuita estos formatos para que realices tu propio proyecto.
                </p>
                <br />
                <p className={styles['education-paragraph']}><strong>Esta guía no es definitiva, ya que existen formatos utilizados por producciones tradicionales que no serán mencionados.</strong></p>
            </div>
            <EducationLayout sectionName={"Preproducción"}>
                <Preproduction />
            </EducationLayout>
            <EducationLayout sectionName={"Producción"}>
                <Production />
            </EducationLayout>
            <EducationLayout sectionName={"Postproducción"}>
                <Postproduction />
            </EducationLayout>
        </section>
    )
}
