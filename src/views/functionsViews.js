
import { getPosts, addLike, removeLike } from "../firebase/firestore.js";
import { getLocalUser } from '../utils/utils.js';  

export const listAllPost = async () => {
  try{
  const querySnapshot = await getPosts();
  
  let container = "";
  querySnapshot.forEach((doc) => {
  const post = doc.data();
   container += // html
        `<div id="cardPost">
           <p id="tittle">${post.titlePost}</p>
           <p class="text">${post.description}</p>
           <p class="text">${post.hashtag}</p>
          <div id="dateLike">
            <p id="date">${post.day}</p>
            <span id="count">0</span>
            <picture id="like">
              <img id="patita${doc.id}" class ="btn-like" data-id="${doc.id}" src="./icons/patita.PNG">
            </picture>
          </div>
        </div>`
  });
  const divAllPost = document.getElementById('allPost');
  divAllPost.innerHTML = container;

  const btnLike = divAllPost.querySelectorAll('.btn-like')
  
  let clicked = false;
  const uidUser = getLocalUser();

console.log(uidUser.uid);
  btnLike.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const patita = document.getElementById(`patita${event.target.dataset.id}`);
      console.log(!clicked)
      console.log(event.target.dataset.id);
      if (!clicked) {
        clicked = true;
        addLike(event.target.dataset.id, uidUser.uid)
        patita.src = './icons/patitalike.PNG';
        count.textContent++;
      } else {
        clicked = false;
        removeLike(event.target.dataset.id, uidUser.uid)
        patita.src = './icons/patita.PNG';
        count.textContent--;
      }
    })
  })
}catch (error) {
    console.log(error);
    return error;
  }
}
// export const listAllPost = (data) => {
//   let container = "";
//   data.forEach(e => {
//     container += // html
//       `<div id="cardPost">
//          <p id="tittle">${e.titlePost}</p>
//          <p class="text">${e.description}</p>
//          <p class="text">${e.hashtag}</p>
//         <div id="dateLike">
//           <p id="date">${e.day}</p>
//           <span id="count">0</span>
//           <picture id="like">
//             <img id="patita" class ="no" src="./icons/patita.PNG">
//           </picture>
//         </div>
//       </div>`
//   });
//   return container;
// };
