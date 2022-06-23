import { auth, signInWithEmailAndPassword } from '../src/firebase/init.js';
import { signInUser } from '../src/firebase/auth.js';

jest.mock('../src/firebase/auth.js', () => {
  return {
    auth: jest.fn(() => { // La funcion jest.fn <- Crea una funcion interceptada por JEST
      return { auth: 'TEST' };
    }),

    signInWithEmailAndPassword: jest.fn((auth, email, password) => {
      if (!email || !password) {
        throw new Error('ERROR');
      }

      Promise.resolve({ user: 'admin' });
    }),
  };
});

describe('Tests for the signInUser function', () => {
  const email = 'admin@test.com';
  const pass = 'admin123';

  // toHaveBeenCalled y toHaveBennCalledWith solo sirven para funcion Mock
  it('Should call signInWithEmailAndPassword', async () => {
    await signInUser(email, pass);
    // Revisamos si durante la ejecucion de signInUser
    // se invoco la funcion singInWithEmailAndPassword
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Should call signInWithEmailAndPassword with the auth, email and pass arguments', async () => {
    await signInUser(email, pass);
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
