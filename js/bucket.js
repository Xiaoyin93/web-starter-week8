$(document).ready(function() {
    $(".toggle").click(function() {
        $(".text").toggle();
    });
});

// jQuery UI Widgets
$(function() {
    $("#accordion").accordion();
});

// jQuery UI effect 'pulsate'
$("a.btn").click(function() {
    $(".jumbotron").toggle('shake', 1400); // jQuery UI effect 'pulsate'
    $('h1').text('Who s the Murderer');
});




