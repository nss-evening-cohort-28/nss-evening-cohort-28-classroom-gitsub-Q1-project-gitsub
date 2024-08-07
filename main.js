const projects = [
  {
  id: 1,
  title: "dummyTitle",
  description: "Great dummy project. Real good. good stuff here",
  updatedTimeSig: "Updated 1,200 years ago",
  vis: true,
  },
]

// projectCount to show how many projects "open" in header
const projectCount = projects.length;

const projectsOnDom = () => {
  let domString = `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${projectCount} Open
      </div>
      <ul class="list-group list-group-flush">
  `;
  for (project of projects) {
    domString += `
        <li class="list-group-item">
          <div>
            ${project.title}
            ${project.vis}
            ${project.updatedTimeSig}
          </div>
          <div>
            ${project.description}
          </div>
        </li>
    `
  }
  domString += `
        </ul>
    </div>
  `
  renderToDom("#projects", domString);
}



// "domElement would be where you pass in your dom string variable"
const renderToDom = (divID, html) => {
  const targetDiv = document.querySelector(divID);
  targetDiv.innerHTML = html;
}

projectsOnDom();
