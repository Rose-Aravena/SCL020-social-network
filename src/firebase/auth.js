import { createUserWithEmailAndPassword, auth } from './init.js';

const createUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error.message;
  }
};

export { createUser };
