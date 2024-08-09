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

repositoryCards(repositories);

// Event listeners
const repoForm = document.querySelector('#target-repo-form'); // Targeting the form.
repoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createRepository();
  repoForm.reset();
});
