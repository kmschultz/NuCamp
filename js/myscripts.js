// used to enable tooltips through bootstrap (Currently disabled) 
/*  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
}) */

// jquery controls for carousel verson 1 (Currently Disabled) 
/*$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselPause").click(function(){
	$(".carousel").carousel("pause");
    });
    $("#carouselPlay").click(function(){
	$(".carousel").carousel("cycle");
    });
});*/

// jQuery Play Pause Toggle Single Button
$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
	if ($("#carouselButton").children("i").hasClass("fa-pause")) {
	    $(".carousel").carousel("pause");
	    $("#carouselButton").children("i").removeClass("fa-pause");
	    $("#carouselButton").children("i").addClass("fa-play");
	} else {
	    $(".carousel").carousel("cycle");
	    $("#carouselButton").children("i").removeClass("fa-play");
	    $("#carouselButton").children("i").addClass("fa-pause"); 
	}
	});
	$("#reserveButton").click(function() {
		$("#reserveModal").modal("show");
	});
	$("#loginButton").click(function() {
		$("#loginModal").modal("show");
	});
});
