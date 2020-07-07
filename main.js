//Hambruger button for mobile

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const bar = document.querySelector(".hamburger .bar")
const menuItems = document.querySelectorAll(".nav-list ul li a");

menuItems.forEach(element =>{
  element.addEventListener("click",()=>{
    navList.classList.toggle("active");
    bar.classList.toggle("active");
  })
})

hamburger.addEventListener("click", ()=>{
    navList.classList.toggle("active");
    bar.classList.toggle("active");
}) 




document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if(window.innerWidth > 1200){
      if (scroll_position > 250) {
      document.querySelector(".nav-list").style.backgroundColor = '#4f4a4a';
    } else {
      document.querySelector(".nav-list").style.backgroundColor = 'transparent';
    }
  }
  
});

if(window.innerWidth < 1200){
  document.querySelector(".nav-list").style.backgroundColor = '#4f4a4a';
}

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);