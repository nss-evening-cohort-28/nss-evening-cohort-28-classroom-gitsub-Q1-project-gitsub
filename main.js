import { repositories } from "./data.js";
import { repositoryCards } from "./components/repositoryCards.js";

/*
===================== Repository List =====================
*/

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
