/** @format */

import { replaceHTML } from '../utils/utils.js';
import addEvents from '../events/homeEvents.js';

const getHTMLTemplate = () => {
  const template = //html
    ` <div id='home'>
    <img id='logo' src='icons/logo.png'> </img>
  <h1>Conecta con PetsLifes</h1>
  <button id="signIn">Iniciar sesión</button>
  <h2>¿No tienes cuenta?</h2>
  <button id="googleButton">Inicia con Google</button>
  <button id="mailButton">Registrate con tu mail</button>
  </div>`;
  return template;
};

const Home = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvents();
};

export default Home;
