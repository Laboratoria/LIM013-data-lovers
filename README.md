# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

**League of Legends** es uno de los videojuegos MOBA _(multijugador de arena de batalla en línea)_ más populares en todo el mundo, llegando a considerarse un e-sport de excelencia con competencias a nivel mundial, donde los mejores equipos de cada continente batallan por conseguir el cuantioso premio de hasta 1.7 millones de dólares.

Pese a su gran fama y accesibilidad, aún hay mucha gente que no se atreve a probar el juego por diversos factores, entre ellos el bombardeo de información no ordenada que confunde a los usuarios y finalmente desisten en jugar.


## 2. Resumen del proyecto

Este proyecto consiste en construir una página web que permita al usuario obtener información breve pero detallada sobre el juego League of Legends, así como filtrar, ordenar y ver los cálculos más importantes de los personajes (llamados **“Campeones”**) para que el usuario tenga mayor facilidad al momento de escoger a su campeón.

Inicialmente se entrevistó a 5 jugadores con experiencia en LoL para recibir inputs y tomarlos en cuenta en la interfaz. También se encuestó a usuarios sin experiencia en Lol para conocer qué tipo de información valorarían más, ya que ellos son el público objetivo. 

Conforme se avanzó con el prototipo, se fue testeando con otros usuarios, midiendo su experiencia, hasta conseguir un diseño ideal. 

En la elaboración del producto se utilizó el lenguaje Javascript, HTML y CSS. El resultado es una web informativa, dinámica, directa y responsive para mobile y desktop.

La data se extrajo desde:

* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de campeones en una liga del
  juego League of Legends (LoL).
  - [Investigación con jugadores de LoL](src/data/lol/README.md)


## 3.	Desarrollo del Proyecto 

### 3.1. ¿Cómo empezamos?

#### ENTREVISTAS

Se hicieron entrevistas personales vía telefónica a 5 usuarios con experiencia en LOL.

##### Objetivo de la entrevista
Conocer qué tipo de información es necesaria para jugar LOL.

##### Introducción
Hola, _entrevistado_, esta entrevista es para conocer sobre tu experiencia con el juego League of Legends. 
Nada de lo que digas está bien o mal, ni vamos a juzgarte por eso. Si en algún momento decides que no quieres continuar con la entrevista, puedes manifestarlo, no hay ningún problema.

##### Información de los usuarios
* Nombre
* Edad
* Condición: estudiante, trabajador, etc.
* Distrito en que vive

##### Preguntas 

LOL Roundabout

1.	¿Qué tan seguido juegas  LOL?
2.	¿Desde qué dispositivo juegas LOL?
3.	¿Conoces alguna página web o aplicación informativa de LOL que te haya ayudado a jugar?
4.	¿Qué te gusta y/o disgusta de esta página web o aplicación?

Playing LOL Roundabout I: Beginning

5.	¿Qué te hubiera gustado saber de LOL para entender mucho mejor el juego?

Playing LOL Roundabout II: Starting

6.	¿Cuáles son los criterios que tomas para elegir a tu campeón?
7.	 De todo lo que hemos conversado, ¿hay algo que te gustaría conocer o añadir en una página web sobre LOL?

##### Resultados de las entrevistas:
•	A los jugadores de Lol les interesa saber de manera general en qué consiste cada rol, ya que de acuerdo a esto escogen las zonas y los personajes.
•	Los jugadores de Lol necesitan saber qué campeones aplican a cada rol para armar estrategias en equipo.
•	Les fue difícil encontrar una buena plataforma web que les brinde información completa del juego.
•	Les gustaría tener mayor información sobre las competencias a nivel internacional.

#### ENCUESTAS



### 3.2. ¡Manos a la obra!

#### PROTOTIPO DE BAJA FIDELIDAD

Con las entrevistas y encuestas realizadas, pasamos a diseñar el prototipo de baja fidelidad:

![PrototipoBaja1](https://images/prototipo/1.jfif)
![PrototipoBaja2](https://images/prototipo/2.jfif)

Estos fueron los primeros diseños del **home** y la página **Campeones**. Se recibió el feedback de acortar los filtros, ya que causaban confusión y nos quedamos solo con los siguientes:

![PrototipoBaja3](https://images/prototipo/3.jfif)

Se tuvo la idea de añadir una ventana modal para mostrar las estadísticas por campeón seleccionado. 

![PrototipoBaja4](https://images/prototipo/4.jfif)

En el feedback se comentó que la idea era buena, pero les gustaría ver este detalle en una ventana aparte, por lo que se reemplazó la ventana **Novedades** por **Estadísticas**. También se pidió añadir un botón de **Jugar**:

![PrototipoBaja5](https://images/prototipo/5.jfif)

Con la nueva pestaña de Estadísticas, se pensó colocar información resumida de cada campeón en una tarjeta giratoria que permita ver la imagen en una cara y la información en otra:

![PrototipoBaja6](https://images/prototipo/6.jfif)

En la pestaña Estadística se pensó colocar íconos de cada rol y que al dar click aparezca una ventana modal con cálculos promedio por rol:

![PrototipoBaja7](https://images/prototipo/7.jfif)

También se aumentó información general del juego. Estas ideas fueron aceptadas en el feedback:

![PrototipoBaja8](https://images/prototipo/8.jfif)

#### PROTOTIPO DE ALTA FIDELIDAD

Trabajamos con la herramienta de diseño visual [Figma](https://www.figma.com/), siguiendo los fundamentos de **visual design** (balance, contraste, alineación y repetición para mantener el orden).

**PARA DESKTOP:**

![PrototipoAlta1](https://images/prototipo/PrototipoAlta1.PNG)
![PrototipoAlta2](https://images/prototipo/PrototipoAlta2.PNG)
![PrototipoAlta3](https://images/prototipo/PrototipoAlta3.PNG)
![PrototipoAlta4](https://images/prototipo/PrototipoAlta4.PNG)
![PrototipoAlta5](https://images/prototipo/PrototipoAlta5.PNG)
![PrototipoAlta6](https://images/prototipo/PrototipoAlta6.PNG)
![PrototipoAlta7](https://images/prototipo/PrototipoAlta7.PNG)
![PrototipoAlta8](https://images/prototipo/PrototipoAlta8.PNG)
![PrototipoAlta9](https://images/prototipo/PrototipoAlta9.PNG)
![PrototipoAlta10](https://images/prototipo/PrototipoAlta10.PNG)

**PARA MOBILE:**

![PrototipoAlta11](https://images/prototipo/PrototipoAlta11.PNG)
![PrototipoAlta12](https://images/prototipo/PrototipoAlta12.PNG)
![PrototipoAlta13](https://images/prototipo/PrototipoAlta13.PNG)
![PrototipoAlta14](https://images/prototipo/PrototipoAlta14.PNG)
![PrototipoAlta15](https://images/prototipo/PrototipoAlta15.PNG)
![PrototipoAlta16](https://images/prototipo/PrototipoAlta16.PNG)
![PrototipoAlta17](https://images/prototipo/PrototipoAlta17.PNG)
![PrototipoAlta18](https://images/prototipo/PrototipoAlta18.PNG)
![PrototipoAlta19](https://images/prototipo/PrototipoAlta19.PNG)
![PrototipoAlta20](https://images/prototipo/PrototipoAlta20.PNG)
![PrototipoAlta21](https://images/prototipo/PrototipoAlta21.PNG)
![PrototipoAlta22](https://images/prototipo/PrototipoAlta22.PNG)
![PrototipoAlta23](https://images/prototipo/PrototipoAlta23.PNG)

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
