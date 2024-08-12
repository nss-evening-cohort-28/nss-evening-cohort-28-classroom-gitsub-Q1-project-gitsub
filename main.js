import { repositories } from "./data.js";
import { repositoryCards } from "./components/repositoryCards.js";
import { renderToDom } from "./utils/renderToDom.js";



/*
===================== Repository List =====================
*/

const displayPinnedRepositories = () => {
  // Filter pinned repositories
  const pinnedRepos = repositories.filter(repo => repo.pinned);

  // Create HTML content for pinned repositories
  let content = '';
  pinnedRepos.forEach(repo => {
    content += `
      <div class="repo-card">
        <h3>${repo.name}</h3>
        <p>${repo.description}</p>
      </div>
    `;
  });

  // Render the content to the DOM
  renderToDom('#pinned-repos', domString);
};

// Call the function to display pinned repositories on page load
document.addEventListener('DOMContentLoaded', displayPinnedRepositories);
