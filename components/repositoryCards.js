import { renderToDom } from "../utils/renderToDom.js";

export const repositoryCards = (array) => {
  let domString = '';

  // TODO: Render the tools and icon dynamically
  array.forEach(obj => {
    domString += `
    <div class="repo-card row" id="repoCardID--${obj.id}">
      <div class="col-10 repository-info-col">
        <h3 class="my-3">${obj.name}</h3>
        <p>${obj.description}</p>
        <ul class="tools-buttons">
          <li>tool 1</li>
          <li>tool 2</li>
          <li>tool 3</li>
          <li>tool 4</li>
        </ul>

        <ul class="repo-stats">
          <!-- TODO: Replace these with icons -->
          <li>Language</li>
          <li>Stars</li>
          <li>Forks</li>
          <li>Last updated</li>
        </ul>
      </div>

      <div class="col-2 favorite-btn-col">
        <button type="button" id="favorite-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
          </svg>
        </button>
      </div>

      <hr class="my-3"></hr>
    </div>`;
  });
  renderToDom('#pinned-repos', domString);

  // Event Listeners
  // TODO: Need to figure out how to toggle the state multiple times. So far it only fills the star only on the first repo. I think event bubbling is needed here.
  const favoriteBtn = document.querySelector('#favorite-btn');
  favoriteBtn.addEventListener('click', () => {
    console.log(favoriteBtn);
    favoriteBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>`;
  });
};
