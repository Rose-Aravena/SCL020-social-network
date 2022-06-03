import { onNavigate } from '../router/routes.js';
import { signInUser } from '../firebase/auth.js';
import { auth } from '../firebase/init.js';


export const addEvents = () => {
    const send = document.getElementById('send');
    send.addEventListener('click', async () => {
        const email = document.getElementById('email').value 
        const password = document.getElementById('password').value 
        try {
        const response = await signInUser( auth, email, password)
        return onNavigate('/post');

        } catch (error){
            console.log(error)
            return onNavigate('/');
          }
    });
  };