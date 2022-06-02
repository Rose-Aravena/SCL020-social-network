/** @format */

import Home from '../views/home.js';
import CreatUser from '../views/creatUser.js';
import SignIn from '../views/signIn.js';
import Papitas from '../views/papitas.js';
import post from '../views/post.js';

const routes = {
  '/': Home,
  '/createUser': CreatUser,
  '/signIn': SignIn,
  '/papitas': Papitas,
  '/post': post,
};

const onNavigate = (pathname) => {
  // "/papitas"
  window.history.pushState({}, pathname, window.location.origin + pathname);
  routes[pathname]();
};
export { routes, onNavigate };
