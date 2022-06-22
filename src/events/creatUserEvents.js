import { onNavigate } from '../router/routes.js';
import { createUser } from '../firebase/auth.js';
import { saveUser } from '../firebase/firestore.js';
import { auth } from '../firebase/init.js';

export const addEvents = () => {
  const back = document.getElementById('back');
  back.addEventListener('click', () => {
    onNavigate('/');
  });
  const send = document.getElementById('creatSend'); // guardando el user en db
  send.addEventListener('click', async () => {
    const userName = document.getElementById('userName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let newUser;
    try {
      newUser = await createUser(auth, email, password);
      return newUser;
    } catch (error) {
      console.log('ocurrio un error con la integracion en el metodo create user ', error);
    }
    try {
      await saveUser(userName, email, newUser.user.uid);
      return onNavigate('/post');
    } catch (error) {
      return console.log('ocurrio un error con la integcion en el saveUser ', error);
    }
  });
};
