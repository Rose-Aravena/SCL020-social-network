/** @format */

import Home from '../views/home.js';
import CreatUser from '../views/creatUser.js';
import SignIn from '../views/signIn.js';
import creatPost from '../views/creatPost.js';
import post from '../views/post.js';

const routes = {
  '/': Home,
  '/createUser': CreatUser,
  '/signIn': SignIn,
  '/creatPost': creatPost,
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