$(document).ready(function () {
    $("#disappear").hover(function () {
        $(this).css("color", "white");
    },
        function () {
            $(this).css("color", "black");
        });

    // Fade in, out, toggle

    $('#btnFadeOut').click(function () {
        $('#box').fadeOut('slow'); //slow, fast, 3000ms
    });

    $('#btnFadeIn').click(function () {
        $('#box').fadeIn('slow'); 
    });

    $('#btnFadeTog').click(function () {
        $('#box').fadeToggle('slow'); 
    });

    // Slide up, down, toggle

    $('#btnSlideDown').click(function () {
        $('#box').slideDown('slow'); 
    });

    $('#btnSlideUp').click(function () {
        $('#box').slideUp('slow'); 
    });

    $('#btnSlideTog').click(function () {
        $('#box').slideToggle('slow'); 
    });

    $('#btnStop').click(function () {
        $('#box').stop(); 
    });

    $('#moveLeft').click(function () {
        $('#box2').animate({
            left: 0,
            height: '100px',
            width: '100px',
            opacity: 1
        }); 
    });


    $('#moveRight').click(function () {
        $('#box2').animate({
            left: 500,
            height: '300px',
            width: '300px',
            opacity: 0.5
        }); 
    });

    $('#moveAround').click(function () {
        var box = $('#box2');
        box.animate({
            left: 300
        });
        box.animate({
            top: 300
        });
        box.animate({
            left: 300,
            top: 300
        });
        box.animate({
            left: 0,
            top: 0
        });
    
        }); 
});


