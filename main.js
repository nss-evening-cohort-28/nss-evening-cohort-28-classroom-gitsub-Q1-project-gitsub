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
