/** @format */

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, doc } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js';

import config from './config.js';

initializeApp(config);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const app = initializeApp(config);
const db = getFirestore(app);
auth.languageCode = 'es';

export {
  initializeApp,
  createUserWithEmailAndPassword,
  auth,
  provider,
  signInWithPopup,
  signOut,
  getFirestore,
  collection,
  addDoc,
  db,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  doc,
  getDocs,
};
