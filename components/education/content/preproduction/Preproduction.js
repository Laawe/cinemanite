import React, { useState } from 'react';
import Image from 'next/image'
import styles from "./Preproduction.module.css";

const Preproduction = () => {
  const [explainTitle, setExplainTitle] = useState(false);
  const [explainHeaders, setExplainHeaders] = useState(false);
  const [explainActionScene, setExplainActionScene] = useState(false);

  const handleUpdateExplainTitle = () => {
    setExplainTitle(!explainTitle);
  }

  const handleUpdateSetExplainHeaders = () => {
    setExplainHeaders(!explainHeaders);
  }

  const handleUpdateExplainActionScene = () => {
    setExplainActionScene(!explainActionScene);
  }

  return (
    <div className={styles["preproduction"]}>
      <h2>Preproducción</h2>
      <section>
        <p>Cuando pensamos en un proyecto audiovisual por cultura popular siempre nos imaginamos en un set; con cámaras, luces, etcétera.
          Sin embargo, los proyectos no inician ahí. Previo a la producción, necesitamos las bases de lo que será nuestro proyecto y del cómo se debe llevar a cabo. A este proceso se le conoce como "Preproducción". <br />
          Una de las primeras etapas y de suma importancia es el guión.
        </p>
      </section>
      <br />
      <section>
        <h3>➤ Guión</h3>
        <p>Una vez que se cuenta con la idea a realizar entonces podemos comenzar con un guión, es decir, la creación de la historia por escenas detalladas.<br />
          Este es un formato sencillo que no es descargable pero ya que es de suma importancia, mencionaremos las partes críticas del mismo.
        </p>
        <br />
        <section className={styles["pre-script-example-section"]}>
          <div className={styles["pre-script-example-wrapper"]}>
            <div className={styles["pre-script-example-title"]}>
              <div>
                <h4>Acto 1</h4>
                <button onClick={handleUpdateExplainTitle} className={styles["tooltip-trigger"]}>click!</button>
              </div>
              {explainTitle && <p className={styles["pre-script-example-title-description-p"]}>El guión es separado por escenas.</p>}
            </div>
            <div className={styles["pre-script-example-scene-description"]}>
              <div>
                <h4>INT. SALÓN - NOCHE.</h4>
                <button onClick={handleUpdateSetExplainHeaders} className={styles["tooltip-trigger"]}>click!</button>
              </div>
              {explainHeaders && <ul className={styles["pre-script-example-scene-description-list"]}>
                <li>INT/EXT: Interior o Exterior, esta parte describe si la escena se lleva a cabo dentro o fuera de algún lugar.</li>
                <li>SALÓN: Como segundo parámetro del inicio de la escena se debe conocer el tipo de lugar donde se realiza la acción, en este caso es dentro de un inmueble tipo salón.</li>
                <li>NOCHE: Día/Noche, se debe describir si la escena toma lugar durante el día o la noche. Esta dirección podrá ayudar en su momento a contemplar cierto tipo de iluminación.</li>
              </ul>}
            </div>
            <div className={styles["pre-script-example-scene-actions"]}>
              <div>
                <h4 className={`${styles["flex-base"]} ${styles["flex-base-big"]}`}>Vemos a L4 sentadas en unas sillas. De izquierda a derecha están; María, Adriana, Ana y Lucía. Están visitando a una vidente.</h4>
                <button onClick={handleUpdateExplainActionScene} className={`${styles["tooltip-trigger"]} ${styles["flex-base"]}`}>click!</button>
              </div>
              {explainActionScene && <p className={styles["pre-script-example-scene-description-actions-p"]}>Recuerda que este guión no es técnico, lo importante es describir el lugar, espacio y temporalidad, así como los elementos que conforman la escena.</p>}
            </div>
          </div>
        </section>
      </section>
      <br />
      <section>
        <h3>➤ Shooting List o lista de tomas</h3>
        <p>Como se mencionó anteriormente en esta guía no se encuentran listados <strong>todos</strong> los formatos utilizados tradicionalmente si no aquellos con los que trabajamos para realizar nuestra serie web. <br /> Y la lista de tomas o el shooting list es uno de los formatos esenciales. Es en este formato que de manera técnica se agregan las tomas de las escenas así como su descripción.</p>
        <br />
        <section className={styles["pre-shooting-list-example-section"]}>
          <div className={styles["pre-shooting-list-example-wrapper"]}>
          <h4>Ejemplo del formato que puedes descargar.</h4>
            <Image
              src="/pre-shootinglist-1.png"
              width={400}
              height={300}
              alt="Shooting list example" />
              <br />
            <Image
              src="/pre-shootinglist-2.png"
              width={400}
              height={300}
              alt="Shooting list example" />
          <br />
          <section className={styles["pre-shooting-list-example-buttons-actions"]}>
            <button className={styles["pre-shooting-list-example-button-example"]}>Descarga el ejemplo real de la serie web</button>
            <button className={styles["pre-shooting-list-example-button-format"]}>Descarga el formato para que realices tu producción</button>
          </section>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Preproduction;
