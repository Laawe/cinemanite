import React from 'react';
import Image from 'next/image';
import styles from "./Postproduction.module.css";
import Link from 'next/link';

const Postproduction = () => {
  return (
    <div className={styles["postproduction"]}>
      <h2>Postproducción</h2>
      <p>Una vez terminado el proceso de producción, podemos avanzar a una etapa que convencionalmente puede abarcar muchas actividades como; edición, color grading, entre otras. En esta guía nos enfocaremos en lo más básico que es la edición del proyecto.</p>
      <br />
      <section className={styles["post-editing-wrapper"]}>
        <h3>➤ Utilizar formato script.</h3>
        <p>Idealmente tenemos orden en los archivos de audio y video que vamos a utilizar para darle vida al proyecto en la edición. Aún si hubiera un problema al respecto, es en este momento donde recurrimos al formato de script para ayudarnos a generar este ordenamiento.</p>
        <div className={styles["post-editing-diagram-wrapper"]}>
          <h4>Diagrama general de uso de script.</h4>
          <Image
          className={styles["post-editing-diagram-img"]}
            src="/postproduction-way-of-work.jpg"
            alt="Editing and script way of work"
            width={500} height={500} />
        </div>
      </section>
      <section>
      <h3>➤ Edición</h3>
      <p>Una vez que tengamos nuestros archivos/clips ordenados, podemos continuar a la etapa de la edición formal del proyecto. <br/> Hoy en día existen muchos programas o software dedicados a la edición, sin embargo, una buena opción es utilizar el programa <strong>DaVinci Resolve</strong> ya que tiene una versión gratuita y de alta calidad, además de contar con distintos cursos que la misma empresa provee para aprovechar este software al máximo.</p>
      <br />
      <Link rel="noopener noreferrer" target="_blank" href={'https://www.blackmagicdesign.com/mx/products/davinciresolve/training'}>
        <p>Cursos proporcionado por DaVinci Resolve para edición.</p>
      </Link>
      </section>
      <br />
      <section>
      <h3>➤ Recapitulación</h3>
      <p>Si te has tomado el tiempo de leer hasta este punto; Gracias y felicidades. Con estos tips puedes arrancar tu producción y mejorar lo expuesto aquí. ¡Éxito!</p>
      </section>
    </div>
  )
}

export default Postproduction;
