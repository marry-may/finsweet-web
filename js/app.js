/*
$(function() {

    
   let nav = $(".nav");
    let filters = $(".filters");
    let scrollHeight = $(".header").height() - 75;


    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        if (scroll >= scrollHeight) {
            nav.addClass("nav-scrolled");
            filters.addClass("filters-scrolled");
        } else {
            nav.removeClass("nav-scrolled");
            filters.removeClass("filters-scrolled");
        }
    });

    $(".nav-toggle").click(function() {
        nav.toggleClass( "mobile-nav-open" );
        $( this ).toggleClass("open");
    });     

});
*/