/** @format */
// eslint-disable-next-line import/no-cycle
import { addEvents } from '../events/creatUserEvents.js';
import { replaceHTML } from '../utils/utils.js';

const getHTMLTemplate = () => {
  const template = // html
    `<div id='containerCreatUser'>
    <div class='btnBackDog'>
  <img class='backIcon' id='back' src='icons/volver.png'>
  <p><strong>Volver</strong></p>
  </div>
  <form class='containerInputs' id='formCreateUser'>
      <p>Nombre</p>
      <input class='inputCreatUser' id='userName' type="text" placeholder="papitas">
      <p>E-mail</p>
      <input class='inputCreatUser' id='email' type="email" placeholder="papitas@gmail.com">
      <p>Constraseña</p>
     <input class='inputCreatUser' id='password' type="password" placeholder="******">
     </form>
     <section id='sectionCreatUser'>
     <button class='thinButton' id='creatSend'>Registrar</button>
     <div id='logoCreatUser'>
     <img  id='iconCreatUser' src='icons/veterinary.png'> </img>
     </div>
     </section>
    </div>`;
  return template;
};
const CreatUser = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
  addEvents();
};
export default CreatUser;
