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

const loginOut = async () =>{
try{
  const response = await signOut(auth);
  console.log(response);
  return response
}catch(error){
  throw error.message
}
};

export { createUser, loginGoogle, loginOut };
