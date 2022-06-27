import { onNavigate } from '../router/routes.js';
import { signInUser } from '../firebase/auth.js';
import { auth } from '../firebase/init.js';
import { getLocalUser } from '../utils/utils.js';

export const addEvents = () => {
  const back = document.getElementById('back');
  back.addEventListener('click', () => {
    onNavigate('/');
  });
  const send = document.getElementById('send'); // inicio de sesion con correo y contraseña
  const textSignIn = document.getElementById('textSignIn');
  const text = 'Constraseña o email incorrecto';
  send.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
    try {
      await signInUser(auth, email, password);
      console.log(getLocalUser().uid);
      return onNavigate('/post');
    } catch (error) {
      textSignIn.innerHTML = text;
    }
  });
};
