/** @format */

import Home from '../views/home.js';
import CreatUser from '../views/creatUser.js';
import SignIn from '../views/signIn.js';
import Papitas from '../views/papitas.js';
import post from '../views/post.js';

const routes = {
  '/': Home, // { func: Home, id: 1 },
  '/createUser': CreatUser, // { func: CreatUser, id: 2 },
  '/signIn': SignIn, // { func: SignIn, id: 3 },
  '/papitas': Papitas,
  '/post': post,
};

const onNavigate = (pathname) => {
  // "/papitas"
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname);
  routes[pathname]();
  // routes[pathname].func();
};
window.onpopstate = () => {
  console.log(window.location.pathname);
  routes[window.location.pathname]();
};
export { routes, onNavigate }