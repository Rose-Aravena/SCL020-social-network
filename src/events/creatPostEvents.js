import { onNavigate } from '../router/routes.js';

export const addEvents = () => {
    const cancel = document.getElementById('cancelButton');
    cancel.addEventListener('click', () => {
      onNavigate('/post');
    });
    const home = document.getElementById('home');
    home.addEventListener('click', () => {
      onNavigate('/post');
    });
}