import { onNavigate } from '../router/routes.js';

export const addEvent = async () => {

  const search = document.getElementById('searchButton');
  search.addEventListener('click', () => {
    onNavigate('/search');
  });
  const home = document.getElementById('homeButton');
  home.addEventListener('click', () => {
    onNavigate('/post');
  });
  const newPost = document.getElementById('newPostButton');
  newPost.addEventListener('click', () => {
    onNavigate('/creatPost');
  });
  const myPost = document.getElementById('myPost');
  myPost.addEventListener('click', () => {
    onNavigate('/myPost');
  });

  
  // like de patitas

  // const patita = document.getElementById('patita');
  // const count = document.getElementById('count');

  // patita.addEventListener('click', () => {
  //   if (patita.classList.contains('no')) {
  //     patita.src = './icons/patitalike.PNG';
  //     patita.classList.remove('no');
  //     patita.classList.add('yes');
  //     count.textContent++;
  //   } else {
  //     patita.src = './icons/patita.PNG';
  //     patita.classList.remove('yes');
  //     patita.classList.add('no');
  //     count.textContent--;
  //   }
  // });

};

export const clickPaws = (paws) => {
  console.log(paws);
  paws.forEach(e => {
    e.addEventListener('click', (ev) => {
      // console.log(ev.target.dataset.id);
      // mandar a pedir el post a la bs,
      // hay que preguntar si el campo uidUsers tiene el nombre del signIn
      //si lo tiene, sig que hay que sacarel uidUser de la base datos
      //y mostramos corazon blanco
      //si no lo tiene hay que editar el post y agregar el uid al compo uidUsers
      //y mostramos corazon rojo
    });
  });
};