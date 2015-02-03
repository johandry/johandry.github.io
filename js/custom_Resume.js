 /* Catch event on Resume buttons and send them to Google Analytics */

 	$('#printResumeBtnSmall').on('click', function() {
  	ga('send', 'event', 'button', 'click', 'print');
	});
 	$('#printResumeBtnLarge').on('click', function() {
  	ga('send', 'event', 'button', 'click', 'print');
	});
 	$('#downloadResumeBtnSmall').on('click', function() {
  	ga('send', 'event', 'button', 'click', 'download');
	});
 	$('#downloadResumeBtnLarge').on('click', function() {
  	ga('send', 'event', 'button', 'click', 'download');
	});
 /* Click Function for Social media in Head Block */
	
$(".head-left a").click(function(e){
	e.preventDefault();
	$(this).next(".head-social").fadeToggle();
 });
 
 /* Animation */
 
 /* Head Block */
 
$('.head-left').waypoint(function(down) {
	$(this).addClass('animation');
	$(this).addClass('bounceIn');
}, { offset: '70%' });

$('.social').waypoint(function(down) {
	$(this).addClass('animation');
	$(this).addClass('fadeInRight');
}, { offset: '90%' });

$('.obj-icon').waypoint(function(down) {
	$(this).addClass('animation');
	$(this).addClass('fadeIn');
}, { offset: '70%' });

 /* Education Block */
 
$('.tab-content').waypoint(function(down) {
	$(this).addClass('animation');
	$(this).addClass('bounceIn');
}, { offset: '70%' });

/* Technical Skills */

$('.skill-item').waypoint(function(down) {
	$(this).addClass('animation');
	$(this).addClass('bounceIn');
}, { offset: '70%' });

$('.progress-bar').waypoint(function(down) {
	if(!$(this).hasClass("pfinish"))
	{	
		var $pvalue = $(this).attr("data-limit");
		$(this).animate({
			width: $pvalue+"%" },800);
		$(this).addClass('pfinish');
	}
},{ offset: '100%' });

/* Experience Item */

$('.exp-item').waypoint(function(down) {
	$(this).addClass('animation');
	$(this).addClass('bounceIn');
}, { offset: '70%' });

/* Contact Block */

$('.con-item').waypoint(function(down) {
	$(this).addClass('animation');
	$(this).addClass('fadeInDown');
}, { offset: '70%' });

 /* Scroll to GoTop */

$(".gotop").hide();

$(function(){
	$(window).scroll(function(){
	  if ($(this).scrollTop()>250)
	  {
		$('.gotop').slideDown();
	  } 
	  else
	  {
		$('.gotop').slideUp();
	  }
	});

	$('.gotop a').click(function (e) {
	  e.preventDefault();
	  $('body,html').animate({scrollTop: 0}, 1500);
	});

});

/* Scroll Ends */