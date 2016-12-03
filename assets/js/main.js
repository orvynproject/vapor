$('#top-slider .owl-carousel').owlCarousel({
	navigation : false,
	slideSpeed : 300,
	paginationSpeed : 400,
	pagination: true,
	singleItem:true,
	autoPlay: 3000,
	stopOnHover : true
});

$('.owl-4').owlCarousel({
	items: 4,
	navigation : false,
	slideSpeed : 300,
	paginationSpeed : 400,
	pagination: true,
	singleItem:false,
	autoPlay: 3000,
	stopOnHover : true
});

$('#media-partner .owl-carousel').owlCarousel({
	items: 4,
	navigation : false,
	slideSpeed : 300,
	paginationSpeed : 400,
	pagination: true,
	singleItem:false,
	autoPlay: 1000,
	stopOnHover : true
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 200) {
		$('.gotop').fadeIn('slow');
	}else{
		$('.gotop').fadeOut('slow');
	}
});
$('.gotop').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: 0}, 1000);
});

$('#logo-header .bars').on('click', function(event) {
	event.preventDefault();
	$('#main-nav').slideToggle('slow');
});

$('.box-nav .cart').on('click', function(event) {
	event.preventDefault();
	$('#modal-cart').modal('show');
});
$('.btn-add-to-cart').on('click', function(event) {
	event.preventDefault();
	$('#modal-cart').modal('show');
});