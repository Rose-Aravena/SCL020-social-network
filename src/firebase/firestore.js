import { addDoc, collection, db, getDocs, query, where } from './init.js';

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

export const savePost = (description, titlePost, hashtag, uidUser, userName) => {
  addDoc(
    collection(db, 'post'),
    {
      description,
      titlePost,
      hashtag,
      uidUser,
      userName,
    },
  );
};
export const getUsers = () => getDocs(collection(db, 'user'));
export const getPost = () => getDocs(collection(db, 'post'));
export const getdataUser = async (uid) => {
  const q = await getDocs(query(collection(db, 'user'), where('uid', '==', uid)));
  return q;
};
