//Hambruger button for mobile

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const bar = document.querySelector(".hamburger .bar")

let open = false;
hamburger.addEventListener("click", ()=>{
  open = !open;
  if(open){
    navList.classList.add("active");
    bar.classList.add("active");
  }else{
    navList.classList.remove("active"); 
    bar.classList.remove("active");
  }
  
}) 