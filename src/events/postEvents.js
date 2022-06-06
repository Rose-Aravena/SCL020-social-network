import { onNavigate } from '../router/routes.js';
import { savePost } from '../firebase/firestore.js';
import { loginOut } from '../firebase/auth.js';
import { getLocalUser } from '../utils/utils.js';

export const addEvent = () => {
  const logOut = document.getElementById('logOut');
  logOut.addEventListener('click', async () => {
    try {
      await loginOut();
      return onNavigate('/');
    } catch (error) {
      return error;
    }
  });
  const lookPost = document.getElementById('formPost');
  lookPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const titlePost = document.getElementById('titlePost').value;
    const description = document.getElementById('description').value;
    const hashtag = document.getElementById('hashtag').value;
    const uidUser = getLocalUser();
    savePost(titlePost, description, hashtag, uidUser.uid);
  });
};
