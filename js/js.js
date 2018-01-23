var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 13000); // Change image every 13 seconds
}

$(function() {
	var static = $(".navbar-static-top");
	$(window).scroll(function(){
	var scroll = $(window).scrollTop();

    if (scroll >= 40) {
        static.removeClass("navbar-static-top").addClass("navbar-fixed-top");
        console.log("done");
    } else {
        static.removeClass("navbar-fixed-top").addClass("navbar-static-top");
    }	
  });
});


/*document.getElementsByClassName('uncheck').onclick = changeColor;   

    function changeColor() {
        document.body.style.color = "#71bf44";
    }   
*/
var uncheck = $(".uncheck")
uncheck.click(function a(){
	$(this).toggleClass("check");
});
