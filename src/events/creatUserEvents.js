import { onNavigate } from '../router/routes.js';
import { createUser } from '../firebase/auth.js';
import { auth } from '../firebase/init.js';

export const addEvents = () => {
    const send = document.getElementById('creatSend');
    send.addEventListener('click', async () => {
        const userName = document.getElementById('userName').value 
        const email = document.getElementById('email').value 
        console.log(email)
        const password = document.getElementById('password').value 
        try {
            await createUser(auth, email, password)
            return onNavigate('/post');
        }catch (error){
            console.log(error)
          }
    });
  };