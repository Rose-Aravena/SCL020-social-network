/** @format */
import { replaceHTML } from '../utils/utils.js';
import { addEvents } from '../events/creatPostEvents.js';

const getHTMLTemplate = () => {
  const tempate = // html
    `<form id='formPost'>
    <div id ='createPost'>
      <label>Titulo del post</label>
      <input type='text' id='titlePost' autocomplete='off' required/>
      <label>Cuentanos más:</label>
      <textarea id='description' type='text' autocomplete='off' maxlength="1000" required></textarea>
      <label>#Hashtag</label>
      <input id='hashtag' type='text' autocomplete='off' required placeholder='#hashtag'/>
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
