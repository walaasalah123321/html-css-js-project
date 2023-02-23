let landing_page=document.querySelector(".landing_page")
let arraycolor=["two","three","four","five","six","seven","one"]
let num=6
function play(){
    num=Math.floor(Math.random()*arraycolor.length)
        
    landing_page.style.background="url(image/" + arraycolor[num] +".jpg)"
    localStorage.setItem("image",num)
}

if(localStorage.getItem("image")){
    num=localStorage.getItem("image")
    landing_page.style.background="url(image/" + arraycolor[num] +".jpg) no-repeat"
}

let background= setInterval(play,4000)
let hidden=document.querySelector(".hidden")
let setting=document.querySelector(".setting div")
let icon=document.querySelector(".setting i")
setting.onclick=function(){
    hidden.classList.toggle("visable")
    setting.classList.toggle("left")
    icon.classList.toggle("fa-spin")
}
let list =document.querySelectorAll(".hidden li")
list.forEach(item=>{
item.onclick=function(){
    
    list.forEach(delet=>{
        delet.classList.remove("active")
    })
    item.classList.add("active")

    localStorage.setItem("color",item.getAttribute("color"))
    
    document.documentElement.style.setProperty("--main_color",item.getAttribute("color"))
}
})
if(localStorage.getItem("color")){
    list.forEach(delet=>{
        if(delet.getAttribute("color")!=localStorage.getItem("color"))
        delet.classList.remove("active")
        else{
            delet.classList.add("active")

        }
    })
    document.documentElement.style.setProperty("--main_color",localStorage.getItem("color"))
}
let yes=document.querySelector(".yes")
let no=document.querySelector(".no")

if(localStorage.getItem("background")==null)
{
    localStorage.setItem("background" ,"yes")

}
else if(localStorage.getItem("background" )=="yes"){
     background= setInterval(play,4000)

    yes.classList.add("active_option")
       no.classList.remove("active_option")
}
else{
    clearInterval(background)
    no.classList.add("active_option")
       yes.classList.remove("active_option")
       landing_page.style.background="url(image/" + arraycolor[num] +".jpg)"

}

yes.onclick=function(){
     background= setInterval(play,4000)

    yes.classList.add("active_option")
    no.classList.remove("active_option")
    localStorage.setItem("background" ,"yes")
}
no.onclick=function(){
    clearInterval(background)
    landing_page.style.background="url(image/" + arraycolor[num] +".jpg)"

 no.classList.add("active_option")
    yes.classList.remove("active_option")
    localStorage.setItem("background" ,"no")
    
}
let skill=document.querySelector(".skill_box")
let process=document.querySelectorAll(".skill_process span")
console.log(window.pageYOffset)

window.onscroll= function(){
    //window.pageYOffset ==scroll top 
    if(window.pageYOffset+window.innerHeight>(skill.offsetHeight+skill.offsetTop)){
process.forEach(item =>{
let width_item=item.getAttribute("data-process")
    item.style.width=width_item
    
})}
else{
    process.forEach(item =>{
        item.style.width= 0
        
    })
}
   
}


let bullet_yes=document.querySelector(".show_bullet .yes")
let bullet_no=document.querySelector(".show_bullet .no")
let bullet_show=document.querySelector(".nav_bullet")
bullet_yes.onclick=function(){
bullet_show.style.display="block"
bullet_no.classList.remove("active_option")
bullet_yes.classList.add("active_option")
localStorage.setItem("bullet","yes")
}
bullet_no.onclick=function(){
    bullet_show.style.display="none"
    bullet_yes.classList.remove("active_option")
    bullet_no.classList.add("active_option")
    localStorage.setItem("bullet","no")
}
if(localStorage.getItem("bullet")==null){
    localStorage.setItem("bullet","yes")
}
if(localStorage.getItem("bullet")=="yes"){
    bullet_show.style.display="block"
bullet_no.classList.remove("active_option")
bullet_yes.classList.add("active_option")
localStorage.setItem("bullet","yes")
}
else{
    bullet_show.style.display="none"
    bullet_yes.classList.remove("active_option")
    bullet_no.classList.add("active_option")
    localStorage.setItem("bullet","no")
}
let reset=document.querySelector(".hidden button")
reset.onclick=function(){
    localStorage.removeItem("bullet")
    localStorage.removeItem("background")
    localStorage.removeItem("color")
    window.location.reload()

}


let click_image=document.querySelectorAll(".gallary img")
click_image.forEach(item=>{
    item.onclick=function(){
        let overlay=document.createElement("div")
        overlay.className="popup"
        document.body.appendChild(overlay)
        let pop_box=document.createElement("div")
        pop_box.classList="popup_box"
        let pop_imag=document.createElement("img")
        pop_imag.src=item.src
        if(item.src!=null){
            let text=document.createElement("h3")
            let text_alt=document.createTextNode(item.alt)
            text.appendChild(text_alt)
            pop_box.append(text)
        }
        pop_box.appendChild(pop_imag)

        document.body.appendChild(pop_box)
        let delet =document.createElement("i")
        delet.className="fas fa-times "
        document.body.appendChild(delet)


delet.onclick=function(){
    overlay.remove()
    pop_box.remove()
       delet.remove()


}




    }
})
let bullet=document.querySelectorAll(".bullet")

bullet.forEach(item=>{
   
    item.addEventListener("mouseenter",function(){
        let node=item.childNodes
        node[1].classList.add("active_bullet")
    })
    item.addEventListener("mouseleave",function(){
        let node=item.childNodes
        node[1].classList.remove("active_bullet")
    })
    item.addEventListener("click",function(){
        let node=item.childNodes

        let value =node[1].getAttribute("url")
        document.querySelector(`.${value}`).scrollIntoView({
            behavior :"smooth"
        })
        
    })

})


let icon_click=document.querySelectorAll(".navbar  a")
icon_click.forEach(item=>{
    
    item.addEventListener("click",(e)=>{
        e.preventDefault()
        let values =item.getAttribute("url")
        document.querySelector(`.${values}` ).scrollIntoView({
            behavior :"smooth"
        })  
    })
})
let contact=document.querySelectorAll(".contact input")
contact.forEach(item=>{
   
    item.onfocus=function(){
        contact.forEach((items)=>{
            items.setAttribute("placeholder",items.getAttribute("url"))
            console.log(items)
    
        })
        item.setAttribute("placeholder"," ")

    }
})
let menu =document.querySelector(".menu")
let lists=document.querySelector(".links")
menu.onclick=function(){
    lists.classList.toggle("links_container")
}
