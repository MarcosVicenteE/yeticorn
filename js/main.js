$(document).ready(function () {
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
    });
    $('.navbar-toggle').click(function () {
        $('#nav-icon').toggleClass('open');
        $('div#bs-example-navbar-collapse-1').stop(true, true).slideToggle();
    });
});
