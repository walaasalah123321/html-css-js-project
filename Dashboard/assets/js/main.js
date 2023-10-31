let list = document.querySelectorAll(".navigator ul li");
function active(){
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
    
}
list.forEach((item) => item.addEventListener("mouseover",active));
//toggle
let navigator=document.querySelector(".navigator");
let main=document.querySelector(".main");
let toggle=document.querySelector(".toggle");
toggle.onclick=function(){
    navigator.classList.toggle("active");
    main.classList.toggle("active");

}

