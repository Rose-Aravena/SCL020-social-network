import { onNavigate } from '../router/routes.js';
import { loginOut } from '../firebase/auth.js';

export const addEvent = () => {
  const search = document.getElementById('searchButton');
  search.addEventListener('click', () => {
    onNavigate('/search');
  });
  const home = document.getElementById('homeButton');
  home.addEventListener('click', () => {
    onNavigate('/post');
  });
  const newPost = document.getElementById('newPostButton');
  newPost.addEventListener('click', () => {
    onNavigate('/creatPost');
  });
  // cierre de sesion
  const logOut = document.getElementById('out');
  if (logOut) {
    logOut.addEventListener('click', async () => {
      try {
        await loginOut();
        return onNavigate('/');
      } catch (error) {
        return error;
      }
    });
  }
};
