let works = [
  { 
    category: " js, angular responsive",
    photo: "./img/kido.jpg",
    pagesLink: "https://github.com/ShymaaRagab/KidoGeek.git",
    title: "KidoGeek Website",
    description: "A responsive website for selling high-quality natural cosmetics and baby care products."
  },
  { 
    category: "HTML, css",
    photo: "./img/cosmatics.jpeg",
    pagesLink: "https://yasminabdllah.github.io/cosmatics/",
    title: "Cosmetics Website",
    description: "A simple website showcasing natural cosmetics and baby care products."
  },
  { 
    category: " js responsive",
    photo: "./img/todolist.jpeg",
    pagesLink: "https://yasminabdllah.github.io/toDOlist/",
    title: "To-Do List",
    description: "A daily task reminder app with a clean and responsive interface."
  },
  { 
    category: " js responsive",
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
  { 
    category: " js Bootstrap responsive",
    photo: "./img/aboutpage.jpeg",
    pagesLink: "https://yasminabdllah.github.io/challenge4/",
    title: "About Page",
    description: "A responsive about page designed with Bootstrap for a clean and professional look."
  },
  { 
    category: " js Bootstrap responsive",
    photo: "./img/yummy.jpeg",
    pagesLink: "https://yasminabdllah.github.io/yummy/",
    title: "Yummy Home Web",
    description: "A visually appealing home page for a food-related website."
  },
  { 
    category: "js",
    photo: "./img/q$a.jpeg",
    pagesLink: "https://yasminabdllah.github.io/challenge2/",
    title: "Q&A",
    description: "A simple Q&A page showcasing JavaScript functionality."
  },
  { 
    category: "js",
    photo: "./img/nav.jpeg",
    pagesLink: "https://yasminabdllah.github.io/challenge1/",
    title: "Navigation Par",
    description: "A basic nav bar design using js."
  },
  { 
    category: "js",
    photo: "./img/timer.jpeg",
    pagesLink: "https://yasminabdllah.github.io/timer/",
    title: "Timer",
    description: "A simple timer application built with JavaScript."
  }
];



let workContainer=document.getElementById('workContainer');
function worKs(filteredArray){

    for(let x=0; x<filteredArray.length; x++){
      console.log(filteredArray)
       
        workContainer.innerHTML+=`
        
        <div class="col-lg-3 col-md-5 col-sm-10 justify-content-center">
            
                  <div class="card catigory-card mb-5"  style="cursor: pointer;">
                   
                    <img src=${filteredArray[x].photo} class="card-img-top mb-4" alt="..." />

                
                    <div class="card-body py-0">
                      <h4 text-danger class="card-title text-capitalize fw-semibold mb-4">${filteredArray[x].title}</h4>
                      <p class="card-text" style="height: 50px; font-size: 0.66rem; overflow: hidden;">
                      ${filteredArray[x].discription}
                       
                      </p>
                      
                      
                       
                      </div>
                      <div>
                        
                      <a href="${works[x].pagesLink}" target="_blank" class="btn btn-primary">View Demo</a>
                       
                        
                        
                      </div>
                    </div>
        `
       

    }


}
;






/*const buttons = document.getElementsByTagName("button");

for (let button of buttons) {
  button.addEventListener('click', function () {
    let category = this.id; 
    container.innerHTML=''
    filterByCatigery(category); 
   
  });
}*/
let filteredWorks;

function filterByCatigery(catigory){
   workContainer.innerHTML='';
    if(catigory=="all"){
      
        filteredWorks=works;
        worKs(filteredWorks);

    }
    else{
      filteredWorks=works.filter(item=>item.category.includes(catigory));
      worKs(filteredWorks);
        
    }
    
    }
    
    


;
filterByCatigery("all")