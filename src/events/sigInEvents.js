import { onNavigate } from '../router/routes.js';
import { signInUser } from '../firebase/auth.js';
import { auth } from '../firebase/init.js';

export const addEvents = () => {
  const back = document.getElementById('back');
  back.addEventListener('click', () => {
    onNavigate('/');
  });
  const send = document.getElementById('send');
  send.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
    try {
      const response = await signInUser(auth, email, password);
      console.log(response);
      return onNavigate('/post');
    } catch (error) {
      console.log("ha ocurrido un error al intentar hacer signin", error);
      return onNavigate('/');
    }
  });
};
