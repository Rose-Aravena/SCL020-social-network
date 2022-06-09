/** @format */

const replaceHTML = (template) => {
  const root = document.getElementById('root');
  root.innerHTML = template;
};

const saveLocalUser = (user) => {
  window.localStorage.currentUser = JSON.stringify(user);
  return window.localStorage.currentUser;
};

const getLocalUser = () => {
  return JSON.parse(window.localStorage.currentUser);
};

export { replaceHTML, saveLocalUser, getLocalUser };
