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
import { getUserInfo } from './getDocsFirebase.js';

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

onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log(`userUid= ${user.uid} evento siempre presente`);
    // aca debo guardar localmente (navegador) el nuevo id del usuario
    console.log(user);
    saveLocalUser(user); // guardo como string el user que devuelve el
    // evento que esccuha un inicio de sesion
    const signedUser = await getUserInfo(user.uid);
    window.localStorage.userName = signedUser[0].name;
    window.localStorage.userEmail = signedUser[0].email;
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
