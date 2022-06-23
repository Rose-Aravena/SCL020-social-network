import { onNavigate } from '../router/routes.js';
import { savePost } from '../firebase/firestore.js';
import { getLocalUser } from '../utils/utils.js';

const date = new Date(); // para guardar da fecha y hora en la db del post
const probarEntrada = (cadena) => {
  let subcadena;
  const space = /\s/;
  if (space.test(cadena)) {
    subcadena = cadena.split(space);
  } else {
    subcadena = [cadena];
  }
  return subcadena;
};
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

  // formulario con los datos para guardar en la coleccion post
  const lookPost = document.getElementById('formPost');
  lookPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const titlePost = document.getElementById('titlePost').value;
    const description = document.getElementById('description').value;
    const hashtag1 = document.getElementById('hashtag').value.toLowerCase();
    const day = date.toLocaleDateString();
    const hour = date.toLocaleTimeString();
    const uidUser = getLocalUser();
    const usersLikes = [];
    const hashtag = probarEntrada(hashtag1);
    console.log(hashtag);
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
      );
      return onNavigate('/post');
    } catch (error) {
      return error;
    }
  });
};

