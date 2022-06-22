import { replaceHTML } from '../utils/utils.js';
import { addEvent } from '../events/myPostEvents.js';
import { searchPost } from './functionsViews.js';

const getHTMLTemplate = () => {
  const template = //html
    `<input id='search' type="text" placeholder="#hashtag">
  <div id="allSearch"></div>
  <footer>
    <img id="searchButton" src="icons/buscarHashtag.png">
    <img id="homeButton" src="icons/posts.png">
    <img id="newPostButton" src="icons/newPost.png">
  </footer>`;
  return template;
};

const search = async () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvent();
  const searchPosts = document.getElementById('search');
  searchPosts.addEventListener('change', searchPost);
};

export default search;
