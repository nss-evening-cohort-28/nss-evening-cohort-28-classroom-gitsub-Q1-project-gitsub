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
        <button type="button">Favorite</button>
      </div>

      <hr></hr>
    </div>`;
  });
  renderToDom('.render-repos-here', domString);
};
