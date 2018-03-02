/*var slideIndex = 0;
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
}*/


/*$(function() {  });*/
/*

	var fixed = $(".navbar-static-top");
	$(window).scroll(function(){
	var scroll = $(window).scrollTop();

    if (scroll >= 40) {
        fixed.removeClass("navbar-static-top").addClass("navbar-fixed-top");
        square.css('top', '0');

    } else {
        fixed.removeClass("navbar-fixed-top").addClass("navbar-static-top");
    }
  });
*/
$(document).ready(function(){
var TopNav = $('.TopNav'),
    square = $('.square');

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if(scroll > 0){

        TopNav.removeClass('navbar-static-top').addClass('navbar-fixed-top');
        square.removeClass('menu-static-top').addClass('menu-fixed-top');
    } else {
        TopNav.removeClass('navbar-fixed-top').addClass('navbar-static-top');
        square.removeClass('menu-fixed-top').addClass('menu-static-top');
    }
});


var uncheck = $(".uncheck");
uncheck.click(function a(){
	$(this).toggleClass("check");
});


    var owl= $(".owl-carousel"),
        url = null,
        prev = $(".arrowleft"),
        next = $(".arrowright");


    owl.owlCarousel({
        loop: true,
        items: 1,
        center: true,
        touchDrag: true,
    });

    next.on("click", function(){
        owl.trigger("next.owl.carousel")
    });
    prev.on("click", function(){
            owl.trigger("prev.owl.carousel")
        });
  



    var burgerBar = $(".burgerbar");
    var close = $(".closeMenu");

    burgerBar.click(function () {
        square.css('display', 'block');
        square.addClass('fadeInDown');
        square.addClass('mainMenu');
        $('.TopNav').css('display', 'none');
    });

    close.click(function (){
        square.css('display', 'none');
        square.removeClass('fadeInDown');
        square.removeClass('mainMenu');
        $('.TopNav').css('display', 'block');
    });

    square.scroll(function (){
        console.log('scrolling');
    });

//     square.focusout(function (){
//         square.css('display', 'none');
//     });
//     // square.onfocusout = function(){myScript};

    $(document).mouseup(function(e) {
       
        if (!square.is(e.target) && square.has(e.target).length === 0) 
    {
        square.css('display', 'none');
        square.removeClass('fadeInDown');
        square.removeClass('mainMenu');
        $('.TopNav').css('display', 'block');

    }
        });


      });



