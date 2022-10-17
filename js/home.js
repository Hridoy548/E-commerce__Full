// ===========================Header scrolling===========================
let navbar = document.documentElement.scrollHeight = 150;
let headerScrolling = document.getElementById('header-scrolling');
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > navbar) {
        headerScrolling.style.display = 'block';
    }
    else {
        headerScrolling.style.display = 'none';
    }
    lastScrollTop = scrollTop;

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > navbar);
});



// Main Slider
$(document).ready(function(){
    $(".slider_area").owlCarousel({
        items: 1,
        smartSpeed: 800,
        autoHeight: true,
        loop: true,
        autoplay:true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        autoplayHoverPause: true,
    });
})



//Brand Slider
$(document).ready(function(){
    $(".brand_area").owlCarousel({
        items: 8,
        smartSpeed: 800,
        autoHeight: true,
        loop: true,
        autoplay:true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        autoplayHoverPause: true,
    });
})