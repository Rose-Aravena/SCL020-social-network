import { addDoc, collection, db } from "./init.js";

export const savePost = (description) =>{
addDoc(collection(db, "post"), { description })
};



