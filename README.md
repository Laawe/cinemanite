# cinemanite

### ¿De dónde surge la necesidad de cambiar o regenerar esta web?

La primer versión de la página funcionaba como una simple landing page que redirigía a las redes sociales de la productora audiovisual Cinemanite.

Este proyecto, justamente ha crecido con la aspiración de transmitir el conocimiento adquirido a través de los años y es por esto que la versión 2 de esta web se transforma ahora en una guía (_no definitiva_) que busca orientar a aquellos que es de su interés realizar una producción audiovisual pero no tienen claro por dónde comenzar.

### ¿Cómo puede ser utilizada?
La página web no contiene rutas anidadas, sólo información que puede ser desplegada al dar click a los botones referentes a cada etapa de una producción audiovisual; *preproducción*, *producción*, *postproducción*.

Dentro de cada sección o etapa, el usuario puede encontrar información básica pero esencial sobre qué hacer, de igual forma **puede descargar archivos para llevar a cabo su propia producción de manera gratuita**.

### ¿Cómo fue hecha?
Desde la primer versión se utilizó el framework de React JS;  *Next.js* ya que me interesaba conocer más a profundidad esta herramienta.

Como todo, utilizar Next implicó tanto pros como contras:

| Pros | Contras |
| ------------- |:-------------:|
| Components nativos, como el <Image / > o <Link / > ya que son optimizados y sólo es necesario importarlos   | Curva de aprendizaje (tanto Pages Router como App Router) alta |
| Integración con Google Analytics sumamente sencilla a través de @next/third-parties    | Realmente es un framework caro a nivel peso para una web que no contiene muchas rutas o funcionalidades que dependan de servicios para sacar provecho de SSR (Server Side Rendering) |


Para CSS, opté por CSS Modules, ya que quería reforzar CSS puro y sus nuevas funcionalidades y al mismo tiempo evitar que alguna clase pudiera impactar con la de otro módulo.
