

const navSlide = () => {
    const lineone=document.querySelector('.line1');
    const linetwo=document.querySelector('.line2');
    const linethree=document.querySelector('.line3');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click',()=>{
nav.classList.toggle('nav-active');
nav.classList.toggle('nav-activee');
lineone.classList.toggle('linee');
linetwo.classList.toggle('lineee');
linethree.classList.toggle('lineeee');
burger.classList.toggle('rotatee');

window.addEventListener('scroll',()=>{
  if(nav.classList.contains('nav-active')){

   window.scrollTo(0,0);
  }
})

    });
   
}
   navSlide();


   window.addEventListener('scroll',()=>{
var mynav=document.getElementById('mynav');
var listt=document.getElementById('listt');
var svgg=document.getElementById('layer');
    const scrolled=window.scrollY;
    var width = Math.max(window.screen.width, window.innerWidth);
    if (scrolled>=50 && width<769){
       mynav.classList.add('newnav');
    listt.style.background="rgba(0,0,0,0.8)";
   
    }
    if (scrolled<=120 && width<769){
        mynav.classList.remove('newnav');
        listt.style.background="rgba(0,0,0,0.8)";
      
     }





     if (scrolled>=90 && width>769){
        mynav.classList.add('newnav');
        

svgg.style.opacity="1";

 
      
     }
     if (scrolled<=50 && width>796){
         mynav.classList.remove('newnav');
        
        
        
        
        
          
      }
      if (scrolled>=10 && width<769){
   
     svgg.style.opacity="1";
      svgg.style.fontSize="2.6rem";
      svgg.style.opacity="0.6"
     }
   });








   filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

