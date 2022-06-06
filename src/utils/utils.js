/** @format */

const replaceHTML = (template) => {
  const root = document.getElementById('root');
  root.innerHTML = template;
};

const saveLocalUser = (user) => {
  window.localStorage.currentUser = JSON.stringify(user);
};

const getLocalUser = () => {
  return JSON.parse(window.localStorage.currentUser);
};

export { replaceHTML, saveLocalUser, getLocalUser };
