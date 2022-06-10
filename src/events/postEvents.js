import { onNavigate } from '../router/routes.js';

export const addEvent = async () => {

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
  const myPost = document.getElementById('myPost');
  myPost.addEventListener('click', () => {
    onNavigate('/myPost');
  });
  // like de patitas
  const patita = document.getElementById('patita');
  const count = document.getElementById('count');

  patita.addEventListener('click', () => {
    if (patita.classList.contains('no')) {
      patita.src = './icons/patitalike.PNG';
      patita.classList.remove('no');
      patita.classList.add('yes');
      count.textContent++;
    } else {
      patita.src = './icons/patita.PNG';
      patita.classList.remove('yes');
      patita.classList.add('no');
      count.textContent--;
    }
  });
};
