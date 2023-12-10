(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

$(document).ready(function() {
        
    /* activate the carousel */
    $("#modal-carousel").carousel({interval:false});
 
    /* change modal title when slide changes */
    $("#modal-carousel").on("slid.bs.carousel",       function () {
         $(".modal-title")
         .html($(this)
         .find(".active img")
         .attr("title"));
    });
 
    /* when clicking a thumbnail_gallery */
    $(".row .thumbnail").click(function(){
     var content = $(".carousel-inner");
     var title = $(".modal-title");
   
     content.empty();  
     title.empty();
   
       var id = this.id;  
      var repo = $("#img-repo .item");
      var repoCopy = repo.filter("#" + id).clone();
      var active = repoCopy.first();
   
     active.addClass("active");
     title.html(active.find("img").attr("title"));
       content.append(repoCopy);
 
     // show the modal
       $("#modal-gallery").modal("show");
   });
 
 });
 