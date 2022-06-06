import { replaceHTML } from '../utils/utils.js';
import { addEvent } from '../events/postEvents.js';


const getHTMLTemplate = () => {
  const template = //html
  `<img id="myPost" src="icons/verPosts.png">
  <div id="allPost"></div>
  <footer>
    <img id="search" src="icons/buscarHashtag.png">
    <img id="home" src="icons/posts.png">
    <img id="newPost" src="icons/newPost.png">
  </footer>`;
  return template;
};

const post = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvent();
};

export default post;
