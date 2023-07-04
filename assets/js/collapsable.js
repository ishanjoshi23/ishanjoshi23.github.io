$(function() {
    $('div').hide();
    $('h2').click(function() {
        $(this).next('div').toggle();
    });

});