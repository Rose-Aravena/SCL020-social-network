/** @format */
import { replaceHTML } from '../utils/utils.js';

const getHTMLTemplate = () => {
  return `<h1>Crear cuenta</h1>
  <input type="text" id="email" />
  <input type="text" name="" id="password" />
  <button id="send">enviar</button>`;
};
const CreatUser = () => {
  replaceHTML(getHTMLTemplate());
};
export default CreatUser;
