import { getUsers, getPost, getdataUser } from './firestore.js';

const query = (info) => {
  const allData = [];
  info.forEach((doc) => {
    allData.push(doc.data());//{name: papaitas, email...}
  });
  return allData;
};

export const arrayUsers = async () => {
  try {
    const response = await getUsers();
    const queryUser = query(response);
    return queryUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const arrayPosts = async () => {
  try {
    const response = await getPost();
    const queryPost = query(response);
    return queryPost;
  } catch (error) {
    console.log(error);
  }
};
export const getUserInfo = async (uid) => {
  try {
    const response = await getdataUser(uid);
    const queryUser = query(response);// [{name: kaka, email:kjaka, uid:kjakja}]
    return queryUser;
  } catch (error) {
    return error;
  }
};
