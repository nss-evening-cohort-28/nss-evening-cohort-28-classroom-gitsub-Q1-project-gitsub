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
  projectsOnDom();
  form.reset();
}

form = document.querySelector("#projectForm");
form.addEventListener("submit", createProject);

projectsOnDom();



const repos = [
{
id:1,
title:"dummyRepo1",
description:"red",
codingLang:"javaScript",
tags:"yellow",
updatedTimeSin:"",
issues:"broken",
vis:true,
forks:4,
stars:5,
},

{
id:2,
title:"dummyRepo2",
description:"green",
codingLang:"CSS",
tags:"round",
undatedTimeSin:"",
issues:"bugs",
vis:false,
forks:10,
stars:2,
},

{
id:3,
title:"dummyRepo3",
description:"brown",
codingLang:"html",
tags:"square",
updatedTimeSin:"",
issues:"merging",
vis:true,
forks:3,
stars:1,
},

{
  id:4,
  title:"dummyRepo4",
  description:"orange",
  codingLang:"python",
  tags:"oval",
  updatedTimeSin:"",
  issues:"merging",
  vis:true,
  forks:3,
  stars:1,
},

{
  id:5,
  title:"dummyRepo5",
  description:"brown",
  codingLang:"cSharp",
  tags:"square",
  updatedTimeSin:"",
  issues:"merging",
  vis:false,
  forks:3,
  stars:1,
},

{
  id:6,
  title:"dummyRepo6",
  description:"pink",
  codingLang:"react",
  tags:"octogon",
  updatedTimeSin:"",
  issues:"merging",
  vis:true,
  forks:3,
  stars:1,
},
]


const packages = [
{
id:1,
title:"devPort",
description:"",
},

{
id:2,
title:"viewPort",
description:"",
},

{
id:3,
 title:"packPage",
  description:"",
},
  
 {
 id:4,
 title:"poundGround",
  description:"",
  },
    
  {
  id:5,
  title:"elbowSwift",
  description:"",
  },
      
  {
  id:6,
 title:"patrolingPaw",
  description:"",
  },
        
]



