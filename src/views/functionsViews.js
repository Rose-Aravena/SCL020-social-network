
import { getPost } from "../firebase/firestore.js";


export const listAllPost = async () => {
  try{
  const querySnapshot = await getPost();
  
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
              <img id="patita" class ="no" data-id="${doc.id}" src="./icons/patita.PNG">
            </picture>
          </div>
        </div>`
  });
  const divAllPost = document.getElementById('allPost');
  divAllPost.innerHTML = container;
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
