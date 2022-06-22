import { getLocalUser } from '../utils/utils.js';
import {
  addDoc,
  collection,
  db,
  doc,
  getDocs,
  query,
  orderBy,
  where,
  onSnapshot,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
} from './init.js';

const postsRef = collection(db, 'post');
const postOrder = query(postsRef, orderBy('day', 'desc'), orderBy('hour', 'desc'));
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
export const getPosts = () => getDocs(postOrder);
export const onGetPost = (callback) => onSnapshot(postOrder, callback); // actualizar en tiempo real

export const postsUser = (callback) => {
  const userId = getLocalUser().uid;
  const q = query(collection(db, 'post'), where('uidUser', '==', userId), orderBy('day', 'desc'), orderBy('hour', 'desc'));
  onSnapshot(q, (callback));
};

export const hashtagPost = (callback) => {
  const hashtag = document.getElementById('search').value.toLowerCase();
  console.log(hashtag);
  const q = query(collection(db, 'post'), where('hashtag', 'array-contains-any', [hashtag]), orderBy('day', 'desc'), orderBy('hour', 'desc'));
  onSnapshot(q, (callback));
};

export const getdataUser = async (uid) => {
  const q = await getDocs(query(collection(db, 'user'), where('uid', '==', uid)));
  return q;
};
export const addLike = async (id, uidUser) => {
  try {
    await updateDoc(doc(db, 'post', id), {
      usersLikes: arrayUnion(uidUser),
    });
  } catch (error) {
    console.log(error);
  }
};
export const removeLike = async (id, uidUser) => {
  await updateDoc(doc(db, 'post', id), {
    usersLikes: arrayRemove(uidUser),
  });
};
export const deletePost = (id) => deleteDoc(doc(db, 'post', id));
