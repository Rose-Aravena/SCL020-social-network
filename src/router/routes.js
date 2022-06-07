/** @format */

import Home from '../views/home.js';
import CreatUser from '../views/creatUser.js';
import SignIn from '../views/signIn.js';
import creatPost from '../views/creatPost.js';
import post from '../views/post.js';
import myPost from '../views/myPost.js'
import search from '../views/search.js';

const routes = {
  '/': Home,
  '/createUser': CreatUser,
  '/signIn': SignIn,
  '/creatPost': creatPost,
  '/post': post,
  '/myPost': myPost,
  '/search': search,
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