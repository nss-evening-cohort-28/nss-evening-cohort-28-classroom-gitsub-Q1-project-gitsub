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
    <div id="projectCards" class="card">
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
            ${project.vis ? "Public" : "Private"}
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



// Injecting the profile into the dom
const profileDom = document.querySelector(".profile")
profileDom.innerHTML = `
          <div class="top-section">
            <img src="https://media.tenor.com/GliBTZeL1kQAAAAM/%D0%BC%D0%BE%D0%B9-%D0%B4%D0%B5%D0%B4.gif" class="card-img-top" >
            <div class="profile-info">
            <h3>NoCaToMa BaDeCuAl</h3>
            <h4>@best_team_ever</h4>  
            <h5>Building tech to elevate people, Founder of Level Up FE/JS group for cohort E28!</h5>
            </div>
            <div class="profile-section-buttons">
              <div class="d-grid gap-2 d-md-block">
                <button class="btn btn-primary" type="button">Follow</button>
                <button class="btn btn-primary" type="button">♡ Sponsor</button>
                <button class="btn btn-primary" type="button">...</button>
              </div>
            </div>
            <div class="profile-body">
              <p>👤 1.8k followers • 27 following • ⭐️ 329</p>
              <p>📍 Nashville, TN</p>
              <p>📧level-up@nss.com</p>
              <p>🔗 www.nashvillesoftwareschool.com</p>
              <p>🐦 NSS/x.com</p>
            </div>
          </div>
          <div class="middle-section">
            <h4>Highlights</h4>
            <p>❄️ Arctic Code Vault Contributor</p>
            <p>⭐️ Github Star</p>
            <p>🌟 PRO</p>
          </div>
          <div class="bottom-section">
            <h4>Sponsors</h4>
            <br>
            <img src="https://avatars.githubusercontent.com/u/31261276?s=100&v=4" class="sponsor-pic">
            <img src="https://avatars.githubusercontent.com/u/137121714?s=100&v=4" class="sponsor-pic">
            <img src="https://avatars.githubusercontent.com/u/173638175?s=100&v=4" class="sponsor-pic">
            <img src="https://avatars.githubusercontent.com/u/107224963?s=100&v=4" class="sponsor-pic">
          </div>
`;

// Injecting footer into DOM
const footerDom = document.querySelector(".footer");
footerDom.innerHTML = `
              <div class="footer-links">
                <p>©2024 Github, Inc.</p>
                <a id="footer-tag" href="">Terms</a>
                <a id="footer-tag" href="">Privacy</a>
                <a id="footer-tag" href="">Security</a>
                <a id="footer-tag" href="">Status</a>
                <a id="footer-tag" href="">Help</a>
                <img src="https://cdn-icons-png.flaticon.com/256/889/889111.png" class="footer-pic">
                <a id="footer-tag" href="">Contact Github</a>
                <a id="footer-tag" href="">Pricing</a>
                <a id="footer-tag" href="">API</a>
                <a id="footer-tag" href="">Training</a>
                <a id="footer-tag" href="">Blog</a>
                <a id="footer-tag" href="">About</a>
              </div>
`
