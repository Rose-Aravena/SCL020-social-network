import { createUser } from './firebase/auth.js';

const SEND = document.getElementById('send');

// ------------------------creatUser button

SEND.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  createUser(email, password);
});
