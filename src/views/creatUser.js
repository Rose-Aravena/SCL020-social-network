/** @format */
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../router/routes.js';
import { replaceHTML } from '../utils/utils.js';

const getHTMLTemplate = () => `<div id="containerCreatUser">
  <input type="text" placeholder="Nombre de usuario">
  <input type="email" placeholder="ingrsa tu email">
  <input type="password" placeholder="contraseña">
</div>
<button id='CreatSend'>Registrar</button>
<img id='logoreatUser' src='imagenes/veterinary.png'> </img>`;

const addEvents = () => {
  const send = document.getElementById('CreatSend');
  send.addEventListener('click', () => {
    onNavigate('/post');
  });
};
const CreatUser = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvents();
};
export default CreatUser;
