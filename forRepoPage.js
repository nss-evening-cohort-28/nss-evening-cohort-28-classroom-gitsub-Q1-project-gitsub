import { repositories } from "./data.js";
import { repositoryCards } from "./components/repositoryCards.js";
import { renderToDom } from "./utils/renderToDom.js";

// Collect the form data.
const createRepository = () => {
  const newRepository = {
    id: repositories.length + 1,
    name: document.querySelector('#repo-name').value,
    description: document.querySelector('#repo-description').value,
    // stackTools: document.querySelector(''),
    // repoStats: document.querySelector(''),
  };

  // Push object to the repositories array.
  repositories.push(newRepository);

  // Render the repos array.
  repositoryCards(repositories);
};

// Search
const search = (e) => {
  // Keeps track of each keystroke if you console.log it.
  const userInput = e.target.value.toLowerCase();
  // Here I'm using the array.filter method to check if an object includes any matches to what the user typed, stored inside a varioble. 
  const searchResults = repositories.filter(obj => 
    // One of these will evaluate to true.
    obj.name.toLowerCase().includes(userInput)
  );
  // Pass in searchResults since that's the array that's filtered.
  repositoryCards(searchResults);
};

// Render the cards on first page load.
const renderCards = (array) => {
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
  renderToDom('.render-repos-here', domString);
}

// Start page
renderCards(repositories);

// Event listeners
const repoForm = document.querySelector('#target-repo-form'); // Targeting the form.
repoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createRepository();
  repoForm.reset();
});

const searchRepoForm = document.querySelector('#find-a-repo-form');
searchRepoForm.addEventListener('keyup', search);
