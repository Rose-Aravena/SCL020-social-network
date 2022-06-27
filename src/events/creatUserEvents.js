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
    const name = document.getElementById('userName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const textCreateUser = document.getElementById('textCreateUser');
    const text = 'No pudimos crear tu cuenta, tu contraseña debe tener como mínimo 6 caracteres';
    let newUser;
    try {
      newUser = await createUser(auth, email, password);
    } catch (error) {
      console.log('ocurrio un error con la integracion en el metodo create user ', error);
      textCreateUser.innerHTML = text;
    }
    try {
      await saveUser(name, email, newUser.user.uid);
      return onNavigate('/post');
    } catch (error) {
      return console.log('ocurrio un error con la integcion en el saveUser ', error);
    }
  });
};
