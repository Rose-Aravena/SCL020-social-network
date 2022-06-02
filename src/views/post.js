// import { onNavigate } from '../router/routes.js';

import { replaceHTML } from '../utils/utils.js';
import { addEvent } from '../events/postEvents.js';

const getHTMLTemplate = () => {
  const template = `<button id= 'logOut'>Cerrar sesion</button>
    <h1>Pots</h1>
    <form id='formPost'>
        <input id='inputPost' type='text' placeholder='Cuentanos todo' autocomplete='off'/>
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

