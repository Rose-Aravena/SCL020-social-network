import { arrayPosts, arrayUsers } from '../firebase/getDocsFirebase.js';
import { onNavigate } from '../router/routes.js';

export const addEvent = async () => {
  // if (document.readyState == 'loading') {
  //   document.addEventListener('DOMContentLoaded', async () => {
  //     console.log(await arrayPosts);
  //   })
  // }
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
  // const like = document.getElementById('like')
  // like.addEventListener('click', () => {
  //   console.log('patita')
  // });
};
