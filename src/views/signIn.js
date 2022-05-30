/** @format */

import { onNavigate } from '../router/routes.js';

import { replaceHTML } from '../utils/utils.js';

const getHTMLTemplate = () => {
  const template = `<h1>Inicio Sesión</h1>
  <button id="send" >enviar</button>
            `;
  return template;
};
const addEvents = () => {
  const send = document.getElementById('send');
  send.addEventListener('click', () => {
    alert('buenas buenas papitas');
    onNavigate('/papitas');
  });
};
const SignIn = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvents();
};
export default SignIn;
