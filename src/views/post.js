// import { onNavigate } from '../router/routes.js';

import { replaceHTML } from '../utils/utils.js';
import { onNavigate } from '../router/routes.js';

const getHTMLTemplate = () => {
    const template = `<button id= 'logOut'>Cerrar sesion</button>
    <h1>Pots</h1>
    <form id='formPost'>
        <input id='inputPost' type='text' placeholder='Cuentanos todo' autocomplete='off'/>
        <button id= 'post'>postear</button>
    </form>
    `;
    return template;
}


const addEvents = () => {
  
  const logOut = document.getElementById('logOut');
    logOut.addEventListener('click', () => {
      onNavigate('/');
    });
};
const post = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvents();
};

  export default post;

