import { onNavigate } from '../router/routes.js';
import { savePost } from '../firebase/firestore.js';
import { getLocalUser } from '../utils/utils.js';

let date = new Date(); // para guardar da fecha y hora en la db del post

export const addEvents = () => {
  const cancel = document.getElementById('cancelButton');
  cancel.addEventListener('click', () => {
    onNavigate('/post');
  });
  const home = document.getElementById('homeButton');
  home.addEventListener('click', () => {
    onNavigate('/post');
  });
  const search = document.getElementById('searchButton');
  search.addEventListener('click', () => {
    onNavigate('/search');
  });
  const lookPost = document.getElementById('formPost');  // formulario con los datos para guardar en la coleccion post
  lookPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const titlePost = document.getElementById('titlePost').value;
    const description = document.getElementById('description').value;
    const hashtag = [document.getElementById('hashtag').value.toLowerCase()];
    const day = date.toLocaleDateString();
    const hour = date.toLocaleTimeString();
    const uidUser = getLocalUser();
    const usersLikes = [];
    const countPaw = 0;
    console.log(hashtag);
    console.log(window.localStorage.currentUser.uid);
    console.log(window.localStorage.userName);
    try {
      await savePost(
        titlePost,
        description,
        hashtag,
        day,
        hour,
        uidUser.uid,
        window.localStorage.userName,
        usersLikes,
        countPaw,
      );
      return onNavigate('/post');
    } catch (error) {
      return error;
    }
  });
};
