/** @format */
import { replaceHTML } from '../utils/utils.js';
import { addEvents } from '../events/creatPostEvents.js';

const getHTMLTemplate = () => {
  const tempate = // html
    `<form id='formPost'>
    <div id ='createPost'>
      <p id='username'>User dice:</p>
      <label>Titulo del post</label>
      <input type='text' id='titlePost' autocomplete='off'/>
      <label>Cuentanos más:</label>
      <textarea id='description' type='text' autocomplete='off' maxlength="150" ></textarea>
      <label>#Hashtag</label>
      <input id='hashtag' type='text' autocomplete='off'/>
    </div>
  
  <div id='button'>    
      <button type='button' id= 'cancelButton'>Cancelar</button>
      <button type='submit' id= 'postButton'>Postear</button>
  </div>
  </form>
  <footer>
    <img id="searchButton" src="icons/buscarHashtag.png">
    <img id="homeButton" src="icons/posts.png">
    <img id="newPostButton" src="icons/newPost.png">
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
