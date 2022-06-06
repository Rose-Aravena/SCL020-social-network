/** @format */
import { replaceHTML } from '../utils/utils.js';
import { addEvents } from '../events/sigInEvents.js';

const getHTMLTemplate = () => {
  const template = `<div id="containerSignIn">
  <h3>Email:</h3>
  <input id= 'email' type="email" placeholder="ingrsa tu email">
  <h3>Contraseña:</h3>
  <input id='password' type="password" placeholder="contraseña">
</div>
<button id='send'>Iniciar</button>
<img id='logoSingIn' src='imagenes/kitty.png'> </img>`;
  return template;
};
const SignIn = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvents();
};
export default SignIn;
