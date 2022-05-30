// import { onNavigate } from '../router/routes.js';

import { replaceHTML } from '../utils/utils.js';

const getHTMLTemplate = () => {
    const template = `<h1>Pots</h1>
    <button id= 'poster'>postear</button>`;
    return template;
}
const addEvents = () => {
    const postear = document.getElementById('poster');
    postear.addEventListener('click', () => {
      alert('posteaste');
    });
   
  };
const post = () => {
    const template = getHTMLTemplate();
    replaceHTML(template);
    addEvents();
  };

 export default post; 