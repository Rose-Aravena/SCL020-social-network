import { replaceHTML } from '../utils/utils.js';
import { addEvent } from '../events/postEvents.js';

const getHTMLTemplate = () => {
  const template = `<button id= 'logOut'>Cerrar sesion</button>
    <h1>Crear Post</h1>
    <form id='formPost'>
    <input type='text' id='titlePost' placeholder='Título del Post' autocomplete='off'/>
        <input id='description' type='text' placeholder='Cuentanos todo' autocomplete='off'/>
        <input id='hashtag' type='text' placeholder='Hashtag' autocomplete='off'/>
        <button type='submit' id= 'post'>postear</button>
    </form>
    `;
  return template;
};

const post = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvent();
};

export default post;
