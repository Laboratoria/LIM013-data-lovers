# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3'objetivos'de'aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

Pokemon Go hace uso de la aplicación realidad aumentada de los teléfonos móviles para mostrar a los Pokémon en nuestro mundo, utilizando para ello nuestra propia localización y funciones de GPS , como si de Google Maps se tratase.
La aplicación de por sí contiene todo lo necesario para llevar a cabo nuestra aventura, funcionando de esta forma como Pokédex, Mochila, Equipo, entre otros tantos escenarios típicos de los juegos clásicos, así como nuevos, tales como el rádar de localización de especies cercanas.
Asimismo, para poder hacer uso de la misma, será necesario salir a la calle, moviéndose por nuestra zona para encontrar o bien Pokémon salvajes que podremos capturar por un nuevo método, así como encontrar las Poképaradas, zonas especiales que nos darán objetos de todo tipo, incluso huevos.

## 2. Resumen del proyecto

En Data Lovers se desarrollo una pagina Web titulada PokeInfo basada en las necesidades que mostraron de forma porcentual nuestros usuarios encuestados.

### Definición del producto [UX Research]

El objetivo del proyecto es facilitar al usuario la ejecucion del filtrado de pokemones por tipo,ordenar los pokemones de forma ascendente,descendente y ordenar de forma numerica,asi mismo mostrar toda la variedad de pokemones que tenemos en la Data.
De esta forma tener una mejor interactividad entre los usuarios y nuestra aplicacion ya que nuestra aplicacion tambien es responsive design.

Antes de plantearnos una solución fue necesario hacer una investigación con usuarios mediante entrevistas y/o encuestas elaboradas con el objetivo de conocer sus preferencias.

