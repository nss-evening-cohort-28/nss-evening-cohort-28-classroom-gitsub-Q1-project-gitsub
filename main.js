import { pinnedRepos } from "../pinnedRepos.js";
import { repos } from "../reposArray.js";
import { projects } from "../projects.js";

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// for (const project of array) {
//   <div class="card" style="width: 40rem;">
//     <ul class="list-group list-group-flush">
//       <div class = "projectsRow">
//         <li class="list-group-item">${project.name}</li>
//         <li class="list-group-item">${project.description}</li>
//       </div>
//     </ul>
//   </div>
// }
