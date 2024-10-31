import React, { useState } from 'react';
import styles from "./Preproduction.module.css";
import { handleDownloadFormat } from 'handlers/handleDownloadFormat';

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
        <p>Como se mencionó anteriormente en esta guía no se encuentran listados <strong>todos</strong> los formatos utilizados tradicionalmente si no aquellos con los que trabajamos para realizar nuestra serie web. <br />
          Y la lista de tomas o el shooting list es uno de los formatos esenciales ya que
          cada escena puede ser formada por una o varias tomas.
          <br /> Es en este formato donde se debe agregar la información detallada de las mismas,
          por ejemplo, aquí se desglosa información acerca del tipo de cámara a utilizar, el tipo de toma (close up, medio, full) y el movimiento de la cámara.
        </p>
        <br />
        <section className={styles["pre-shooting-list-example-section"]}>
          <div className={styles["pre-shooting-example-wrapper"]}>
            <h4>Ejemplo del formato que puedes descargar.</h4>
            <br />
            <video autoPlay muted loop playsInline>
              <source src='/pre-shootinglist.mp4' type='video/mp4' />
            </video>
            <br />
            <section className={styles["pre-shooting-example-buttons-actions"]}>
              <button onClick={() => { handleDownloadFormat(1) }} className="button-format">Descarga el formato para desglosar la información de tu producción.</button>
            </section>
            <br />
          </div>
        </section>
      </section>
      <br />
      <section>
        <h3>➤ Shooting Plan o plan de rodaje</h3>
        <p>De todos los formatos este es el que probablemente menos se parezca a lo que se conoce en general como plan de rodaje, sin embargo posee muchas características de un formato tradicional con pequeños ajustes que funcionaron a la perfección para realizar la producción de Las Cuatro.
          <br />
          Uno de los ajustes a destacar son los colores utilizados para las secciones. En el formato que puedes descargar se sugieren utilizar los mismos pero finalmente puedes utilizar los colores tradicionales o bien aquellos que te sean convenientes 😊. <br />
          Conozcamos las secciones que conforman nuestro formato de plan de rodaje:
        </p>
        <div className={styles["pre-shooting-example-wrapper"]}>
          <h4>Ejemplo del formato que puedes descargar.</h4>
          <br />
          <video autoPlay muted loop playsInline>
            <source src="/pre-planrodaje.mp4" type="video/mp4" />
          </video>
        </div>
        <br />
        <section className={styles["pre-shooting-plan-example-section"]}>
          <div className={styles["pre-shooting-plan-example-wrapper"]}>
            <section>
              <h4>- Tiempo/Horario</h4>
              <br />
              <p>Independientemente del tamaño de una producción, la importancia de la delimitación del tiempo de cada evento hará la diferencia para poder lograr una producción que pueda avanzar con resultados a lo largo de los días. Procura delimitar el tiempo para catering o comida en general, así como para la preparación de las escenas y finalmente el tiempo máximo de cada toma.
                Ahora bien, también es importante que se señalen los horarios de cada una de las acciones a tomar, esto evitará que la producción de un día se extienda por horas. <br /> Como recordarás, mucha de esta información se encuentra en el shooting list. En el formato descargable encontrarás las siguientes columnas en donde se coloca la información anteriormente descrita;</p>
              <ul className={styles["pre-shooting-plan-ul"]}>
                <li>Hora</li>
                <li>Tiempo total (min/hrs)</li>
                <li>Tiempo prep (o tiempo de preparación de toma)</li>
                <li>Tiempo rodaje (o tiempo total de grabación)</li>
              </ul>
            </section>
            <br />
            <section>
              <h4>- Escena/Emplazamiento</h4>
              <br />
              <p>De los resultados del ejercicio de realizar el <strong>shooting list</strong>, obtenemos del formato las columnas "Escena" y "Emplazamiento", es decir, el número o nombre de la escena y el número (o nombre) de la toma.
                Estos datos se vacían en este formato en el orden en el que deben ser grabados.
              </p>
            </section>
            <br />
            <section>
              <h4>- Creación de escena</h4>
              <br />
              <p className={styles["pre-shooting-plan-example-camera-description"]}>Otra sección importante son todos los detalles referentes a la creación de la escena; el plano a usar, el movimiento de la cámara y si será una escena de interior o exterior. Nuevamente tomamos esta información del formato <strong>shooting list</strong>.
              </p>
              <br />
              <h4>Información adicional:</h4>
              <ul className={styles["pre-shooting-plan-ul"]}>
                <li>Planos: La respuesta más sencilla para explicar ¿Qué es un plano? Sería; ¿Qué tanto queremos que se vea en nuestra escena? Podemos ir desde abarcar la pantalla viendo un pequeño objeto hasta ver un espacio sumamente amplio.</li>
                <li>Movimiento de cámara: ¿Se necesita que la cámara se mueva o no? Y en su caso, ¿Hacia dónde o quién se dirige?, ¿A qué velocidad? Son algunas preguntas que se pueden hacer para conocer el tipo de movimiento, dependerá de la escena.</li>
              </ul>
            </section>
            <br />
            <section>
              <h4>- Crew-Equipo</h4>
              <br />
              <p className={styles["pre-shooting-plan-example-crew-description"]}>
                Ahora que sabemos en que horario estaremos trabajando así como la escena a realizar, debemos contemplar a las personas que estarán colaborando en la creación de esa escena.
                No queremos que todo el equipo esté presente si no es necesario puesto que eso resulta desgastante, por eso añadimos las columnas de "Crew ID" y "Cast ID". Ya que cada miembro cuenta con un número
                identificador, en caso de que una producción lo desee basta con agregar los nombres de cada persona involucrada.
              </p>
            </section>
            <br />
            <section className={styles["pre-shooting-example-buttons-actions"]}>
              <button onClick={() => { handleDownloadFormat(2) }} className="button-format">Descarga el formato de plan de rodaje para organizar la producción.</button>
            </section>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Preproduction;
