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

    });
   
}
   navSlide();
   window.addEventListener('scroll',()=>{
var mynav=document.getElementById('mynav');
var listt=document.getElementById('listt');
    const scrolled=window.scrollY;
    var width = Math.max(window.screen.width, window.innerWidth);
    if (scrolled>=90 && width<769){
       mynav.classList.add('newnav');
    listt.style.background="rgba(0,0,0,0.8)";


     
    }
    if (scrolled<=150 && width<769){
        mynav.classList.remove('newnav');
        listt.style.background="rgba(0,0,0,0.4)";
     }
     if (scrolled>=90 && width>769){
        mynav.classList.add('newnav');

 
 
      
     }
     if (scrolled<=150 && width>796){
         mynav.classList.remove('newnav');
        
      }
   });