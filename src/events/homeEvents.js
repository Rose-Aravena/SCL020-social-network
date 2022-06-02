/** @format */
import { onNavigate } from '../router/routes.js';
import { loginGoogle } from '../firebase/auth.js';

const addEvents = () => {
  const SignIn = document.getElementById('signIn');
  SignIn.addEventListener('click', () => {
    onNavigate('/signIn', 2);
  });
  const google = document.getElementById('googleButton');
  google.addEventListener('click', async () => {
    try {
      await loginGoogle();
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
