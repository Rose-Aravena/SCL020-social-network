import { arrayPosts, arrayUsers } from '../firebase/getDocsFirebase.js';
import { onNavigate } from '../router/routes.js';

export const addEvent = () => {
  debugger;
  document.addEventListener('DOMContentLoaded', () => {
    console.log(arrayUsers());
  });
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
};
