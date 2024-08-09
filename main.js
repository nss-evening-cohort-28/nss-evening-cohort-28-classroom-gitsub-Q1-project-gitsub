import { pinnedRepos } from "../pinnedRepos.js";
import { repos } from "../reposArray.js";
import { projects } from "../projects.js";

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
