import { getUsers, getPost } from './firestore.js';

const query = (info) => {
    const allData = [];
    info.forEach((doc) => {
        allData.push(doc.data());
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
