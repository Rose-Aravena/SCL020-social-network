
import { addDoc, collection, db, doc, getDocs, query, orderBy, where } from './init.js';

const postRef = collection(db, "post");

export const postOrder = query(postRef, orderBy("day", "desc"), orderBy("hour", "desc"));


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


export const savePost = (description, titlePost, hashtag, day, hour, uidUser, userName) => {

  addDoc(
    collection(db, 'post'),
    {
      description,
      titlePost,
      hashtag,
      day,
      hour,
      uidUser,
      userName,
    },
  );
};
export const getUsers = () => getDocs(collection(db, 'user'));
export const getPost = () => getDocs(postOrder);
export const getdataUser = async (uid) => {
  const q = await getDocs(query(collection(db, 'user'), where('uid', '==', uid)));
  return q;
};

