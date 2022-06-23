import {
  addLike, removeLike, onGetPost, postsUser, hashtagPost, deletePost,
} from '../firebase/firestore.js';
import { getLocalUser } from '../utils/utils.js';

export const listAllPost = async () => {
  const uidUser = getLocalUser();
  try {
    onGetPost((querySnapshot) => {
      let container = '';
      querySnapshot.forEach((doc) => {
        const post = doc.data();

        const usersLikes = post.usersLikes;
        if (usersLikes.includes(uidUser.uid)) {
          container += // html
            `<div class="cardPost">
           <p><b>${post.userName}</b> dice:</p>
           <p class="tittle">${post.titlePost}</p>
           <p class="text">${post.description}</p>
           <p class="text">${post.hashtag}</p>
          <div class="dateLike">
            <p class="date">${post.day}</p>
            <span class="count">${usersLikes.length}</span>
            <picture>
              <img id="patita${doc.id}" class ="btn-like yes" data-id="${doc.id}" src="./icons/patitalike.PNG">
            </picture>
          </div>
        </div>`;
        } else {
          container += // html
            `<div class="cardPost">
           <p><b>${post.userName} </b>dice:</p>
           <p class="tittle">${post.titlePost}</p>
           <p class="text">${post.description}</p>
           <p class="text">${post.hashtag}</p>
          <div class="dateLike">
            <p class="date">${post.day}</p>
            <span class="count">${usersLikes.length}</span>
            <picture>
              <img id="patita${doc.id}" class ="btn-like no" data-id="${doc.id}" src="./icons/patita.PNG">
            </picture>
          </div>
        </div>`;
        }
      });

      const divAllPost = document.getElementById('allPost');
      if (window.location.pathname === '/post') {
        divAllPost.innerHTML = container;

        // btn like nolike
        const btnLike = divAllPost.querySelectorAll('.btn-like');

        btnLike.forEach((btn) => {
          btn.addEventListener('click', (event) => {
            const patita = document.getElementById(`patita${event.target.dataset.id}`);
            console.log(event.target.dataset.id);
            if (patita.classList.contains('no')) {
              addLike(event.target.dataset.id, uidUser.uid);
              patita.src = './icons/patitalike.PNG';
              patita.classList.remove('no');
              patita.classList.add('yes');
            } else {
              removeLike(event.target.dataset.id, uidUser.uid);
              patita.src = './icons/patita.PNG';
              patita.classList.remove('yes');
              patita.classList.add('no');
            }
          });
        });
      }
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

// ----------myposts----

export const listMyPosts = () => {
  const uidUser = getLocalUser();
  postsUser((qSnapshot) => {
    let container = '';
    qSnapshot.forEach((doc) => {
      const post = doc.data();
      const usersLikes = post.usersLikes;
      if (usersLikes.includes(uidUser.uid)) {
        container += // html
          `<div class="cardPost">
            <p><b>${post.userName}</b> dice:</p>
            <p class="tittle">${post.titlePost}</p>
            <p class="text">${post.description}</p>
            <p class="text">${post.hashtag}</p>
            <div class="dateLike">
             <p class="date">${post.day}</p>
              <span class="count">${usersLikes.length}</span>
             <picture>
              <img id="patita${doc.id}" class ="btn-like yes" data-id="${doc.id}" src="./icons/patitalike.PNG">
             </picture>
            </div>
            <picture class='edit-remove'>
              <img id="edit${doc.id}" class ="btn-edit" data-id="${doc.id}" src="./icons/edita.PNG">
              <img id="remove${doc.id}" class ="btn-remove" data-id="${doc.id}" src="./icons/eliminar.PNG">
            </picture>
            <div class='text-edit-remove'>
              <p class='texedit'>Editar</p>
              <p class='texremove'>Eliminar</p>
            </div>
          </div>
          <div class='modalContainer' id='modalContainer${doc.id}'>
            <div class='modal'>
               <p>¿Seguro que deseas eliminar el Post?</p>
               <img class='imgDelete' src="./icons/eliminarPost.PNG">
               <div>
                 <button id='noDelete${doc.id}' class='noDelete'>Cancelar</button>
                 <button id='yesDelete${doc.id}' class='yesDelete'>Confirmar</button>
              </div>
            </div>
          </div>`;
      } else {
        container += // html
          `<div class="cardPost">
            <p><b>${post.userName} </b>dice:</p>
            <p class="tittle">${post.titlePost}</p>
            <p class="text">${post.description}</p>
            <p class="text">${post.hashtag}</p>
            <div class="dateLike">
               <p class="date">${post.day}</p>
               <span class="count">${usersLikes.length}</span>
              <picture>
                <img id="patita${doc.id}" class ="btn-like no" data-id="${doc.id}" src="./icons/patita.PNG">
              </picture>
            </div>
            <picture class="edit-remove">
                <img id="edit${doc.id}" class ="btn-edit" data-id="${doc.id}" src="./icons/edita.PNG">
                <img id="remove${doc.id}" class ="btn-remove" data-id="${doc.id}" src="./icons/eliminar.PNG">
            </picture>
            <div class='text-edit-remove'>
              <p class='texedit'>Editar</p>
              <p class='texremove'>Eliminar</p>
            </div>
          </div>
          <div class='modalContainer' id='modalContainer${doc.id}'>
             <div class='modal'>
               <p>¿Seguro que deseas eliminar el Post?</p>
               <img class='imgDelete' src="./icons/eliminarPost.PNG">
               <div>
                 <button id='noDelete${doc.id}' class='noDelete'>Cancelar</button>
                 <button id='yesDelete${doc.id}' class='yesDelete'>Confirmar</button>
                </div>
             </div>
          </div> `;
      }
    });
    const divAllMyPost = document.getElementById('allMyPosts');
    if (window.location.pathname === '/myPost') {
      divAllMyPost.innerHTML = container;

    // btn like nolike
    const btnLike = divAllMyPost.querySelectorAll('.btn-like');
    btnLike.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        const patita = document.getElementById(`patita${event.target.dataset.id}`);
        console.log(event.target.dataset.id);
        if (patita.classList.contains('no')) {
          addLike(event.target.dataset.id, uidUser.uid);
          patita.src = './icons/patitalike.PNG';
          patita.classList.remove('no');
          patita.classList.add('yes');
        } else {
          removeLike(event.target.dataset.id, uidUser.uid);
          patita.src = './icons/patita.PNG';
          patita.classList.remove('yes');
          patita.classList.add('no');
        }
      });
    });
    // -----btn delete-----
    // const btnRemove = divAllMyPost.querySelectorAll('.btn-remove');
    // btnRemove.forEach((btnR) => {
    //     btnR.addEventListener('click', (e) => {
    //       const modalContainer = document.getElementById(`modalContainer${e.target.dataset.id}`);
    //        modalContainer.classList.add('show');
    //     });
    // });
    // const btncancelar = divAllMyPost.querySelectorAll('.noDelete');
    //   btncancelar.forEach(btnC => {
    //     btnC.addEventListener('click', (e) => {
    //        const modalContainer = document.getElementById(`modalContainer${e.target.dataset.id}`);
    //         modalContainer.classList.remove('show'); 
    //       });
    //     });
      const confirDelete = divAllMyPost.querySelectorAll('.btn-remove');
      confirDelete.forEach((confirm) => {
        confirm.addEventListener('click', (e) => {
          deletePost(e.target.dataset.id);
        });
      });
    };
  });
}
// ----------search----

