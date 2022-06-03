import { onNavigate } from '../router/routes.js';
import { savePost } from '../firebase/firestore.js';
import { loginOut } from '../firebase/auth.js';


// document.getElementById('formPost').addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log("linea4")
//   const description = inputPost['inputPost'];
//   savePost(description.value);
// });
export const addEvent = () => {
  const logOut = document.getElementById('logOut');
  logOut.addEventListener('click', async() => {
    try {
    await loginOut ();
    return onNavigate('/');
    }catch (error){
      console.log(error)
    }
  });
  const lookPost = document.getElementById('formPost');
  lookPost.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('linea4');
    const description = lookPost['inputPost'];
    savePost(description.value);
  });
}  
