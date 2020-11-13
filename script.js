// loader
function removeLoader(){
    var loader = document.getElementById("loader");
    loader.style.display="none";
}
setTimeout(removeLoader,2000);

// nav bar
var ham = document.querySelector(".hamburger");
ham.addEventListener("click", function(){
    ham.classList.toggle("cross");
    document.querySelector("ul").classList.toggle("appear");
});
var index1=0;
var index2=0;

// menu drop down
var menuButton = document.getElementById("sp-link");
var menuDown = document.querySelector(".menu-down");
var arrow = document.querySelector(".arrow-up");
menuButton.addEventListener("click",function(){
    menuDown.classList.toggle("menu-appear");
    arrow.classList.toggle("arrow-down");
});
//slideshow
function slideshow(){
    var offers = document.getElementsByClassName("offers");
    var pics = document.getElementsByClassName("pics");
    for(var i=0;i<pics.length;i++){
        pics[i].style.display="none";
    
    }
    offers[0].style.display="none";
    offers[1].style.display="none";
    index1++;
    index2++;

    if(index1>pics.length){
        index1=1;
    }
    if(index2>offers.length){
        index2=1;
    }
    offers[index2-1].style.display="block";
    pics[index1-1].style.display="block";
    setTimeout(slideshow,3000);
}
slideshow();


// scrolling effects
window.addEventListener('scroll',function(){

    // background effect for navigation bar
    var header = document.querySelector("header");
    var discountBanner = document.querySelector("#discount");
    var position = discountBanner.getBoundingClientRect().top;
    if(position<10){
        header.style.background = "rgb(243, 57, 24)";
        }
    else{
        header.style.background="linear-gradient(black 1%,transparent)";
        }


    // appear effect for specials section
    var specials = document.querySelector("#specials");
    var position2 = specials.getBoundingClientRect().top;
    var cover = document.querySelectorAll(".cover");
    var imgHeadings = document.querySelectorAll(".sp-heading");

    function delay(time,index){
        setTimeout(() => {  
            cover[index].classList.add("black-effect");
            imgHeadings[index].classList.add("heading-styles");
         }, time);
    }
    if(position2<150){
        delay(100,0);
        delay(300,1);
        delay(500,3);
        delay(700,2);
        }  else{
            for(var i=0;i<cover.length;i++){
                cover[i].classList.remove("black-effect");
                imgHeadings[i].classList.remove("heading-styles");
                }
        }


    // image effect for deals section
        
            if(this.window.innerWidth>800){
        
    var deals = document.querySelectorAll(".deal-img");
    var text = document.querySelectorAll(".text");
    for(var i=0;i<deals.length;i++){
        if(deals[i].getBoundingClientRect().top<500){
            deals[i].classList.add("img-appear");
            text[i].classList.add("text-appear");
        }
        else{
            deals[i].classList.remove("img-appear");
            text[i].classList.remove("text-appear");
        }
    }
            }
    }
);









