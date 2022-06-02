/** @format */
import { onNavigate } from '../router/routes.js';
import { loginGoogle } from '../firebase/auth.js';

const addEvents = () => {
  const SignIn = document.getElementById('signIn');
  SignIn.addEventListener('click', () => {
    onNavigate('/signIn');
  });
  const google = document.getElementById('googleButton');
  google.addEventListener('click', async () => {
    try {
      await loginGoogle();
      return onNavigate('/post');
    } catch (error) {
      console.log(error);
    }
  });
  const RegisterMail = document.getElementById('mailButton');
  RegisterMail.addEventListener('click', () => {
    onNavigate('/createUser');
  });
};

export default addEvents;