[ ] [Investigación con usuarios / entrevistas.](https://docs.google.com/forms/d/18i1QWx7-gARlxvGW0XuStDgD-ANs4kPQA8Gr95P7Z5A/edit)

* [Definicion de Usuario]
Sexo: Varones - Mujeres 
Edad: Mayores de 20 años
Público objetivo: jugadores vigentes o ex jugadores, de diferente nivel, de Pokémon GO
Necesidad primaria: Qué y cuales son los mejores Pokemones para atrapar y ganar en  las batallas.
Necesidad secundaria: información adicional como datos y estadisticas de Pokémon GO

* ¿Quiénes son los principales usuarios de producto?
 - Jugadores Principiantes(los que recien esta empezando a jugar Pokémon)
 - Jugadores con experiencia (Los Maestros pokémon)
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
- Facilitarles la informacion(nombre,numero,tipos, entre otros), oportuna  del pokémon que solicitan.
- Obtener informacion relevante para escoger un pokémon mediante su PC, vital para saber que un pokémon es mas fuerte que otro pokémon.
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
Los Pokémon tienen características únicas que determinara las decisiones que toma el usuario a continuación sus datos:
- Orden de numeracion donde se hubica el pokémon.
- Nombre del pokémon.
- Tipo de especie al que pertenece el pokémon.
- stats: base de ataque,defensa, salud, max CP(combat points) y max HP (health points).
* ¿Cuándo utilizan o utilizarían el producto?
Cuando lo requiera y/o necesite el usuario la aplicacion se adapta tanto en escritorio como en movil.

### Historias de usuario

#### Historia 1:
Yo, como jugador profesional de Pokemon Go
quiero visualizar la lista completa de pokemon 
para conocer a cada pokemon de Pokemon Go

Criterios de Aceptación:
1. El usuario puede ingresar a la página Pokeinfo.
2. El usuario puede visualizar la lista de pokemon.
3. El usuario puede manipular la lista (filtro/orden).

Definición de término:
1. La interfaz tiene una tabla/lista de todos los pokemon Go.
2. La interfaz es responsive (mobile-desktop) utilizando flexbox.
3. El diseño de la interfaz cumple con la guía de estilos establecida.
4. El código tiene, y pasa, los test unitarios en Jest y Eslint.
5. El código se desarrolla con vanilla JS y no hace uso de this.
6. El código está en  GitHub y será desplegado usando GitHub Pages.

#### Historia 2:
Yo, como jugador profesional de Pokemon Go
quiero filtrar la lista de pokemon por tipo ("ice")
para elegir al mejor pokemon para cada batalla

Criterios de Aceptación:
1. El usuario puede visualizar los tipos de pokemon.
2. El usuario puede seleccionar el tipo de pokemon.
3. El usuario puede visualizar los pokemon por tipo.

Definición de término:
1. La interfaz tiene una lista despegable de los pokemon por tipo.
2. La interfaz es responsive (mobile-desktop) utilizando flexbox.
3. El diseño de la interfaz cumple con la guía de estilos establecida.
4. El código tiene, y pasa, los test unitarios en Jest y Eslint.
5. El código se desarrolla con vanilla JS y no hace uso de this.
6. El código está en  GitHub y será desplegado usando GitHub Pages.

#### Historia 3:
Yo, como jugador profesional de Pokemon Go
quiero ordenar la lista de pokemon (A-Z/(Z-A)
para encontrar el pokemon mucho más rápido

Criterios de Aceptación:
1. El usuario puede visualizar la opción de ver la lista alfabética.
2. El usuario puede seleccionar la opción de ver lista alfabética.
3. El usuario puede visualizar los pokemon en orden alfabético.

Definición de término:
1. La interfaz tiene una lista despegable de los pokemon por tipo.
2. La interfaz es responsive (mobile-desktop) utilizando flexbox.
3. El diseño de la interfaz cumple con la guía de estilos establecida.
4. El código tiene, y pasa, los test unitarios en Jest y Eslint.
5. El código se desarrolla con vanilla JS y no hace uso de this.
6. El código está en  GitHub y será desplegado usando GitHub Pages.

#### Historia 4:
Yo, como jugador profesional de Pokemon Go
quiero encontrar el pokemon por nombre ("abra")
para ubicar más rápido un pokemon en particular

Criterios de Aceptación:
1. El usuario puede visualizar la barra de búsqueda.
2. El usuario puede ingresar el nombre de pokemon.
3. El usuario puede visualizar el pokemon ingresado.

Definición de término:
1. La interfaz tiene una barra de búsqueda donde ingresar el nombre.
2. La interfaz es responsive (mobile-desktop) utilizando flexbox.
3. El diseño de la interfaz cumple con la guía de estilos establecida.
4. El código tiene, y pasa, los test unitarios en Jest y Eslint.
5. El código se desarrolla con vanilla JS y no hace uso de this.
6. El código está en  GitHub y será desplegado usando GitHub Pages.

#### Historia 5:
Yo, como jugador profesional de Pokemon Go
quiero calcular qué tan fuerte es un pokemon (PC)
para utilizar al pokemon más fuerte para la batalla

Criterios de Aceptación:
1. El usuario puede visualizar toda la lista de pokemon 
2. El usuario puede seleccionar un pokemon de interés
3. El usuario puede visualizar los PC de aquel pokemon 

Definición de término:
1. La interfaz tiene una tabla con los datos de puntos de combate.
2. La interfaz es responsive (mobile-desktop) utilizando flexbox.
3. El diseño de la interfaz cumple con la guía de estilos establecida
4. El código tiene, y pasa, los test unitarios en Jest y Eslint.
5. El código se desarrolla con vanilla JS y no hace uso de this.
6. El código está en  GitHub y será desplegado usando GitHub Pages.

### Diseño de la Interfaz de Usuario [UX Design]

#### Prototipo de baja fidelidad

Durante nuestro trabajo hemos hecho e iterado bocetos (_sketches_) de la
solución usando papel y lápiz. 

[ ] [Prototipo de baja fidelidad.](https://drive.google.com/file/d/1Q955IZuBogATv_gAyg0OFS0KIpr5swPD/view)

#### Prototipo de alta fidelidad

El siguiente paso ha sido diseñar la Interfaz de Usuario utilizando la herramienta 
de diseño visual Figma. El diseño representa el _ideal_ de la solución, siguiendo
los fundamentos de _visual design_.

[ ] [Prototipo de alta fidelidad-desktop.](https://www.figma.com/file/EmiFCoS4ulGkvGH0oVXlhz/LIM013-data-lovers(desktop))
[ ] [Prototipo de alta fidelidad-mobile.](https://www.figma.com/file/D0hcJcTRFtnejKg6PMAHOS/LIM013-data-lovers(mobile))

#### Testeos de usabilidad

Durante el proyecto hemos hecho _tests_ de usabilidad y hemos identificado los siguientes problemas 
de usabilidad y gracias al feedback recibido hemos podido mejorar nuestra propuesta final.

* [Fundamentos de diseño visual-color]
Usar una paleta de colores acorde a los colores e imagen del juego Pokemon Go.

* [Fundamentos de diseño visual-jerarquía]
Destacar la información más relevante al mostrar la tabla-lista de pokemon en la pantalla principal.


## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 4. Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo para completarlo: Toma como referencia 4 semanas.

## 5. Criterios de aceptación mínimos del proyecto

Los criterios para considerar que has completado este proyecto son:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Historias de usuario

Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarios.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

En la medida de lo posible, termina una historia de usuario antes de pasar
a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación).

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## 7. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#6-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |     ├── rickandmorty.js
|  |     └── rickandmorty.json
|  |     └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 6 file: 17
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

En este archivo encontrarás una serie de _imports_ _comentados_. Para _cargar_
las diferentes fuentes de datos tendrás que _descomentar_ la línea
correspondiente.

Por ejemplo, si "descomentamos" la siguiente línea:

```js
// import data from './data/pokemon/pokemon.js';
```

La línea quedaría así:

```js
import data from './data/pokemon/pokemon.js';
```

Y ahora tendríamos la variable `data` disponible en el script `src/main.js`.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Te recomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#6-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Contenido de referencia

#### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

#### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

## 9. Checklist

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.
