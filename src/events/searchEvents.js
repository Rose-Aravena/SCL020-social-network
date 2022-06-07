import { onNavigate } from '../router/routes.js';

export const addEvent = () => {
  const search = document.getElementById('searchButton');
  search.addEventListener('click', () => {
    onNavigate('/search');
  });
  const home = document.getElementById('homeButton');
  home.addEventListener('click', () => {
    onNavigate('/post');
  });
  const newPost = document.getElementById('newPost');
  newPost.addEventListener('click', () => {
    onNavigate('/creatPost');
  });
};
