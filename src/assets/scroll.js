window.addEventListener('scroll', function(){
    var header=document.querySelector(".header-nav");
    var space=document.querySelector(".ask_cover");
    header.classList.toggle("nav_fixed",this.window.scrollY>0);
    space.classList.toggle("ask_cover_space",this.window.scrollY>0);
});
var burger_menu=document.querySelector(".menu--burger-slider");
var burger=document.querySelector(".menu--burger");
var burger_close=document.querySelector(".burger-close");
var chatwp=document.querySelector(".chat_wpp");
burger.addEventListener("click",function(){
burger_menu.classList.add("open");
chatwp.classList.add("hidden");
});
burger_close.addEventListener("click", function(){
burger_menu.classList.remove("open");
chatwp.classList.remove("hidden");
});
