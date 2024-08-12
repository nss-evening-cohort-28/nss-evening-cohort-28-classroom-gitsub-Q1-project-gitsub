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