export const searchPost = () => {
  const uidUser = getLocalUser();
  hashtagPost((hashtagSnapshot) => {
    let container = '';
    hashtagSnapshot.forEach((doc) => {
      const post = doc.data();
      console.log(post);
      const usersLikes = post.usersLikes;
      if (usersLikes.includes(uidUser.uid)) {
        container += // html
          `<div class="cardPost">
           <p><b>${post.userName}</b> dice:</p>
           <p class="tittle">${post.titlePost}</p>
           <p class="text">${post.description}</p>
           <p class="text">${post.hashtag}</p>
          <div class="dateLike">
            <p class="date">${post.day}</p>
            <span class="count">${usersLikes.length}</span>
            <picture>
              <img id="patita${doc.id}" class ="btn-like yes" data-id="${doc.id}" src="./icons/patitalike.PNG">
            </picture>
          </div>
        </div>`;
      } else {
        container += // html
          `<div class="cardPost">
           <p><b>${post.userName} </b>dice:</p>
           <p class="tittle">${post.titlePost}</p>
           <p class="text">${post.description}</p>
           <p class="text">${post.hashtag}</p>
          <div class="dateLike">
            <p class="date">${post.day}</p>
            <span class="count">${usersLikes.length}</span>
            <picture>
              <img id="patita${doc.id}" class ="btn-like no" data-id="${doc.id}" src="./icons/patita.PNG">
            </picture>
          </div>
        </div>`;
      }
    });
    const divAllSearch = document.getElementById('allSearch');
    if (window.location.pathname === '/search') {
      divAllSearch.innerHTML = container;
      console.log(divAllSearch);
      // btn like nolike
      const btnLike = divAllSearch.querySelectorAll('.btn-like');
      btnLike.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          event.preventDefault();
          const patita = document.getElementById(`patita${event.target.dataset.id}`);
          console.log(event.target.dataset.id);
          if (patita.classList.contains('no')) {
            addLike(event.target.dataset.id, uidUser.uid);
            patita.src = './icons/patitalike.PNG';
            patita.classList.remove('no');
            patita.classList.add('yes');
          } else {
            removeLike(event.target.dataset.id, uidUser.uid);
            patita.src = './icons/patita.PNG';
            patita.classList.remove('yes');
            patita.classList.add('no');
          }
        });
      });
    }
  });
};
