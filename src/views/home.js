/** @format */

import { replaceHTML } from '../utils/utils.js';
import addEvents from '../events/homeEvents.js';

const getHTMLTemplate = () => {
  const template = //html
    ` <div id='home'>
    <div>
    <img id='logo' src='icons/logo.png'>
    </div>
  <h1 class='tittleHome'>Conecta con PetsLifes</h1>
  <button class='thinButton' id="signIn">Iniciar sesión</button>
  <section id='sectionHome'>
  <h2 class='tittleHome'>¿No tienes cuenta?</h2>
  <button class='thinButton' id="googleButton">Inicia con Google</button>
  <button class='thinButton' id="mailButton">Registrate con tu E-mail</button>
  </section>
  </div>`;
  return template;
};

const Home = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvents();
};

export default Home;
