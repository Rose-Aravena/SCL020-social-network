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
      const responseGoogle = await loginGoogle();
      console.log(responseGoogle);
      //if(el susuario no esta en la lista de la bd, agregalo)
      //sino(ya esta en la lista), no hagas nada
      //traer los usuarios, sino no esta en los uid, inyectarlo, sino pasar...
      return onNavigate('/post');
    } catch (error) {
      return error;
    }
  });
  const RegisterMail = document.getElementById('mailButton');
  RegisterMail.addEventListener('click', () => {
    onNavigate('/createUser');
  });
};

export default addEvents;
