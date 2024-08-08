const projects = [
  {
  id: 1,
  title: "dummyTitle",
  description: "Great dummy project. Real good. good stuff here",
  updatedTimeSig: "Updated 1,200 years ago",
  vis: true,
  },
  {
    id: 2,
    title: "dummy2",
    description: "This is a description",
    updatedTimeSig: "Updated 1 second ago",
    vis: true,
  },
]

// projectCount to show how many projects "open" in header
const projectCount = projects.length;

let domString = "";

// Renders the project cards onto the dom from the projects array
const projectsOnDom = () => {
  domString = `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${projectCount} Open
      </div>
      <ul class="list-group list-group-flush">
  `;
  for (project of projects) {
    domString += `
        <li class="list-group-item">
          <div id="titleEl">
            ${project.title}
          </div>
          <div id="visEl">
            ${project.vis}
          </div>
          <div id="timeSigEl">
          ${project.updatedTimeSig}
          </div>
          <div id="descEl">
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



// Renders arguments to the dom. divID is the target div you want to inject the html. "html" would be your "domString"
const renderToDom = (divID, html) => {
  const targetDiv = document.querySelector(divID);
  targetDiv.innerHTML = html;
}


// Create, the "C" in CRUD
form = document.querySelector("#projectForm")

const createProject = (e) => {
e.preventDefault(); // stops page from refreshing
  const newProjectObject = {
      id: projects.length + 1,
      title: document.querySelector("#projectNameInput").value,
      description: document.querySelector("#descInput").value,
      updatedTimeSig: "Updated 1 minute ago",
      vis: "Public",
      };

  projects.push(newProjectObject);
  //projectsOnDom();
  renderToDom("#projects", domString);
  form.reset();
}

const submitForm = document.querySelector("#projectForm");
submitForm.addEventListener("submit", createProject);

projectsOnDom();
