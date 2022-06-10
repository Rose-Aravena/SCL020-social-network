export const listAllPost = (data) => {
  let container = "";
  data.forEach(e => {
    container += // html
      `<div id="cardPost">
         <p id="tittle">${e.titlePost}</p>
         <p class="text">${e.description}</p>
         <p class="text">${e.hashtag}</p>
        <div id="dateLike">
          <p id="date">${e.day}</p>
          <span id="count">0</span>
          <picture id="like">
            <img id="patita" class ="no" src="./icons/patita.PNG">
          </picture>
        </div>
      </div>`
  });
  return container;
};
