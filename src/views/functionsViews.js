export const listAllPost = (data) => {
  let container = "";
  data.forEach(e => {
    container += // html
      `<h1>${e.titlePost}</h1>
      <h4>${e.description}</h4>`
  });
  return container;
};

// tener el contenido del post con el uid del usuario que creo1 el post
// por cada uid hay que traer el nombre del usuario desde firetore
