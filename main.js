// logs
console.log("page loaded")
window.onload = function() {
    if (window.jQuery) {  
        console.log("JQuery loaded.");
    } else {
        console.log("Doesn't Work");
    }
}

// -- hide/show navbar only on scroll
//document.getElementById("navigation").style.display = 'none'; -- hides navbar

$.fn.isInViewport = function () {
    // getting boundaries of element
    var elemTop = $(this).offset().top;
    var elemBottom = elemTop + $(this).outerHeight();

    // getting boundaries of viewport
    var vpTop = $(window).scrollTop();
    var vpBottom = vpTop + $(window).height();

    // check if element is inside 
    return elemBottom > vpTop && elemTop < vpBottom;
};

// hide animated arrow on last page
var arrow = $('#arrow');

$('.wrapper').on('resize scroll', function() {

    if (!$('#about').isInViewport()) {
        arrow.fadeIn(); 
    } else {
        arrow.hide();
    } 

});

// implementation
var navbar = $('#navigation');

// $('.wrapper').on('resize scroll', function() {
    
//     // hide the navbar if section on the first page

//     if (!$('#title').isInViewport()) {
//         navbar.fadeIn(); 
//     } else {
//         navbar.fadeOut();
//     } 

//     // highlight current section 
//     if ($('#ios').isInViewport()) {
//         $('#nav2').addClass('nav-active');

//         $('#nav3').removeClass('nav-active');
//         $('#nav4').removeClass('nav-active');
//         $('#nav5').removeClass('nav-active');
//     } else if ($('#python').isInViewport()) {
//         $('#nav3').addClass('nav-active');

//         $('#nav2').removeClass('nav-active');
//         $('#nav4').removeClass('nav-active');
//         $('#nav5').removeClass('nav-active');
//     } else if ($('#react').isInViewport()) {
//         $('#nav4').addClass('nav-active');

//         $('#nav2').removeClass('nav-active');
//         $('#nav3').removeClass('nav-active');
//         $('#nav5').removeClass('nav-active');
//     } else if ($('#about').isInViewport()) {
//         $('#nav5').addClass('nav-active');

//         $('#nav2').removeClass('nav-active');
//         $('#nav3').removeClass('nav-active');
//         $('#nav4').removeClass('nav-active');
//     } else if ($('#title').isInViewport()) {

//         $('#nav2').removeClass('nav-active');
//         $('#nav3').removeClass('nav-active');
//         $('#nav4').removeClass('nav-active');
//         $('#nav5').removeClass('nav-active');
//     }

// });


// -- swiper.js 
var swiper = new Swiper('.swiper-container', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
