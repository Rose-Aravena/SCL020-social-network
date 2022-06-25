/* eslint-disable arrow-body-style */
import {
  auth,
  orderBy,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  provider,
  signInWithPopup,
  signOut,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  db,
  onSnapshot,
  updateDoc,
  arrayUnion,
  doc,
  arrayRemove,
} from '../src/firebase/init.js';
import {
  signInUser,
  createUser,
  loginGoogle,
  loginOut,
} from '../src/firebase/auth.js';
import {
  saveUser,
  savePost,
  getdataUser,
  postsUser,
  hashtagPost,
  addLike,
  removeLike,
} from '../src/firebase/firestore.js';

const userName = 'Potato';
const uid = 'iauiuanjahjaanh';
const email = 'admin@test.com';
const pass = 'admin123';
const titlePost = 'Hi';
const description = 'Nice to meet you';
const hashtag = ['#happy'];
const day = '24-06-2020';
const hour = '08:59:30';
const usersLikes = ['kjas77shajhauy7yah'];
const id = 'kajkjakjakjak';
const some = 'textInHastag';
const callback = 'someFunction';

jest.mock('../src/firebase/init.js', () => {
  return {
    auth: jest.fn(() => { // La funcion jest.fn <- Crea una funcion interceptada por JEST
      return { auth: 'TEST' };
    }),
    signInWithEmailAndPassword: jest.fn((auth, email, pass) => {
      if (!email || !pass) {
        throw new Error('ERROR');
      }
      Promise.resolve({ user: 'admin' });
    }),
    onAuthStateChanged: jest.fn(),
    collection: jest.fn(),
    orderBy: jest.fn(),
    query: jest.fn(),
    createUserWithEmailAndPassword: jest.fn((auth, email, pass) => {
      if (!email || !pass) {
        throw new Error('ERROR');
      }
      Promise.resolve({ user: 'admin' });
    }),
    signInWithPopup: jest.fn((auth, provider) => {
      if (!auth || !provider) {
        throw new Error('ERROR');
      }
      return Promise.resolve({ user: 'admin' });
    }),
    provider: jest.fn(),
    signOut: jest.fn((auth) => {
      if (!auth) {
        throw new Error('ERROR');
      }
      return Promise.resolve(undefined);
    }),
    addDoc: jest.fn(),
    getDocs: jest.fn(),
    where: jest.fn(),
    db: jest.fn(),
    doc: jest.fn(),
    updateDoc: jest.fn(),
    arrayUnion: jest.fn(),
    arrayRemove: jest.fn(),
    onSnapshot: jest.fn(),
  };
});

describe('Tests for the signInUser function', () => {
  // toHaveBeenCalled y toHaveBennCalledWith solo sirven para funcion Mock
  it('Should call signInWithEmailAndPassword', async () => {
    await signInUser(auth, email, pass);
    // Revisamos si durante la ejecucion de signInUser
    // se invoco la funcion singInWithEmailAndPassword
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Should call signInWithEmailAndPassword with the auth, email and pass arguments', async () => {
    await signInUser(auth, email, pass);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, pass);
  });

  it('Should throw an error if executed without arguments', async () => {
    try {
      await signInUser();
    } catch (error) {
      expect(error).toMatch('ERROR');
    }
  });
});
describe('Tests for the createUser function', () => {
  it('Should call createUserWithEmailAndPassword', async () => {
    await createUser(auth, email, pass);
    // Revisamos si durante la ejecucion de signInUser
    // se invoco la funcion singInWithEmailAndPassword
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
  it('Should call createUserWithEmailAndPassword with the auth, email and pass arguments', async () => {
    await createUser(auth, email, pass);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, pass);
  });
  it('Should throw an error if executed without arguments', async () => {
    try {
      await createUser();
    } catch (error) {
      expect(error).toMatch('ERROR');
    }
  });
});
describe(' Tests for the loginGoogle function', () => {
  it('Should call signInWithPopup', async () => {
    await loginGoogle(auth);
    expect(signInWithPopup).toHaveBeenCalled();
  });
  it('Should error in call loginGoogle without arguments', async () => {
    try {
      await loginGoogle();
    } catch (error) {
      expect(error).toMatch('ERROR');
    }
  });
});
describe('Test for the loginOut function', () => {
  it('Should call signOut', async () => {
    await loginOut(auth);
    expect(signOut).toHaveBeenCalled();
  });
  it('Should error in call sigOut without arguments', async () => {
    try {
      await loginOut();
    } catch (error) {
      expect(error).toMatch('ERROR');
    }
  });
});
describe('Test for the saveUser function', () => {
  it('Should call addDoc', async () => {
    await saveUser(userName, email, uid);
    expect(addDoc).toHaveBeenCalled();
  });
});
describe('Test for the savePost function', () => {
  it('Should call addDoc', async () => {
    await savePost(titlePost, description, hashtag, day, hour, uid, userName, usersLikes);
    expect(addDoc).toHaveBeenCalled();
  });
});
describe('Test for the getdataUser function', () => {
  it('Shoul call getDocs', async () => {
    await getdataUser(uid);
    expect(getDocs).toHaveBeenCalled();
  });
});
describe('Tests for the postUser function', () => {
  it('Should call onSnapshot', () => {
    postsUser(callback);
    expect(onSnapshot).toHaveBeenCalled();
  });
  it('Should call onSnapshot with the query reference argument', () => {
    const q = query(collection(db, 'post'), where('uidUser', '==', uid), orderBy('day', 'desc'), orderBy('hour', 'desc'));
    postsUser(uid, callback);
    expect(onSnapshot).toHaveBeenCalledWith(q, (callback));
  });
});
describe('Test for addLike function', () => {
  it('Should call updateDoc', async () => {
    await addLike(id, uid);
    expect(updateDoc).toHaveBeenCalled();
  });
});
describe('Test for removeLike function', () => {
  // const refDoc = doc(db, 'post', id);
  it('Should call updateDoc', async () => {
    await removeLike(id, uid);
    expect(updateDoc).toHaveBeenCalled();
  });
});
describe('Tests for the hashtagPost function', () => {
  it('Should call onSnapshot', () => {
    hashtagPost(some, callback);
    expect(onSnapshot).toHaveBeenCalled();
  });
  it('Should call onSnapshot with the query reference argument', () => {
    const q = query(collection(db, 'post'), where('hashtag', 'array-contains-any', [hashtag]), orderBy('day', 'desc'), orderBy('hour', 'desc'));
    hashtagPost(hashtag, callback);
    expect(onSnapshot).toHaveBeenCalledWith(q, (callback));
  });
});
