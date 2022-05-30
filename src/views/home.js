/** @format */
import { onNavigate } from '../router/routes.js';

import { replaceHTML } from '../utils/utils.js';

const getHTMLTemplate = () => {
  const template = `<img id='logo' src='imagenes/logo.png'> </img>
  <h1>Conecta con PetsLifes</h1>
  <button id="signIn">Iniciar sesión</button>
  <h2>¿No tienes cuenta?</h2>
  <button id="googleButton">Registrate con Google</button>
  <button id="mailButton">Registrate con tu mail</button>`;
  return template;
};

const addEvents = () => {
  const RegisterMail = document.getElementById('mailButton');
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
