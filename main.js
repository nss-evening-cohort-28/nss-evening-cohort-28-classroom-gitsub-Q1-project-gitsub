import { repositories } from "./data.js";
import { repositoryCards } from "./components/repositoryCards.js";

/*
===================== Repository List =====================
*/

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
repositoryCards(repositories);

// Event listeners
const repoForm = document.querySelector('#target-repo-form'); // Targeting the form.
repoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createRepository();
  repoForm.reset();
});

const searchRepoForm = document.querySelector('#find-a-repo-form');
searchRepoForm.addEventListener('keyup', search);

const displayPinnedRepositories = () => {
  // Get the div where pinned repositories will be displayed
  const pinnedRepoList = document.getElementById('pinned-repos');

  // Filter pinned repositories
  const pinnedRepos = repositories.filter(repo => repo.pinned);

  repositoryCards(pinnedRepos);

  // // Clear the div before adding new content
  // pinnedRepoList.innerHTML = '';

  // // Loop through pinned repositories and create elements
  // pinnedRepos.forEach(repo => {
  //   const repoCard = document.createElement('div');
  //   repoCard.className = 'repo-card';
  //   repoCard.innerHTML = `
  //     <h3>${repo.name}</h3>
  //     <p>${repo.description}</p>
  //   `;
  //   pinnedRepoList.appendChild(repoCard);
  // });
};

// Call the function to display pinned repositories on page load
displayPinnedRepositories();
