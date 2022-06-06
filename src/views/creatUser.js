/** @format */
// eslint-disable-next-line import/no-cycle
import { addEvents } from '../events/creatUserEvents.js';
import { replaceHTML } from '../utils/utils.js';

const getHTMLTemplate = () => `<div id="containerCreatUser">
  <input id='userName' type="text" placeholder="Nombre de usuario">
  <input id='email' type="email" placeholder="ingrsa tu email">
  <input id='password' type="password" placeholder="contraseña">
</div>
<button id='creatSend'>Registrar</button>
<img id='logoreatUser' src='imagenes/veterinary.png'> </img>`;

const CreatUser = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvents();
};
export default CreatUser;
