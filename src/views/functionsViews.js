import { addLike, removeLike, onGetPost, postsUser, hashtagPots } from "../firebase/firestore.js";
import { getLocalUser } from '../utils/utils.js';

export const listAllPost = async () => {
  const uidUser = getLocalUser();
  try {
    onGetPost((querySnapshot) => {
      let container = "";
      querySnapshot.forEach((doc) => {
        const post = doc.data();

        const usersLikes = post.usersLikes;
        if (usersLikes.includes(uidUser.uid)) {
          container += // html
            `<div id="cardPost">
           <p id="userName"><b>${post.userName}</b> dice:</p>
           <p id="tittle">${post.titlePost}</p>
           <p class="text">${post.description}</p>
           <p class="text">${post.hashtag}</p>
          <div id="dateLike">
            <p id="date">${post.day}</p>
            <span id="count">${usersLikes.length}</span>
            <picture id="like">
              <img id="patita${doc.id}" class ="btn-like yes" data-id="${doc.id}" src="./icons/patitalike.PNG">
            </picture>
          </div>
        </div>`
        } else {
          container += // html
            `<div id="cardPost">
           <p id="userName"><b>${post.userName} </b>dice:</p>
           <p id="tittle">${post.titlePost}</p>
           <p class="text">${post.description}</p>
           <p class="text">${post.hashtag}</p>
          <div id="dateLike">
            <p id="date">${post.day}</p>
            <span id="count">${usersLikes.length}</span>
            <picture id="like">
              <img id="patita${doc.id}" class ="btn-like no" data-id="${doc.id}" src="./icons/patita.PNG">
            </picture>
          </div>
        </div>`
        }
      });

      const divAllPost = document.getElementById('allPost');
      divAllPost.innerHTML = container;

      // btn like nolike
      const btnLike = divAllPost.querySelectorAll('.btn-like');

      btnLike.forEach(btn => {
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
    let container = "";
    qSnapshot.forEach((doc) => {
      const post = doc.data();
      const usersLikes = post.usersLikes;
      if (usersLikes.includes(uidUser.uid)) {
        container += // html
          `<div id="cardPost">
            <p id="userName"><b>${post.userName}</b> dice:</p>
            <p id="tittle">${post.titlePost}</p>
            <p class="text">${post.description}</p>
            <p class="text">${post.hashtag}</p>
            <div id="dateLike">
             <p id="date">${post.day}</p>
              <span id="count">${usersLikes.length}</span>
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
          `
      } else {
        container += // html
          `<div id="cardPost">
            <p id="userName"><b>${post.userName} </b>dice:</p>
            <p id="tittle">${post.titlePost}</p>
            <p class="text">${post.description}</p>
            <p class="text">${post.hashtag}</p>
            <div id="dateLike">
               <p id="date">${post.day}</p>
               <span id="count">${usersLikes.length}</span>
              <picture id="like">
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
          `
      }
    });
    const divAllMyPost = document.getElementById('allMyPosts');
    divAllMyPost.innerHTML = container;

    // btn like nolike
    const btnLike = divAllMyPost.querySelectorAll('.btn-like');
    
    btnLike.forEach(btn => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        const patita = document.getElementById(`patita${event.target.dataset.id}`);
        console.log(event.target.dataset.id);
        if (patita.classList.contains('no')) {
          addLike(event.target.dataset.id, uidUser.uid);
          patita.src = './icons/patitalike.PNG';
          patita.classList.remove('no');
          patita.classList.add('yes');
          count.textContent++;
        } else {
          removeLike(event.target.dataset.id, uidUser.uid);
          patita.src = './icons/patita.PNG';
          patita.classList.remove('yes');
          patita.classList.add('no');
          count.textContent--;
        }
      });
    });
    // ____
  });
};
// ----------search----

export const searchPost = () => {
  const uidUser = getLocalUser();
  hashtagPots((hashtagSnapshot) => {
    let container = "";
    hashtagSnapshot.forEach((doc) => {
      const post = doc.data();
      const usersLikes = post.usersLikes;
      if (usersLikes.includes(uidUser.uid)) {
        container += // html
          `<div id="cardPost">
           <p id="userName"><b>${post.userName}</b> dice:</p>
           <p id="tittle">${post.titlePost}</p>
           <p class="text">${post.description}</p>
           <p class="text">${post.hashtag}</p>
          <div id="dateLike">
            <p id="date">${post.day}</p>
            <span id="count">${usersLikes.length}</span>
            <picture>
              <img id="patita${doc.id}" class ="btn-like yes" data-id="${doc.id}" src="./icons/patitalike.PNG">
            </picture>
          </div>
        </div>`
      } else {
        container += // html
          `<div id="cardPost">
           <p id="userName"><b>${post.userName} </b>dice:</p>
           <p id="tittle">${post.titlePost}</p>
           <p class="text">${post.description}</p>
           <p class="text">${post.hashtag}</p>
          <div id="dateLike">
            <p id="date">${post.day}</p>
            <span id="count">${usersLikes.length}</span>
            <picture id="like">
              <img id="patita${doc.id}" class ="btn-like no" data-id="${doc.id}" src="./icons/patita.PNG">
            </picture>
          </div>
        </div>`
      }
    });
    const divAllSearch = document.getElementById('allSearch');
    divAllSearch.innerHTML = container;

    // btn like nolike
    const btnLike = divAllSearch.querySelectorAll('.btn-like');
    
    btnLike.forEach(btn => {
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
  });
};