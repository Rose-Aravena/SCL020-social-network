/** @format */
import { onNavigate } from '../router/routes.js';

import { replaceHTML } from '../utils/utils.js';

const getHTMLTemplate = () => {
  const template = `<h1>Bienvenido</h1>
          <button id="signIn">Inicio sesión</button>
          <button id="registerGooogle">Registro Google</button>
          <button id="registerMail">Registro Mail</button>`;
  return template;
};

const addEvents = () => {
  const RegisterMail = document.getElementById('registerMail');
  RegisterMail.addEventListener('click', () => {
    onNavigate('/createUser');
  });
  const SignIn = document.getElementById('signIn');
  SignIn.addEventListener('click', () => {
    onNavigate('/signIn');
  });
};
const Home = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvents();
};

export default Home;
