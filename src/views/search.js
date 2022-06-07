import { replaceHTML } from '../utils/utils.js';
import { addEvent } from '../events/myPostEvents.js';


const getHTMLTemplate = () => {
  const template = //html
  `<input id='search' type="text" placeholder="#hashtag">
  <div id="allPost"></div>
  <footer>
    <img id="searchButton" src="icons/buscarHashtag.png">
    <img id="homeButton" src="icons/posts.png">
    <img id="newPostButton" src="icons/newPost.png">
  </footer>`;
  return template;
};

const search = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvent();
};

export default search;