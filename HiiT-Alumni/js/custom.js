/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("sideNav").style.width = "300px";
    document.getElementById("sideNav").style.boxShadow = "0px 4px 8px 0px rgba( 0, 0, 0, 0.8)";    
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:3000,
    // autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:5,
    autoplay:3000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
