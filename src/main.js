
import { clickButtonNext, clickButtonPrevious, clickHuman, clickAlien, clickHumanoid, clickAnimal, clickMytholog, clickRobot, clickUnknown, clickCronenberg, clickPoopybutthole, clickDisease, clickPlanet } from './data.js';
// import data from './data/rickandmorty/rickandmorty.js';

document.querySelector('#human').addEventListener('click', clickHuman);

document.querySelector('#alien').addEventListener('click', clickAlien);

document.querySelector('#humanoid').addEventListener('click', clickHumanoid);

document.querySelector('#animal').addEventListener('click', clickAnimal);

document.querySelector('#mytholog').addEventListener('click', clickMytholog);

document.querySelector('#robot').addEventListener('click', clickRobot);

document.querySelector('#unknown').addEventListener('click', clickUnknown);

document.querySelector('#cronenberg').addEventListener('click', clickCronenberg);

document.querySelector('#poopybutthole').addEventListener('click', clickPoopybutthole);

document.querySelector('#disease').addEventListener('click', clickDisease);

document.querySelector('#planet').addEventListener('click', clickPlanet);

document.querySelector('#next').addEventListener('click', clickButtonNext);

document.querySelector('#previous').addEventListener('click', clickButtonPrevious);




