/** @format */


import {
  createUserWithEmailAndPassword,
  auth,
  provider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword
} from './init.js';

const signInUser = async (auth, email, password) => {
  try {
    const response = await signInWithEmailAndPassword (auth, email, password)
    return response 
  }catch (error) {
    throw error.message;
  }
}

const createUser = async (auth, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response
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

export { createUser, loginGoogle, loginOut, signInUser };
