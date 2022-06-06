/** @format */
import { replaceHTML } from '../utils/utils.js';
import { addEvents } from '../events/creatPostEvents.js';

const getHTMLTemplate = () => {
  const tempate = //html
  `<form id='formPost'>
      <p id='username'>User dice:</p>
      <label>Titulo del post</label>
      <input type='text' id='titlePost' autocomplete='off'/>
      <label>Cuentanos más:</label>
      <input id='description' type='text' autocomplete='off'/>
      <label>#Hashtag</label>
      <input id='hashtag' type='text' autocomplete='off'/>
  </form>
  <div id='button'>    
      <button type='button' id= 'cancelButton'>Cancelar</button>
      <button type='submit' id= 'postButton'>Postear</button>
  </div>
  <footer>
    <img id="search" src="icons/buscarHashtag.png">
    <img id="home" src="icons/posts.png">
    <img id="newPost" src="icons/newPost.png">
  </footer>
  `;
  return tempate;
};
const creatPost = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvents();
};
export default creatPost;
