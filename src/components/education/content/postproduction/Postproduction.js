import React from 'react';
import Image from 'next/image';
import styles from "./Postproduction.module.css";

const Postproduction = () => {
  return (
    <div className={styles["postproduction"]}>
      <h2>Postproducción</h2>
      <p>Una vez terminado el proceso de producción, podemos avanzar a una etapa que convencionalmente puede abarcar muchas actividades como; edición, color grading, entre otras. En esta guía nos enfocaremos en lo más básico que es la edición del proyecto.</p>
      <br />
      <section className={styles["post-editing-wrapper"]}>
        <h3>➤ Edición</h3>
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
    </div>
  )
}

export default Postproduction;
