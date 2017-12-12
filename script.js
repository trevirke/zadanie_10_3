$(function () {
    
    var carouselList = $("#carousel ul");

    function moveFirstSlide () {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    };    
    
    function changeSlide () {
        carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide)
    };

setInterval(changeSlide, 3000);    
    
    

    
    
//dodanie strzałek przesuwających slajdy w prawo i lewo:     
function moveLastSlide () {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.after(lastItem);
        carouselList.css({marginLeft: -400});
    };        
function previousSlide () {
        carouselList.animate({'marginLeft': 0}, 500, moveLastSlide)
    };
$('#arrowRight').click(changeSlide); 
$('#arrowLeft').click(previousSlide);
    
    

    
});





