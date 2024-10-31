import React from 'react';
import styles from "./Production.module.css";
import { handleDownloadFormat } from 'handlers/handleDownloadFormat';

const Production = () => {
  return (
    <div className={styles["production"]}>
      <h2>Producción</h2>
      <p>El proceso de preproducción es laborioso, sin embargo, una vez llegado el momento de la producción al tener conocimiento sobre cada detalle, ésta nueva etapa será mucho más sencilla.</p>
      <p>Durante la producción el desafío se encuentra en tener una buena comunicación entre todos los miembros del equipo y respetar en medida de lo posible los planes planteados en preproducción.</p>
        <p>
         En esta sección sólo se encuentra un formato a descargar; el script. En el cuál se plantea qué tomas son las mejores a utilizar en postproducción.
        </p>
        <p><strong> Recordar que esta guía no es definitiva, más bien, un primer alcance para llevar a cabo una producción.</strong></p>
      <br />
      <section>
        <h3>➤ Antes de comenzar...</h3>
        <p>El momento de realizar la producción es muy emocionante pero como se ha dicho, el que sea una buena experiencia depende de entre otros factores, el tener buena comunicación; Esto implica que lo previamente pactado en la preproducción sea de conocimiento de <strong>todos en el equipo.</strong></p>
      </section>
      <br />
      <section>
        <h3>➤ Script</h3>
        <p>Es gracias a este formato que durante la producción podemos anotar los datos de cada una de las escenas (incluidas sus tomas)</p>
        <h4 className={styles["prod-script-how"]}>Ventajas del formato</h4>
        <ul className={styles["prod-script-how-ul"]}>
          <li>Durante la producción, en caso de repetir la grabación de la toma, en este formato podemos anotar los detalles de continuidad, es decir, para volver a grabar la escena debemos dejar todo como estaba al iniciar.</li>
          <li>Justamente porque no siempre es posible que una escena sea completada en una sola toma, en este caso también el formato es de utilidad pues al anotar cada toma y sus detalles, luego en la etapa de postproducción sabremos con facilidad cuáles son las mejores tomas.</li>
        </ul>
        <p><strong>Ya que este formato tiene demasiada importancia, lo ideal es que una persona se encargue del mismo durante la producción.</strong></p>
        <br />
        <section className={styles["prod-visual-wrapper"]}>
          <h4>Ejemplo del formato que puedes descargar.</h4>
          <br />
          <video autoPlay muted loop playsInline>
            <source src="/prod-script.mp4" type="video/mp4" />
          </video>
          <br />
          <div>
            <button onClick={() => {handleDownloadFormat(3)}} className="button-format">Accede al formato del script descargándolo.</button>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Production;
