/** @format */
import {
  createUserWithEmailAndPassword,
  provider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  auth,
} from './init.js';

import { saveLocalUser } from '../utils/utils.js';

const signInUser = async (auth, email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error.message;
  }
};

const createUser = async (auth, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error.message;
  }
};

const loginGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    console.log(response);
    return response.user;
  } catch (error) {
    throw error.message;
  }
};

const loginOut = async () => {
  try {
    const response = await signOut(auth);
    console.log(response);
    return response;
  } catch (error) {
    throw error.message;
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`userUid= ${user.uid} evento siempre presente`);
    // aca debo guardar localmente (navegador) el nuevo id del usuario
    saveLocalUser(user);
  } else {
    window.localStorage.clear();
  }
});

// const observer = (auth, )

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

export {
  createUser,
  loginGoogle,
  loginOut,
  signInUser,
};
