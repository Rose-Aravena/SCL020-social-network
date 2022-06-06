import { addDoc, collection, db } from './init.js';

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
