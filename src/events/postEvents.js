import { savePost } from '../firebase/firestore.js';

document.getElementById('formPost').addEventListener('submit', (e) => {
    e.preventDefault()
    
    const description = inputPost['inputPost']
    savePost(description.value);

    
  })