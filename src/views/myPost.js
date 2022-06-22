import { replaceHTML } from '../utils/utils.js';
import { addEvent } from '../events/myPostEvents.js';
import { listMyPosts } from './functionsViews.js';

const getHTMLTemplate = () => {
  const template = // html
    `<img id="out" src="icons/out.png">
  <p id='textOut'>Cerrar sesión</p>
  <div id="allMyPosts"></div>
  <footer>
    <img id="searchButton" src="icons/buscarHashtag.png">
    <img id="homeButton" src="icons/posts.png">
    <img id="newPostButton" src="icons/newPost.png">
  </footer>`;
  return template;
};
const myPost = async () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  await listMyPosts();
  addEvent();
};

export default myPost;
