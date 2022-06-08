import { addDoc, collection, db, doc, getDocs } from './init.js';

export const saveUser = (name, email, uid) => {
  addDoc(
    collection(db, 'user'),
    {
      name,
      email,
      uid,
    },
  );
};

export const savePost = (description, titlePost, hashtag, uidUser) => {
  addDoc(
    collection(db, 'post'),
    {
      description,
      titlePost,
      hashtag,
      uidUser,
    },
  );
};
export const getUsers = () => {
  return getDocs(collection(db, 'user'));
};
export const getPost = () => {
  return getDocs(collection(db, 'post'));
};
