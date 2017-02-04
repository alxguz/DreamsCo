$(function() {

	$(".service-item h4").equalHeights();
	$(".new-item-text").equalHeights();
	$(".top-line .sf-menu").superfish({
		cssArrows : false,
		hoverClass: 'no-class',
		delay: 200
	}); 
	var owl = $(".slider")
	$(owl).owlCarousel({
		loop:true, 
		items:1,
		itemClass: "slide-wrap",
		nav: true,
		navText: ""
	});

	$('.next').click(function(){
    owl.trigger('next.owl.carousel');})

	$('.prev').click(function(){
    owl.trigger('prev.owl.carousel');});

	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style","");
	$("#my-menu").find("ul").removeClass("sf-menu");
	$("#my-menu").mmenu({
	extensions : ['widescreen' ,'effect-menu-slide','pagedim-black','border-offset' , 'iconbar'],
	navbar:{
		title: "Меню"
		}
	});

	$(".mobile-mnu").click(function() {
	var m_button = $("#my-menu").data( "mmenu" );
  m_button.open();
  $(".main-mnu").slideToggle();
  return false;
 });

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".popup-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	/*form*/
	$(".popup-with-zoom-anim").magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,	
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

})