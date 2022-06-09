import { onNavigate } from '../router/routes.js';
import { savePost } from '../firebase/firestore.js';
import { getLocalUser } from '../utils/utils.js';

let date = new Date();

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
    const day = date.toLocaleDateString();
    const hour = date.toLocaleTimeString();
    const uidUser = getLocalUser();
    try {
      await savePost(titlePost, description, hashtag, day, hour, uidUser.uid);
      return onNavigate('/post');
    } catch (error) {
      return error;
    }
  });
}