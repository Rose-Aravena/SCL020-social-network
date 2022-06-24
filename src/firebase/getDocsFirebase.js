import { getUsers, getdataUser } from './firestore.js';

const query = (info) => { // recorre data y trae campos especificados
  const allData = []; // (guarda dentro de un array) (metodo firestore)
  info.forEach((doc) => {
    allData.push(doc.data()); // {name: papaitas, email...}
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

export const getUserInfo = async (uid) => {
  try {
    const response = await getdataUser(uid);
    const queryUser = query(response);
    return queryUser;
  } catch (error) {
    return error;
  }
};
