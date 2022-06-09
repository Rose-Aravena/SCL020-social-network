import { onNavigate } from '../router/routes.js';
import { savePost } from '../firebase/firestore.js';
import { getLocalUser } from '../utils/utils.js';

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
  const lookPost = document.getElementById('formPost');
  lookPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const titlePost = document.getElementById('titlePost').value;
    const description = document.getElementById('description').value;
    const hashtag = document.getElementById('hashtag').value;
    const uidUser = getLocalUser();
    console.log(window.localStorage.currentUser.uid);
    console.log(window.localStorage.userName);
    try {
      await savePost(titlePost, description, hashtag, uidUser.uid, window.localStorage.userName);
      return onNavigate('/post');
    } catch (error) {
      return error;
    }
  });
};
