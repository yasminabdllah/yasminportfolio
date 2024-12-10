let sErveces=[
    {photo: 'img/code 3.png' ,
      name:"Custom Web Application Development",
      description:"Develop tailored web applications using Angular that meet specific business or client needs, focusing on user experience and performance."
    },
    {photo:"img/code2.png",
      name:"Single Page Applications (SPAs)",
    description:"Build efficient SPAs that provide a seamless user experience without full-page reloads, leveraging Angular's dynamic routing and data binding."
  },
  {photo:"img/Codepen-512.webp",
    name:"Responsive Design Implementation",
  description:"Ensure websites and applications are fully responsive, providing an optimal viewing experience across devices, using CSS, Bootstrap, and Angular's built-in tools."
},
{ photo:"img/code4.png",
  name:"Performance Optimization",
description:"Optimize web applications for speed and performance by minimizing bundle sizes, lazy loading, and other Angular optimization techniques."
}

  ]

  let works=[ 
    { 
      category: "HTML, css",
      photo: "./img/cosmatics.jpeg",
      pagesLink: "https://yasminabdllah.github.io/cosmatics/",
      title: "Cosmetics Website",
      description: "A simple website showcasing natural cosmetics and baby care products."
    },
    { 
      category: " JS, responsive",
      photo: "./img/todolist.jpeg",
      pagesLink: "https://yasminabdllah.github.io/toDOlist/",
      title: "To-Do List",
      description: "A daily task reminder app with a clean and responsive interface."
    },
    { 
      category: " JS, responsive",
      photo: "./img/menu.png",
      pagesLink: "https://yasminabdllah.github.io/challende3/",
      title: "Yummy Menu Page",
      description: "A responsive menu page for showcasing delicious food items."
    },
    { 
      category: "HTML css",
      photo: "./img/htmlcss.jpeg",
      pagesLink: "https://yasminabdllah.github.io/page/",
      title: "Simple AJAX Website",
      description: "A basic website featuring high-quality cosmetics and baby care products."
    },
  ];
  let workContainerhome=document.getElementById("workContainerhome")
  function workss(){
  
    for(let x=0; x<works.length; x++){
      console.log(works)
       
        workContainerhome.innerHTML+=`
        
        <div class="col-lg-3 col-md-5 col-sm-10 justify-content-center">
            
                  <div class="card catigory-card mb-5"  style="cursor: pointer;">
                   
                    <img src=${works[x].photo} class="card-img-top mb-4" alt="..." />
  
                
                    <div class="card-body py-0">
                      <h4 text-danger class="card-title text-capitalize fw-semibold mb-4">${works[x].title}</h4>
                      <p class="card-text" style="height: 50px; font-size: 0.66rem; overflow: hidden;">
                      ${works[x].description}
                       
                      </p>
                      
                      
                       
                      </div>
                      <div>
                        
                      <a href="${works[x].pagesLink}" target="_blank" class="btn btn-primary">View Demo</a>
                       
                        
                        
                      </div>
                    </div>
        `
       
  
    }
  
  
  };
  workss();










let ServiceContainer=document.getElementById("ServiceContainer");
function serviceCard(){
    for(let i=0;i<sErveces.length ;i++){
        ServiceContainer.innerHTML+=`
      
        <div class="col-md-5 py-3 sercard" >
         <img class="mb-3 ph" src="${sErveces[i].photo}">
         <h5 class="mb-4">${sErveces[i].name}</h5>
         <p>${sErveces[i].description}</p>
                    
        </div>
        
                    

        
        `
    }
}
serviceCard();

const navLinks = document.querySelectorAll("ul li a");
 c

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    console.log("hello")
    navLinks.forEach(link => link.classList.remove("active")); 
    this.classList.add("active"); 
  });
});
