/** @format */
import { replaceHTML } from '../utils/utils.js';
import { addEvents } from '../events/sigInEvents.js';

const getHTMLTemplate = () => {
  const template = // html
    `<div id='containerSignIn'>
    <div id='btnBackDog'>
  <img class='backIcon' id='back' src='icons/volver.png' alt="MDN">
  <p><strong>Volver</strong></p>
  </div>
  <div class='containerInputs'>
  <h1 class='title'>Inicia Sesión</h1>
  <h3 class='subTitle'>Email:</h3>
  <input id= 'email' placeholder="xxx@gmail.com" type="email" >
  <h3 class='subTitle'>Contraseña:</h3>
  <input id='password'  placeholder="******" type="password">
</div>
<section id='sectionSignIn'>
<button class='thinButton' id='send'>Iniciar</button>
<div class='logoSingIn'>
<img src='icons/kitty.png'>
</div>
</section>
<div>`;
  return template;
};
const SignIn = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvents();
};
export default SignIn;
