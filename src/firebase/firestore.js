import { addDoc, collection, db, doc, getDocs, query, orderBy } from './init.js';

const postRef = collection(db, "post");

const postOrder = query(postRef, orderBy("day", "desc"), orderBy("hour", "desc"));

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

export const savePost = (titlePost, description, hashtag, day, hour, uidUser) => {
  addDoc(
    collection(db, 'post'),
    {
      description,
      titlePost,
      hashtag,
      day,
      hour,
      uidUser,
    },
  );
};
export const getUsers = () => getDocs(collection(db, 'user'));
export const getPost = () => getDocs(postOrder);
