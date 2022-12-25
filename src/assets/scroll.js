window.addEventListener('scroll', function(){
    var header=document.querySelector(".header-nav");
    var space=document.querySelector(".ask_cover");
    header.classList.toggle("nav_fixed",this.window.scrollY>0);
    space.classList.toggle("ask_cover_space",this.window.scrollY>0);
});