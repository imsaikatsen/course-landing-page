$(window).scroll(function(){
    if ($(window).scrollTop() >= 5) {
        $('col').addClass('sticky-header');
        $('col div').addClass('visible-title');
    }
    else {
        $('col').removeClass('sticky-header');
        $('col div').removeClass('visible-title');
    }
});