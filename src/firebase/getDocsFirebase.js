import { getUsers, getPost, getdataUser } from './firestore.js';

const query = (info) => { // recorre data y trae campos especificados 
  const allData = [];  // (guarda dentro de un array) (metodo firestore)
  info.forEach((doc) => {
    
    allData.push(doc.data());//{name: papaitas, email...}
  });
  return allData;
};

export const arrayUsers = async () => { // array de los usuarios db (traido con el metodo anterior)
  try {
    const response = await getUsers();
    const queryUser = query(response);
    return queryUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// export const arrayPosts = async () => { // array de los post db (traido con el metodo anterior)
//   try {
//     const response = await getPost();
//     const queryPost = query(response);
//     console.log(queryPost.id)
//     return queryPost;
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getUserInfo = async (uid) => { // trae la info del usuario que le pidamos con el uid dentro de un array
  try {                                     // usado en auth
    const response = await getdataUser(uid);
    const queryUser = query(response); 
    return queryUser;
  } catch (error) {
    return error;
  }
};
