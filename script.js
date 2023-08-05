//auto-type-text

var typed = new Typed(".auto-text",{
    strings:["WordPress-Developer","Frontend-Web Developer","Youtuber"],
    typeSpeed : 50,
    backSpeed : 50,
    loop : true
});

//image-slider
var heroSection = document.querySelector(".hero-slider");
var ImagesList = ["https://picsum.photos/250","https://picsum.photos/206","https://picsum.photos/207"];
IndexCounter = -1;

function ImageSlider(){
    IndexCounter++;
    if(IndexCounter >=ImagesList.length){
        IndexCounter = 0;
        heroSection.src = ImagesList[IndexCounter];
        console.log(IndexCounter);
    }
    else{
        heroSection.src = ImagesList[IndexCounter];
        console.log(IndexCounter);
    }
    setTimeout("ImageSlider()",3000);
}
Window.onload = ImageSlider();

//menubar-mobile
function menuOpen(){
    document.querySelector(".active-menu").style.display = "block";
}
function menuClose(){
    document.querySelector(".active-menu").style.display = "none";
}



