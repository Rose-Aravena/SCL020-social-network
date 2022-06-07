import { replaceHTML } from '../utils/utils.js';
import { addEvent } from '../events/myPostEvents.js';


const getHTMLTemplate = () => {
  const template = //html
    `<img id="out" src="icons/out.png">
  <p id='textOut'>Cerrar sesión</p>
  <div id="allPost"></div>
  <footer>
    <img id="searchButton" src="icons/buscarHashtag.png">
    <img id="homeButton" src="icons/posts.png">
    <img id="newPostButton" src="icons/newPost.png">
  </footer>`;
  return template;
};
const myPost = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvent();
};

export default myPost;