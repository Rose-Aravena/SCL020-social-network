import { replaceHTML } from '../utils/utils.js';
import { addEvent } from '../events/postEvents.js';


const getHTMLTemplate = () => {
  const template = //html
  `<img id="myPost" src="icons/verPosts.png">
   <p id='textMyPost'> Mis post </p>
  <div id="allPost"></div>
  <footer>
    <img id="searchButton" src="icons/buscarHashtag.png">
    <img id="homeButton" src="icons/posts.png">
    <img id="newPostButton" src="icons/newPost.png">
  </footer>`;
  return template;
};

const post = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvent();
};

export default post;
