

import { addDoc, collection, db, doc, getDocs, query, orderBy, where } from './init.js';

const postRef = collection(db, "post");

export const postOrder = query(postRef, orderBy("day", "desc"), orderBy("hour", "desc"));



const postRef = collection(db, 'post');
const postOrder = query(postRef, orderBy('day', 'desc'), orderBy('hour', 'desc'));
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
export const savePost = (
  titlePost,
  description,
  hashtag,
  day,
  hour,
  uidUser,
  userName,
  usersLikes,
  countPaw,
) => {
  addDoc(
    collection(db, 'post'),
    {
      titlePost,
      description,
      hashtag,
      day,
      hour,
      uidUser,
      userName,
      usersLikes,
      countPaw,
    },
  );
};
export const getUsers = () => getDocs(collection(db, 'user'));
export const getPost = () => getDocs(postOrder);
export const getdataUser = async (uid) => {
  const q = await getDocs(query(collection(db, 'user'), where('uid', '==', uid)));
  return q;
};
