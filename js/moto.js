$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            //Khi scoll sẽ them class sticky
            $('header').addClass('sticky');
        } else {
            // Trả về header khi cuộn về ban đầu 
            $('header').removeClass('sticky');
        }
    });
});