/* 
 * Author: FAU MLAB
 */

var frameDelay = 2000;
var updateTimer;

$(document).ready(function() {
	// Maximize window
	$(window).width(screen.width);
	$(window).height(screen.height);
	
	// Dynamic resizing
	resizeElements();
	
	// Start the updater
	updateTimer = setTimeout(updateFrames,frameDelay);
});

var resizeElements = function() {
	$('#frames_container').width($(window).width());
	$('#frame1').width($('#frames_container').width()/2);
	$('#frame2').width($('#frame1').width());
	
	$('#frame1_img').width($('#frame1').width());
	$('#frame2_img').width($('#frame2').width());
}
$(window).resize(resizeElements);

var updateFrames = function() {
	$('#frame1_img').attr('src', $('#frame1_img').attr('src').substr( 0, $('#frame1_img').attr('src').indexOf('?') ) +'?'+Math.random());
	$('#frame2_img').attr('src', $('#frame2_img').attr('src').substr( 0, $('#frame2_img').attr('src').indexOf('?') ) +'?'+Math.random());
};