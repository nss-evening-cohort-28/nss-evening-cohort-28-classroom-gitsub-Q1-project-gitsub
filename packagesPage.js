const packages = [
    {
      id: 1,
      imageUrl: "https://hub.docker.com/api/media/repos_logo/v1/library%2Fdocker",
      company: "Docker",
      description: "A software platform used for building applications based on containers-small and lightweight execution environments.",
    },
    {
      id: 2,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDly3aBidr0p3ve5jYINf42dSFnsPthVUrpqi_vivMZjPYX5PSiuCFRP7WDn5V6yTA9Hk&usqp=CAU",
      company: "Apache Maven",
      description: "A default package manager used for Java programming language and the Java runtime environment.",
    },
    {
      id: 3,
      imageUrl: "https://download.logo.wine/logo/NuGet/NuGet-Logo.wine.png",
      company: "NuGet",
      description: "A free and open source package manager used for the Microsoft development platforms including .NET.",
    },
    {
      id: 4,
      imageUrl: "https://avatars.githubusercontent.com/u/208761?v=4",
      company: "RubyGems",
      description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
    },
    {
      id: 5,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvnDnmpZlCDba5cQN5SHw8J_S0GZgfOoQUmgQkGe0S5StUjiWQwgK4iHWLw&s",
      company: "npm",
      description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.",
    },
    {
      id: 6,
      imageUrl: "https://hub.docker.com/api/media/repos_logo/v1/library%2Fdocker",
      company: "Containers",
      description: "A single place for your team to manage Docker images and decide who can see and access your images.",
    }
]
    //This utility function allows the user to add or update information
     //to any id within the html or js and put it on the internet page
  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };
  
  const cardsOnDom = (packages) => {
    let domString = "";
    for (const package of packages) {
      domString += `<div class="col-sm-6">
      <div class="card">
        <image src=${package.imageUrl} class="card-img-top" alt=${package.company}>
        <div class="card-body">
          <h5 class="card-title">${package.company}</h5>
          <p class="card-text">${package.description}</p>
          <a href="#" class="btn btn-primary">Learn More</a>
        </div>
      </div>
      </div>`;
    }  
      //Places all the information from the app and puts it on the DOM
      renderToDom("#packagePage.container1", domString);
    };
    //Allows user to access an element within the form
    const packageForm = document.querySelector("packageForm");

      //Function that takes the values to the form and pushes the new package to the array
    const createPackage = (e) => {
      e.preventDefault(); //Used every time you create a form
    
      const newPackage = {
        id: packages.length + 1,
        imageUrl: document.querySelector("#imageUrl").value,
        company: document.querySelector("#company").value,
        description: document.querySelector("#description").value,
      }
    //Adds new pet from the input form and adds new package card to the DOM and clears out the form
      packages.push(newPackage);
      cardsOnDom(packages);
      form.reset();
    }

      //When the submit button is pressed it instigates the create package function
    form.addEventListener('submit', createPackage);

      //Targets the app div
    const packagePage = document.querySelector("#packagePage");

    const startpackagePage = () => {
      cardsOnDom(packages);
    }

    startpackagePage();
