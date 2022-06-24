/** @format */
import { onNavigate } from '../router/routes.js';
import { loginGoogle } from '../firebase/auth.js';
import { arrayUsers } from '../firebase/getDocsFirebase.js';
import { getLocalUser, allUidDB } from '../utils/utils.js';
import { saveUser } from '../firebase/firestore.js';
import { auth } from '../firebase/init.js';

const addEvents = () => {
  const SignIn = document.getElementById('signIn');
  SignIn.addEventListener('click', () => {
    onNavigate('/signIn');
  });
  const google = document.getElementById('googleButton');
  google.addEventListener('click', async () => {
    let allUsers;
    let allUids;
    let uidUserSigned;
    let responseGoogle;
    try {
      responseGoogle = await loginGoogle(auth);
      console.log(responseGoogle);
    } catch (error) {
      return error;
    }
    try {
      allUsers = await arrayUsers();// guardando todos los usuarios de mi db
    } catch (error) {
      return error;
    }
    try {
      allUids = allUidDB(allUsers);// filtrando por uids de mi db
    } catch (error) {
      return error;
    }
    try {
      uidUserSigned = await getLocalUser();// traigo los datos del usuario que inicio sesion
      console.log(uidUserSigned.uid);
    } catch (error) {
      return error;
    }
    try {
      if (!allUids.includes(uidUserSigned.uid)) { // preguntando si el array que tiene todos
        // los uids de db contiene el uid del usuario iniciado sesion
        await saveUser(responseGoogle.displayName, responseGoogle.email, uidUserSigned.uid);
        // si no esta en la lista guarda al usuario en db
      }
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
