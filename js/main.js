$(function(){
	
	

$('.slider__inner').slick({
	prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
	infinite: false
});
	

$('input, select').styler();
	

$('.news__prev-list').slick({
  prevArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
	nextArrow: '<button type="button" class="slick-arrow slick-next"></button>',
	infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1
});
	

});