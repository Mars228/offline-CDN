// site: phobos.lh
var $ = jQuery.noConflict();

// Page Loader
$(window).load(function(){
    $('#loader').fadeOut();
});

$(document).ready(function($) {
    "use strict";


    /* ---------------------------------------------------------------------- */
    /*  Fixed sidebar with helper width(!)
    /* ---------------------------------------------------------------------- */
    $('#sidebar').width($('#sidebar-location').width()); 

    $('#sidebar').affix({
        offset: {
            //top: $("#welcome").offset().top,
            top: $("#welcome").outerHeight(true),
            bottom: $('footer').outerHeight(true) + 30
        }
    });


    /* ---------------------------------------------------------------------- */
    /*  Fixed header when scrolled
    /* ---------------------------------------------------------------------- */
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 100) {
             $('#header').addClass('navbar-fixed-top');
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
         }
    });


    /* ---------------------------------------------------------------------- */
    /*  Scroll to top
    /* ---------------------------------------------------------------------- */
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.scrollup').fadeIn(400);
        } else {
            $('.scrollup').fadeOut(400);
        }
    });
    $('.scrollup').click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop : 0},400);
        return false;
    });


    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
        $('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
        //Collapse mobile menu after clicking
        if ($('.navbar-collapse').hasClass('in')){
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
        
    });


    /*----------------------------------------------------*/
    /*  Search
    /*----------------------------------------------------*/
    /*$('.show-search').click(function() {
        $('.search-form').fadeIn(300);
        $('.search-form input').focus();
    });
    $('.search-form input').blur(function() {
        $('.search-form').fadeOut(300);
    });
*/

    /*----------------------------------------------------*/
    /*  dropdown menu and tab content
    /*----------------------------------------------------*/
/*    $(".dropdown-menu li a").click(function(){
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.ver').html(selText);
        $('.dropdown-menu li.active').removeClass('active');
    });
*/
});