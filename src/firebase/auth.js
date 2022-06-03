/** @format */

import {
  createUserWithEmailAndPassword,
  auth,
  provider,
  signInWithPopup,
  signOut,
} from './init.js';

const createUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
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

const loginOut = signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

export { createUser, loginGoogle, loginOut };
