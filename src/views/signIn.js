/** @format */
import { replaceHTML } from '../utils/utils.js';
import { addEvents } from '../events/sigInEvents.js';

const getHTMLTemplate = () => {
  const template = /*html*/
    `<div id="containerSignIn">
  <img id='back' src='icons/volver.png' alt="MDN">
  <h3>Email:</h3>
  <input id= 'email' type="email" placeholder="Ingresa tu email">
  <h3>Contraseña:</h3>
  <input id='password' type="password" placeholder="contraseña">
</div>
<button id='send'>Iniciar</button>
<img id='logoSingIn' src='icons/kitty.png'> </img>`;
  return template;
};
const SignIn = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvents();
};
export default SignIn;
