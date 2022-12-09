window.addEventListener('scroll', function(){
    var header=document.querySelector("header");
    header.classList.toggle("header_fixed",this.window.scrollY>0);
})